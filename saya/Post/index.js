"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _ImageContainer = _interopRequireDefault(require("../ImageContainer"));

var _BreakAllContentText = _interopRequireDefault(require("../BreakAllContentText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useStyles = (0, _styles.makeStyles)(theme => ({
  root: {
    width: '100%',
    color: '#000000'
  },
  container: {
    width: 780
  },
  title: {
    textAlign: 'left',
    fontSize: 40,
    marginTop: 10,
    marginBottom: 60
  },
  paragraph: {
    textAlign: 'left',
    fontSize: 14,
    marginTop: 60,
    marginBottom: 60
  },
  image: {
    marginTop: 60,
    marginBottom: 60
  }
}));

var _default = props => {
  const {
    image,
    backgroundImage
  } = props;
  const classes = useStyles();
  const title = 'What is post-consumer\nrecycled polyester';
  const p1 = 'Recycled polyester (rPET) is obtained by melting down existing plastic and re-spinning it into new polyester fiber. Often rPET is made from plastic bottles but it can also be derived from other post-industrial and post-consumer input materials including textiles or garments. If recycled content is labeled post-consumer some of the content has been derived from used items or garments as opposed to post-industrial recycled content which never reached the consumer such as cutting scraps from a manufacturing facility.';
  const p2 = 'Using rPET gives a second life to a material that’s not biodegradable and would otherwise end up in landfill or the ocean. The Environmental Protection Agency reported that US’s landfills receive over 26 million tons of plastic a year and Ocean Conservancy reports that 8 million metric tons of plastic enter the ocean every year.\n\nIn addition, production of fiber or products using rPET over virgin plastic requires less energy and produces less CO2 and it contributes to reducing the extraction of crude oil and natural gas from the Earth to make more plastic.';
  const image1 = image;
  return _react.default.createElement(_ImageContainer.default, {
    image: backgroundImage,
    className: classes.root
  }, _react.default.createElement("div", {
    className: classes.container
  }, _react.default.createElement("div", {
    className: classes.title
  }, _react.default.createElement(_BreakAllContentText.default, {
    style: {
      fontFamily: 'FilsonSoft-Bold'
    }
  }, title)), _react.default.createElement("div", {
    className: classes.paragraph
  }, _react.default.createElement(_BreakAllContentText.default, {
    style: {
      fontFamily: 'FilsonSoftRegular',
      lineHeight: 2
    }
  }, p1)), _react.default.createElement("div", {
    className: classes.image
  }, _react.default.createElement("img", {
    width: 780,
    src: image1
  })), _react.default.createElement("div", {
    className: classes.paragraph
  }, _react.default.createElement(_BreakAllContentText.default, {
    style: {
      fontFamily: 'FilsonSoftRegular',
      lineHeight: 2
    }
  }, p2))));
};

exports.default = _default;