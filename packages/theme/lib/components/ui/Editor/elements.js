"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClipboardAction = exports.ActionButton = void 0;

var React = _interopRequireWildcard(require("react"));

var _check = _interopRequireDefault(require("react-feather/dist/icons/check"));

var _clipboard = _interopRequireDefault(require("react-feather/dist/icons/clipboard"));

var _rgba = _interopRequireDefault(require("polished/lib/color/rgba"));

var _copyTextToClipboard = _interopRequireDefault(require("copy-text-to-clipboard"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ButtonSwap = require("./ButtonSwap");

var _theme = require("../../../../src/utils/theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var textColor = (0, _theme.get)('colors.text', '#2D3747');
var ActionButton = (0, _styledComponents.default)(_ButtonSwap.ButtonSwap).withConfig({
  displayName: "elements__ActionButton"
})(["padding:4px;background:transparent;font-size:12px;text-transform:uppercase;transition:color 0.3s;&,& a{color:", ";}&:hover,& a:hover{color:", ";}"], function (p) {
  return (0, _rgba.default)(textColor(p), 0.4);
}, function (p) {
  return (0, _rgba.default)(textColor(p), 0.7);
});
exports.ActionButton = ActionButton;
var Check = (0, _styledComponents.default)(_check.default).withConfig({
  displayName: "elements__Check"
})(["stroke:", ";"], (0, _theme.get)('colors.primary'));

var ClipboardAction = function ClipboardAction(_a) {
  var content = _a.content,
      props = __rest(_a, ["content"]);

  return /*#__PURE__*/React.createElement(ActionButton, _extends({}, props, {
    title: "Copy to clipboard",
    onClick: function onClick() {
      return (0, _copyTextToClipboard.default)(content);
    },
    swap: /*#__PURE__*/React.createElement(Check, {
      width: 17
    })
  }), /*#__PURE__*/React.createElement(_clipboard.default, {
    width: 15
  }));
};

exports.ClipboardAction = ClipboardAction;