"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _ImageCircle = _interopRequireDefault(require("./ImageCircle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  root: {
    width: '100%',
    height: 870,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  title: {
    fontSize: 40,
    fontFamily: 'FilsonSoft-Bold',
    color: '#000000',
    paddingTop: 110
  },
  circle: {
    marginTop: 110
  }
};

class TwoCireSection extends _react.default.PureComponent {
  render() {
    const {
      classes,
      backgroundImage
    } = this.props;
    return _react.default.createElement("div", {
      className: classes.root
    }, _react.default.createElement("div", {
      className: classes.title
    }, "SAYA Recycling Technologies", _react.default.createElement("br", null), "from Bottles to Garments and Beyond"), _react.default.createElement("div", {
      className: classes.circle
    }, _react.default.createElement(_ImageCircle.default, {
      linkText: "Explore this Technology",
      backgroundImage: backgroundImage
    })));
  }

}

var _default = (0, _styles.withStyles)(styles)(TwoCireSection);

exports.default = _default;