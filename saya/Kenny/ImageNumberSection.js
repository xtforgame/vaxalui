"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/styles");

var _ImageNumber = _interopRequireDefault(require("./ImageNumber"));

var _bg = _interopRequireDefault(require("../../../../stories/saya/img/bg32.jpg"));

var _bg2 = _interopRequireDefault(require("../../../../stories/saya/img/bg33.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  root: {
    width: '100%',
    height: 565,
    display: 'flex',
    justifyContent: 'center'
  },
  section: {
    width: 860,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
};

class ImageNumberSection extends _react.default.PureComponent {
  render() {
    const {
      classes
    } = this.props;
    return _react.default.createElement("div", {
      className: classes.root
    }, _react.default.createElement("div", {
      className: classes.section
    }, _react.default.createElement(_ImageNumber.default, {
      backgroundImage: _bg.default,
      number: "13",
      topTile: "PET recycling facilities ",
      bottomTitle: "worldwide"
    }), _react.default.createElement(_ImageNumber.default, {
      backgroundImage: _bg2.default,
      number: "75",
      topTile: "billion bottles ",
      bottomTitle: "every year"
    })));
  }

}

var _default = (0, _styles.withStyles)(styles)(ImageNumberSection);

exports.default = _default;