"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResizeBar = void 0;

var React = _interopRequireWildcard(require("react"));

var _smartphone = _interopRequireDefault(require("react-feather/dist/icons/smartphone"));

var _tablet = _interopRequireDefault(require("react-feather/dist/icons/tablet"));

var _monitor = _interopRequireDefault(require("react-feather/dist/icons/monitor"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _elements = require("../Editor/elements");

var _theme = require("../../../../src/utils/theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Wrapper = _styledComponents.default.div.withConfig({
  displayName: "ResizeBar__Wrapper"
})(["position:absolute;top:10px;left:50%;margin-bottom:5px;transform:translateX(-50%);"]);

var Buttons = _styledComponents.default.div.withConfig({
  displayName: "ResizeBar__Buttons"
})(["display:flex;background:", ";border:1px solid ", ";border-radius:", ";padding:3px 5px;"], (0, _theme.get)('colors.background'), (0, _theme.get)('colors.border'), (0, _theme.get)('radii'));

var ResizeBar = function ResizeBar(_ref) {
  var onChangeSize = _ref.onChangeSize;
  return /*#__PURE__*/React.createElement(Wrapper, null, /*#__PURE__*/React.createElement(Buttons, null, /*#__PURE__*/React.createElement(_elements.ActionButton, {
    onClick: function onClick() {
      return onChangeSize('360px', '640px');
    },
    title: "Smartphone"
  }, /*#__PURE__*/React.createElement(_smartphone.default, {
    width: 20
  })), /*#__PURE__*/React.createElement(_elements.ActionButton, {
    onClick: function onClick() {
      return onChangeSize('768px', '1024px');
    },
    title: "Tablet"
  }, /*#__PURE__*/React.createElement(_tablet.default, {
    width: 20
  })), /*#__PURE__*/React.createElement(_elements.ActionButton, {
    onClick: function onClick() {
      return onChangeSize('1366px', '1024px');
    },
    title: "Monitor"
  }, /*#__PURE__*/React.createElement(_monitor.default, {
    width: 20
  }))));
};

exports.ResizeBar = ResizeBar;