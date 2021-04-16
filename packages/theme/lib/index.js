"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "components", {
  enumerable: true,
  get: function get() {
    return _ui.components;
  }
});
exports.default = exports.enhance = void 0;

var React = _interopRequireWildcard(require("react"));

var _docz = require("docz");

var _get = _interopRequireDefault(require("lodash/get"));

var modes = _interopRequireWildcard(require("./styles/modes"));

var _ui = require("./components/ui");

var _global = require("./styles/global");

var _config = require("./config");

var _theme = require("./utils/theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var Theme = function Theme(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(_theme.ThemeProvider, null, /*#__PURE__*/React.createElement(_global.Global, null), /*#__PURE__*/React.createElement(_docz.ComponentsProvider, {
    components: _ui.components
  }, children));
};

var enhance = (0, _docz.theme)(_config.config, function (_a) {
  var mode = _a.mode,
      codemirrorTheme = _a.codemirrorTheme,
      config = __rest(_a, ["mode", "codemirrorTheme"]);

  return Object.assign(Object.assign({}, config), {
    mode: mode,
    codemirrorTheme: codemirrorTheme || "docz-".concat(mode),
    colors: Object.assign(Object.assign({}, (0, _get.default)(modes, mode)), config.colors)
  });
});
exports.enhance = enhance;

var _default = enhance(Theme);

exports.default = _default;