"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _ImageContainer = _interopRequireDefault(require("../ImageContainer"));

var _reveal = require("../reveal");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useStyles = (0, _styles.makeStyles)(theme => ({
  root: {
    color: '#ffffff',
    justifyContent: 'center'
  },
  container: {
    position: 'relative',
    height: 115
  },
  number: {
    fontSize: 70,
    fontFamily: 'FilsonSoftRegular',
    lineHeight: 0.95,
    textAlign: 'left'
  },
  topTile: {
    fontSize: 13,
    fontFamily: 'FilsonSoftRegular',
    textAlign: 'left'
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#ffffff',
    marginTop: 1
  },
  bottomTitle: {
    fontSize: 13,
    fontFamily: 'FilsonSoftRegular',
    paddingTop: 1,
    lineHeight: 1.54,
    textAlign: 'left'
  }
}));

var _default = props => {
  const {
    number,
    topTile,
    bottomTitle,
    backgroundImage,
    backgroundColor,
    color,
    lineColor,
    hidePercent
  } = props;
  const classes = useStyles();
  return _react.default.createElement(_ImageContainer.default, {
    image: backgroundImage,
    className: classes.root,
    style: {
      height: 194,
      width: '50%',
      backgroundColor,
      color
    }
  }, _react.default.createElement("div", {
    className: classes.container
  }, _react.default.createElement("div", {
    className: classes.number
  }, number, !hidePercent && _react.default.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "%")), _react.default.createElement("div", {
    className: classes.topTile
  }, " ", topTile, " "), _react.default.createElement("div", {
    className: classes.line,
    style: {
      backgroundColor: lineColor
    }
  }), _react.default.createElement("div", {
    className: classes.bottomTitle
  }, " ", bottomTitle, " ")));
};

exports.default = _default;