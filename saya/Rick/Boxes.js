"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _CardMedia = _interopRequireDefault(require("@material-ui/core/CardMedia"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useStyles = (0, _styles.makeStyles)(theme => ({
  root: {
    width: '100%',
    height: 320,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexWrap: 'wrap',
    textAlign: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    position: 'relative'
  },
  title: {
    fontSize: 33,
    paddingTop: 30
  },
  secondLine: {
    width: '100%',
    height: 1,
    marginTop: 2
  },
  subtitle: {
    fontSize: 18,
    paddingTop: 10
  },
  content: {
    fontSize: 18,
    paddingTop: 10
  }
}));

var _default = props => {
  const {
    title,
    subtitle,
    content,
    color,
    backgroundColor,
    children
  } = props;
  const classes = useStyles();
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_CardMedia.default, {
    className: classes.root,
    style: {
      width: '100%',
      height: 320,
      color,
      backgroundColor
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
      margin: 10
    }
  }, title)), _react.default.createElement("div", {
    className: classes.subtitle
  }, _react.default.createElement("pre", {
    style: {
      fontFamily: 'FilsonSoft-Bold',
      margin: 10
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
      fontFamily: 'FilsonSoftRegular'
    }
  }, content)))), _react.default.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      backgroundColor
    }
  }, children));
};

exports.default = _default;