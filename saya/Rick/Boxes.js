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
    height: 659,
    textAlign: 'center'
  },
  title: {
    fontSize: 30,
    paddingTop: 60
  },
  secondLine: {
    width: '100%',
    height: 1,
    marginTop: 24
  },
  subtitle: {
    fontSize: 13,
    paddingTop: 15
  },
  content: {
    fontSize: 13,
    paddingTop: 22
  }
}));

var _default = props => {
  const {
    title,
    titleBack,
    subtitle,
    content,
    color,
    backgroundColor,
    children
  } = props;
  const classes = useStyles();
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ImageContainer.default, {
    className: classes.root,
    style: {
      width: '100%',
      color,
      backgroundColor,
      overflow: 'scroll'
    }
  }, _react.default.createElement("div", {
    style: {
      position: 'absolute',
      width: '80%'
    }
  }, _react.default.createElement("div", {
    className: classes.title
  }, _react.default.createElement("pre", {
    style: {
      fontFamily: 'FilsonSoft-Bold',
      margin: 0
    }
  }, title, _react.default.createElement("span", {
    style: {
      fontFamily: 'FilsonSoft-Light'
    }
  }, titleBack))), _react.default.createElement("div", {
    className: classes.subtitle
  }, _react.default.createElement("pre", {
    style: {
      fontFamily: 'FilsonSoft-Bold',
      margin: 0
    }
  }, subtitle)), _react.default.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, _react.default.createElement("div", {
    className: classes.secondLine,
    style: {
      backgroundColor: color
    }
  })), _react.default.createElement("div", {
    className: classes.content
  }, _react.default.createElement("pre", {
    style: {
      fontFamily: 'FilsonSoftRegular',
      margin: 0
    }
  }, content)), _react.default.createElement("div", {
    style: {
      display: 'flex',
      position: 'absolute',
      backgroundColor,
      marginTop: 57
    }
  }, children))));
};

exports.default = _default;