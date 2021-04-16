"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThemeProvider = exports.get = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = require("styled-components");

var _docz = require("docz");

var _get = _interopRequireDefault(require("lodash/get"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var get = function get(val, defaultValue) {
  return function (p) {
    return (0, _get.default)(p, "theme.docz.".concat(val), defaultValue);
  };
};

exports.get = get;

var ThemeProvider = function ThemeProvider(_ref) {
  var children = _ref.children;
  var config = (0, _docz.useConfig)();

  var next = function next(prev) {
    return Object.assign(Object.assign({}, prev), {
      docz: config.themeConfig
    });
  };

  return /*#__PURE__*/React.createElement(_styledComponents.ThemeProvider, {
    theme: next
  }, /*#__PURE__*/React.createElement(React.Fragment, null, children));
};

exports.ThemeProvider = ThemeProvider;