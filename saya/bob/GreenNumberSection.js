"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/core/styles");

var _animatedNumberReact = _interopRequireDefault(require("animated-number-react"));

var _reactVisibilitySensor = _interopRequireDefault(require("react-visibility-sensor"));

var _AnimatedNumber = _interopRequireDefault(require("./AnimatedNumber"));

var _BreakAllContentText = _interopRequireDefault(require("../BreakAllContentText"));

var _ImageContainer = _interopRequireDefault(require("../ImageContainer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

const GreenNumberSection = props => {
  const {
    classes,
    numberUpTitle,
    number,
    suffix = '%',
    topTile,
    bottomTitle,
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
    backgroundImage,
    topTitle,
    hideTop
  } = props;
  return _react.default.createElement(_react.default.Fragment, null, !hideTop && _react.default.createElement(_ImageContainer.default, {
    image: backgroundImage,
    className: classes.topSection
  }, _react.default.createElement("div", null, _react.default.createElement("span", {
    className: classes.titleWhite
  }, topTitle))), _react.default.createElement("div", {
    className: classes.root,
    style: {
      height,
      backgroundColor
    }
  }, _react.default.createElement("div", {
    className: classes.leftColumn,
    style: {
      paddingTop: leftPaddingTop,
      paddingRight: leftPaddingRight
    }
  }, _react.default.createElement("div", {
    className: classes.numberUpTitle
  }, ' ', numberUpTitle, ' '), _react.default.createElement(_AnimatedNumber.default, {
    number: number,
    suffix: suffix,
    numberPaddingTop: numberPaddingTop,
    numberColor: numberColor,
    percentDisplay: percentDisplay,
    percentColor: percentColor
  }), _react.default.createElement("div", {
    className: classes.topTile
  }, topTile), _react.default.createElement("div", {
    className: classes.line,
    style: {
      width: lineWidth
    }
  }), _react.default.createElement("div", {
    className: classes.bottomTitle
  }, bottomTitle)), _react.default.createElement("div", {
    className: classes.rightColumn,
    style: {
      paddingLeft: rightPaddingLeft
    }
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
  }, description)))), _react.default.createElement("div", {
    className: classes.space
  }));
};

var _default = (0, _styles.withStyles)(styles)(GreenNumberSection);

exports.default = _default;