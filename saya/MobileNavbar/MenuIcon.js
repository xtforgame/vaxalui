"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = theme => ({
  root: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    position: 'relative'
  },
  opened: {},
  closed: {},
  symbol: {
    position: 'absolute',
    width: 18,
    height: 2,
    left: 3,
    backgroundColor: 'white'
  },
  symbol1: {
    top: 6,
    transitionProperty: 'transform',
    transitionDuration: '0.2s',
    transitionDelay: '0s'
  },
  symbol2: {
    top: 10
  },
  symbol3: {
    top: 14,
    transitionProperty: 'transform',
    transitionDuration: '0.2s',
    transitionDelay: '0s'
  },
  symbol1Open: {
    top: 10,
    transformOrigin: 'center',
    transform: 'rotate(45deg)',
    transitionProperty: 'transform',
    transitionDuration: '0.2s',
    transitionDelay: '0s'
  },
  symbol2Open: {
    display: 'none'
  },
  symbol3Open: {
    top: 10,
    transformOrigin: 'center',
    transform: 'rotate(-45deg)',
    transitionProperty: 'transform',
    transitionDuration: '0.2s',
    transitionDelay: '0s'
  }
});

class MenuIcon extends _react.default.PureComponent {
  render() {
    const {
      classes,
      className,
      open
    } = this.props;
    return _react.default.createElement("div", {
      className: (0, _clsx.default)(classes.root, className)
    }, _react.default.createElement("span", {
      className: (0, _clsx.default)(classes.symbol, classes.symbol1, {
        [classes.symbol1Open]: open
      })
    }), _react.default.createElement("span", {
      className: (0, _clsx.default)(classes.symbol, classes.symbol2, {
        [classes.symbol2Open]: open
      })
    }), _react.default.createElement("span", {
      className: (0, _clsx.default)(classes.symbol, classes.symbol3, {
        [classes.symbol3Open]: open
      })
    }));
  }

}

MenuIcon.propTypes = {};
MenuIcon.defaultProps = {};

var _default = (0, _styles.withStyles)(styles)(MenuIcon);

exports.default = _default;