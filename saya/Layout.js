"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactHelmet = _interopRequireDefault(require("react-helmet"));

var _styles = require("@material-ui/styles");

var _Navbar = _interopRequireDefault(require("./Navbar"));

var _Footer = _interopRequireDefault(require("./Footer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Layout = ({
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
    fontFamily: 'FilsonSoftRegular'
  }
}, _react.default.createElement(_reactHelmet.default, {
  title: "SAYA homepage"
}), _react.default.createElement(_Navbar.default, {
  onLinkClick: onLinkClick,
  items: navBarItems
}, logo), _react.default.createElement("div", {
  style: {
    width: '100%',
    height: 64
  }
}), _react.default.createElement("div", {
  style: {
    width: '100%',
    overflowX: 'hidden',
    overflowY: 'auto'
  }
}, children), _react.default.createElement(_Footer.default, {
  fbIcon: fbIcon,
  igIcon: igIcon
}));

var _default = Layout;
exports.default = _default;