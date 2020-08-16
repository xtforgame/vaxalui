"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _CardMedia = _interopRequireDefault(require("@material-ui/core/CardMedia"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useStyles = (0, _styles.makeStyles)(theme => ({
  root: {
    width: '100%',
    height: 590,
    backgroundColor: 'yellow',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexWrap: 'wrap',
    textAlign: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    position: 'relative',
    fontFamily: 'FilsonSoft-Bold'
  },
  firstTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 1.4,
    color: '#000000',
    paddingTop: 57
  },
  firstLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#000000',
    marginTop: 2
  },
  secondTitle: {
    fontSize: 55,
    fontWeight: 'bold',
    color: '#000000',
    paddingTop: 10
  },
  secondTitleBack: {
    fontWeight: 'normal',
    color: '#000000'
  },
  secondLine: {
    width: 220,
    height: 1,
    backgroundColor: '#000000',
    marginTop: 2
  },
  thirdTitle: {
    fontSize: 20,
    color: '#000000',
    paddingTop: 10
  }
}));

var _default = props => {
  const {
    firstTitle,
    secondTitle,
    secondTitleBack,
    thirdTitle,
    backgroundImage
  } = props;
  const classes = useStyles();
  return _react.default.createElement(_CardMedia.default, {
    image: backgroundImage,
    className: classes.root,
    style: {
      width: '100%',
      height: 590
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
    className: classes.firstTitle
  }, firstTitle, _react.default.createElement("div", {
    className: classes.firstLine
  }))), _react.default.createElement("div", {
    className: classes.secondTitle
  }, _react.default.createElement("pre", {
    style: {
      fontFamily: 'FilsonSoft-Bold'
    }
  }, secondTitle), _react.default.createElement("a", {
    className: classes.secondTitleBack
  }, secondTitleBack)), _react.default.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, _react.default.createElement("div", {
    className: classes.secondLine
  })), _react.default.createElement("div", {
    className: classes.thirdTitle
  }, _react.default.createElement("pre", {
    style: {
      fontFamily: 'FilsonSoft-Bold'
    }
  }, thirdTitle))));
};

exports.default = _default;