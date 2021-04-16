"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.H6 = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _theme = require("../../../src/utils/theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var H6 = _styledComponents.default.h6.withConfig({
  displayName: "H6"
})(["", ";"], (0, _theme.get)('styles.h6'));

exports.H6 = H6;