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

var _HelperText = _interopRequireDefault(require("../HelperText"));

var _subscriptionContext = _interopRequireDefault(require("../contexts/subscriptionContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const useStyles = (0, _styles.makeStyles)(theme => ({
  flexContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
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
    fontSize: 12
  },
  button: {
    marginLeft: 32
  },
  checkbox: {
    display: 'flex',
    paddingTop: 6
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
  const classes = useStyles();
  const {
    email = '',
    setEmail = () => {},
    checked,
    setChecked,
    errorMessage,
    successMessage,
    onSubmit,
    emailErrorMessage,
    checkErrorMessage
  } = (0, _react.useContext)(_subscriptionContext.default);
  return _react.default.createElement("div", {
    className: classes.flexContainer
  }, _react.default.createElement("div", {
    style: {
      height: 50
    }
  }), _react.default.createElement("div", {
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
    onChange: e => setEmail(e.target.value),
    placeholder: "Your email address",
    error: !!emailErrorMessage
  }), _react.default.createElement("div", {
    className: classes.button
  }, _react.default.createElement(_GreenButton.default, {
    text: "SUBMIT",
    onClick: onSubmit
  })))), emailErrorMessage && _react.default.createElement(_HelperText.default, {
    style: {},
    error: true
  }, emailErrorMessage), !emailErrorMessage && _react.default.createElement("div", {
    style: {
      height: 10
    }
  }), _react.default.createElement("div", {
    className: classes.checkbox
  }, _react.default.createElement(_Checkbox.default, {
    checked: checked,
    setChecked: setChecked,
    error: !!checkErrorMessage
  }), _react.default.createElement("div", {
    className: classes.labelContent
  }, _react.default.createElement("label", null, labelContent))), checkErrorMessage && _react.default.createElement(_HelperText.default, {
    style: {},
    error: true
  }, checkErrorMessage), successMessage && _react.default.createElement(_HelperText.default, {
    style: {}
  }, successMessage), errorMessage && _react.default.createElement(_HelperText.default, {
    style: {},
    error: true
  }, errorMessage));
};

exports.default = _default;