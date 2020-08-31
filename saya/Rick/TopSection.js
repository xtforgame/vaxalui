"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _CardMedia = _interopRequireDefault(require("@material-ui/core/CardMedia"));

var _ImageContainer = _interopRequireDefault(require("../ImageContainer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useStyles = (0, _styles.makeStyles)(theme => ({
  root: {
    height: 590,
    textAlign: 'center',
    fontFamily: 'FilsonSoft-Bold',
    color: '#000000',
    lineHeight: '1.18'
  },
  firstTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: '1.18',
    paddingTop: 57
  },
  firstLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#000000',
    marginTop: 2
  },
  secondTitle: {
    fontSize: 50,
    fontWeight: 'bold'
  },
  secondTitleBack: {
    fontWeight: 'normal',
    fontFamily: 'FilsonSoftLight'
  },
  secondLine: {
    width: 230,
    height: 1,
    backgroundColor: '#000000'
  },
  thirdTitle: {
    fontSize: 18,
    paddingTop: 10,
    fontFamily: 'FilsonSoftRegular'
  }
}));

var _default = props => {
  const {
    firstTitle,
    firsrtTitlePaddingTop,
    secondTitle,
    secondTitleBack,
    secondTitleFontSize,
    secondTitlePaddingTop,
    lineDisplay,
    secondLineMarginTop,
    secondLineDisplay,
    thirdTitle,
    backgroundImage,
    lineBackgroundColor,
    color,
    height,
    thirdTitleFontFamily,
    children
  } = props;
  const classes = useStyles();
  return _react.default.createElement(_ImageContainer.default, {
    image: backgroundImage,
    className: classes.root,
    style: {
      color,
      height
    }
  }, _react.default.createElement("div", {
    style: {
      position: 'absolute'
    }
  }, _react.default.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, _react.default.createElement("div", {
    className: classes.firstTitle,
    style: {
      paddingTop: firsrtTitlePaddingTop
    }
  }, firstTitle, _react.default.createElement("div", {
    className: classes.firstLine,
    style: {
      backgroundColor: lineBackgroundColor,
      display: lineDisplay
    }
  }))), _react.default.createElement("div", {
    className: classes.secondTitle
  }, _react.default.createElement("pre", {
    style: {
      fontFamily: 'FilsonSoft-Bold',
      fontSize: secondTitleFontSize,
      marginBottom: 0,
      marginTop: 0,
      paddingTop: secondTitlePaddingTop
    }
  }, secondTitle, _react.default.createElement("a", {
    className: classes.secondTitleBack
  }, secondTitleBack))), _react.default.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: secondLineMarginTop
    }
  }, _react.default.createElement("div", {
    className: classes.secondLine,
    style: {
      backgroundColor: lineBackgroundColor,
      display: secondLineDisplay
    }
  })), _react.default.createElement("div", {
    className: classes.thirdTitle
  }, _react.default.createElement("pre", {
    style: {
      fontFamily: thirdTitleFontFamily,
      marginBottom: 0,
      marginTop: 0
    }
  }, thirdTitle)), _react.default.createElement("div", null, children)));
};

exports.default = _default;