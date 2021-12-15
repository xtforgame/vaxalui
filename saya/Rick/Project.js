"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _styles = require("@material-ui/core/styles");

var _GreenButton = _interopRequireDefault(require("../bob/GreenButton"));

var _reveal = require("../reveal");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useStyles = (0, _styles.makeStyles)(theme => ({
  root: {
    width: 320,
    height: 200,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid #000000',
    backgroundColor: '#FFFFFF',
    marginBottom: 12,
    justifyContent: 'space-evenly'
  },
  disabledBackground: {
    border: '0px solid #000000',
    backgroundColor: '#c8c6c6'
  },
  title: {
    width: 280,
    fontSize: 20,
    fontFamily: 'FilsonSoft-Bold',
    textAlign: 'center',
    paddingTop: 26
  },
  type: {
    fontSize: 13,
    paddingTop: 8,
    fontFamily: 'FilsonSoftRegular'
  },
  flex1: {
    flex: 1
  },
  button: {
    marginBottom: 20
  }
}));

var _default = props => {
  const {
    title = 'Backbone of our sustainable textile business',
    buttonText = 'Learn More',
    disabled,
    type,
    typeBack,
    onClick,
    style
  } = props;
  const classes = useStyles();
  return _react.default.createElement("div", {
    className: (0, _clsx.default)(classes.root, {
      [classes.disabledBackground]: disabled
    }),
    style: style
  }, _react.default.createElement("div", {
    className: classes.title
  }, title), _react.default.createElement("div", {
    className: classes.type
  }, type, _react.default.createElement("span", {
    style: {
      fontFamily: 'FilsonSoft-Light'
    }
  }, typeBack)), _react.default.createElement("div", {
    className: classes.flex1
  }), _react.default.createElement("div", {
    className: classes.button
  }, _react.default.createElement(_GreenButton.default, {
    disabled: disabled,
    text: buttonText,
    onClick: onClick
  })));
};

exports.default = _default;