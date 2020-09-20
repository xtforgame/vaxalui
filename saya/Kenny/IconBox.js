"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _clsx = _interopRequireDefault(require("clsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  root: {
    height: 140,
    border: 'solid 1px #888888'
  },
  clickable: {
    cursor: 'pointer'
  }
};

class IconBox extends _react.default.PureComponent {
  render() {
    const {
      classes,
      imgUrl,
      width,
      onClick
    } = this.props;
    return _react.default.createElement("div", {
      className: (0, _clsx.default)(classes.root, {
        [classes.clickable]: !!onClick
      })
    }, _react.default.createElement("img", {
      src: imgUrl,
      style: {
        width: width
      },
      onClick: onClick
    }));
  }

}

var _default = (0, _styles.withStyles)(styles)(IconBox);

exports.default = _default;