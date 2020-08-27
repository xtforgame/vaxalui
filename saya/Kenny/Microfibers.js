"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _ImageContainer = _interopRequireDefault(require("../ImageContainer"));

var _SwipperT = _interopRequireDefault(require("../SwipperT1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  root: {
    height: 580,
    fontFamily: 'FilsonSoftRegular'
  },
  section: {
    width: 900,
    display: 'flex',
    flexWrap: 'wrap',
    paddingTop: 80,
    paddingLeft: 40
  },
  title: {
    width: 630,
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000000'
  }
};

class Microfibers extends _react.default.PureComponent {
  render() {
    const {
      classes,
      backgroundImages,
      scrollArrowLeftImage,
      scrollArrowRightImage
    } = this.props;

    const renderContent = slideInfo => _react.default.createElement(_ImageContainer.default, {
      key: slideInfo.index,
      image: backgroundImages && backgroundImages.length ? backgroundImages[Math.abs(slideInfo.index % backgroundImages.length)] : null,
      className: classes.root
    });

    return _react.default.createElement(_SwipperT.default, {
      height: 580,
      scrollArrowLeftImage: scrollArrowLeftImage,
      scrollArrowRightImage: scrollArrowRightImage,
      slideRenderer: renderContent
    }, _react.default.createElement(_ImageContainer.default, {
      className: classes.root
    }, _react.default.createElement("div", {
      className: classes.section
    }, _react.default.createElement("div", {
      className: classes.title
    }, "We Turn Potential Microplastics into Microfibers."))));
  }

}

var _default = (0, _styles.withStyles)(styles)(Microfibers);

exports.default = _default;