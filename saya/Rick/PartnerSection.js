"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _ImageContainer = _interopRequireDefault(require("../ImageContainer"));

var _IconBoxSection = _interopRequireDefault(require("../bob/IconBoxSection"));

var _IconBox = _interopRequireDefault(require("../bob/IconBox"));

var _GreenButton = _interopRequireDefault(require("../bob/GreenButton"));

var _reveal = require("../reveal");

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
      color: borderColor
    }, r.map(cell => _react.default.createElement(_IconBox.default, {
      cell: cell,
      size: "small",
      width: 80,
      color: borderColor
    })))));
  }

}

var _default = (0, _styles.withStyles)(styles)(PartnerSection);

exports.default = _default;