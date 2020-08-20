"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _ImageContainer = _interopRequireDefault(require("../ImageContainer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  root: {
    height: 500,
    color: '#000000'
  },
  scrollArrow: {
    width: 1024,
    height: 50,
    marginTop: 225
  },
  title: {
    fontSize: 44,
    fontWeight: 300,
    paddingTop: 30
  },
  titleBack: {
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold'
  },
  line: {
    width: 420,
    height: 1,
    marginTop: 10,
    border: ' solid 1px #000000'
  },
  subtitle: {
    fontSize: 18,
    fontFamily: 'FilsonSoftRegular',
    paddingTop: 20
  },
  roundArrow: {
    width: 50,
    height: 50,
    marginTop: 30
  }
};

class HomeTopSection extends _react.default.PureComponent {
  render() {
    const {
      classes,
      backgroundImage,
      scrollArrowImage,
      roundArrowImage
    } = this.props;
    return _react.default.createElement(_ImageContainer.default, {
      image: backgroundImage,
      className: classes.root
    }, _react.default.createElement("div", {
      className: classes.scrollArrow
    }, _react.default.createElement("img", {
      src: scrollArrowImage
    })), _react.default.createElement("div", {
      className: classes.title
    }, "In the Business of", ' ', _react.default.createElement("span", {
      className: classes.titleBack
    }, "Renewal")), _react.default.createElement("div", {
      className: classes.line
    }), _react.default.createElement("div", {
      className: classes.subtitle
    }, "The next of recycled goods."), _react.default.createElement("div", {
      className: classes.roundArrow
    }, _react.default.createElement("img", {
      src: roundArrowImage
    })));
  }

}

var _default = (0, _styles.withStyles)(styles)(HomeTopSection);

exports.default = _default;