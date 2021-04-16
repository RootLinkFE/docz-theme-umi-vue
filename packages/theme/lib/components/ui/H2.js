"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.H2 = void 0;

var React = _interopRequireWildcard(require("react"));

var _docz = require("docz");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _hash = _interopRequireDefault(require("react-feather/dist/icons/hash"));

var _theme = require("../../../src/utils/theme");

var _scrollama = _interopRequireDefault(require("scrollama"));

require("intersection-observer");

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

var Icon = (0, _styledComponents.default)(_hash.default).withConfig({
  displayName: "H2__Icon"
})(["position:absolute;display:inline-block;top:9px;left:-23px;opacity:0;transition:opacity 0.2s;color:", ";"], (0, _theme.get)('colors.primary'));

var Heading = _styledComponents.default.h2.withConfig({
  displayName: "H2__Heading"
})(["position:relative;&:hover .heading--Icon{opacity:1;}", ";"], (0, _theme.get)('styles.h2'));

var H2 = function H2(_a) {
  var children = _a.children,
      props = __rest(_a, ["children"]);

  var pathname = typeof window !== 'undefined' ? location.pathname : '/';

  var _useConfig = (0, _docz.useConfig)(),
      Link = _useConfig.linkComponent;

  if (!Link) return null;
  var isMounted = (0, React.useRef)(false);
  (0, React.useEffect)(function () {
    // 空标题直接 return
    if (!props.id) {
      return;
    } // instantiate the scrollama


    var scroller = (0, _scrollama.default)(); // setup the instance, pass callback functions

    scroller.setup({
      step: '#' + props.id,
      offset: 0.05,
      order: false
    }).onStepEnter(function () {
      if (isMounted.current && props.id !== localStorage.getItem('currentSlug')) {
        localStorage.setItem('currentSlug', props.id || '');
        window.dispatchEvent(new Event('storage'));
      } else {
        isMounted.current = true;
      }
    }); // setup resize event

    window.addEventListener('resize', scroller.resize);
    return function () {
      window.removeEventListener('resize', scroller.resize);
    };
  }, []);
  return /*#__PURE__*/React.createElement(Heading, props, /*#__PURE__*/React.createElement(Link, {
    "aria-hidden": true,
    to: "".concat(pathname, "#").concat(props.id)
  }, /*#__PURE__*/React.createElement(Icon, {
    className: "heading--Icon",
    height: 20
  })), children);
};

exports.H2 = H2;