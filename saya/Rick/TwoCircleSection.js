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
    width: '100%',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: 18
  },
  circle: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 45
  }
};

class TwoCircleSection extends _react.default.PureComponent {
  render() {
    const {
      classes,
      height,
      backgroundImage,
      backgroundColor,
      circleMarginTop,
      children
    } = this.props;
    return _react.default.createElement("div", {
      className: classes.root,
      style: {
        height: height,
        backgroundColor: backgroundColor
      }
    }, _react.default.createElement("div", null, children), _react.default.createElement("div", {
      className: classes.circle,
      style: {
        marginTop: circleMarginTop
      }
    }, _react.default.createElement("img", {
      src: backgroundImage,
      height: 610
    })));
  }

}

var _default = (0, _styles.withStyles)(styles)(TwoCircleSection);

exports.default = _default;