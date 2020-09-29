"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _GreenButton = _interopRequireDefault(require("./GreenButton"));

var _BreakAllContentText = _interopRequireDefault(require("../BreakAllContentText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  box: {
    margin: 20
  },
  root: {
    width: 255,
    height: 368,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative'
  },
  title: {
    fontSize: 24,
    fontFamily: 'FilsonSoft-Bold',
    lineHeight: 1.07,
    display: 'flex',
    flexDirection: 'column',
    height: 116
  },
  titleText: {
    flexGrow: 0
  },
  titleBack: {
    flexGrow: 0,
    fontFamily: 'FilsonSoft-Light'
  },
  secondTitle: {
    flexGrow: 0,
    lineHeight: 1.07
  },
  subtitle: {
    fontSize: 18,
    fontFamily: 'FilsonSoft-Bold',
    position: 'absolute',
    top: 124
  },
  space: {
    flex: 1
  },
  button: {
    flexShrink: 0,
    marginBottom: 58
  }
};

class ImageBoxSmall extends _react.default.PureComponent {
  render() {
    const {
      classes,
      title,
      titleBack,
      secondTitle,
      subtitle,
      backgroundImage,
      fontColor,
      onClick
    } = this.props;
    return _react.default.createElement(_Box.default, {
      className: classes.box,
      boxShadow: 0
    }, _react.default.createElement("div", {
      className: classes.root,
      style: {
        backgroundImage: `url(${backgroundImage})`,
        color: fontColor
      }
    }, _react.default.createElement(_BreakAllContentText.default, {
      className: classes.title
    }, _react.default.createElement("div", {
      className: classes.space
    }), _react.default.createElement("div", {
      className: classes.titleText
    }, title, _react.default.createElement("span", {
      className: classes.titleBack
    }, titleBack)), _react.default.createElement("div", {
      className: classes.secondTitle
    }, secondTitle)), _react.default.createElement("div", {
      className: classes.subtitle
    }, _react.default.createElement(_BreakAllContentText.default, {
      style: {
        fontFamily: 'FilsonSoftRegular'
      }
    }, subtitle)), _react.default.createElement("div", {
      className: classes.space
    }), _react.default.createElement("div", {
      className: classes.button
    }, _react.default.createElement(_GreenButton.default, {
      text: "Learn More",
      onClick: onClick
    }))));
  }

}

var _default = (0, _styles.withStyles)(styles)(ImageBoxSmall);

exports.default = _default;