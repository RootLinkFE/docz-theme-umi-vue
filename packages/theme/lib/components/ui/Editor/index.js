"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Editor = void 0;

var React = _interopRequireWildcard(require("react"));

var _docz = require("docz");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _get = _interopRequireDefault(require("lodash/get"));

var _elements = require("./elements");

var _theme = require("../../../../src/utils/theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var CodeMirror = /*#__PURE__*/React.lazy(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require("../CodeMirror"));
  });
});

var getLanguage = function getLanguage(children) {
  var defaultLanguage = 'jsx';
  if (typeof children === 'string') return defaultLanguage;
  var language = (0, _get.default)(children, 'props.props.className') || defaultLanguage;
  var result = language.replace('language-', '');
  if (result === 'js' || result === 'javascript') return 'jsx';

  if (result === 'ts' || result === 'tsx' || result === 'typescript') {
    return 'text/typescript';
  }

  return result;
};

var getChildren = function getChildren(children) {
  return children && typeof children !== 'string' ? (0, _get.default)(children, 'props.children') : children;
};

var Wrapper = _styledComponents.default.div.withConfig({
  displayName: "Editor__Wrapper"
})(["margin:30px 0;position:relative;width:100%;border:1px solid ", ";"], (0, _theme.get)('colors.border'));

var Actions = _styledComponents.default.div.withConfig({
  displayName: "Editor__Actions"
})(["z-index:999;position:absolute;top:0;right:0;display:flex;flex-direction:column;align-items:center;padding:5px 10px;background:transparent;"]);

var Editor = function Editor(_a) {
  var mode = _a.mode,
      children = _a.children,
      actions = _a.actions,
      onChange = _a.onChange,
      className = _a.className,
      editorClassName = _a.editorClassName,
      defaultLanguage = _a.language,
      props = __rest(_a, ["mode", "children", "actions", "onChange", "className", "editorClassName", "language"]);

  var config = (0, _docz.useConfig)();
  var initialCode = (0, React.useMemo)(function () {
    return getChildren(children);
  }, [children]);

  var _useState = (0, React.useState)(initialCode),
      _useState2 = _slicedToArray(_useState, 2),
      code = _useState2[0],
      setCode = _useState2[1];

  var language = defaultLanguage || getLanguage(children);
  var options = Object.assign(Object.assign({}, props), {
    tabSize: 2,
    mode: language || mode,
    lineNumbers: true,
    lineWrapping: true,
    autoCloseTags: true,
    theme: 'docz-light'
  });

  var onEditorDidMount = function onEditorDidMount(editor) {
    if (editor) removeLastLine(editor);
  };

  var removeLastLine = (0, React.useCallback)(function (editor) {
    if (editor && !props.withLastLine && props.readOnly) {
      var lastLine = editor.lastLine();
      editor.doc.replaceRange('', {
        line: lastLine - 1
      }, {
        line: lastLine
      });
    }
  }, [props.withLastLine, props.readOnly]);
  var handleChange = (0, React.useCallback)(function (editor, data, code) {
    onChange && onChange(code);
    setCode(code);
  }, [code]);

  var editorProps = function editorProps(config) {
    return {
      value: code,
      className: editorClassName,
      editorDidMount: onEditorDidMount,
      onBeforeChange: handleChange,
      options: Object.assign(Object.assign({}, options), {
        theme: config && config.themeConfig ? config.themeConfig.codemirrorTheme : options.theme
      })
    };
  };

  return /*#__PURE__*/React.createElement(Wrapper, {
    className: className
  }, /*#__PURE__*/React.createElement(React.Suspense, {
    fallback: null
  }, /*#__PURE__*/React.createElement(CodeMirror, editorProps(config))), /*#__PURE__*/React.createElement(Actions, null, actions || /*#__PURE__*/React.createElement(_elements.ClipboardAction, {
    content: code
  })));
};

exports.Editor = Editor;
Editor.defaultProps = {
  mode: 'js',
  readOnly: true,
  matchBrackets: true,
  indentUnit: 2
};