"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _ImageContainer = _interopRequireDefault(require("../ImageContainer"));

var _Text = _interopRequireDefault(require("./Text"));

var _TweenMove = _interopRequireDefault(require("../bob/TweenMove"));

var _reveal = require("../reveal");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useStyles = (0, _styles.makeStyles)(theme => ({
  root: {
    color: '#ffffff',
    justifyContent: 'center'
  },
  section: {
    width: 320,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  firstTitle: {
    width: 'fit-content',
    fontSize: 15,
    lineHeight: 1.33
  },
  firstTitleText: {
    display: 'flex'
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
    width: '100%',
    fontSize: 45,
    paddingTop: 42,
    lineHeight: 1.2
  },
  subtitle: {
    fontSize: 20,
    paddingTop: 16,
    lineHeight: 1.6
  }
}));

var _default = props => {
  const {
    backgroundImage,
    firstTitle,
    firstTitleBack,
    title,
    subtitle,
    height,
    children,
    color,
    lineColor,
    titleFontFamily = 'bold',
    subtitleFontFamily = 'light',
    titleFontSize
  } = props;
  const classes = useStyles();
  return _react.default.createElement(_TweenMove.default, {
    image: backgroundImage
  }, _react.default.createElement(_ImageContainer.default, {
    className: classes.root,
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
  }, _react.default.createElement("div", {
    className: classes.firstTitleText
  }, _react.default.createElement(_Text.default, {
    family: "bold"
  }, firstTitle), _react.default.createElement(_Text.default, {
    className: classes.firstTitleBack,
    family: "light"
  }, firstTitleBack)), _react.default.createElement("div", {
    className: classes.firstLine,
    style: {
      backgroundColor: lineColor
    }
  }))), _react.default.createElement(_reveal.Slide, {
    direction: "up",
    triggerOnce: true
  }, _react.default.createElement(_Text.default, {
    family: titleFontFamily,
    className: classes.title,
    style: {
      fontSize: titleFontSize
    }
  }, title), _react.default.createElement(_Text.default, {
    family: subtitleFontFamily,
    className: classes.subtitle
  }, subtitle)), _react.default.createElement("div", null, children))));
};

exports.default = _default;