"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _styledComponents = require("styled-components");

var _theme = require("../../src/utils/theme");

var styles = {
  body: (0, _styledComponents.css)(["font-family:", ";font-size:16px;line-height:1.6;"], (0, _theme.get)('fonts.ui')),
  h1: (0, _styledComponents.css)(["margin:40px 0 20px;font-family:", ";font-size:48px;font-weight:600;letter-spacing:-0.02em;"], (0, _theme.get)('fonts.display')),
  h2: (0, _styledComponents.css)(["margin:30px 0 15px;line-height:1.4em;font-family:", ";font-weight:500;font-size:28px;letter-spacing:-0.02em;"], (0, _theme.get)('fonts.display')),
  h3: (0, _styledComponents.css)(["margin:25px 0 10px;font-size:20px;font-weight:400;"]),
  h4: (0, _styledComponents.css)(["margin:25px 0 10px;font-size:16px;font-weight:400;"]),
  h5: (0, _styledComponents.css)(["margin:20px 0 10px;font-size:16px;font-weight:400;"]),
  h6: (0, _styledComponents.css)(["margin:20px 0 10px;font-size:16px;font-weight:400;text-transform:uppercase;"]),
  ol: (0, _styledComponents.css)(["padding:0;margin:10px 0 10px;"]),
  ul: (0, _styledComponents.css)(["padding:0;margin:10px 0 10px;"]),
  playground: (0, _styledComponents.css)(["padding:40px;"]),
  code: (0, _styledComponents.css)(["margin:0 3px;border-radius:3px;font-family:", ";padding:2px 5px;font-size:0.8em;border:'1px solid rgba(0, 0, 0, 0.02)';"], (0, _theme.get)('fonts.mono')),
  pre: (0, _styledComponents.css)(["font-family:", ";font-size:1em;line-height:1.8;"], (0, _theme.get)('fonts.mono')),
  paragraph: (0, _styledComponents.css)(["margin:10px 0 20px 0;"]),
  table: (0, _styledComponents.css)(["overflow-y:hidden;width:100%;font-family:", ";font-size:13px;overflow-x:initial;display:block;"], (0, _theme.get)('fonts.mono')),
  blockquote: (0, _styledComponents.css)(["margin:25px 0;padding:20px;font-style:italic;font-size:16px;"])
};
exports.styles = styles;