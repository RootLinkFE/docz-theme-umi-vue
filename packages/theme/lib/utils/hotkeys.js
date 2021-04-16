"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useHotkeys = void 0;

var _react = require("react");

var _hotkeysJs = _interopRequireDefault(require("hotkeys-js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useHotkeys = function useHotkeys(key, cb, inputs) {
  (0, _react.useEffect)(function () {
    (0, _hotkeysJs.default)(key, cb);
    return function () {
      return _hotkeysJs.default.unbind(key);
    };
  }, inputs);
};

exports.useHotkeys = useHotkeys;