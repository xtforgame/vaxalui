"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _gatsby = require("gatsby");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Pagination = ({
  pageContext,
  pathPrefix
}) => {
  const {
    previousPagePath,
    nextPagePath
  } = pageContext;
  return _react.default.createElement("nav", {
    className: "pagination",
    role: "navigation"
  }, _react.default.createElement("div", {
    className: "navbar navbar-menu"
  }, previousPagePath && _react.default.createElement("div", {
    className: "navbar-item"
  }, _react.default.createElement(_gatsby.Link, {
    to: previousPagePath,
    rel: "prev"
  }, "Previous")), nextPagePath && _react.default.createElement("div", {
    className: "navbar-item"
  }, _react.default.createElement(_gatsby.Link, {
    to: nextPagePath,
    rel: "next"
  }, "Next"))));
};

var _default = Pagination;
exports.default = _default;