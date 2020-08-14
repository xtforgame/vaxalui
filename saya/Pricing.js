"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Pricing = ({
  data
}) => _react.default.createElement("div", {
  className: "columns"
}, data.map(price => _react.default.createElement("div", {
  key: price.plan,
  className: "column"
}, _react.default.createElement("section", {
  className: "section"
}, _react.default.createElement("h4", {
  className: "has-text-centered has-text-weight-semibold"
}, price.plan), _react.default.createElement("h2", {
  className: "is-size-1 has-text-weight-bold has-text-primary has-text-centered"
}, "$", price.price), _react.default.createElement("p", {
  className: "has-text-weight-semibold"
}, price.description), _react.default.createElement("ul", null, price.items.map(item => _react.default.createElement("li", {
  key: item,
  className: "is-size-5"
}, item)))))));

Pricing.propTypes = {
  data: _propTypes.default.arrayOf(_propTypes.default.shape({
    plan: _propTypes.default.string,
    price: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
    description: _propTypes.default.string,
    items: _propTypes.default.array
  }))
};
var _default = Pricing;
exports.default = _default;