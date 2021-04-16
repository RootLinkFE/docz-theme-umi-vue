"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.H4 = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _theme = require("../../../src/utils/theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var H4 = _styledComponents.default.h4.withConfig({
  displayName: "H4"
})(["", ";"], (0, _theme.get)('styles.h4'));

exports.H4 = H4;