"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _ImageContainer = _interopRequireDefault(require("../ImageContainer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useStyles = (0, _styles.makeStyles)(theme => ({
  root: {
    textAlign: 'center',
    fontFamily: 'FilsonSoft-Bold',
    color: '#000000'
  },
  firstTitle: {
    fontSize: 50,
    fontWeight: 'bold',
    lineHeight: 1.18,
    paddingTop: 112
  },
  secondTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop: 31
  },
  line: {
    width: 230,
    height: 1,
    backgroundColor: '#000000',
    marginTop: 31
  },
  thirdTitle: {
    fontSize: 17,
    lineHeight: 1.35,
    fontFamily: 'FilsonSoftRegular ',
    paddingTop: 10
  }
}));

var _default = props => {
  const {
    backgroundImage,
    img
  } = props;
  const classes = useStyles();
  return _react.default.createElement(_ImageContainer.default, {
    image: backgroundImage,
    className: classes.root,
    style: {
      height: 590
    }
  }, _react.default.createElement("div", {
    style: {
      position: 'absolute'
    }
  }, _react.default.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, _react.default.createElement("pre", {
    className: classes.firstTitle,
    style: {
      marginBottom: 0
    }
  }, 'SAYA\nRSCUW\nProject')), _react.default.createElement("div", {
    className: classes.secondTitle
  }, "- Recycled Scrap & Cutting Waste -"), _react.default.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, _react.default.createElement("div", {
    className: classes.line
  })), _react.default.createElement("div", {
    className: classes.thirdTitle
  }, _react.default.createElement("pre", {
    style: {
      marginBottom: 0,
      marginTop: 0
    }
  }, 'Addressing Garment\nIndustry Waste -\nA true and inconvenient reality')), _react.default.createElement("img", {
    src: img,
    style: {
      width: 55,
      height: 55,
      marginTop: 24
    }
  })));
};

exports.default = _default;