"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  root: {
    width: 710,
    height: 370,
    display: 'flex',
    textAlign: 'center',
    color: '#ffffff'
  },
  leftCircle: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 80,
    paddingTop: 140
  },
  rightCircle: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 115,
    paddingTop: 140
  },
  title: {
    fontSize: 40,
    fontFamily: 'FilsonSoft-Bold',
    fontWeight: 'bold'
  },
  titleBack: {
    fontWeight: 300
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'FilsonSoftRegular',
    paddingTop: 3
  },
  link: {
    fontSize: 14,
    fontFamily: 'FilsonSoftRegular',
    color: ' #c0c823',
    textDecoration: 'underline',
    paddingTop: 50
  }
};

class ImageCircle extends _react.default.PureComponent {
  render() {
    const {
      classes,
      linkText1,
      linkText2,
      backgroundImage,
      oc1,
      oc2
    } = this.props;
    return _react.default.createElement("div", {
      className: classes.root,
      style: {
        backgroundImage: `url(${backgroundImage})`
      }
    }, _react.default.createElement("div", {
      className: classes.leftCircle
    }, _react.default.createElement("div", {
      className: classes.title
    }, "SAYA", _react.default.createElement("span", {
      className: classes.titleBack
    }, "NOW")), _react.default.createElement("div", {
      className: classes.subtitle
    }, "Fabric Made by", _react.default.createElement("br", null), "Used and Recycled PET Bottles"), _react.default.createElement("a", {
      className: classes.link,
      onClick: oc1,
      href: "#"
    }, linkText1)), _react.default.createElement("div", {
      className: classes.rightCircle
    }, _react.default.createElement("div", {
      className: classes.title
    }, "SAYA", _react.default.createElement("span", {
      className: classes.titleBack
    }, "NEXT")), _react.default.createElement("div", {
      className: classes.subtitle
    }, "Fabric Made of", _react.default.createElement("br", null), "Garments, Fabrics, and Other Wastes"), _react.default.createElement("a", {
      className: classes.link,
      onClick: oc2,
      href: "#"
    }, linkText2)));
  }

}

var _default = (0, _styles.withStyles)(styles)(ImageCircle);

exports.default = _default;