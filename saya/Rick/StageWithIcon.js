"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _reveal = require("../reveal");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useStyles = (0, _styles.makeStyles)(theme => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    height: 92,
    marginTop: 40
  },
  container: {
    width: '100%',
    position: "relative",
    display: 'flex',
    alignItems: 'center',
    overflow: 'scroll'
  },
  icon: {
    marginLeft: 0,
    height: 92,
    position: "absolute"
  }
}));

var _default = props => {
  const {
    content,
    icon,
    backgroundColor
  } = props;
  const classes = useStyles();
  return _react.default.createElement("div", {
    className: classes.root,
    style: {
      backgroundColor: backgroundColor
    }
  }, _react.default.createElement("div", {
    className: classes.container
  }, _react.default.createElement("img", {
    className: classes.icon,
    src: icon
  })));
};

exports.default = _default;