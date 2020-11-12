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
    height: 631,
    textAlign: 'left',
    paddingTop: 60
  },
  title: {
    fontSize: 18
  },
  line: {
    width: '100%',
    height: 1,
    marginTop: 5
  }
}));

var _default = props => {
  const {
    title,
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
      fontFamily: 'FilsonSoft-Bold'
    }
  }, title)), _react.default.createElement("div", {
    style: {
      display: 'flex'
    }
  }, _react.default.createElement("div", {
    className: classes.line,
    style: {
      backgroundColor: color
    }
  })), _react.default.createElement("div", {
    style: {
      position: 'absolute',
      display: 'flex',
      marginTop: 56
    }
  }, children))));
};

exports.default = _default;