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
    height: 580
  },
  section: {
    width: 1024,
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
      backgroundImage
    } = this.props;
    return _react.default.createElement(_ImageContainer.default, {
      image: backgroundImage,
      className: classes.root
    }, _react.default.createElement("div", {
      className: classes.section
    }, _react.default.createElement("div", {
      className: classes.title
    }, "We Turn Potential Microplastics into Microfibers.")));
  }

}

var _default = (0, _styles.withStyles)(styles)(Microfibers);

exports.default = _default;