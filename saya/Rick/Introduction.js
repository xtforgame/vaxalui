"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _ImageContainer = _interopRequireDefault(require("../ImageContainer"));

var _Text = _interopRequireDefault(require("./Text"));

var _BreakAllContentText = _interopRequireDefault(require("../BreakAllContentText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useStyles = (0, _styles.makeStyles)(theme => ({
  root: {
    textAlign: 'center'
  },
  title: {
    textAlign: 'left',
    fontSize: 30,
    paddingTop: 60
  },
  line: {
    width: '100%',
    height: 1,
    marginTop: 16
  },
  subtitle: {
    textAlign: 'left',
    fontSize: 20,
    paddingTop: 27,
    lineHeight: 'normal'
  },
  description: {
    textAlign: 'left',
    fontSize: 13,
    paddingTop: 12,
    lineHeight: 1.54
  }
}));

var _default = props => {
  const {
    title,
    titlePaddingTop,
    subtitle,
    subtitleFontFamily,
    description,
    height,
    backgroundImage,
    backgroundColor,
    color,
    lineColor,
    lineDisplay,
    children,
    hideTitle
  } = props;
  const classes = useStyles();
  return _react.default.createElement(_ImageContainer.default, {
    image: backgroundImage,
    className: classes.root,
    style: {
      height,
      color,
      backgroundColor,
      width: '100%'
    }
  }, _react.default.createElement("div", {
    style: {
      position: 'absolute',
      width: 320
    }
  }, !hideTitle && _react.default.createElement("div", {
    className: classes.title
  }, _react.default.createElement("pre", {
    style: {
      fontFamily: 'FilsonSoft-Bold',
      margin: 0
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
  }, _react.default.createElement(_Text.default, {
    family: subtitleFontFamily,
    style: {
      margin: 0
    }
  }, subtitle)), _react.default.createElement("div", {
    className: classes.description
  }, _react.default.createElement(_BreakAllContentText.default, {
    style: {
      fontFamily: 'FilsonSoftRegular',
      margin: 0
    }
  }, description)), _react.default.createElement("div", null, children)));
};

exports.default = _default;