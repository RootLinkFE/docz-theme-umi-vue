"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnorderedList = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _theme = require("../../../src/utils/theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UnorderedList = _styledComponents.default.ul.withConfig({
  displayName: "UnorderedList"
})(["list-style:none;& li::before{content:'\u25CF ';color:", ";font-weight:bold;font-size:0.5em;margin-right:5px;}", ";ul li{padding-left:25px;}"], (0, _theme.get)('colors.border'), (0, _theme.get)('styles.ul'));

exports.UnorderedList = UnorderedList;