"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _ImageContainer = _interopRequireDefault(require("../ImageContainer"));

var _IconBoxSection = _interopRequireDefault(require("./IconBoxSection"));

var _IconBox = _interopRequireDefault(require("./IconBox"));

var _GreenButton = _interopRequireDefault(require("./GreenButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  root: {
    marginTop: 40,
    marginBottom: 8
  }
};

class PartnerSection extends _react.default.PureComponent {
  render() {
    const {
      classes,
      borderColor,
      partner = []
    } = this.props;
    return _react.default.createElement(_ImageContainer.default, {
      className: classes.root
    }, partner.map(r => _react.default.createElement(_IconBoxSection.default, {
      borderColor: borderColor
    }, r.map(cell => _react.default.createElement(_IconBox.default, {
      imgUrl: cell,
      width: "80px",
      borderColor: borderColor
    })))));
  }

}

var _default = (0, _styles.withStyles)(styles)(PartnerSection);

exports.default = _default;