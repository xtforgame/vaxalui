"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _BreakAllContentText = _interopRequireDefault(require("../BreakAllContentText"));

var _ImageContainer = _interopRequireDefault(require("../ImageContainer"));

var _reveal = require("../reveal");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const styles = {
  topSection: {
    display: 'flex',
    justifyContent: 'center',
    height: 350,
    color: '#000000',
    textAlign: 'center'
  },
  titleWhite: {
    color: '#ffffff',
    fontSize: 40,
    fontFamily: 'FilsonSoft-Bold'
  },
  root: {
    width: '100%',
    height: 450,
    display: 'flex',
    justifyContent: 'center'
  },
  leftColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0
  },
  rightColumn: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  numberUpTitle: {
    fontSize: 20,
    color: '#000000',
    fontFamily: 'FilsonSoft-Bold',
    paddingLeft: 10
  },
  number: {
    fontSize: 180,
    lineHeight: 0.74,
    fontFamily: 'FilsonSoftRegular'
  },
  percent: {
    fontSize: 20,
    fontFamily: 'FilsonSoftRegular'
  },
  topTile: {
    fontSize: 20,
    color: '#000000',
    fontFamily: 'FilsonSoft-Bold',
    paddingTop: 16,
    paddingLeft: 10
  },
  line: {
    height: 2,
    backgroundColor: '#000000',
    marginTop: 12,
    marginLeft: 10
  },
  bottomTitle: {
    fontSize: 20,
    color: '#000000',
    fontFamily: 'FilsonSoft-Bold',
    paddingTop: 12,
    paddingLeft: 10
  },
  rightTitle: {
    fontSize: 20,
    color: '#000000',
    fontFamily: 'FilsonSoft-Bold'
  },
  description: {
    paddingTop: 20,
    width: 380,
    fontSize: 14,
    color: '#000000',
    fontFamily: 'FilsonSoftRegular'
  },
  space: {
    height: 12
  }
};

class GreenNumberSection extends _react.default.PureComponent {
  render() {
    const {
      classes,
      rightTitle,
      description,
      lineWidth,
      height,
      numberPaddingTop,
      leftPaddingTop,
      leftPaddingRight,
      rightPaddingLeft,
      descriptionPaddingTop,
      percentDisplay,
      backgroundColor,
      numberColor,
      percentColor,
      image,
      leftColumnStyle
    } = this.props;
    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
      className: classes.root,
      style: {
        height: height,
        backgroundColor: backgroundColor
      }
    }, _react.default.createElement(_reveal.Slide, {
      direction: "up",
      triggerOnce: true
    }, _react.default.createElement("div", {
      className: classes.leftColumn,
      style: _objectSpread({
        paddingTop: leftPaddingTop,
        paddingRight: leftPaddingRight
      }, leftColumnStyle)
    }, image)), _react.default.createElement("div", {
      className: classes.rightColumn,
      style: {
        paddingLeft: rightPaddingLeft
      }
    }, _react.default.createElement(_reveal.Slide, {
      direction: "up",
      triggerOnce: true
    }, _react.default.createElement("div", {
      className: classes.rightTitle
    }, rightTitle), _react.default.createElement("div", {
      className: classes.description,
      style: {
        paddingTop: descriptionPaddingTop
      }
    }, _react.default.createElement(_BreakAllContentText.default, {
      style: {
        fontFamily: 'FilsonSoftRegular'
      }
    }, description))))), _react.default.createElement("div", {
      className: classes.space
    }));
  }

}

var _default = (0, _styles.withStyles)(styles)(GreenNumberSection);

exports.default = _default;