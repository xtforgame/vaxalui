"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  root: {
    height: 90,
    border: 'solid 1px #888888'
  }
};

class IconBox extends _react.default.PureComponent {
  render() {
    const {
      classes,
      imgUrl,
      width
    } = this.props;
    return _react.default.createElement("div", {
      className: classes.root
    }, _react.default.createElement("img", {
      src: imgUrl,
      style: {
        width: width
      }
    }));
  }

}

var _default = (0, _styles.withStyles)(styles)(IconBox);

exports.default = _default;