"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuContext = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MenuContext = _react.default.createContext({
  currentPath: '',
  enterPath: path => {
    console.warn('default enterPath', path);
  },
  leavePath: path => {
    console.warn('default leavePath', path);
  }
});

exports.MenuContext = MenuContext;