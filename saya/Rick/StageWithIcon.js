"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useStyles = (0, _styles.makeStyles)(theme => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    height: 190
  },
  container: {
    width: '90%',
    position: "relative",
    display: 'flex',
    alignItems: 'center',
    overflow: 'scroll'
  },
  circle: {
    width: 106,
    height: 106,
    border: 'solid 1px #ffffff',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'FilsonSoft-Bold'
  },
  icon: {
    marginLeft: 100,
    height: '100%',
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
  }, _react.default.createElement("pre", {
    className: classes.circle
  }, content), _react.default.createElement("img", {
    className: classes.icon,
    src: icon
  })));
};

exports.default = _default;