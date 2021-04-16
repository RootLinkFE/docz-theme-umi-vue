"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Props = void 0;

var React = _interopRequireWildcard(require("react"));

var _docz = require("docz");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _theme = require("../../../src/utils/theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Wrapper = _styledComponents.default.div.withConfig({
  displayName: "Props__Wrapper"
})(["display:flex;flex-direction:column;& ~ &{margin-top:8px;}"]);

var Title = _styledComponents.default.div.withConfig({
  displayName: "Props__Title"
})(["display:flex;border-bottom:1px solid ", ";"], (0, _theme.get)('colors.sidebarBg'));

var PropName = _styledComponents.default.span.withConfig({
  displayName: "Props__PropName"
})(["background:#f1f1f1;border-radius:0px;color:", ";padding:5px 10px;font-size:16px;font-weight:500;& ~ &{margin-left:5px;}"], (0, _theme.get)('colors.primary'));

var PropType = (0, _styledComponents.default)(PropName).withConfig({
  displayName: "Props__PropType"
})(["color:", ";background:", ";font-weight:400;"], (0, _theme.get)('colors.blockquoteColor'), (0, _theme.get)('colors.sidebarBg'));
var PropDefaultValue = (0, _styledComponents.default)(PropType).withConfig({
  displayName: "Props__PropDefaultValue"
})(["background:transparent;padding-left:0;padding-right:0;"]);
var PropRequired = (0, _styledComponents.default)(PropType).withConfig({
  displayName: "Props__PropRequired"
})(["flex:1;text-align:left;background:transparent;color:", ";opacity:0.5;"], (0, _theme.get)('colors.blockquoteColor'));

var Props = function Props(_ref) {
  var props = _ref.props,
      getPropType = _ref.getPropType;
  var entries = Object.entries(props);
  var components = (0, _docz.useComponents)();
  var Paragraph = (0, React.useMemo)(function () {
    return (0, _styledComponents.default)(components.P || 'p').withConfig({
      displayName: "Props"
    })(["font-size:16px;color:", ";"], (0, _theme.get)('colors.sidebarTex'));
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, entries.map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        key = _ref3[0],
        prop = _ref3[1];

    if (!prop.type && !prop.flowType) return null;
    return /*#__PURE__*/React.createElement(Wrapper, {
      key: key
    }, /*#__PURE__*/React.createElement(Title, null, /*#__PURE__*/React.createElement(PropName, null, key), /*#__PURE__*/React.createElement(PropType, null, getPropType(prop)), prop.defaultValue && /*#__PURE__*/React.createElement(PropDefaultValue, null, prop.defaultValue.value === "''" ? /*#__PURE__*/React.createElement("em", null, "= [Empty String]") : /*#__PURE__*/React.createElement("em", null, "= ", prop.defaultValue.value.replace(/\'/g, '"'))), prop.required && /*#__PURE__*/React.createElement(PropRequired, null, /*#__PURE__*/React.createElement("em", null, "required"))), prop.description && /*#__PURE__*/React.createElement(Paragraph, null, prop.description));
  }));
};

exports.Props = Props;