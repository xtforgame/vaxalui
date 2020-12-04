"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _AnimatedNumber = _interopRequireDefault(require("../bob/AnimatedNumber"));

var _ImageContainer = _interopRequireDefault(require("../ImageContainer"));

var _BreakAllContentText = _interopRequireDefault(require("../BreakAllContentText"));

var _TweenMove = _interopRequireDefault(require("../bob/TweenMove"));

var _reveal = require("../reveal");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useStyles = (0, _styles.makeStyles)(theme => ({
  topSection: {
    display: 'flex',
    justifyContent: 'center',
    height: 175,
    color: '#000000',
    textAlign: 'center'
  },
  titleWhite: {
    color: '#ffffff',
    fontSize: 24,
    fontFamily: 'FilsonSoft-Bold',
    margin: 0
  },
  root: {
    color: '#000000',
    paddingTop: 60
  },
  number: {
    fontSize: 180,
    fontFamily: 'FilsonSoftRegular',
    lineHeight: 0.89,
    textAlign: 'left'
  },
  percent: {
    fontSize: 20,
    fontFamily: 'FilsonSoftRegular'
  },
  topTile: {
    fontSize: 20,
    fontFamily: 'FilsonSoft-Bold',
    paddingTop: 0,
    textAlign: 'left'
  },
  line: {
    width: 253,
    height: 1,
    backgroundColor: '#000000',
    marginTop: 11,
    textAlign: 'left'
  },
  bottomTitle: {
    fontSize: 20,
    fontFamily: 'FilsonSoft-Bold',
    paddingTop: 10,
    textAlign: 'left'
  },
  subtitle: {
    textAlign: 'left',
    fontSize: 20,
    paddingTop: 80
  },
  description: {
    textAlign: 'left',
    fontSize: 13,
    paddingTop: 24
  }
}));

var _default = props => {
  const {
    hideTop,
    topTitle,
    backgroundImage,
    numberUpTitle,
    number,
    numberColor,
    topTile,
    bottomTitle,
    subtitle,
    description,
    height,
    backgroundColor,
    percentDisplay,
    marginTop,
    sign = "%",
    hideSign
  } = props;
  const classes = useStyles();
  return _react.default.createElement(_react.default.Fragment, null, !hideTop && _react.default.createElement(_TweenMove.default, {
    image: backgroundImage
  }, _react.default.createElement(_ImageContainer.default, {
    className: classes.topSection
  }, _react.default.createElement("div", null, _react.default.createElement("pre", {
    className: classes.titleWhite
  }, topTitle)))), _react.default.createElement(_ImageContainer.default, {
    className: classes.root,
    style: {
      height,
      backgroundColor,
      width: '100%'
    }
  }, _react.default.createElement("div", {
    style: {
      position: 'absolute',
      width: 320,
      marginTop: marginTop,
      alignSelf: 'center'
    }
  }, _react.default.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column'
    }
  }, _react.default.createElement(_reveal.Slide, {
    direction: "up",
    triggerOnce: true
  }, _react.default.createElement("div", {
    className: classes.numberUpTitle
  }, " ", numberUpTitle, " "), _react.default.createElement("div", {
    className: classes.number,
    style: {
      color: numberColor
    }
  }, _react.default.createElement(_AnimatedNumber.default, {
    number: number,
    suffix: hideSign ? '' : sign,
    numberPaddingTop: 0,
    numberColor: numberColor,
    percentDisplay: percentDisplay,
    percentColor: numberColor
  }))), _react.default.createElement("div", {
    style: {
      paddingLeft: 0
    }
  }, _react.default.createElement(_reveal.Slide, {
    direction: "up",
    triggerOnce: true
  }, _react.default.createElement("div", {
    className: classes.topTile
  }, " ", topTile, " "), _react.default.createElement("div", {
    className: classes.line
  }), _react.default.createElement("div", {
    className: classes.bottomTitle
  }, " ", bottomTitle, " ")))), _react.default.createElement(_reveal.Slide, {
    direction: "up",
    triggerOnce: true
  }, _react.default.createElement("div", {
    className: classes.subtitle
  }, _react.default.createElement("pre", {
    style: {
      fontFamily: 'FilsonSoft-Bold',
      margin: 0
    }
  }, subtitle)), _react.default.createElement("div", {
    className: classes.description
  }, _react.default.createElement(_BreakAllContentText.default, {
    style: {
      fontFamily: 'FilsonSoftRegular'
    }
  }, description))))));
};

exports.default = _default;