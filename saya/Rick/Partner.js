"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _ImageContainer = _interopRequireDefault(require("../ImageContainer"));

var _PartnerForm = _interopRequireDefault(require("./PartnerForm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  root: {
    height: 643,
    paddingTop: 47
  },
  bottle: {
    width: 319,
    height: 596,
    color: '#000000',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'center',
    paddingTop: 160
  },
  title: {
    fontSize: 30,
    fontFamily: 'FilsonSoft-Bold',
    textAlign: 'center'
  }
};

class Partner extends _react.default.PureComponent {
  render() {
    const {
      classes,
      backgroundImage,
      bottleImage
    } = this.props;
    return _react.default.createElement(_ImageContainer.default, {
      className: classes.root,
      image: backgroundImage
    }, _react.default.createElement(_ImageContainer.default, {
      className: classes.bottle,
      image: bottleImage
    }, _react.default.createElement("div", {
      style: {
        width: 240
      }
    }, _react.default.createElement("pre", {
      className: classes.title,
      style: {
        marginTop: 0,
        marginBottom: 32
      }
    }, 'Get Useful\nUpdates'), _react.default.createElement(_PartnerForm.default, null))));
  }

}

var _default = (0, _styles.withStyles)(styles)(Partner);

exports.default = _default;