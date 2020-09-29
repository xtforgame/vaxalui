"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _GreenButton = _interopRequireDefault(require("./GreenButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  root: {
    width: '100%',
    height: 62,
    display: 'flex',
    alignItems: 'center',
    borderTop: '1px solid #000000',
    fontSize: 14
  },
  label: {
    fontFamily: 'FilsonSoft-Bold',
    width: 260,
    marginRight: 91
  },
  link: {
    color: '#64703f'
  }
};

class DownloadItem extends _react.default.PureComponent {
  render() {
    const {
      classes,
      label = "Backbone of our sustainable textile business",
      href
    } = this.props;
    return _react.default.createElement("div", {
      className: classes.root
    }, _react.default.createElement("div", {
      className: classes.label
    }, label), _react.default.createElement("a", {
      href: href,
      className: classes.link
    }, "Download"));
  }

}

var _default = (0, _styles.withStyles)(styles)(DownloadItem);

exports.default = _default;