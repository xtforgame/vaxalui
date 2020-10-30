"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/core/styles");

var _Fade = _interopRequireDefault(require("react-reveal/Fade"));

var _ImageContainer = _interopRequireDefault(require("../ImageContainer"));

var _BreakAllContentText = _interopRequireDefault(require("../BreakAllContentText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    height: 500,
    textAlign: 'center'
  },
  firstTitle: {
    fontSize: 20,
    fontFamily: 'FilsonSoft-Bold'
  },
  firstLine: {
    height: 1,
    marginTop: 2,
    width: '100%'
  },
  secondTitle: {
    width: 780,
    fontSize: 72,
    lineHeight: 1.11,
    fontFamily: 'FilsonSoft-Bold',
    marginTop: 38
  },
  secondLine: {
    width: 420,
    height: 1,
    marginTop: 2
  },
  thirdTitle: {
    marginTop: 16,
    fontSize: 20,
    fontFamily: 'FilsonSoft-Light'
  },
  flex1: {
    flex: 1
  },
  space: {
    height: 12
  }
};

class TopSection extends _react.default.PureComponent {
  render() {
    const {
      classes,
      firstTitle,
      secondTitle,
      thirdTitle,
      backgroundImage,
      thirdTitleWidth,
      color = '#ffffff'
    } = this.props;
    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ImageContainer.default, {
      image: backgroundImage,
      className: classes.root,
      style: {
        color
      }
    }, _react.default.createElement(_Fade.default, null, _react.default.createElement(_BreakAllContentText.default, {
      className: classes.firstTitle
    }, firstTitle, _react.default.createElement("div", {
      className: classes.firstLine,
      style: {
        backgroundColor: color
      }
    }))), _react.default.createElement(_Fade.default, null, _react.default.createElement("div", null, _react.default.createElement("div", {
      className: classes.secondTitle
    }, secondTitle), _react.default.createElement(_BreakAllContentText.default, {
      className: classes.thirdTitle
    }, thirdTitle)))), _react.default.createElement("div", {
      className: classes.space
    }));
  }

}

var _default = (0, _styles.withStyles)(styles)(TopSection);

exports.default = _default;