"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _ImageContainer = _interopRequireDefault(require("./ImageContainer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useStyles = (0, _styles.makeStyles)(theme => ({
  subtitle: {
    textAlign: 'left',
    fontSize: 20
  },
  content: {
    textAlign: 'left',
    fontSize: 13,
    lineHeight: 1.54,
    paddingTop: 24
  }
}));

var _default = props => {
  const {
    paddingTop,
    backgroundImage,
    backgroundColor,
    fontColor,
    height,
    content,
    subtitle,
    children
  } = props;
  const classes = useStyles();
  return _react.default.createElement(_ImageContainer.default, {
    image: backgroundImage,
    className: classes.root,
    style: {
      height,
      backgroundColor,
      width: '100%',
      paddingTop: paddingTop
    }
  }, _react.default.createElement("div", {
    style: {
      position: 'absolute',
      color: fontColor,
      width: 320
    }
  }, _react.default.createElement("div", {
    className: classes.subtitle
  }, _react.default.createElement("pre", {
    style: {
      fontFamily: 'FilsonSoft-Bold',
      margin: 0
    }
  }, subtitle)), _react.default.createElement("div", {
    className: classes.content
  }, _react.default.createElement("pre", {
    style: {
      fontFamily: 'FilsonSoftRegular',
      margin: 0
    }
  }, content)), _react.default.createElement("div", null, children)));
};

exports.default = _default;