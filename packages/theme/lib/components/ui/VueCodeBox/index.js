"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VueCodeBox = void 0;

var React = _interopRequireWildcard(require("react"));

var _docz = require("docz");

var _reactLive = require("react-live");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _rgba = _interopRequireDefault(require("polished/lib/color/rgba"));

var _reResizable = _interopRequireDefault(require("re-resizable"));

var _get = _interopRequireDefault(require("lodash/get"));

var _storage = require("../../../../src/utils/storage");

var _theme = require("../../../../src/utils/theme");

var _ResizeBar = require("../Playground/ResizeBar");

var _ActionsBar = require("../Playground/ActionsBar");

var _Handle = require("../Playground/Handle");

var _hotkeys = require("../../../../src/utils/hotkeys");

var _vue = _interopRequireDefault(require("vue"));

var _reactSyntaxHighlighter = require("react-syntax-highlighter");

var _hljs = _interopRequireDefault(require("./hljs.css"));

var _highlightjsVue = require("highlightjs-vue");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

_reactSyntaxHighlighter.Light.registerLanguage('vue', _highlightjsVue.definer);

var whenFullscreen = function whenFullscreen(on, off) {
  return function (p) {
    return p.full ? on : off;
  };
};

var Overlay = _styledComponents.default.div.withConfig({
  displayName: "VueCodeBox__Overlay"
})(["top:0;left:0;z-index:", ";position:", ";width:", ";height:", ";padding:", ";margin:", ";background:", ";box-sizing:border-box;transition:background 0.3s;"], whenFullscreen(9999, 0), whenFullscreen('fixed', 'relative'), whenFullscreen('100vw', 'auto'), whenFullscreen('100vh', 'auto'), whenFullscreen('60px 20px 20px', '0px'), whenFullscreen('0px', '0 0 30px'), whenFullscreen('rgba(0,0,0,0.5)', 'transparent'));

var borderColor = (0, _theme.get)('colors.border');
var minusHandleSize = "calc(100% - ".concat(_Handle.HANDLE_SIZE, " + 4px)");

var Wrapper = _styledComponents.default.div.withConfig({
  displayName: "VueCodeBox__Wrapper"
})(["display:flex;flex-direction:column;height:", ";width:", ";border:1px solid ", ";"], whenFullscreen(minusHandleSize, '100%'), minusHandleSize, borderColor);

var backgroundColor = (0, _theme.get)('colors.background');

var PreviewWrapper = _styledComponents.default.div.withConfig({
  displayName: "VueCodeBox__PreviewWrapper"
})(["position:relative;flex:1;border-bottom:1px solid ", ";background:", ";min-height:", ";"], borderColor, backgroundColor, whenFullscreen('198px', 'auto'));

var StyledPreviewWrapper = _styledComponents.default.div.withConfig({
  displayName: "VueCodeBox__StyledPreviewWrapper"
})(["position:relative;box-sizing:border-box;width:100%;", ";"], (0, _theme.get)('styles.playground'));

var StyledError = (0, _styledComponents.default)(_reactLive.LiveError).withConfig({
  displayName: "VueCodeBox__StyledError"
})(["position:absolute;top:0;left:0;width:calc(100% - 40px);height:calc(100% - 40px);padding:20px;background:", ";font-size:16px;color:white;"], (0, _rgba.default)('black', 0.8));
var editorStyle = (0, _styledComponents.css)(["border-top:0;"]);

var fromStorage = function fromStorage(storage) {
  return function (key, defaultValue) {
    var obj = storage.get();
    return obj ? (0, _get.default)(obj, key) : defaultValue;
  };
};

