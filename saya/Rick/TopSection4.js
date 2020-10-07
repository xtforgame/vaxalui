"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _ImageContainer = _interopRequireDefault(require("../ImageContainer"));

var _Text = _interopRequireDefault(require("./Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useStyles = (0, _styles.makeStyles)(theme => ({
  root: {
    color: '#000000',
    backgroundColor: '#e3e3e3',
    textAlign: 'center'
  },
  section: {
    width: 320,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    paddingTop: 60,
    alignItems: 'center'
  },
  firstTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold',
    lineHeight: 'normal'
  },
  firstLine: {
    height: 1,
    width: 306,
    backgroundColor: '#000000',
    marginTop: 12
  },
  title: {
    fontSize: 38,
    paddingTop: 35,
    lineHeight: 'normal',
    fontFamily: 'FilsonSoft-Bold'
  },
  topTitle: {
    fontSize: 17,
    paddingTop: 47,
    lineHeight: 'normal',
    fontFamily: 'FilsonSoft-Bold'
  },
  bottomTitle: {
    fontSize: 17,
    paddingTop: 12,
    lineHeight: 'normal',
    fontFamily: 'FilsonSoft-Bold'
  }
}));

var _default = props => {
  const {
    backgroundImage,
    firstTitle,
    firstTitleBack,
    title,
    topTitle,
    bottomTitle,
    height,
    children,
    color,
    lineColor
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
  }, firstTitle), _react.default.createElement("div", {
    className: classes.title
  }, title), _react.default.createElement("div", {
    className: classes.topTitle
  }, topTitle), _react.default.createElement("div", {
    className: classes.firstLine,
    style: {
      backgroundColor: lineColor
    }
  }), _react.default.createElement("div", {
    className: classes.bottomTitle
  }, bottomTitle), _react.default.createElement("div", null, children)));
};

exports.default = _default;