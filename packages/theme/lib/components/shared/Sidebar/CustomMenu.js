"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _docz = require("docz");

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuContainer = _styledComponents.default.div.withConfig({
  displayName: "CustomMenu__MenuContainer"
})(["width:100%;padding:20px 0 24px 24px;line-height:22px;overflow-y:auto;flex:1;"]);

var Menu = _styledComponents.default.div.withConfig({
  displayName: "CustomMenu__Menu"
})(["width:100%;"]);

var ItemTitle = _styledComponents.default.div.withConfig({
  displayName: "CustomMenu__ItemTitle"
})(["color:rgba(0,0,0,0.45);margin-bottom:24px;font-size:15px;font-weight:bold;"]);

var Item = _styledComponents.default.div.withConfig({
  displayName: "CustomMenu__Item"
})(["cursor:pointer;color:rgba(0,0,0,0.9);margin-bottom:24px;transition:color 0.3s;position:relative;:hover{> a{color:#1890ff;}}> a{display:block;color:", ";font-size:", ";line-height:", ";}"], function (p) {
  return p.selected ? '#1890ff' : 'rgba(0, 0, 0, 0.65)';
}, function (props) {
  return props.size === 'large' ? '14px' : '12px';
}, function (props) {
  return props.size === 'large' ? '22px' : '20px';
});

var Tag = _styledComponents.default.span.withConfig({
  displayName: "CustomMenu__Tag"
})(["display:inline;float:right;font-size:12px;border-radius:2px;font-weight:700;padding:2px 4px;position:relative;top:-1px;background:#19be6b;color:#fff;&.page{background:#ff9900;}"]);

var CustomMenu = function CustomMenu(_ref) {
  var query = _ref.query;
  var _location = location,
      pathname = _location.pathname;
  var docs = (0, _docz.useDocs)(); // 按 menu 组织文档顺序

  var docsArrangedInMenu = docs && docs.filter(function (v) {
    return v.name.indexOf(query) > -1;
  }).reduce(function (list, doc) {
    if (doc.menu) {
      // 如果配置了 menu，将同一 menu 下的所有 docs 放到一个 SubMenu 内展示
      var existedMenu = list.find(function (v) {
        return v.name === doc.menu;
      });

      if (existedMenu) {
        var sortedDocs = existedMenu.menu.concat([doc]).sort(function (a, b) {
          return a.order - b.order;
        });
        existedMenu.menu = sortedDocs;
      } else {
        list.push({
          name: doc.menu,
          menu: [doc],
          menuOrder: doc.menuOrder || doc.order
        });
      }
    } else {
      // 如果没有配置 menu 属性，直接当作 Menu.Item 处理
      list.push({
        name: '',
        menu: [doc],
        menuOrder: doc.menuOrder || doc.order
      });
    }

    return list;
  }, []).sort(function (a, b) {
    return a.menuOrder - b.menuOrder;
  });
  return /*#__PURE__*/_react.default.createElement(MenuContainer, null, /*#__PURE__*/_react.default.createElement(Menu, null, docsArrangedInMenu && docsArrangedInMenu.map(function (item) {
    return item.name ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: item.name
    }, /*#__PURE__*/_react.default.createElement(ItemTitle, null, item.name), item.menu && item.menu.map(function (v) {
      return /*#__PURE__*/_react.default.createElement(Item, {
        selected: v.route === pathname,
        key: v.route
      }, /*#__PURE__*/_react.default.createElement(_docz.Link, {
        to: v.route
      }, /*#__PURE__*/_react.default.createElement("span", null, v.name), /*#__PURE__*/_react.default.createElement(Tag, {
        className: v.type
      }, v.type === 'block' ? '区块' : '页面')));
    })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: item.menu[0].route
    }, /*#__PURE__*/_react.default.createElement(Item, {
      selected: item.menu[0].route === pathname,
      size: "large"
    }, /*#__PURE__*/_react.default.createElement(_docz.Link, {
      to: item.menu[0].route
    }, /*#__PURE__*/_react.default.createElement("span", null, item.menu[0].name))));
  })));
};

var _default = CustomMenu;
exports.default = _default;