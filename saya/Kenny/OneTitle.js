"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _ImageContainer = _interopRequireDefault(require("../ImageContainer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  root: {
    paddingTop: 35
  }
};

class OneTitle extends _react.default.PureComponent {
  render() {
    const {
      classes,
      backgroundImage,
      fontColor,
      title
    } = this.props;
    return _react.default.createElement(_ImageContainer.default, {
      image: backgroundImage,
      className: classes.root,
      style: {
        height,
        color: fontColor
      }
    }, title);
  }

}

var _default = (0, _styles.withStyles)(styles)(OneTitle);

exports.default = _default;