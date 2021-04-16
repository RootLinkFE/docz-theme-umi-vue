"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonLink = exports.Button = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = _styledComponents.default.button.withConfig({
  displayName: "Button"
})(["cursor:pointer;display:flex;align-items:center;outline:none;border:none;"]);

exports.Button = Button;
var ButtonLink = (0, _styledComponents.default)(Button).withConfig({
  displayName: "Button__ButtonLink"
})(["background:transparent;"]);
exports.ButtonLink = ButtonLink;