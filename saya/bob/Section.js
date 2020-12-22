"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Clear = _interopRequireDefault(require("@material-ui/icons/Clear"));

var _useDialogState = _interopRequireWildcard(require("../YoutubeDialog/useDialogState"));

var _reveal = require("../reveal");

var _ImageContainer = _interopRequireDefault(require("../ImageContainer"));

var _GreenButton = _interopRequireDefault(require("./GreenButton"));

var _BreakAllContentText = _interopRequireDefault(require("../BreakAllContentText"));

var _YoutubeDialog = _interopRequireDefault(require("../YoutubeDialog"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const useStyles = (0, _styles.makeStyles)(() => ({
  root: {
    height: 590,
    color: '#000000'
  },
  section: {
    width: 940,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    paddingTop: 88
  },
  section2: {
    width: 320,
    display: 'flex'
  },
  breadCrumbs: {
    width: 'fit-content',
    fontSize: 16,
    fontFamily: 'FilsonSoft-Bold',
    lineHeight: 1.31
  },
  firstLine: {
    height: 1,
    marginTop: 2
  },
  title: {
    width: 920,
    fontSize: 72,
    fontWeight: 300,
    fontStretch: 'normal',
    fontFamily: 'FilsonSoft-Light',
    lineHeight: 1,
    paddingTop: 45,
    whiteSpace: 'pre-line'
  },
  subTitle: {
    fontSize: 20,
    fontFamily: 'FilsonSoft-Bold',
    paddingTop: 24
  },
  button: {
    marginTop: 48
  },
  space: {
    height: 12
  }
}));

var _default = props => {
  const {
    color = '#FFFFFF',
    backgroundImage,
    onClick,
    showButton = true,
    videoId,
    breadCrumbs,
    title,
    subTitle,
    height = 590
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
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ImageContainer.default, {
    className: classes.root,
    image: backgroundImage,
    style: {
      height,
      color
    }
  }, _react.default.createElement("div", {
    className: classes.section
  }, _react.default.createElement(_reveal.Slide, {
    direction: "up",
    triggerOnce: true
  }, _react.default.createElement("div", {
    className: classes.breadCrumbs
  }, breadCrumbs, _react.default.createElement("div", {
    className: classes.firstLine,
    style: {
      backgroundColor: color
    }
  })), _react.default.createElement(_BreakAllContentText.default, {
    className: classes.title
  }, title), _react.default.createElement(_BreakAllContentText.default, {
    className: classes.subTitle
  }, subTitle), _react.default.createElement("div", {
    className: classes.section2
  }, showButton && _react.default.createElement(_reveal.Slide, {
    direction: "up",
    triggerOnce: true
  }, _react.default.createElement("div", {
    className: classes.button
  }, _react.default.createElement(_GreenButton.default, {
    text: "Read More",
    onClick: onClick
  }))), videoId && _react.default.createElement(_reveal.Slide, {
    direction: "up",
    triggerOnce: true
  }, _react.default.createElement("div", {
    className: classes.button,
    style: {
      marginLeft: 12
    }
  }, _react.default.createElement(_GreenButton.default, {
    text: "Video",
    onClick: handleOpen
  })))))), !exited && _react.default.createElement(_YoutubeDialog.default, _extends({
    videoId: videoId
  }, dialogProps))), _react.default.createElement("div", {
    className: classes.space
  }));
};

exports.default = _default;