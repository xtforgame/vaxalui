"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _GreenButton = _interopRequireDefault(require("./GreenButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  root: {
    width: 370,
    height: 460,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexWrap: 'wrap',
    borderRadius: 30,
    marginBottom: 50
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold'
  },
  titleBack: {
    fontWeight: 'normal',
    fontFamily: 'FilsonSoft-Light'
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold',
    paddingTop: 10
  },
  button: {
    marginTop: 160,
    fontFamily: 'FilsonSoft-Bold'
  }
};

class ImageBox extends _react.default.PureComponent {
  render() {
    const {
      classes,
      title,
      titleBack,
      subtitle,
      backgroundImage,
      fontColor,
      paddingTop,
      buttonDisplay,
      children
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
        paddingTop: paddingTop
      }
    }, title, _react.default.createElement("span", {
      className: classes.titleBack
    }, titleBack)), _react.default.createElement("div", {
      className: classes.subtitle
    }, subtitle), _react.default.createElement("div", {
      className: classes.button,
      style: {
        display: buttonDisplay
      }
    }, _react.default.createElement(_GreenButton.default, {
      text: "Learn more"
    })), _react.default.createElement("div", null, children));
  }

}

var _default = (0, _styles.withStyles)(styles)(ImageBox);

exports.default = _default;