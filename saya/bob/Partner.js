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
    paddingTop: 110,
    paddingBottom: 110
  },
  bottle: {
    width: 880,
    height: 320,
    color: '#000000',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    paddingTop: 52,
    paddingLeft: 110
  },
  title: {
    width: 'fit-content',
    borderBottom: '3px solid #000000',
    paddingBottom: 2,
    textShadow: `2px 2px white,
      2px -2px white,
      -2px 2px white,
      -2px -2px white`,
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold',
    lineHeight: 0.6
  },
  line: {
    width: 468,
    height: 1,
    marginTop: 2.5,
    border: ' solid 1px #000000'
  },
  button: {
    marginLeft: 15
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
    }, _react.default.createElement("div", {
      className: classes.bottle,
      style: {
        backgroundImage: `url(${bottleImage})`
      }
    }, _react.default.createElement("div", {
      className: classes.title
    }, "Become our partner"), _react.default.createElement(_PartnerForm.default, null)));
  }

}

var _default = (0, _styles.withStyles)(styles)(Partner);

exports.default = _default;