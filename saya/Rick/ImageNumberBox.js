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
    color: '#ffffff',
    paddingTop: 40
  },
  number: {
    fontSize: 121,
    fontFamily: 'FilsonSoftRegular',
    lineHeight: 0.83,
    textAlign: 'center'
  },
  topTile: {
    fontSize: 18,
    fontFamily: 'FilsonSoftRegular',
    paddingTop: 16,
    textAlign: 'left'
  },
  line: {
    width: 189,
    height: 1,
    border: '1px solid #ffffff',
    marginTop: 8
  },
  bottomTitle: {
    fontSize: 18,
    fontFamily: 'FilsonSoftRegular',
    paddingTop: 9,
    textAlign: 'left'
  }
}));

var _default = props => {
  const {
    number,
    topTile,
    bottomTitle,
    backgroundImage
  } = props;
  const classes = useStyles();
  return _react.default.createElement(_ImageContainer.default, {
    image: backgroundImage,
    className: classes.root,
    style: {
      height: 260,
      width: 260
    }
  }, _react.default.createElement("div", {
    style: {
      position: 'absolute'
    }
  }, _react.default.createElement("div", {
    className: classes.number
  }, " ", number, " "), _react.default.createElement("div", {
    className: classes.topTile
  }, " ", topTile, " "), _react.default.createElement("div", {
    className: classes.line
  }), _react.default.createElement("div", {
    className: classes.bottomTitle
  }, " ", bottomTitle, " ")));
};

exports.default = _default;