"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  button: {
    textAlign: 'center',
    backgroundColor: '#000000',
    border: 'solid 2px #ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 12,
    color: '#ffffff',
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold',
    paddingTop: 4
  }
};

class Button extends _react.default.PureComponent {
  render() {
    const {
      classes,
      children,
      width,
      height = 40
    } = this.props;
    return _react.default.createElement("button", {
      className: classes.button,
      style: {
        width,
        height,
        borderRadius: height / 2
      }
    }, children);
  }

}

var _default = (0, _styles.withStyles)(styles)(Button);

exports.default = _default;