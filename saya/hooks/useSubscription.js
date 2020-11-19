"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _useStateWithError = _interopRequireDefault(require("./useStateWithError"));

var _validators = require("../../utils/validators");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = handleSubmit => {
  const [email, setEmailRaw, emailError, setEmailError] = (0, _useStateWithError.default)('');
  const [checked, setCheckedRaw, checkedError, setCheckedError] = (0, _useStateWithError.default)(false);
  const [successMessage, setSuccessMessage] = (0, _react.useState)('');
  const [errorMessage, setErrorMessage] = (0, _react.useState)('');

  const setEmail = email => {
    setEmailRaw(email);
    setSuccessMessage('');
    setErrorMessage('');
  };

  const setChecked = checked => {
    setCheckedRaw(checked);
    setSuccessMessage('');
    setErrorMessage('');
  };

  console.log('successMessage, errorMessage :', successMessage, errorMessage);
  return {
    email,
    setEmail,
    checked,
    setChecked,
    successMessage,
    errorMessage,
    emailErrorMessage: emailError || '',
    checkErrorMessage: checkedError || '',
    onSubmit: () => {
      let errorOccurred = false;

      if (!(0, _validators.isValidEmail)(email)) {
        errorOccurred = true;
        setEmailError('Invalid e-mail address.');
      }

      if (!checked) {
        errorOccurred = true;
        setCheckedError('This field is required.');
      }

      if (errorOccurred) {
        return;
      }

      handleSubmit(email).then(() => {
        setEmail('');
        setSuccessMessage('Thanks for subscribing!');
      }).catch(() => {
        setErrorMessage('Service is currently unavailable, please try again later.');
      });
    }
  };
};

exports.default = _default;