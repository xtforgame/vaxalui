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
    width: 715,
    height: 370,
    position: 'relative'
  },
  leftCircle: {
    width: 370,
    height: 370,
    borderRadius: '50%',
    backgroundColor: 'pink',
    position: 'absolute'
  },
  rightCircle: {
    width: 370,
    height: 370,
    borderRadius: '50%',
    backgroundColor: 'yellow',
    position: 'absolute',
    right: 0
  }
};

class ImageCircle extends _react.default.PureComponent {
  render() {
    const {
      classes
    } = this.props;
    return _react.default.createElement("div", {
      className: classes.root
    }, _react.default.createElement("div", {
      className: classes.leftCircle
    }), _react.default.createElement("div", {
      className: classes.rightCircle
    }));
  }

}

var _default = (0, _styles.withStyles)(styles)(ImageCircle);

exports.default = _default;