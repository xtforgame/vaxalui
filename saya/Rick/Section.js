"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _ImageContainer = _interopRequireDefault(require("../ImageContainer"));

var _GreenButton = _interopRequireDefault(require("../bob/GreenButton"));

var _reveal = require("../reveal");

var _useDialogState = _interopRequireWildcard(require("../YoutubeDialog/useDialogState"));

var _YoutubeDialog = _interopRequireDefault(require("../YoutubeDialog"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const useStyles = (0, _styles.makeStyles)(theme => ({
  root: {
    color: '#ffffff'
  },
  section: {
    width: 320,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    paddingTop: 60
  },
  section2: {
    width: 320,
    display: 'flex'
  },
  firstTitle: {
    width: 'fit-content',
    fontSize: 15,
    fontFamily: 'FilsonSoft-Bold',
    lineHeight: 1.33
  },
  firstTitleBack: {
    fontFamily: 'FilsonSoft-Light',
    fontWeight: 300
  },
  firstLine: {
    height: 1,
    width: '100%',
    backgroundColor: '#ffffff',
    marginTop: 1
  },
  title: {
    fontSize: 50,
    fontWeight: 300,
    fontFamily: 'FilsonSoft-Light',
    paddingTop: 32,
    whiteSpace: 'pre-line',
    lineHeight: 1
  },
  subTitle: {
    fontSize: 20,
    fontFamily: 'FilsonSoft-Bold',
    paddingTop: 24
  },
  button: {
    marginTop: 32
  }
}));

var _default = props => {
  const {
    backgroundImage,
    onClick,
    hideButton,
    showVideoButton,
    videoId,
    onVideoButtonClick,
    firstTitle,
    firstTitleBack,
    title,
    subTitle,
    height,
    children,
    color,
    lineColor,
    buttonPosition = 'flex-start'
  } = props;
  const classes = useStyles();
  const [{
    exited,
    dialogProps
  }, {
    handleOpen,
    handleClose
  }] = (0, _useDialogState.default)({
    open: t => {},
    close: v => {}
  });
  return _react.default.createElement(_ImageContainer.default, {
    className: classes.root,
    image: backgroundImage,
    style: {
      height,
      color
    }
  }, _react.default.createElement("div", {
    className: classes.section
  }, _react.default.createElement("div", {
    className: classes.firstTitle
  }, _react.default.createElement(_reveal.Slide, {
    direction: "up",
    triggerOnce: true
  }, _react.default.createElement("div", null, firstTitle), _react.default.createElement("span", {
    className: classes.firstTitleBack
  }, firstTitleBack), _react.default.createElement("div", {
    className: classes.firstLine,
    style: {
      backgroundColor: lineColor
    }
  }))), _react.default.createElement(_reveal.Slide, {
    direction: "up",
    triggerOnce: true
  }, _react.default.createElement("div", {
    className: classes.title
  }, title), _react.default.createElement("div", {
    className: classes.subTitle
  }, subTitle))), _react.default.createElement("div", {
    style: {
      width: '100%'
    }
  }, children), _react.default.createElement("div", {
    className: classes.section2
  }, !hideButton && _react.default.createElement(_reveal.Slide, {
    direction: "up",
    triggerOnce: true
  }, _react.default.createElement("div", {
    className: classes.button,
    style: {
      alignSelf: buttonPosition
    }
  }, _react.default.createElement(_GreenButton.default, {
    text: "Learn More",
    onClick: onClick
  }))), videoId && _react.default.createElement(_reveal.Slide, {
    direction: "up",
    triggerOnce: true
  }, _react.default.createElement("div", {
    className: classes.button,
    style: {
      marginLeft: 13,
      alignSelf: buttonPosition
    }
  }, _react.default.createElement(_GreenButton.default, {
    text: "Video",
    onClick: handleOpen
  }))), !exited && _react.default.createElement(_YoutubeDialog.default, _extends({
    videoId: videoId
  }, dialogProps))));
};

exports.default = _default;