var VueCodeBox = function VueCodeBox(props) {
  var position = props.position,
      initialCode = props.code,
      codesandbox = props.codesandbox,
      className = props.className,
      style = props.style,
      scope = props.scope,
      _props$wrapper = props.wrapper,
      CustomWrapper = _props$wrapper === void 0 ? React.Fragment : _props$wrapper,
      _props$language = props.language,
      language = _props$language === void 0 ? 'react' : _props$language,
      component = props.component;

  var _useConfig = (0, _docz.useConfig)(),
      themeConfig = _useConfig.themeConfig,
      native = _useConfig.native;

  var initialShowEditor = (0, _get.default)(themeConfig, 'showPlaygroundEditor');
  var storage = (0, React.useMemo)(function () {
    return new _storage.Storage("doczPlayground-".concat(position));
  }, []);
  var atPos = fromStorage(storage);
  var initialFullscreen = atPos('fullscreen', false);
  var initialWidth = atPos('width', '100%');
  var initialHeight = atPos('height', '100%');

  var _useState = (0, React.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      key = _useState2[0],
      setKey = _useState2[1];

  var _useState3 = (0, React.useState)(decodeURIComponent(initialCode)),
      _useState4 = _slicedToArray(_useState3, 2),
      code = _useState4[0],
      setCode = _useState4[1];

  var _useState5 = (0, React.useState)(function () {
    return initialFullscreen;
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      fullscreen = _useState6[0],
      setFullscreen = _useState6[1];

  var _useState7 = (0, React.useState)(function () {
    return initialWidth;
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      width = _useState8[0],
      setWidth = _useState8[1];

  var _useState9 = (0, React.useState)(function () {
    return initialHeight;
  }),
      _useState10 = _slicedToArray(_useState9, 2),
      height = _useState10[0],
      setHeight = _useState10[1];

  var _useState11 = (0, React.useState)(function () {
    return Boolean(initialShowEditor);
  }),
      _useState12 = _slicedToArray(_useState11, 2),
      showEditor = _useState12[0],
      setShowEditor = _useState12[1];

  var state = {
    fullscreen: fullscreen,
    width: width,
    height: height,
    code: code,
    key: key,
    showEditor: showEditor
  };
  var resizableProps = (0, React.useMemo)(function () {
    return {
      minHeight: fullscreen ? 360 : '100%',
      minWidth: 260,
      maxWidth: '100%',
      maxHeight: '100%',
      size: {
        width: width,
        height: height
      },
      style: {
        margin: '0 auto '
      },
      enable: {
        top: false,
        right: true,
        bottom: fullscreen,
        left: false,
        topRight: false,
        bottomRight: fullscreen,
        bottomLeft: false,
        topLeft: false
      },
      handleComponent: {
        right: function right() {
          return /*#__PURE__*/React.createElement(_Handle.Handle, {
            full: fullscreen,
            horizontal: true
          });
        },
        bottom: function bottom() {
          return /*#__PURE__*/React.createElement(_Handle.Handle, {
            full: fullscreen,
            horizontal: false
          });
        }
      },
      onResizeStop: function onResizeStop(e, direction, ref, d) {
        var width = ref.style.width;
        var height = ref.style.height;
        handleSetSize(width, height);
      }
    };
  }, [fullscreen, width, height]);
  var editorProps = {
    css: editorStyle,
    actions: /*#__PURE__*/React.createElement(React.Fragment, null)
  };
  var setStorageProp = (0, React.useCallback)(function (fullscreen) {
    storage.set(Object.assign(Object.assign({}, state), {
      fullscreen: fullscreen
    }));
  }, []);

  var handleToggleFullscreen = function handleToggleFullscreen() {
    if (fullscreen) storage.delete();else setStorageProp(true);
    setFullscreen(atPos('fullscreen', false));
    setWidth(atPos('width', '100%'));
    setHeight(atPos('width', '100%'));
  };

  var handleToggleShowEditor = (0, React.useCallback)(function () {
    setShowEditor(function (s) {
      return !s;
    });
  }, []);
  var handleSetSize = (0, React.useCallback)(function (width, height) {
    var current = atPos('fullscreen', false);
    setWidth(width);
    setHeight(height);
    setStorageProp(current);
  }, []);
  var handleRefresh = (0, React.useCallback)(function () {
    setKey(key + 1);
  }, []);
  var transformCode = (0, React.useCallback)(function (code) {
    if (code.startsWith('()') || code.startsWith('class')) return code;
    return "<React.Fragment>".concat(code, "</React.Fragment>");
  }, [code]);
  /*   const codesandboxUrl = useCallback(
    (native: boolean): string => {
      const url = 'https://codesandbox.io/api/v1/sandboxes/define'
      return `${url}?parameters=${codesandbox}${native ? `&editorsize=75` : ``}`
    },
    [codesandbox, native]
  ) */

  var unloadListener = (0, React.useCallback)(function () {
    storage.delete();
  }, []);
  var addUnloadListener = (0, React.useCallback)(function () {
    if (window && typeof window !== 'undefined') {
      window.addEventListener('beforeunload', unloadListener, false);
    }
  }, []);
  var removeUnloadListener = (0, React.useCallback)(function () {
    if (window && typeof window !== 'undefined') {
      window.removeEventListener('beforeunload', unloadListener, false);
    }
  }, []);
  (0, React.useEffect)(function () {
    addUnloadListener();
    return function () {
      return removeUnloadListener();
    };
  }, []);
  (0, React.useEffect)(function () {
    if (window && typeof window !== 'undefined') {
      var method = fullscreen ? 'add' : 'remove';
      document.body.classList[method]('with-overlay');
    }
  }, [fullscreen]);
  (0, _hotkeys.useHotkeys)('esc', function () {
    fullscreen && handleToggleFullscreen();
  });
  var vuePreviewId = React.useRef(Date.now());
  var isMount = React.useRef(false);
  React.useLayoutEffect(function () {
    if (language === 'vue' && !isMount.current) {
      new _vue.default({
        render: function render(createElement) {
          return createElement(component);
        }
      }).$mount('#vue-preview-' + vuePreviewId.current);
      isMount.current = true;
    }
  });
  return /*#__PURE__*/React.createElement(Overlay, {
    full: fullscreen
  }, fullscreen ? /*#__PURE__*/React.createElement(_ResizeBar.ResizeBar, {
    onChangeSize: handleSetSize
  }) : null, /*#__PURE__*/React.createElement(_reResizable.default, resizableProps, /*#__PURE__*/React.createElement(Wrapper, {
    full: fullscreen
  }, /*#__PURE__*/React.createElement(PreviewWrapper, {
    full: fullscreen
  }, /*#__PURE__*/React.createElement(StyledPreviewWrapper, null, /*#__PURE__*/React.createElement(CustomWrapper, null, /*#__PURE__*/React.createElement("div", {
    id: 'vue-preview-' + vuePreviewId.current
  }))), /*#__PURE__*/React.createElement(StyledError, null)), /*#__PURE__*/React.createElement(_ActionsBar.ActionsBar, {
    fullscreen: fullscreen,
    showEditor: showEditor,
    code: code,
    onClickRefresh: handleRefresh,
    onClickEditor: handleToggleShowEditor,
    onClickFullscreen: handleToggleFullscreen
  }), showEditor && /*#__PURE__*/React.createElement("div", {
    className: "hljs"
  }, /*#__PURE__*/React.createElement(_reactSyntaxHighlighter.Light, {
    language: "vue",
    style: _hljs.default
  }, code || '// empty code')))));
};

exports.VueCodeBox = VueCodeBox;