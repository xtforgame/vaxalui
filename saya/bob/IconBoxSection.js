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
    borderTopStyle: 'solid',
    borderTopWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
    marginBottom: -1
  }
}));

var _default = props => {
  const {
    children,
    color = '#e8e8e8'
  } = props;
  const classes = useStyles();
  return _react.default.createElement("div", {
    className: classes.root,
    style: {
      borderTopColor: color,
      borderBottomColor: color
    }
  }, children);
};

exports.default = _default;