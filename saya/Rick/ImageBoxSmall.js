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
    width: 260,
    height: 325,
    textAlign: 'center',
    borderRadius: 30,
    marginRight: 24,
    fontFamily: 'FilsonSoft-Bold',
    position: 'relative',
    backgroundSize: 'cover'
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingTop: 4
  },
  button: {
    width: 160,
    height: 50,
    fontSize: 15,
    color: '#ffffff',
    fontWeight: 'bold',
    backgroundColor: '#64703f',
    border: 'none',
    borderRadius: 25,
    marginTop: 97,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'FilsonSoft-Bold'
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
      paddingTop
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
        fontFamily: 'FilsonSoftLight',
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
        bottom: 50
      }
    }, _react.default.createElement("button", {
      className: classes.button
    }, "Learn More")));
  }

}

var _default = (0, _styles.withStyles)(styles)(ImageBoxSmall);

exports.default = _default;