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

var _GreenButton = _interopRequireDefault(require("../bob/GreenButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  root: {
    height: 350,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  root2: {
    paddingTop: 140,
    paddingBottom: 140
  },
  breadCrumbs: {
    width: 'fit-content',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold',
    lineHeight: 1.31
  },
  firstLine: {
    height: 1,
    border: '1px solid #000000'
  },
  title: {
    fontSize: 40,
    fontFamily: 'FilsonSoft-Bold'
  },
  subTitle: {
    fontSize: 20,
    fontFamily: 'FilsonSoft-Bold',
    paddingTop: 24,
    marginBottom: 80
  },
  button: {
    margin: '80px auto'
  },
  space: {
    height: 12
  }
};

class PartnerSection extends _react.default.PureComponent {
  render() {
    const {
      classes,
      fontColor = '#ffffff',
      color,
      backgroundImage,
      backgroundColor,
      onClick,
      breadCrumbs,
      title,
      subTitle,
      partner = [],
      hideTop
    } = this.props;
    return _react.default.createElement(_react.default.Fragment, null, !hideTop && _react.default.createElement(_ImageContainer.default, {
      className: classes.root,
      image: backgroundImage,
      style: {
        color: fontColor
      }
    }, _react.default.createElement("div", {
      className: classes.title
    }, title)), _react.default.createElement(_ImageContainer.default, {
      className: classes.root2,
      style: {
        backgroundColor
      }
    }, partner.map(r => _react.default.createElement(_IconBoxSection.default, {
      color: color
    }, r.map(cell => _react.default.createElement(_IconBox.default, {
      color: color,
      cell: cell,
      width: 140
    }))))), _react.default.createElement("div", {
      className: classes.space
    }));
  }

}

var _default = (0, _styles.withStyles)(styles)(PartnerSection);

exports.default = _default;