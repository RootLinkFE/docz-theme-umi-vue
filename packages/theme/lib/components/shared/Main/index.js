"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Main = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Main = _styledComponents.default.div.withConfig({
  displayName: "Main"
})(["display:flex;"]);

exports.Main = Main;