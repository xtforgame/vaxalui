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
    display: 'flex',
    flexDirection: 'column',
    marginTop: 30
  },
  circle: {
    width: 120,
    height: 120,
    border: 'solid 1px #ffffff',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 18,
    color: '#ffffff',
    fontFamily: 'FilsonSoft-Bold'
  },
  topRaw: {
    display: 'flex',
    marginTop: 30,
    height: 260,
    justifyContent: 'center'
  },
  img: {
    height: '100%',
    marginLeft: 40
  }
};

class EnhancedProcess extends _react.default.PureComponent {
  render() {
    const {
      classes,
      enhancedProcessImg
    } = this.props;
    return _react.default.createElement("div", {
      className: classes.root
    }, _react.default.createElement("div", {
      className: classes.topRaw
    }, _react.default.createElement("img", {
      className: classes.img,
      src: enhancedProcessImg
    })));
  }

}

var _default = (0, _styles.withStyles)(styles)(EnhancedProcess);

exports.default = _default;