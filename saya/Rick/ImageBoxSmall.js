"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _GreenButton = _interopRequireDefault(require("../bob/GreenButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  root: {
    width: 260,
    height: 325,
    textAlign: 'center',
    borderRadius: 0,
    marginRight: 24,
    fontFamily: 'FilsonSoft-Bold',
    position: 'relative',
    backgroundSize: 'cover'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold'
  },
  subtitle: {
    fontSize: 13,
    fontWeight: 'bold',
    paddingTop: 4
  },
  button: {
    width: 160
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
      subtitleFontFamily,
      fontColor,
      paddingTop,
      onClick
    } = this.props;
    return _react.default.createElement("div", {
      className: classes.root,
      style: {
        backgroundImage: `url(${backgroundImage})`,
        color: fontColor
      }
    }, _react.default.createElement("pre", {
      className: classes.title,
      style: {
        paddingTop,
        marginTop: 0,
        marginBottom: 0
      }
    }, title, _react.default.createElement("span", {
      style: {
        fontFamily: 'FilsonSoft-Light',
        fontWeight: 'normal'
      }
    }, titleBack)), _react.default.createElement("pre", {
      className: classes.subtitle,
      style: {
        marginTop: 0,
        marginBottom: 0
      }
    }, subtitle), _react.default.createElement("div", {
      style: {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        bottom: 40
      }
    }, _react.default.createElement(_GreenButton.default, {
      className: classes.button,
      onClick: onClick,
      text: "Learn More"
    })));
  }

}

var _default = (0, _styles.withStyles)(styles)(ImageBoxSmall);

exports.default = _default;