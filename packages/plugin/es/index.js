import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import * as path from 'path';
import is from 'unist-util-is';
import u from 'unist-builder';
import flatten from 'lodash/flatten';
import nodeToString from 'hast-util-to-string';
import { format } from 'docz-utils/lib/format';
import { componentName } from 'docz-utils/lib/jsx';
import { valueFromTraverse } from 'docz-utils/lib/ast';
import * as jsxUtils from 'jsx-ast-utils';
import { getFullImports, getImportsVariables } from 'docz-utils/lib/imports';
import fs from 'fs';
import { startCase, camelCase } from 'lodash';

var isVueCodeBox = function isVueCodeBox(name) {
  return name === 'VueCodeBox';
};

var propFromElement = function propFromElement(prop) {
  return valueFromTraverse(function (p) {
    return p.isJSXOpeningElement();
  }, function (p) {
    return jsxUtils.getProp(p.node.attributes, prop).value.value;
  });
};

var safeCodeContent = function safeCodeContent(code) {
  return encodeURIComponent(code);
};

var getNodeCode = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(node) {
    var formatted, code;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return format(nodeToString(node));

          case 2:
            formatted = _context.sent;
            code = formatted.slice(1, Infinity);
            return _context.abrupt("return", code);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getNodeCode(_x) {
    return _ref.apply(this, arguments);
  };
}();

var addComponentsProps = function addComponentsProps(scopes, imports, cwd, useCodeSandbox, importNode) {
  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(node, idx) {
      var name, tagOpen, code, demoFilePath, comScopeName, scope, child;
      return _regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              name = componentName(node.value);
              tagOpen = new RegExp("^\\<".concat(name));
              _context2.next = 4;
              return getNodeCode(node);

            case 4:
              code = _context2.sent;
              demoFilePath = propFromElement('file')(code);
              comScopeName = addImport(importNode, demoFilePath);
              scope = "{props: this ? this.props : props,".concat(scopes.join(','), "}");
              child = "<".concat(comScopeName, "></").concat(comScopeName, ">");
              node.value = node.value.replace(tagOpen, "<VueCodeBox component={".concat(comScopeName, "} language=\"vue\" code=\"").concat(safeCodeContent(fs.readFileSync(path.join(cwd, demoFilePath)).toString()), "\"  __position={").concat(idx, "} __scope={").concat(scope, "}"));

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }();
};

function normalizeComponentName(name) {
  return startCase(camelCase(name)).replace(/ /g, '').replace(/[^a-zA-Z]/g, '').replace(/api/gi, '');
}

var addImport = function addImport(importNode, demoFilePath) {
  var fo = path.parse(demoFilePath);
  var exportName = normalizeComponentName(fo.name);
  importNode.value += "\nimport ".concat(exportName, " from '").concat(demoFilePath, "';\n");
  return exportName;
};

var plugin = function plugin(opts) {
  return function (tree, fileInfo) {
    var _ref3 = opts || {
      root: process.cwd()
    },
        root = _ref3.root,
        useCodeSandbox = _ref3.useCodeSandbox;

    var importNodes = tree.children.filter(function (node) {
      return is('import', node);
    });
    var imports = flatten(importNodes.map(getFullImports));
    var scopes = flatten(importNodes.map(getImportsVariables));
    var fileInfoHistory = fileInfo.history[0] ? fileInfo.history[0] : '';
    var fileCwd = path.relative(root, path.dirname(fileInfoHistory));
    var nodes = tree.children.filter(function (node) {
      return is('jsx', node) && isVueCodeBox(componentName(node.value));
    });

    if (nodes.length > 0 && importNodes.length < 1) {
      var uNode = u('import');
      tree.children.push(uNode);
      importNodes.push(uNode);
    }

    var nodesPrm = nodes.map(addComponentsProps(scopes, imports, fileCwd, useCodeSandbox, importNodes[0]));
    return Promise.all(nodesPrm).then(function () {
      return tree;
    });
  };
};

export default plugin;
module.exports = plugin;