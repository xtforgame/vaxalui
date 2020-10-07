"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/core/styles");

var _GreenButton = _interopRequireDefault(require("../bob/GreenButton"));

var _TextField = _interopRequireDefault(require("./TextField"));

var _Checkbox = _interopRequireDefault(require("../Checkbox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const useStyles = (0, _styles.makeStyles)(theme => ({
  flexContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: 320,
    width: 440
  },
  title: {
    width: 'fit-content',
    borderBottom: '3px solid #000000',
    textShadow: `2px 2px white,
      2px -2px white,
      -2px 2px white,
      -2px -2px white`,
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold',
    lineHeight: 0.6
  },
  subtitle: {
    width: 440,
    fontSize: 14,
    fontFamily: 'FilsonSoftRegular',
    paddingTop: 22
  },
  email: {
    position: 'relative',
    display: 'flex',
    marginTop: 22,
    height: 44
  },
  emailInner: {
    position: 'absolute',
    display: 'flex'
  },
  emailInput: {
    width: 440,
    fontSize: 12,
    color: '#000000',
    borderColor: '#000000'
  },
  button: {
    marginLeft: 32
  },
  checkbox: {
    display: 'flex',
    paddingTop: 16
  },
  box: {
    width: 30,
    height: 30
  },
  labelContent: {
    width: 380,
    fontSize: 10,
    fontFamily: 'FilsonSoftRegular',
    paddingLeft: 10
  }
}));

var _default = props => {
  const {
    title = 'Get Useful Updates',
    subtitle = 'Stay connected for only meaningful and useful updates on sustainable fibers and recycling technology.',
    labelContent = 'SAYA Brand may use my email address to provide relevant marketing updates. I can unsubscribe these communications at anytime.',
    emailTextInputWidth = 420
  } = props;
  const [email, setEmail] = (0, _react.useState)('');

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const classes = useStyles();
  return _react.default.createElement("div", {
    className: classes.flexContainer
  }, _react.default.createElement("div", {
    className: classes.title
  }, title), _react.default.createElement("div", {
    className: classes.subtitle
  }, subtitle), _react.default.createElement("div", {
    className: classes.email
  }, _react.default.createElement("div", {
    className: classes.emailInner
  }, _react.default.createElement(_TextField.default, {
    className: classes.emailInput,
    value: email,
    onChange: handleEmailChange,
    placeholder: "Your email address",
    style: {
      width: emailTextInputWidth
    }
  }), _react.default.createElement("div", {
    className: classes.button
  }, _react.default.createElement(_GreenButton.default, {
    text: "SUBMIT"
  })))), _react.default.createElement("div", {
    className: classes.checkbox
  }, _react.default.createElement(_Checkbox.default, null), _react.default.createElement("div", {
    className: classes.labelContent
  }, _react.default.createElement("label", null, labelContent))));
};

exports.default = _default;