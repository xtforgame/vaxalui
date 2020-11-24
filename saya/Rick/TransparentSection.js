"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _ImageContainer = _interopRequireDefault(require("../ImageContainer"));

var _Introduction = _interopRequireDefault(require("./Introduction"));

var _BreakAllContentText = _interopRequireDefault(require("../BreakAllContentText"));

var _reveal = require("../reveal");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useStyles = (0, _styles.makeStyles)(theme => ({
  root: {
    height: 548,
    textAlign: 'left',
    color: '#ffffff',
    width: 320
  },
  title: {
    textAlign: 'left',
    fontSize: 20,
    lineHeight: 1.6,
    paddingTop: 40,
    fontFamily: 'FilsonSoft-Light'
  },
  description: {
    textAlign: 'left',
    fontSize: 13,
    paddingTop: 12,
    lineHeight: 1.54,
    fontFamily: 'FilsonSoftRegular'
  }
}));

var _default = props => {
  const {
    backgroundImage
  } = props;
  const classes = useStyles();
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Introduction.default, {
    height: 355,
    title: 'Challenges and\nTransparency',
    subtitle: 'Recruiting like-minded brands\nand garment manufacturers',
    description: "SAYA is working on pilot projects with key brand partners to recover and recycle deadstock and cutting scrap from their mills and garment factories.",
    color: "#ffffff",
    lineColor: "#ffffff",
    subtitleFontFamily: "bold",
    backgroundImage: backgroundImage
  }), _react.default.createElement(_ImageContainer.default, {
    style: {
      backgroundColor: '#444343'
    }
  }, _react.default.createElement("div", {
    className: classes.root
  }, _react.default.createElement(_reveal.Slide, {
    direction: "up",
    triggerOnce: true
  }, _react.default.createElement("div", {
    className: classes.title
  }, "Type of Materials and Finishing"), _react.default.createElement(_BreakAllContentText.default, {
    className: classes.description
  }, 'Right now we are limited to 100% Polyester fabric cutting scraps without coating nor finishing, including water repellent.\n\nWe aim to start recovering and recycling uncoated 100% Polyester fabrics with WR or DWR finishing in 2021.'), _react.default.createElement("div", {
    className: classes.title
  }, "Content Percentage"), _react.default.createElement(_BreakAllContentText.default, {
    className: classes.description
  }, 'SAYA RSCUW Fibers consist of 3 types of recycled components. Garment cutting scrap, overstock fabric, waste yarn, and post-consumer PET bottles. Post industrial wastes make up a minimum of 15%, and post consumer bottles about 80-85%.\n\nWe aim to continuously increase the percentage of garment and overstock waste as well as the types of coatings and finishings for a more inclusive solution. ')))));
};

exports.default = _default;