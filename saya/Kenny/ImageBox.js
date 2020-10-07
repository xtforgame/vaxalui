"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _GreenButton = _interopRequireDefault(require("../bob/GreenButton"));

var _BreakAllContentText = _interopRequireDefault(require("../BreakAllContentText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const styles = {
  box: {
    borderRadius: 30,
    margin: 20
  },
  root: {
    width: 368,
    height: 460,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 30,
    position: 'relative'
  },
  title: {
    fontSize: 40,
    fontFamily: 'FilsonSoft-Bold',
    lineHeight: 1.07,
    display: 'flex',
    flexDirection: 'column',
    height: 157
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
    top: 164
  },
  space: {
    flex: 1
  },
  button: {
    flexShrink: 0,
    marginBottom: 46
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
      onClick,
      hideButton,
      rootStyle,
      children
    } = this.props;
    return _react.default.createElement(_Box.default, {
      className: classes.box,
      boxShadow: 8
    }, _react.default.createElement("div", {
      className: classes.root,
      style: _objectSpread({
        backgroundImage: `url(${backgroundImage})`,
        color: fontColor
      }, rootStyle)
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
        fontFamily: 'FilsonSoft-Bold'
      }
    }, subtitle)), _react.default.createElement(_BreakAllContentText.default, {
      className: classes.subtitle
    }, subtitle), _react.default.createElement("div", {
      className: classes.space
    }), !hideButton && _react.default.createElement("div", {
      className: classes.button
    }, _react.default.createElement(_GreenButton.default, {
      onClick: onClick,
      text: "Learn More"
    })), children));
  }

}

var _default = (0, _styles.withStyles)(styles)(ImageBoxSmall);

exports.default = _default;