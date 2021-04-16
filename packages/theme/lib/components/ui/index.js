"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.components = void 0;

var _Playground = require("./Playground");

var _Blockquote = require("./Blockquote");

var _Editor = require("./Editor");

var _H = require("./H1");

var _H2 = require("./H2");

var _H3 = require("./H3");

var _H4 = require("./H4");

var _H5 = require("./H5");

var _H6 = require("./H6");

var _Hr = require("./Hr");

var _InlineCode = require("./InlineCode");

var _Link = require("./Link");

var _Loading = require("./Loading");

var _NotFound = require("./NotFound");

var _OrderedList = require("./OrderedList");

var _Page = require("./Page");

var _Paragraph = require("./Paragraph");

var _Pre = require("./Pre");

var _Props = require("./Props");

var _Table = require("./Table");

var _UnorderedList = require("./UnorderedList");

var _VueCodeBox = require("./VueCodeBox");

var components = {
  a: _Link.Link,
  blockquote: _Blockquote.Blockquote,
  editor: _Editor.Editor,
  h1: _H.H1,
  h2: _H2.H2,
  h3: _H3.H3,
  h4: _H4.H4,
  h5: _H5.H5,
  h6: _H6.H6,
  hr: _Hr.Hr,
  inlineCode: _InlineCode.InlineCode,
  loading: _Loading.Loading,
  notFound: _NotFound.NotFound,
  ol: _OrderedList.OrderedList,
  p: _Paragraph.Paragraph,
  page: _Page.Page,
  playground: _Playground.Playground,
  pre: _Pre.Pre,
  props: _Props.Props,
  table: _Table.Table,
  ul: _UnorderedList.UnorderedList,
  VueCodeBox: _VueCodeBox.VueCodeBox
};
exports.components = components;