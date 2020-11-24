"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _ImageContainer = _interopRequireDefault(require("../ImageContainer"));

var _Text = _interopRequireDefault(require("./Text"));

var _reveal = require("../reveal");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useStyles = (0, _styles.makeStyles)(theme => ({
  root: {
    color: '#ffffff'
  },
  section: {
    width: 320,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    paddingTop: 95
  },
  firstTitle: {
    width: 'fit-content',
    fontSize: 15,
    fontFamily: 'FilsonSoft-Bold',
    lineHeight: 'normal'
  },
  firstTitleBack: {
    fontFamily: 'FilsonSoft-Light'
  },
  firstLine: {
    height: 1,
    width: '100%',
    backgroundColor: '#ffffff',
    marginTop: 1
  },
  title: {
    fontSize: 50,
    paddingTop: 40,
    whiteSpace: 'pre-line',
    lineHeight: 1
  }
}));

var _default = props => {
  const {
    backgroundImage,
    firstTitle,
    firstTitleBack,
    title,
    subTitle,
    height,
    children,
    color,
    lineColor,
    titleFontFamily,
    subtitleFontFamily,
    buttonPosition
  } = props;
  const classes = useStyles();
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
  }, _react.default.createElement(_Text.default, {
    family: titleFontFamily,
    className: classes.title
  }, title)), _react.default.createElement("div", null, children)));
};

exports.default = _default;