"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Menu = _interopRequireDefault(require("@material-ui/icons/Menu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = theme => ({
  root: {
    width: '100%'
  },
  grow: {
    flexGrow: 1
  }
});

class MainAppBar extends _react.default.PureComponent {
  render() {
    const {
      classes
    } = this.props;
    return _react.default.createElement("div", {
      className: classes.root
    }, _react.default.createElement(_AppBar.default, {
      position: "fixed",
      style: {
        backgroundColor: '#000000'
      }
    }, _react.default.createElement(_Toolbar.default, null, _react.default.createElement(_Typography.default, {
      variant: "h6",
      color: "inherit"
    }, "logo"), _react.default.createElement("div", {
      className: classes.grow
    }), _react.default.createElement(_IconButton.default, {
      color: "inherit",
      onClick: () => {},
      "aria-label": "NotificationList"
    }, _react.default.createElement(_Menu.default, null)))));
  }

}

var _default = (0, _styles.withStyles)(styles)(MainAppBar);

exports.default = _default;