"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _default = (0, _react.createContext)({
  email: '',
  setEmail: () => {},
  checked: false,
  setChecked: () => {},
  onSubmit: () => {}
});

exports.default = _default;