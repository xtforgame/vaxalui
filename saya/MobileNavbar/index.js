"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _styles = require("@material-ui/core/styles");

var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Menu = _interopRequireDefault(require("./Menu"));

var _navigation = _interopRequireDefault(require("./navigation"));

var _MenuIcon = _interopRequireDefault(require("./MenuIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const styles = theme => ({
  root: {
    width: '100%'
  },
  grow: {
    flexGrow: 1
  },
  openedMenu: {
    width: '100%'
  },
  closedMenu: {
    display: 'none'
  },
  menuRoot: {
    position: 'fixed',
    zIndex: 2048,
    top: 56,
    [theme.breakpoints.up('sm')]: {
      top: 64
    },
    width: '100%'
  }
});

class MobileNavbar extends _react.default.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      isOpen: false
    });

    _defineProperty(this, "handleMenuOpen", () => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    });

    _defineProperty(this, "handleMenuChange", (e, value) => {
      this.setState({
        isOpen: false
      });
    });
  }

  render() {
    const {
      onLinkClick,
      classes,
      items,
      children
    } = this.props;
    const {
      isOpen
    } = this.state;
    return _react.default.createElement("div", {
      className: classes.root
    }, _react.default.createElement(_AppBar.default, {
      position: "fixed",
      style: {
        backgroundColor: '#000000'
      }
    }, _react.default.createElement(_Toolbar.default, null, children, _react.default.createElement("div", {
      className: classes.grow
    }), _react.default.createElement(_IconButton.default, {
      color: "inherit",
      onClick: this.handleMenuOpen,
      "aria-label": "NotificationList"
    }, _react.default.createElement(_MenuIcon.default, {
      open: isOpen
    })))), _react.default.createElement("div", {
      className: classes.menuRoot
    }, _react.default.createElement(_Menu.default, {
      key: isOpen.toString(),
      className: (0, _clsx.default)({
        [classes.openedMenu]: isOpen,
        [classes.closedMenu]: !isOpen
      }),
      items: items || _navigation.default,
      onLinkClick: onLinkClick,
      onChange: this.handleMenuChange
    })));
  }

}

var _default = (0, _styles.withStyles)(styles)(MobileNavbar);

exports.default = _default;