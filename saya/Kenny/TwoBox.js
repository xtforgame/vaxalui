"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ImageBox = _interopRequireDefault(require("./ImageBox"));

var _ClassicFibers = _interopRequireDefault(require("./ClassicFibers"));

var _bg = _interopRequireDefault(require("../../../../stories/saya/img/bg3.jpg"));

var _bg2 = _interopRequireDefault(require("../../../../stories/saya/img/bg4.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class TwoBox extends _react.default.PureComponent {
  render() {
    return _react.default.createElement(_ClassicFibers.default, {
      height: "1000px",
      backgroundColor: "#444343",
      fontColor: "#ffffff",
      marginTop: "0",
      borderStyle: "1px solid #ffffff"
    }, _react.default.createElement(_ImageBox.default, {
      title: "FDY",
      subtitle: "Fully drawn yarn",
      backgroundImage: _bg.default,
      paddingTop: "105px",
      fontColor: "#000000"
    }), _react.default.createElement(_ImageBox.default, {
      title: "DTY",
      subtitle: "Drawn-texturning yarn",
      backgroundImage: _bg2.default,
      paddingTop: "105px",
      fontColor: "#000000"
    }));
  }

}

var _default = TwoBox;
exports.default = _default;