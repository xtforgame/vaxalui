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
    width: 130,
    height: 45,
    fontSize: 14,
    color: '#ffffff',
    fontWeight: 'bold',
    backgroundColor: '#64703f',
    border: 'none',
    borderRadius: 22,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'FilsonSoft-Bold'
  }
};

class ImageBox extends _react.default.PureComponent {
  render() {
    const {
      classes,
      marginTop,
      width,
      height,
      text
    } = this.props;
    return _react.default.createElement("div", null, _react.default.createElement("button", {
      className: classes.button,
      style: {
        marginTop: marginTop,
        width: width,
        height: height
      }
    }, text));
  }

}

var _default = (0, _styles.withStyles)(styles)(ImageBox);

exports.default = _default;