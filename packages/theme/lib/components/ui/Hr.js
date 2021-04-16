"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Hr = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _theme = require("../../../src/utils/theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Hr = _styledComponents.default.hr.withConfig({
  displayName: "Hr"
})(["border:none;border-top:1px dashed ", ";margin:40px 0;", ";"], (0, _theme.get)('colors.border'), (0, _theme.get)('styles.hr'));

exports.Hr = Hr;