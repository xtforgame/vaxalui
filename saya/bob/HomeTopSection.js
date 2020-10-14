"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _SwipperT = _interopRequireDefault(require("../SwipperT1"));

var _ImageContainer = _interopRequireDefault(require("../ImageContainer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    height: 620,
    color: '#000000'
  },
  scrollArrow: {
    width: 1024,
    height: 50
  },
  title: {
    fontSize: 50,
    fontWeight: 300,
    textAlign: 'center'
  },
  titleBack: {
    fontFamily: 'FilsonSoft-Bold'
  },
  titleWhite: {
    color: '#ffffff',
    fontFamily: 'FilsonSoft-Bold'
  },
  line: {
    width: 560,
    height: 1,
    marginTop: 8,
    border: 'solid 1px #ffffff'
  },
  subtitle: {
    color: '#ffffff',
    fontSize: 20,
    fontFamily: 'FilsonSoftRegular',
    paddingTop: 22,
    paddingBottom: 91
  },
  roundArrow: {
    width: 50,
    height: 50
  },
  space: {
    height: 12
  }
};

class HomeTopSection extends _react.default.PureComponent {
  render() {
    const {
      classes,
      backgroundImage,
      roundArrowImage,
      onClick
    } = this.props;
    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ImageContainer.default, {
      image: backgroundImage,
      className: classes.root
    }, _react.default.createElement("div", {
      className: classes.scrollArrow
    }), _react.default.createElement("div", {
      className: classes.title
    }, _react.default.createElement("span", {
      className: classes.titleWhite
    }, "Innovating Renewal Technologies")), _react.default.createElement("div", {
      className: classes.line
    }), _react.default.createElement("div", {
      className: classes.subtitle
    }, "Recycling Solutions from Bottles to Garments and Beyond"), _react.default.createElement("div", {
      className: classes.roundArrow,
      onClick: onClick
    }, _react.default.createElement("img", {
      src: roundArrowImage
    }))), _react.default.createElement("div", {
      className: classes.space
    }));
  }

}

var _default = (0, _styles.withStyles)(styles)(HomeTopSection);

exports.default = _default;