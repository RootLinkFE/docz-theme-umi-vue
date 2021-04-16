"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Hamburger = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _theme = require("../../../../src/utils/theme");

var _responsive = require("../../../../src/styles/responsive");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var IconFirst = function IconFirst(p) {
  return !p.opened ? '0px' : '10px';
};

var IconMiddle = function IconMiddle(p) {
  return !p.opened ? '1' : '0';
};

var IconLast = function IconLast(p) {
  return !p.opened ? '0px' : '-6px';
};

var IconRotate = function IconRotate(p) {
  return !p.opened ? '0deg' : '45deg';
};

var Icon = _styledComponents.default.div.withConfig({
  displayName: "Hamburger__Icon"
})(["position:relative;width:23px;height:32px;transform:translateX(", ") translateY(", ") scale(", ");"], function (p) {
  return p.opened ? '-2px' : '-1px';
}, function (p) {
  return p.opened ? '0' : '2px';
}, function (p) {
  return p.opened ? 0.8 : 1;
});

var sidebarBg = (0, _theme.get)('colors.sidebarBg');
var sidebarText = (0, _theme.get)('colors.sidebarText');
var backgroundColor = (0, _theme.get)('colors.background');
var textColor = (0, _theme.get)('colors.text');

var IconLine = _styledComponents.default.span.withConfig({
  displayName: "Hamburger__IconLine"
})(["content:'';display:block;position:absolute;width:100%;height:2px;left:0;right:0;background:", ";transition:transform 0.3s,opacity 0.3s;&:nth-of-type(1){top:-2px;transform:translateY(", ") rotate(", ");}&:nth-of-type(2){top:6px;opacity:", ";}&:nth-of-type(3){top:14px;transform:translateY(", ") rotate(-", ");}"], function (p) {
  return p.opened ? sidebarText(p) : textColor(p);
}, IconFirst, IconRotate, IconMiddle, IconLast, IconRotate);

var translateX = function translateX(p) {
  return !p.opened ? '10px' : '-6px';
};

var translateY = function translateY(p) {
  return !p.opened ? '4px' : '0px';
};

var radii = (0, _theme.get)('radii');

var ToggleButton = _styledComponents.default.button.withConfig({
  displayName: "Hamburger__ToggleButton"
})(["cursor:pointer;z-index:99;position:absolute;display:flex;align-items:center;justify-content:center;padding:5px 6px;width:33px;height:30px;top:", ";right:-24px;transform:translateX(", ") translateY(", ");transition:transform 0.3s;outline:none;border:none;background:", ";border-radius:", ";", ";"], function (p) {
  return p.opened ? '-20px' : '-24px';
}, translateX, translateY, function (p) {
  return p.opened ? sidebarBg(p) : backgroundColor(p);
}, function (p) {
  return p.opened ? "0 0 ".concat(radii(p), " 0") : "".concat(radii(p));
}, (0, _responsive.mq)({
  display: ['block', 'block', 'block', 'none']
}));

var Hamburger = function Hamburger(_ref) {
  var opened = _ref.opened,
      onClick = _ref.onClick;
  return /*#__PURE__*/React.createElement(ToggleButton, {
    opened: opened,
    onClick: onClick
  }, /*#__PURE__*/React.createElement(Icon, {
    opened: opened
  }, /*#__PURE__*/React.createElement(IconLine, {
    opened: opened
  }), /*#__PURE__*/React.createElement(IconLine, {
    opened: opened
  }), /*#__PURE__*/React.createElement(IconLine, {
    opened: opened
  })));
};

exports.Hamburger = Hamburger;