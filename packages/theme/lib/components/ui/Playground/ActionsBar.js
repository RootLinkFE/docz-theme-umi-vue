"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActionsBar = void 0;

var React = _interopRequireWildcard(require("react"));

var _docz = require("docz");

var _lighten = _interopRequireDefault(require("polished/lib/color/lighten"));

var _darken = _interopRequireDefault(require("polished/lib/color/darken"));

var _maximize = _interopRequireDefault(require("react-feather/dist/icons/maximize"));

var _minimize = _interopRequireDefault(require("react-feather/dist/icons/minimize"));

var _refreshCw = _interopRequireDefault(require("react-feather/dist/icons/refresh-cw"));

var _code = _interopRequireDefault(require("react-feather/dist/icons/code"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _theme = require("../../../../src/utils/theme");

var _CodeSandboxLogo = require("./CodeSandboxLogo");

var _elements = require("../Editor/elements");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var borderColor = (0, _theme.get)('colors.border');

var getActionsBg = function getActionsBg(p) {
  return p.theme.docz.mode === 'light' ? (0, _lighten.default)(0.13, borderColor(p)) : (0, _darken.default)(0.04, borderColor(p));
};

var Actions = _styledComponents.default.div.withConfig({
  displayName: "ActionsBar__Actions"
})(["display:flex;justify-content:flex-end;padding:0 5px;background:", ";"], getActionsBg);

var actionStyle = (0, _styledComponents.css)(["padding:3px 10px;border-left:1px solid ", ";"], borderColor);
var Action = (0, _styledComponents.default)(_elements.ActionButton).withConfig({
  displayName: "ActionsBar__Action"
})(["", ";"], actionStyle);
var Clipboard = (0, _styledComponents.default)(_elements.ClipboardAction).withConfig({
  displayName: "ActionsBar__Clipboard"
})(["", ";"], actionStyle);

var ActionsBar = function ActionsBar(_ref) {
  var showEditor = _ref.showEditor,
      code = _ref.code,
      fullscreen = _ref.fullscreen,
      codesandboxUrl = _ref.codesandboxUrl,
      onClickRefresh = _ref.onClickRefresh,
      onClickFullscreen = _ref.onClickFullscreen,
      onClickEditor = _ref.onClickEditor,
      codecontent = _ref.codecontent;
  var config = (0, _docz.useConfig)();
  var hasSandbox = Boolean(config.codeSandbox);
  return /*#__PURE__*/React.createElement(Actions, {
    withRadius: showEditor
  }, /*#__PURE__*/React.createElement(Action, {
    onClick: onClickRefresh,
    title: "Refresh playground"
  }, /*#__PURE__*/React.createElement(_refreshCw.default, {
    width: 15
  })), hasSandbox && codesandboxUrl && /*#__PURE__*/React.createElement(Action, {
    as: "a",
    href: codesandboxUrl,
    target: "_blank",
    title: "Open in CodeSandbox"
  }, /*#__PURE__*/React.createElement(_CodeSandboxLogo.CodeSandboxLogo, {
    style: {
      height: '100%'
    },
    width: 15
  })), /*#__PURE__*/React.createElement(Clipboard, {
    content: codecontent || code
  }), /*#__PURE__*/React.createElement(Action, {
    onClick: onClickFullscreen,
    title: fullscreen ? 'Minimize' : 'Maximize'
  }, fullscreen ? /*#__PURE__*/React.createElement(_minimize.default, {
    width: 15
  }) : /*#__PURE__*/React.createElement(_maximize.default, {
    width: 15
  })), /*#__PURE__*/React.createElement(Action, {
    onClick: onClickEditor,
    title: showEditor ? 'Close editor' : 'Show editor'
  }, /*#__PURE__*/React.createElement(_code.default, {
    width: 15
  })));
};

exports.ActionsBar = ActionsBar;