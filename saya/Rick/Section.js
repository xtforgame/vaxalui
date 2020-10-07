"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _ImageContainer = _interopRequireDefault(require("../ImageContainer"));

var _GreenButton = _interopRequireDefault(require("../bob/GreenButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useStyles = (0, _styles.makeStyles)(theme => ({
  root: {
    color: '#ffffff'
  },
  section: {
    width: 320,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    paddingTop: 60
  },
  section2: {
    width: 320,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  firstTitle: {
    width: 'fit-content',
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold',
    lineHeight: 1.33
  },
  firstTitleBack: {
    fontFamily: 'FilsonSoft-Light',
    fontWeight: 300
  },
  firstLine: {
    height: 1,
    width: '100%',
    backgroundColor: '#ffffff',
    marginTop: 1
  },
  title: {
    fontSize: 50,
    fontWeight: 300,
    fontFamily: 'FilsonSoft-Light',
    paddingTop: 32,
    whiteSpace: 'pre-line',
    lineHeight: 1
  },
  subTitle: {
    fontSize: 20,
    fontFamily: 'FilsonSoft-Bold',
    paddingTop: 24
  },
  button: {
    marginTop: 32
  }
}));

var _default = props => {
  const {
    backgroundImage,
    onClick,
    hideButton,
    firstTitle,
    firstTitleBack,
    title,
    subTitle,
    height,
    children,
    color,
    lineColor,
    buttonPosition = 'flex-start'
  } = props;
  const classes = useStyles();
  return _react.default.createElement(_ImageContainer.default, {
    className: classes.root,
    image: backgroundImage,
    style: {
      height,
      color
    }
  }, _react.default.createElement("div", {
    className: classes.section
  }, _react.default.createElement("div", {
    className: classes.firstTitle
  }, firstTitle, _react.default.createElement("span", {
    className: classes.firstTitleBack
  }, firstTitleBack), _react.default.createElement("div", {
    className: classes.firstLine,
    style: {
      backgroundColor: lineColor
    }
  })), _react.default.createElement("div", {
    className: classes.title
  }, title), _react.default.createElement("div", {
    className: classes.subTitle
  }, subTitle), ' '), _react.default.createElement("div", {
    style: {
      width: '100%'
    }
  }, children), _react.default.createElement("div", {
    className: classes.section2
  }, !hideButton && _react.default.createElement("div", {
    className: classes.button,
    style: {
      alignSelf: buttonPosition
    }
  }, _react.default.createElement(_GreenButton.default, {
    text: "Learn More",
    onClick: onClick
  }))));
};

exports.default = _default;