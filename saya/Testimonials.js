"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uuid = require("uuid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Testimonials = ({
  testimonials
}) => _react.default.createElement("div", null, testimonials.map(testimonial => _react.default.createElement("article", {
  key: (0, _uuid.v4)(),
  className: "message"
}, _react.default.createElement("div", {
  className: "message-body"
}, testimonial.quote, _react.default.createElement("br", null), _react.default.createElement("cite", null, ' ', "\u2013", testimonial.author)))));

Testimonials.propTypes = {
  testimonials: _propTypes.default.arrayOf(_propTypes.default.shape({
    quote: _propTypes.default.string,
    author: _propTypes.default.string
  }))
};
var _default = Testimonials;
exports.default = _default;