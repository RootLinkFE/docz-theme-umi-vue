"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sidebar = void 0;

var React = _interopRequireWildcard(require("react"));

var _docz = require("docz");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _theme = require("../../../../src/utils/theme");

var _responsive = require("../../../../src/styles/responsive");

var _Logo = require("../Logo");

var _CustomSearch = _interopRequireDefault(require("../Search/CustomSearch"));

var _Hamburger = require("./Hamburger");

var _CustomMenu = _interopRequireDefault(require("./CustomMenu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var sidebarBg = (0, _theme.get)('colors.sidebarBg');
var sidebarText = (0, _theme.get)('colors.sidebarText');

var Wrapper = _styledComponents.default.div.withConfig({
  displayName: "Sidebar__Wrapper"
})(["position:relative;width:316px;min-width:316px;min-height:100vh;background:", ";transition:transform 0.2s,background 0.3s;z-index:1000;", ";dl{padding:0;margin:0 16px;}dl a{font-weight:400;}@media screen and (max-width:", "px){transform:translateX(", ");position:", ";}", ";"], sidebarBg, (0, _responsive.mq)({
  position: ['absolute', 'absolute', 'absolute', 'relative']
}), _responsive.breakpoints.desktop - 1, function (p) {
  return p.opened ? '-100%' : '0';
}, function (p) {
  return p.opened ? 'auto' : 'fixed';
}, (0, _theme.get)('styles.sidebar'));

var Content = _styledComponents.default.div.withConfig({
  displayName: "Sidebar__Content"
})(["position:fixed;top:24px;left:0;display:flex;flex-direction:column;width:316px;min-width:316px;height:100%;max-height:100vh;"]);

var Empty = _styledComponents.default.div.withConfig({
  displayName: "Sidebar__Empty"
})(["flex:1;opacity:0.7;padding:24px 24px;color:", ";"], sidebarText);

var BuiltWith = _styledComponents.default.div.withConfig({
  displayName: "Sidebar__BuiltWith"
})(["width:100%;bottom:0px;padding:24px;margin-bottom:24px;"]);

var Sidebar = function Sidebar() {
  var _useState = (0, React.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      hidden = _useState2[0],
      setHidden = _useState2[1];

  var _useState3 = (0, React.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      query = _useState4[0],
      setQuery = _useState4[1];

  var menus = (0, _docz.useMenus)({
    query: query
  });
  var windowSize = (0, _docz.useWindowSize)();
  var isDesktop = windowSize.outerWidth >= _responsive.breakpoints.desktop;
  var prevIsDesktop = (0, _docz.usePrevious)(isDesktop);
  var browserLanguage = window.navigator.language;
  var emptyPlaceholder = 'No documents found.';

  if (browserLanguage === 'zh-CN') {
    emptyPlaceholder = '未找到相应组件';
  }

  (0, React.useEffect)(function () {
    if (!hidden && !prevIsDesktop && isDesktop) {
      setHidden(true);
      document.documentElement.classList.remove('with-overlay');
    }
  });

  var addOverlayClass = function addOverlayClass(isHidden) {
    var method = !isHidden ? 'add' : 'remove';

    if (window && typeof window !== 'undefined' && !isDesktop) {
      document.documentElement.classList[method]('with-overlay');
    }
  };

  var handleSidebarToggle = function handleSidebarToggle() {
    setHidden(function (s) {
      return !s;
    });
    addOverlayClass(!hidden);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Wrapper, {
    opened: hidden
  }, /*#__PURE__*/React.createElement(Content, null, /*#__PURE__*/React.createElement(_Hamburger.Hamburger, {
    opened: !hidden,
    onClick: handleSidebarToggle
  }), process.env.BIGFISH_VERSION ? null : /*#__PURE__*/React.createElement(_Logo.Logo, {
    showBg: !hidden
  }), /*#__PURE__*/React.createElement(_CustomSearch.default, {
    onSearch: setQuery
  }), menus && menus.length === 0 ? /*#__PURE__*/React.createElement(Empty, null, emptyPlaceholder) : /*#__PURE__*/React.createElement(_CustomMenu.default, {
    query: query
  }))));
};

exports.Sidebar = Sidebar;