"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _styles = require("@material-ui/core/styles");

var _ImageContainer = _interopRequireDefault(require("../ImageContainer"));

var _BreakAllContentText = _interopRequireDefault(require("../BreakAllContentText"));

var _Block = _interopRequireDefault(require("./Block"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useStyles = (0, _styles.makeStyles)(theme => ({
  root: {
    width: '100%',
    color: '#000000'
  },
  container: {
    width: 780
  },
  title: {
    textAlign: 'left',
    fontSize: 40,
    marginBottom: 72
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
  }, data.date && _react.default.createElement(_BreakAllContentText.default, {
    style: {
      fontFamily: 'FilsonSoftRegular',
      fontSize: 14,
      lineHeight: 1.5,
      marginTop: 10,
      marginBottom: 20
    }
  }, (0, _moment.default)(data.date).format('LL')), _react.default.createElement("div", {
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