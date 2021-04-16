"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Global = void 0;

var _styledComponents = require("styled-components");

var _theme = require("../../src/utils/theme");

var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Global = (0, _styledComponents.createGlobalStyle)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  .icon-link {\n    display: none;\n  }\n\n  body {\n    margin: 0;\n    padding: 0;\n    ", ";\n  }\n\n  .with-overlay {\n    overflow: hidden;\n  }\n\n  html,\n  body,\n  #root {\n    height: 100%;\n    min-height: 100%;\n  }\n"])), (0, _theme.get)('styles.body'));
exports.Global = Global;