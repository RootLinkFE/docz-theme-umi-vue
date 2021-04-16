"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mq = exports.breakpoints = void 0;

var _facepaint = _interopRequireDefault(require("facepaint"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var breakpoints = {
  mobile: 420,
  tablet: 920,
  desktop: 1120
};
exports.breakpoints = breakpoints;
var mq = (0, _facepaint.default)(["@media(min-width: ".concat(breakpoints.mobile, "px)"), "@media(min-width: ".concat(breakpoints.tablet, "px)"), "@media(min-width: ".concat(breakpoints.desktop, "px)")]);
exports.mq = mq;