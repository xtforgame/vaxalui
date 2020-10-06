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
    width: 140,
    height: 140,
    borderLeftStyle: 'solid',
    borderLeftWidth: 1,
    borderRightStyle: 'solid',
    borderRightWidth: 1,
    marginLeft: -1,
    borderBottom: 0,
    borderTop: 0
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
      onClick,
      color = '#e8e8e8'
    } = this.props;
    return _react.default.createElement("div", {
      className: (0, _clsx.default)(classes.root, {
        [classes.clickable]: !!onClick
      }),
      style: {
        borderLeftColor: color,
        borderRightColor: color
      }
    }, imgUrl && _react.default.createElement("img", {
      src: imgUrl,
      style: {
        width
      },
      onClick: onClick
    }));
  }

}

var _default = (0, _styles.withStyles)(styles)(IconBox);

exports.default = _default;