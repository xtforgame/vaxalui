"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ImageBox = _interopRequireDefault(require("./ImageBox"));

var _ClassicFibers = _interopRequireDefault(require("./ClassicFibers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class FourBox extends _react.default.PureComponent {
  render() {
    return _react.default.createElement(_ClassicFibers.default, {
      height: "1500px",
      backgroundColor: "#c8c6c6",
      fontColor: "#000000",
      marginTop: "35px",
      borderStyle: "1px solid #000000"
    }, _react.default.createElement(_ImageBox.default, {
      title: "CHROMUCH Solution Dyed",
      subtitle: "Color without Compromise",
      backgroundColor: "brown",
      paddingTop: "50px",
      fontColor: "#ffffff"
    }), _react.default.createElement(_ImageBox.default, {
      title: "UltraStretch",
      subtitle: "Stretch with a Good Conscious",
      backgroundColor: "red",
      paddingTop: "105px",
      fontColor: "#ffffff"
    }), _react.default.createElement(_ImageBox.default, {
      title: "TopFresh",
      subtitle: "lor sit amet, consectetuer ad",
      backgroundColor: "green",
      paddingTop: "105px",
      fontColor: "#ffffff"
    }), _react.default.createElement(_ImageBox.default, {
      title: "MicroFilament",
      subtitle: "lor sit amet, consectetuer ad",
      backgroundColor: "orange",
      paddingTop: "105px",
      fontColor: "#ffffff"
    }));
  }

}

var _default = FourBox;
exports.default = _default;