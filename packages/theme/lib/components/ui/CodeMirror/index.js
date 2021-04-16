"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _docz = require("docz");

var _reactCodemirror = require("react-codemirror2");

var _reactPerfectScrollbar = _interopRequireDefault(require("react-perfect-scrollbar"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _theme = require("../../../../src/utils/theme");

var _psScrollbar = require("./ps-scrollbar");

var themes = _interopRequireWildcard(require("./themes"));

require("codemirror/mode/markdown/markdown");

require("codemirror/mode/javascript/javascript");

require("codemirror/mode/jsx/jsx");

require("codemirror/mode/css/css");

require("codemirror/addon/edit/matchbrackets");

require("codemirror/addon/edit/closetag");

require("codemirror/addon/fold/xml-fold");

require("codemirror/lib/codemirror.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Scrollbar = (0, _styledComponents.default)(_reactPerfectScrollbar.default).withConfig({
  displayName: "CodeMirror__Scrollbar"
})(["overflow:auto;position:relative;max-height:", "px;.ps__rail-y{z-index:9;opacity:0.4;}"], function (p) {
  return 25 * p.linesToScroll;
});
var preStyles = (0, _theme.get)('styles.pre');
var EditorStyled = (0, _styledComponents.default)(_reactCodemirror.Controlled).withConfig({
  displayName: "CodeMirror__EditorStyled"
})(["", ";", ";position:relative;flex:1;.CodeMirror{max-width:100%;height:100%;}.CodeMirror-gutters{left:1px !important;}.CodeMirror-lines{padding:10px 0;box-sizing:content-box;}.CodeMirror-line{padding:0 10px;}.CodeMirror-linenumber{padding:0 7px 0 5px;}&,.CodeMirror pre{", ";}"], themes.dark, themes.light, preStyles);
var scrollbarOpts = {
  wheelSpeed: 2,
  wheelPropagation: true,
  minScrollbarLength: 20,
  suppressScrollX: true
};

var noCurrent = function noCurrent(val) {
  return !val || !val.current;
};

var CodeMirror = function CodeMirror(props) {
  var _useConfig = (0, _docz.useConfig)(),
      themeConfig = _useConfig.themeConfig;

  var editor = (0, React.useRef)(null);
  var forceUpdateEditorTimeout = (0, React.useRef)(0);
  var previousEditor = (0, React.useRef)(0);
  var linesToScroll = themeConfig.linesToScrollEditor || 14;
  var editorProps = Object.assign(Object.assign({}, props), {
    editorDidMount: function editorDidMount(codemirror) {
      props.editorDidMount && props.editorDidMount(codemirror);
      editor.current = codemirror;
    }
  });

  var refreshCodeMirror = function refreshCodeMirror() {
    if (noCurrent(editor)) return;
    editor.current.refresh();
  };

  var clearForceUpdateCodeMirror = function clearForceUpdateCodeMirror() {
    if (noCurrent(forceUpdateEditorTimeout)) return;
    clearTimeout(forceUpdateEditorTimeout.current);
  };

  var forceUpdateCodeMirror = function forceUpdateCodeMirror() {
    if (noCurrent(editor)) return;
    clearForceUpdateCodeMirror();
    forceUpdateEditorTimeout.current = setTimeout(function () {
      var currentHeight = editor.current.getScrollInfo().height || 0;
      var hasNoHeight = currentHeight <= 0; // Don't refresh if no height (CodeMirror is not visible) or
      // Don't refresh if same height

      if (hasNoHeight || previousEditor.current === currentHeight) return;
      refreshCodeMirror();
      previousEditor.current = editor.current.getScrollInfo().height || 0;
    });
  };

  (0, React.useEffect)(function () {
    forceUpdateCodeMirror();
    return function () {
      return clearForceUpdateCodeMirror();
    };
  }, [previousEditor.current]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_psScrollbar.ScrollbarStyles, null), /*#__PURE__*/React.createElement(Scrollbar, {
    options: scrollbarOpts,
    linesToScroll: linesToScroll
  }, /*#__PURE__*/React.createElement(EditorStyled, editorProps)));
};

var _default = CodeMirror;
exports.default = _default;