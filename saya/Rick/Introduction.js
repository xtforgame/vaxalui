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
    position: 'relative',
    color: '#ffffff'
  },
  title: {
    textAlign: 'left',
    fontSize: 33,
    paddingTop: 10
  },
  secondLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#ffffff',
    marginTop: 2
  },
  subtitle: {
    textAlign: 'left',
    fontSize: 18,
    paddingTop: 10
  },
  content: {
    textAlign: 'left',
    fontSize: 14,
    paddingTop: 10
  }
}));

var _default = props => {
  const {
    title,
    subtitle,
    content,
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
    className: classes.title
  }, _react.default.createElement("pre", {
    style: {
      fontFamily: 'FilsonSoft-Bold'
    }
  }, title)), _react.default.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, _react.default.createElement("div", {
    className: classes.secondLine
  })), _react.default.createElement("div", {
    className: classes.subtitle
  }, _react.default.createElement("pre", {
    style: {
      fontFamily: 'FilsonSoft-Bold'
    }
  }, subtitle)), _react.default.createElement("div", {
    style: {
      flex: 0,
      height: 40,
      width: '100%'
    }
  }), _react.default.createElement("div", {
    className: classes.content
  }, _react.default.createElement("pre", {
    style: {
      fontFamily: 'FilsonSoftRegular'
    }
  }, content))));
};

exports.default = _default;