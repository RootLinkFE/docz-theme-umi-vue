"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var path = _interopRequireWildcard(require("path"));

var _unistUtilIs = _interopRequireDefault(require("unist-util-is"));

var _unistBuilder = _interopRequireDefault(require("unist-builder"));

var _flatten = _interopRequireDefault(require("lodash/flatten"));

var _hastUtilToString = _interopRequireDefault(require("hast-util-to-string"));

var _format = require("docz-utils/lib/format");

var _jsx = require("docz-utils/lib/jsx");

var _ast = require("docz-utils/lib/ast");

var jsxUtils = _interopRequireWildcard(require("jsx-ast-utils"));

var _imports = require("docz-utils/lib/imports");

var _fs = _interopRequireDefault(require("fs"));

var _lodash = require("lodash");

var isVueCodeBox = function isVueCodeBox(name) {
  return name === 'VueCodeBox';
};

var propFromElement = function propFromElement(prop) {
  return (0, _ast.valueFromTraverse)(function (p) {
    return p.isJSXOpeningElement();
  }, function (p) {
    return jsxUtils.getProp(p.node.attributes, prop).value.value;
  });
};

var safeCodeContent = function safeCodeContent(code) {
  return encodeURIComponent(code);
};

var getNodeCode = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(node) {
    var formatted, code;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _format.format)((0, _hastUtilToString.default)(node));

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
    var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(node, idx) {
      var name, tagOpen, code, demoFilePath, comScopeName, scope, child;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              name = (0, _jsx.componentName)(node.value);
              tagOpen = new RegExp("^\\<".concat(name));
              _context2.next = 4;
              return getNodeCode(node);

            case 4:
              code = _context2.sent;
              demoFilePath = propFromElement('file')(code);
              comScopeName = addImport(importNode, demoFilePath);
              scope = "{props: this ? this.props : props,".concat(scopes.join(','), "}");
              child = "<".concat(comScopeName, "></").concat(comScopeName, ">");
              node.value = node.value.replace(tagOpen, "<VueCodeBox component={".concat(comScopeName, "} language=\"vue\" code=\"").concat(safeCodeContent(_fs.default.readFileSync(path.join(cwd, demoFilePath)).toString()), "\"  __position={").concat(idx, "} __scope={").concat(scope, "}"));

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
  return (0, _lodash.startCase)((0, _lodash.camelCase)(name)).replace(/ /g, '').replace(/[^a-zA-Z]/g, '').replace(/api/gi, '');
}

var addImport = function addImport(importNode, demoFilePath) {
  var fo = path.parse(demoFilePath);
  var exportName = normalizeComponentName(fo.name);
  importNode.value += "\nimport ".concat(exportName, " from '").concat(demoFilePath, "';\n");
  return exportName;
};

var _default = function _default(opts) {
  return function (tree, fileInfo) {
    var _ref3 = opts || {
      root: process.cwd()
    },
        root = _ref3.root,
        useCodeSandbox = _ref3.useCodeSandbox;

    var importNodes = tree.children.filter(function (node) {
      return (0, _unistUtilIs.default)('import', node);
    });
    var imports = (0, _flatten.default)(importNodes.map(_imports.getFullImports));
    var scopes = (0, _flatten.default)(importNodes.map(_imports.getImportsVariables));
    var fileInfoHistory = fileInfo.history[0] ? fileInfo.history[0] : '';
    var fileCwd = path.relative(root, path.dirname(fileInfoHistory));
    var nodes = tree.children.filter(function (node) {
      return (0, _unistUtilIs.default)('jsx', node) && isVueCodeBox((0, _jsx.componentName)(node.value));
    });

    if (nodes.length > 0 && importNodes.length < 1) {
      var uNode = (0, _unistBuilder.default)('import');
      tree.children.push(uNode);
      importNodes.push(uNode);
    }

    var nodesPrm = nodes.map(addComponentsProps(scopes, imports, fileCwd, useCodeSandbox, importNodes[0]));
    return Promise.all(nodesPrm).then(function () {
      return tree;
    });
  };
};

exports.default = _default;