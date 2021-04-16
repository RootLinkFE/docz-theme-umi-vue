"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.H1 = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _theme = require("../../../src/utils/theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var H1 = _styledComponents.default.h1.withConfig({
  displayName: "H1"
})(["", ";"], (0, _theme.get)('styles.h1'));

exports.H1 = H1;