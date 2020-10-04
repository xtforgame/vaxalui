"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _ImageContainer = _interopRequireDefault(require("../ImageContainer"));

var _BreakAllContentText = _interopRequireDefault(require("../BreakAllContentText"));

var _Block = _interopRequireDefault(require("../Article/Block"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useStyles = (0, _styles.makeStyles)(theme => ({
  root: {
    width: '100%',
    color: '#000000'
  },
  container: {
    width: 310
  },
  title: {
    textAlign: 'left',
    fontSize: 32,
    marginBottom: 40
  }
}));

var _default = props => {
  const {
    data
  } = props;
  const classes = useStyles();
  return _react.default.createElement(_ImageContainer.default, {
    className: classes.root
  }, _react.default.createElement("div", {
    className: classes.container
  }, _react.default.createElement("div", {
    className: classes.title
  }, _react.default.createElement(_BreakAllContentText.default, {
    style: {
      fontFamily: 'FilsonSoft-Bold',
      lineHeight: 1
    }
  }, data.title)), (data.content || []).map(c => _react.default.createElement(_Block.default, {
    data: c
  }))));
};

exports.default = _default;