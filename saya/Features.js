"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const FeatureGrid = ({
  gridItems
}) => _react.default.createElement("div", {
  className: "columns is-multiline"
}, gridItems.map(item => _react.default.createElement("div", {
  key: item.image,
  className: "column is-6"
}, _react.default.createElement("section", {
  className: "section"
}, _react.default.createElement("p", {
  className: "has-text-centered"
}, _react.default.createElement("img", {
  alt: "",
  src: item.image
})), _react.default.createElement("p", null, item.text)))));

FeatureGrid.propTypes = {
  gridItems: _propTypes.default.arrayOf(_propTypes.default.shape({
    image: _propTypes.default.string,
    text: _propTypes.default.string
  }))
};
var _default = FeatureGrid;
exports.default = _default;