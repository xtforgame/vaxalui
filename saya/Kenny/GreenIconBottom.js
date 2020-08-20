"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  root: {
    display: 'flex',
    paddingTop: 65,
    paddingLeft: 540
  },
  leftIcon: {
    width: 120,
    height: 80
  },
  rightIcon: {
    width: 220,
    height: 80,
    marginLeft: 60
  }
};

class GreenIconBottom extends _react.default.PureComponent {
  render() {
    const {
      classes,
      leftIcon,
      rightIcon
    } = this.props;
    return _react.default.createElement("div", {
      className: classes.root
    }, _react.default.createElement("div", {
      className: classes.leftIcon
    }, _react.default.createElement("img", {
      src: leftIcon
    })), _react.default.createElement("div", {
      className: classes.rightIcon
    }, _react.default.createElement("img", {
      src: rightIcon
    })));
  }

}

var _default = (0, _styles.withStyles)(styles)(GreenIconBottom);

exports.default = _default;