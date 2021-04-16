"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Page = exports.Container = void 0;

var _react = _interopRequireWildcard(require("react"));

var _docz = require("docz");

var _edit = _interopRequireDefault(require("react-feather/dist/icons/edit-2"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Button = require("./Button");

var _shared = require("../shared");

var _theme = require("../../../src/utils/theme");

var _responsive = require("../../../src/styles/responsive");

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
  displayName: "Page__Wrapper"
})(["flex:1;color:", ";background:", ";min-width:0;position:relative;display:flex;flex-direction:row;"], (0, _theme.get)('colors.text'), (0, _theme.get)('colors.background'));

var Container = _styledComponents.default.div.withConfig({
  displayName: "Page__Container"
})(["box-sizing:border-box;", " ", ";"], function (props) {
  return (0, _responsive.mq)({
    width: props.fullpage ? ['100%', '100%', '100%'] : ['100%', 'calc(100% - 113px)', 'calc(100% - 113px)'],
    padding: ['20px', '0 24px 24px']
  });
}, (0, _theme.get)('styles.container'));

exports.Container = Container;
var EditPage = (0, _styledComponents.default)(_Button.ButtonLink.withComponent('a')).withConfig({
  displayName: "Page__EditPage"
})(["display:flex;align-items:center;justify-content:center;position:absolute;padding:2px 8px;margin:8px;border-radius:", ";border:1px solid ", ";opacity:0.7;transition:opacity 0.4s;font-size:14px;color:", ";text-decoration:none;text-transform:uppercase;&:hover{opacity:1;background:", ";}", ";"], (0, _theme.get)('radii'), (0, _theme.get)('colors.border'), (0, _theme.get)('colors.text'), (0, _theme.get)('colors.border'), (0, _responsive.mq)({
  visibility: ['hidden', 'hidden', 'visible'],
  top: [0, -60, 32],
  right: [0, 0, 40]
}));
var EditIcon = (0, _styledComponents.default)(_edit.default).withConfig({
  displayName: "Page__EditIcon"
})(["margin-right:5px;"]);

var AnchorWrapper = _styledComponents.default.div.withConfig({
  displayName: "Page__AnchorWrapper"
})(["position:relative;padding-top:24px;> div{position:fixed;}"]);

var Anchor = _styledComponents.default.div.withConfig({
  displayName: "Page__Anchor"
})(["border-left:1px solid #f0f0f0;border-color:", ";line-height:20px;padding:", ";> a{width:80px;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}"], function (props) {
  return props.isCurrent ? (0, _theme.get)('colors.blue') : '#f0f0f0';
}, function (props) {
  return props.depth === 2 ? '4px 16px' : '4px 16px 4px 28px';
});

var LinkWrapper = (0, _styledComponents.default)(_docz.Link).withConfig({
  displayName: "Page__LinkWrapper"
})(["font-size:12px;"]);

var Page = function Page(_ref) {
  var children = _ref.children,
      _ref$doc = _ref.doc,
      link = _ref$doc.link,
      fullpage = _ref$doc.fullpage,
      _ref$doc$edit = _ref$doc.edit,
      edit = _ref$doc$edit === void 0 ? true : _ref$doc$edit,
      headings = _ref$doc.headings;

  var _useConfig = (0, _docz.useConfig)(),
      repository = _useConfig.repository; // 右侧锚点只跟踪 h2 和 h3


  var anchors = headings.filter(function (v) {
    return [2, 3].includes(v.depth);
  });
  var _location = location,
      pathname = _location.pathname,
      hash = _location.hash;

  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      currentSlug = _useState2[0],
      setCurrentSlug = _useState2[1];

  var mounted = (0, _react.useRef)(false);

  var handler = function handler() {
    if (mounted.current) {
      setCurrentSlug(localStorage.getItem('currentSlug'));
    } else {
      mounted.current = true;
    }
  };

  (0, _react.useEffect)(function () {
    if (hash) {
      setCurrentSlug(decodeURI(hash.slice(1)));
    } else if (anchors.length) {
      setCurrentSlug(anchors[0].slug);
    }

    window.addEventListener('storage', handler);
    return function () {
      window.removeEventListener('storage', handler);
    };
  }, [hash]);

  var content = /*#__PURE__*/_react.default.createElement(_react.Fragment, null, link && edit && /*#__PURE__*/_react.default.createElement(EditPage, {
    href: link,
    target: "_blank"
  }, /*#__PURE__*/_react.default.createElement(EditIcon, {
    width: 14
  }), " Edit page"), children);

  var highlightAnchor = function highlightAnchor(slug) {
    if (currentSlug === slug) {
      return {
        color: '#1890ff'
      };
    } else {
      return {
        color: 'rgba(0, 0, 0, .65'
      };
    }
  };

  return /*#__PURE__*/_react.default.createElement(_shared.Main, null, repository && /*#__PURE__*/_react.default.createElement(_shared.GithubLink, {
    repository: repository
  }), !fullpage && /*#__PURE__*/_react.default.createElement(_shared.Sidebar, null), /*#__PURE__*/_react.default.createElement(Wrapper, null, fullpage ? /*#__PURE__*/_react.default.createElement(Container, {
    fullpage: true
  }, content) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(Container, null, content), /*#__PURE__*/_react.default.createElement(AnchorWrapper, null, /*#__PURE__*/_react.default.createElement("div", null, anchors.map(function (a) {
    return /*#__PURE__*/_react.default.createElement(Anchor, {
      key: a.slug,
      slug: a.slug,
      isCurrent: currentSlug === a.slug,
      depth: a.depth
    }, /*#__PURE__*/_react.default.createElement(LinkWrapper, {
      className: "page-anchor",
      to: "".concat(pathname, "#").concat(a.slug),
      style: highlightAnchor(a.slug)
    }, a.value));
  }))))));
};

exports.Page = Page;