"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.H5 = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _theme = require("../../../src/utils/theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var H5 = _styledComponents.default.h5.withConfig({
  displayName: "H5"
})(["", ";"], (0, _theme.get)('styles.h5'));

exports.H5 = H5;