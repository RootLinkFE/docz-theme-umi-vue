"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InlineCode = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _theme = require("../../../src/utils/theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InlineCode = _styledComponents.default.code.withConfig({
  displayName: "InlineCode"
})(["background:", ";color:", ";", ";"], (0, _theme.get)('colors.codeBg'), (0, _theme.get)('colors.codeColor'), (0, _theme.get)('styles.code'));

exports.InlineCode = InlineCode;