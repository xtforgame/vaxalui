"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _clsx = _interopRequireDefault(require("clsx"));

var _navigation = _interopRequireDefault(require("./navigation"));

var _Menu = _interopRequireDefault(require("./Menu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const styles = theme => ({
  root: {
    width: '100%',
    position: 'fixed',
    zIndex: 1024
  },
  body: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    color: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: (theme.spacing(8) - theme.spacing(3)) / 2,
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5)
  },
  logo: {
    width: theme.spacing(20),
    marginRight: 'auto'
  },
  closing: {
    height: theme.spacing(8),
    transitionProperty: 'height',
    transitionDuration: '0.33s',
    transitionDelay: '0.33s'
  },
  opening: {
    height: theme.spacing(8) * 6,
    transitionProperty: 'height',
    transitionDuration: '0.33s',
    transitionDelay: '0s'
  }
});

class Navbar extends _react.default.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      isOpen: false
    });

    _defineProperty(this, "handleMenuChange", (e, value) => {
      const isOpening = value !== '';
      this.setState({
        isOpen: isOpening
      });
    });
  }

  render() {
    const {
      onLinkClick,
      classes,
      items
    } = this.props;
    const {
      isOpen
    } = this.state;
    return _react.default.createElement("div", {
      className: (0, _clsx.default)(classes.root, {
        [classes.closing]: !isOpen,
        [classes.opening]: isOpen
      })
    }, _react.default.createElement("div", {
      className: classes.body
    }, _react.default.createElement("div", {
      className: classes.logo
    }, "Logo"), _react.default.createElement("div", null, _react.default.createElement(_Menu.default, {
      items: items || _navigation.default,
      onLinkClick: onLinkClick,
      onChange: this.handleMenuChange
    }))));
  }

}

var _default = (0, _styles.withStyles)(styles)(Navbar);

exports.default = _default;