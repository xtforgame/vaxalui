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
    width: 325,
    height: 405,
    textAlign: 'center',
    borderRadius: 30,
    marginBottom: 50,
    fontFamily: 'FilsonSoft-Bold',
    position: 'relative'
  },
  title: {
    fontSize: 33,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 10
  },
  button: {
    width: 130,
    height: 45,
    fontSize: 14,
    color: '#ffffff',
    fontWeight: 'bold',
    backgroundColor: '#64703f',
    border: 'none',
    borderRadius: 22,
    marginTop: 160,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'FilsonSoft-Bold'
  }
};

class ImageBox extends _react.default.PureComponent {
  render() {
    const {
      classes,
      title,
      subtitle,
      backgroundImage,
      fontColor,
      paddingTop
    } = this.props;
    return _react.default.createElement("div", {
      className: classes.root,
      style: {
        backgroundImage: `url(${backgroundImage})`,
        color: fontColor
      }
    }, _react.default.createElement("div", {
      className: classes.title,
      style: {
        paddingTop
      }
    }, title), _react.default.createElement("div", {
      className: classes.subtitle
    }, subtitle), _react.default.createElement("div", {
      style: {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        bottom: 40
      }
    }, _react.default.createElement("button", {
      className: classes.button
    }, "Learn More")));
  }

}

var _default = (0, _styles.withStyles)(styles)(ImageBox);

exports.default = _default;