"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Table = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _theme = require("../../../src/utils/theme");

var _responsive = require("../../../src/styles/responsive");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Wrapper = _styledComponents.default.div.withConfig({
  displayName: "Table__Wrapper"
})(["overflow-x:auto;padding:2px;margin-bottom:30px;", ";"], (0, _responsive.mq)({
  marginBottom: [20, 40],
  maxWidth: ['calc(100vw - 40px)', 'calc(100vw - 80px)', '100%']
}));

var TableStyled = _styledComponents.default.table.withConfig({
  displayName: "Table__TableStyled"
})(["padding:0;table-layout:auto;box-shadow:0 0 0 1px ", ";background-color:transparent;border-spacing:0;border-collapse:collapse;border-style:hidden;border-radius:", ";color:", ";", " & thead{color:", ";background:", ";}& thead th{font-weight:400;padding:20px 20px;&:nth-of-type(1){", ";}&:nth-of-type(2){", ";}&:nth-of-type(3){", ";}&:nth-of-type(4){", ";}&:nth-of-type(5){", ";}}& tbody td{padding:12px 20px;line-height:2;font-weight:200;}& tbody > tr{display:table-row;border-top:1px solid ", ";}", ";"], (0, _theme.get)('colors.border'), (0, _theme.get)('radii'), (0, _theme.get)('colors.tableColor'), (0, _responsive.mq)({
  overflowX: ['initial', 'initial', 'initial', 'hidden'],
  display: ['block', 'block', 'block', 'table']
}), (0, _theme.get)('colors.theadColor'), (0, _theme.get)('colors.theadBg'), (0, _responsive.mq)({
  width: ['20%', '20%', '20%', 'auto']
}), (0, _responsive.mq)({
  width: ['10%', '10%', '10%', 'auto']
}), (0, _responsive.mq)({
  width: ['10%', '10%', '10%', 'auto']
}), (0, _responsive.mq)({
  width: ['10%', '10%', '10%', 'auto']
}), (0, _responsive.mq)({
  width: ['20%', '20%', '20%', 'auto']
}), (0, _theme.get)('colors.border'), (0, _theme.get)('styles.table'));

var Table = function Table(props) {
  return /*#__PURE__*/React.createElement(Wrapper, null, /*#__PURE__*/React.createElement(TableStyled, props));
};

exports.Table = Table;