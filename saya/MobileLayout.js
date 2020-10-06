"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactHelmet = _interopRequireDefault(require("react-helmet"));

var _styles = require("@material-ui/styles");

var _MobileNavbar = _interopRequireDefault(require("./MobileNavbar"));

var _MobileFooter = _interopRequireDefault(require("./MobileFooter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MobileLayout = ({
  children,
  onLinkClick,
  navBarItems,
  logo,
  fbIcon,
  igIcon
}) => _react.default.createElement("div", {
  style: {
    width: '100%',
    overflow: 'hidden',
    fontFamily: 'FilsonSoftRegular',
    lineHeight: 1
  }
}, _react.default.createElement(_reactHelmet.default, {
  title: "SAYA homepage"
}), _react.default.createElement(_MobileNavbar.default, {
  onLinkClick: onLinkClick,
  items: navBarItems
}, logo), _react.default.createElement("div", {
  style: {
    width: '100%',
    height: 56
  }
}), _react.default.createElement("div", {
  style: {
    width: '100%',
    overflowX: 'hidden',
    overflowY: 'auto'
  }
}, children), _react.default.createElement(_MobileFooter.default, {
  fbIcon: fbIcon,
  igIcon: igIcon
}));

var _default = MobileLayout;
exports.default = _default;