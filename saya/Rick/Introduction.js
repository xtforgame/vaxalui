"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _ImageContainer = _interopRequireDefault(require("../ImageContainer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useStyles = (0, _styles.makeStyles)(theme => ({
  root: {
    textAlign: 'center'
  },
  title: {
    textAlign: 'left',
    fontSize: 33,
    paddingTop: 47
  },
  line: {
    width: '100%',
    height: 1,
    marginTop: 23
  },
  subtitle: {
    textAlign: 'left',
    fontSize: 18,
    paddingTop: 22
  },
  content: {
    textAlign: 'left',
    fontSize: 14,
    paddingTop: 23,
    lineHeight: 1.5
  }
}));

var _default = props => {
  const {
    title,
    titlePaddingTop,
    subtitle,
    content,
    height,
    backgroundImage,
    backgroundColor,
    color,
    lineColor,
    lineDisplay,
    children
  } = props;
  const classes = useStyles();
  return _react.default.createElement(_ImageContainer.default, {
    image: backgroundImage,
    className: classes.root,
    style: {
      height,
      color,
      width: '100%',
      backgroundColor: backgroundColor
    }
  }, _react.default.createElement("div", {
    style: {
      position: 'absolute'
    }
  }, _react.default.createElement("div", {
    className: classes.title
  }, _react.default.createElement("pre", {
    style: {
      fontFamily: 'FilsonSoft-Bold',
      marginBottom: 0
    }
  }, title)), _react.default.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, _react.default.createElement("div", {
    className: classes.line,
    style: {
      backgroundColor: lineColor,
      display: lineDisplay
    }
  })), _react.default.createElement("div", {
    className: classes.subtitle
  }, _react.default.createElement("pre", {
    style: {
      fontFamily: 'FilsonSoft-Bold',
      marginBottom: 0,
      marginTop: 0
    }
  }, subtitle)), _react.default.createElement("div", {
    className: classes.content
  }, _react.default.createElement("pre", {
    style: {
      fontFamily: 'FilsonSoftRegular',
      marginBottom: 0,
      marginTop: 0
    }
  }, content)), _react.default.createElement("div", null, children)));
};

exports.default = _default;