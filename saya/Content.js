"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.HTMLContent = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const HTMLContent = ({
  content,
  className
}) => _react.default.createElement("div", {
  className: className,
  dangerouslySetInnerHTML: {
    __html: content
  }
});

exports.HTMLContent = HTMLContent;

const Content = ({
  content,
  className
}) => _react.default.createElement("div", {
  className: className
}, content);

Content.propTypes = {
  content: _propTypes.default.node,
  className: _propTypes.default.string
};
HTMLContent.propTypes = Content.propTypes;
var _default = Content;
exports.default = _default;