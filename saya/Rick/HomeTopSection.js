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
    display: 'flex',
    height: 658,
    color: '#000000'
  },
  title: {
    textAlign: 'left',
    paddingTop: 140
  },
  titleWhite: {
    fontSize: 45,
    color: '#ffffff',
    fontFamily: 'FilsonSoft-Bold'
  },
  line: {
    width: '100%',
    height: 1,
    marginTop: 19,
    backgroundColor: '#ffffff'
  },
  subtitle: {
    color: '#ffffff',
    fontSize: 20,
    fontFamily: 'FilsonSoft-Light',
    textAlign: 'left',
    lineHeight: 1.6,
    paddingTop: 19,
    paddingBottom: 33
  },
  roundArrow: {
    width: 50,
    height: 50
  }
}));

var _default = props => {
  const {
    backgroundImage,
    roundArrowImage,
    onClick
  } = props;
  const classes = useStyles();
  return _react.default.createElement(_ImageContainer.default, {
    image: backgroundImage,
    className: classes.root
  }, _react.default.createElement("div", {
    className: classes.title
  }, _react.default.createElement("pre", {
    className: classes.titleWhite,
    style: {
      margin: 0
    }
  }, 'Innovating\nRenewal\nTechnologies'), _react.default.createElement("div", {
    className: classes.line
  }), _react.default.createElement("pre", {
    className: classes.subtitle,
    style: {
      margin: 0
    }
  }, 'Recycling Solutions from Bottles\nto Garments and Beyond')));
};

exports.default = _default;