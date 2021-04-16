"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Logo = void 0;

var React = _interopRequireWildcard(require("react"));

var _docz = require("docz");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _responsive = require("../../../../src/styles/responsive");

var _theme = require("../../../../src/utils/theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var sidebarPrimary = (0, _theme.get)('colors.sidebarPrimary');
var primaryColor = (0, _theme.get)('colors.primary');

var Wrapper = _styledComponents.default.div.withConfig({
  displayName: "Logo__Wrapper"
})(["margin-top:-24px;position:relative;display:flex;flex-direction:column;align-items:flex-start;justify-content:center;padding:24px;a,a:hover,a:visited{text-decoration:none;}&:before{position:absolute;content:'';top:0;left:0;width:100%;height:3px;background:", ";}@media screen and (max-width:", "px){&:before{height:", ";}}", ";"], function (p) {
  return sidebarPrimary(p) || primaryColor(p);
}, _responsive.breakpoints.desktop, function (p) {
  return p.showBg ? '3px' : 0;
}, (0, _theme.get)('styles.logo'));

var LogoImg = (0, _styledComponents.default)('img').withConfig({
  displayName: "Logo__LogoImg"
})(["padding:0;margin:5px 0;"]);
var LogoText = (0, _styledComponents.default)('h1').withConfig({
  displayName: "Logo__LogoText"
})(["margin:5px 0;font-size:24px;font-weight:600;letter-spacing:-0.015em;color:", ";"], (0, _theme.get)('colors.sidebarText'));

var Logo = function Logo(_ref) {
  var showBg = _ref.showBg;

  var _useConfig = (0, _docz.useConfig)(),
      base = _useConfig.base,
      title = _useConfig.title,
      Link = _useConfig.linkComponent,
      logo = _useConfig.themeConfig.logo;

  if (!Link) return null;
  return /*#__PURE__*/React.createElement(Wrapper, {
    showBg: showBg
  }, /*#__PURE__*/React.createElement(Link, {
    to: typeof base === 'string' ? base : '/'
  }, logo ? /*#__PURE__*/React.createElement(LogoImg, {
    src: logo.src,
    width: logo.width,
    alt: title
  }) : /*#__PURE__*/React.createElement(LogoText, null, title)));
};

exports.Logo = Logo;