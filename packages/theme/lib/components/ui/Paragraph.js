"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Paragraph = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _theme = require("../../../src/utils/theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Paragraph = _styledComponents.default.p.withConfig({
  displayName: "Paragraph"
})(["color:", ";", ";"], (0, _theme.get)('colors.text'), (0, _theme.get)('styles.paragraph'));

exports.Paragraph = Paragraph;