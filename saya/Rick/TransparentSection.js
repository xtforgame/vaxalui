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
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    alignItems: 'left',
    color: '#ffffff',
    width: '100%',
    backgroundSize: 'cover'
  },
  title: {
    textAlign: 'left',
    fontSize: 33
  },
  line: {
    width: 305,
    backgroundColor: '#ffffff',
    height: 1,
    marginTop: 23
  },
  subtitle: {
    textAlign: 'left',
    fontSize: 18,
    paddingTop: 4
  },
  content: {
    textAlign: 'left',
    fontSize: 14,
    paddingTop: 10,
    lineHeight: 1.5
  }
}));

var _default = props => {
  const {
    title,
    titlePaddingTop,
    marginTop,
    subtitle,
    content,
    height,
    backgroundImage,
    children
  } = props;
  const classes = useStyles();
  return _react.default.createElement("div", {
    className: classes.root,
    style: {
      height: height,
      backgroundImage: `url(${backgroundImage})`,
      paddingTop: titlePaddingTop,
      marginTop: marginTop
    }
  }, _react.default.createElement("div", {
    style: {
      alignSelf: 'center'
    }
  }, _react.default.createElement("div", {
    className: classes.title
  }, _react.default.createElement("pre", {
    style: {
      fontFamily: 'FilsonSoft-Bold',
      marginBottom: 0
    }
  }, title)), _react.default.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, _react.default.createElement("div", {
    className: classes.line
  })), _react.default.createElement("div", {
    className: classes.subtitle
  }, _react.default.createElement("pre", {
    style: {
      fontFamily: 'FilsonSoft-Bold',
      marginBottom: 0
    }
  }, subtitle)), _react.default.createElement("div", {
    className: classes.content
  }, _react.default.createElement("pre", {
    style: {
      fontFamily: 'FilsonSoftRegular',
      marginBottom: 0
    }
  }, content))), _react.default.createElement("div", null, children));
};

exports.default = _default;