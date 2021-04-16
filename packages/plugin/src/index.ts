import * as path from 'path'
import is from 'unist-util-is'
import u from 'unist-builder'
import flatten from 'lodash/flatten'
import nodeToString from 'hast-util-to-string'
import { format } from 'docz-utils/lib/format'
import { componentName, sanitizeCode, removeTags } from 'docz-utils/lib/jsx'
import { valueFromTraverse } from 'docz-utils/lib/ast'
import * as jsxUtils from 'jsx-ast-utils'
import { getSandboxImportInfo } from 'docz-utils/lib/codesandbox'
import { getFullImports, getImportsVariables } from 'docz-utils/lib/imports'
import fs from 'fs'
import { startCase, camelCase } from 'lodash'

const isVueCodeBox = (name: string) => name === 'VueCodeBox'

const propFromElement = (prop: string) =>
  valueFromTraverse(
    (p) => p.isJSXOpeningElement(),
    (p) => jsxUtils.getProp(p.node.attributes, prop).value.value
  )

const safeCodeContent = (code) => {
  return encodeURIComponent(code)
}

const getNodeCode = async (node) => {
  const formatted = await format(nodeToString(node))
  const code = formatted.slice(1, Infinity)
  return code
}

const addComponentsProps = (
  scopes: string[],
  imports: string[],
  cwd: string,
  useCodeSandbox: boolean,
  importNode
) => async (node: any, idx: number) => {
  const name = componentName(node.value)

  const tagOpen = new RegExp(`^\\<${name}`)

  const code = await getNodeCode(node)
  const demoFilePath = propFromElement('file')(code)
  const comScopeName = addImport(importNode, demoFilePath)
  const scope = `{props: this ? this.props : props,${scopes.join(',')}}`
  const child = `<${comScopeName}></${comScopeName}>`
  node.value = node.value.replace(
    tagOpen,
    `<VueCodeBox component={${comScopeName}} language="vue" code="${safeCodeContent(
      fs.readFileSync(path.join(cwd, demoFilePath)).toString()
    )}"  __position={${idx}} __scope={${scope}}`
  )
}

function normalizeComponentName(name: string) {
  return startCase(camelCase(name))
    .replace(/ /g, '')
    .replace(/[^a-zA-Z]/g, '')
    .replace(/api/gi, '')
}

const addImport = (importNode, demoFilePath) => {
  const fo = path.parse(demoFilePath)
  const exportName = normalizeComponentName(fo.name)
  importNode.value += `\nimport ${exportName} from '${demoFilePath}';\n`

  return exportName
}

export interface PluginOpts {
  root: string
  useCodeSandbox: boolean
}

export default (opts: PluginOpts) => (tree: any, fileInfo: any, ...args) => {
  const { root, useCodeSandbox } = opts || {
    root: process.cwd(),
  }
  const importNodes = tree.children.filter((node: any) => is('import', node))

  const imports: string[] = flatten(importNodes.map(getFullImports))
  const scopes: string[] = flatten(importNodes.map(getImportsVariables))

  const fileInfoHistory = fileInfo.history[0] ? fileInfo.history[0] : ''
  const fileCwd = path.relative(root, path.dirname(fileInfoHistory))

  const nodes = tree.children.filter(
    (node: any) => is('jsx', node) && isVueCodeBox(componentName(node.value))
  )

  if (nodes.length > 0 && importNodes.length < 1) {
    const uNode = u('import')
    tree.children.push(uNode)
    importNodes.push(uNode)
  }

  const nodesPrm = nodes.map(
    addComponentsProps(scopes, imports, fileCwd, useCodeSandbox, importNodes[0])
  )

  return Promise.all(nodesPrm).then(() => tree)
}
