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
    textAlign: 'center',
    backgroundColor: '#64703f',
    border: 'none',
    borderRadius: 22,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 14,
    color: '#ffffff',
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold'
  }
};

class GreenButton extends _react.default.PureComponent {
  render() {
    const {
      classes,
      text
    } = this.props;
    return _react.default.createElement("button", {
      className: classes.button
    }, text);
  }

}

var _default = (0, _styles.withStyles)(styles)(GreenButton);

exports.default = _default;