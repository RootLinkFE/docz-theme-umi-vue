"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderedList = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _theme = require("../../../src/utils/theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OrderedList = _styledComponents.default.ol.withConfig({
  displayName: "OrderedList"
})(["list-style:none;counter-reset:my-awesome-counter;& li{counter-increment:my-awesome-counter;}& li::before{content:counter(my-awesome-counter) '. ';color:", ";font-weight:bold;font-family:'Playfair Display',serif;margin-right:5px;}", ";"], (0, _theme.get)('colors.border'), (0, _theme.get)('styles.ol'));

exports.OrderedList = OrderedList;