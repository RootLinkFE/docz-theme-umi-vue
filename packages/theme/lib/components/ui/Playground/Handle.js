"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Handle = exports.HANDLE_SIZE = void 0;

var _lighten = _interopRequireDefault(require("polished/lib/color/lighten"));

var _darken = _interopRequireDefault(require("polished/lib/color/darken"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _theme = require("../../../../src/utils/theme");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HANDLE_SIZE = '20px';
exports.HANDLE_SIZE = HANDLE_SIZE;
var borderColor = (0, _theme.get)('colors.border');
var preBg = (0, _theme.get)('colors.preBg');
var mode = (0, _theme.get)('mode');

var getLineBackground = function getLineBackground(p) {
  return mode(p) === 'light' ? (0, _darken.default)(0.05, borderColor(p)) : (0, _lighten.default)(0.06, borderColor(p));
};

var line = function line(position) {
  return function (p) {
    return (0, _styledComponents.css)(["content:'';position:absolute;display:block;top:", ";left:", ";width:", ";height:", ";background:", ";transform:translate(-50%,-50%);"], p.horizontal ? '50%' : position, p.horizontal ? position : '50%', p.horizontal ? '2px' : '25px', p.horizontal ? '25px' : '2px', getLineBackground);
  };
};

var whenHorizontal = function whenHorizontal(on, off) {
  return function (p) {
    return p.horizontal ? on : off;
  };
};

var handleHeight = function handleHeight(p) {
  return p.horizontal ? "calc(100% ".concat(p.full ? '+ 3px' : '- 2px', ")") : HANDLE_SIZE;
};

var Handle = _styledComponents.default.div.withConfig({
  displayName: "Handle"
})(["z-index:", ";position:absolute;display:block;width:", ";height:", ";border:1px solid ", ";border-radius:", ";background:", ";box-sizing:content-box;", ";&:after{", ";}&:before{", ";}"], function (p) {
  return p.full ? p.horizontal ? 9999 : 9998 : 9;
}, whenHorizontal(HANDLE_SIZE, 'calc(100% + 3px)'), handleHeight, function (p) {
  return (0, _lighten.default)(0.03, borderColor(p));
}, whenHorizontal('0 4px 4px 0', '0 0 4px 4px'), function (p) {
  return (0, _darken.default)(0.01, preBg(p));
}, whenHorizontal("\n      top: 0;\n      right: 0;\n    ", "\n      bottom: 0;\n      left: 0;\n    "), line('calc(50% + 3px)'), line('calc(50% - 3px)'));

exports.Handle = Handle;