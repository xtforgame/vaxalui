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
    width: 255,
    height: 370,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexWrap: 'wrap',
    borderRadius: 30
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold'
  },
  titleBack: {
    fontWeight: 300
  },
  subtitle: {
    width: 125,
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 10
  }
};

class ImageBoxSmall extends _react.default.PureComponent {
  render() {
    const {
      classes,
      title,
      titleBack,
      subtitle,
      backgroundImage,
      fontColor,
      paddingTop,
      marginTop
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
    }, titleBack, " ")), _react.default.createElement("div", {
      className: classes.subtitle
    }, subtitle), _react.default.createElement("div", {
      className: classes.button,
      style: {
        marginTop: marginTop
      }
    }, _react.default.createElement(_GreenButton.default, {
      text: "Learn more"
    })));
  }

}

var _default = (0, _styles.withStyles)(styles)(ImageBoxSmall);

exports.default = _default;