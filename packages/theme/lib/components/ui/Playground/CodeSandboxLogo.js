"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CodeSandboxLogo = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var CodeSandboxLogo = function CodeSandboxLogo(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({}, props, {
    viewBox: "0 0 512 512"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M69.2898098,165.083974 L69.2898098,276.649443 L152.161311,324.692718 L152.161311,412.603224 L241.327633,463.829131 L241.327633,264.06328 L69.2898098,165.083974 Z M89.0172642,137.098529 L260.121958,235.540974 L427.640018,138.456525 L339.210941,87.2017661 L262.258901,131.853758 L179.736828,84.2839889 L89.0172642,137.098529 Z M272.206216,463.739666 L370.845646,406.905256 L370.845646,322.809124 L444.244039,280.276172 L444.244039,167.397587 L272.206216,266.116045 L272.206216,463.739666 Z M255.633239,512 L34,384.729507 L34,128.977638 L255.644267,0 L477.328236,128.432852 L477.328236,384.321468 L255.633239,512 Z",
    fill: "currentColor"
  }));
};

exports.CodeSandboxLogo = CodeSandboxLogo;