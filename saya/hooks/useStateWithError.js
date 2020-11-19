"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _default = (v, e, config) => {
  const [value, setValue] = (0, _react.useState)(v);
  const [error, setError] = (0, _react.useState)(e);

  const sv = (value, clearError = true) => {
    setValue(value);

    if (clearError) {
      setError();
    }
  };

  return [value, sv, error, setError];
};

exports.default = _default;