"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Blockquote = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _theme = require("../../../src/utils/theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Blockquote = _styledComponents.default.blockquote.withConfig({
  displayName: "Blockquote"
})(["background:", ";border-left:5px solid ", ";color:", ";", ";& > p{margin:0;color:", ";}"], (0, _theme.get)('colors.blockquoteBg'), (0, _theme.get)('colors.blockquoteBorder'), (0, _theme.get)('colors.blockquoteColor'), (0, _theme.get)('styles.blockquote'), (0, _theme.get)('colors.blockquoteColor'));

exports.Blockquote = Blockquote;