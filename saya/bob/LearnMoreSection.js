"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _ImageContainer = _interopRequireDefault(require("../ImageContainer"));

var _GreenButton = _interopRequireDefault(require("../bob/GreenButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  root: {
    height: 590
  },
  section: {
    width: 940,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
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
    border: '1px solid #FFFFFF',
    marginTop: 2
  },
  title: {
    width: 540,
    fontSize: 32,
    fontWeight: 300,
    fontStretch: 'normal',
    fontFamily: 'FilsonSoftRegular',
    whiteSpace: 'pre-line',
    marginRight: 120
  },
  subTitle: {
    fontSize: 20,
    fontFamily: 'FilsonSoft-Bold',
    paddingTop: 24
  },
  button: {
    marginTop: 48
  },
  space: {
    height: 12
  }
};

class LearnMoreSection extends _react.default.PureComponent {
  render() {
    const {
      classes,
      background,
      title,
      color,
      height = 256,
      label = 'Learn More',
      onClick
    } = this.props;
    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ImageContainer.default, {
      className: classes.root,
      image: background,
      style: {
        height,
        color,
        backgroundColor: background
      }
    }, _react.default.createElement("div", {
      className: classes.section
    }, _react.default.createElement("div", {
      className: classes.title
    }, title), _react.default.createElement(_GreenButton.default, {
      text: label,
      onClick: onClick
    }))), _react.default.createElement("div", {
      className: classes.space
    }));
  }

}

var _default = (0, _styles.withStyles)(styles)(LearnMoreSection);

exports.default = _default;