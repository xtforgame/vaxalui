"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/styles");

var _ImageCircle = _interopRequireDefault(require("./ImageCircle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  root: {
    width: '100%',
    height: 610,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold',
    lineHeight: 1.31,
    color: '#000000',
    paddingTop: 88
  },
  line: {
    width: 125,
    height: 1,
    marginTop: 2,
    border: ' solid 1px #000000'
  },
  circle: {
    marginTop: 40
  }
};

class HomeTwoCircleSection extends _react.default.PureComponent {
  render() {
    const {
      classes,
      backgroundImage
    } = this.props;
    return _react.default.createElement("div", {
      className: classes.root
    }, _react.default.createElement("div", {
      className: classes.title
    }, " TECHNOLOGIES "), _react.default.createElement("div", {
      className: classes.line
    }), _react.default.createElement("div", {
      className: classes.circle
    }, _react.default.createElement(_ImageCircle.default, {
      backgroundImage: backgroundImage
    })));
  }

}

var _default = (0, _styles.withStyles)(styles)(HomeTwoCircleSection);

exports.default = _default;