"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _ImageBox = _interopRequireDefault(require("./ImageBox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  root: {
    width: '100%',
    height: 785,
    paddingTop: 90,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  title: {
    width: 780,
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'flex-start'
  },
  line: {
    width: 780,
    height: 1,
    border: '1px solid #979797',
    marginTop: 25
  },
  box: {
    width: 780,
    display: 'flex',
    marginTop: 90,
    justifyContent: 'space-between'
  }
};

class SerialProjects extends _react.default.PureComponent {
  render() {
    const {
      classes,
      background1Image,
      background2Image
    } = this.props;
    return _react.default.createElement("div", {
      className: classes.root
    }, _react.default.createElement("div", {
      className: classes.title
    }, _react.default.createElement("div", null, "SAYA NOW Serial Projects")), _react.default.createElement("div", {
      className: classes.line
    }), _react.default.createElement("div", {
      className: classes.box
    }, _react.default.createElement(_ImageBox.default, {
      title: "SAYAGLOBAL",
      subtitle: "lor sit amet, consectetuer ad",
      backgroundImage: background1Image,
      paddingTop: "105px",
      fontColor: "#ffffff"
    }), _react.default.createElement(_ImageBox.default, {
      title: "SAYAUSA",
      subtitle: "USA-based fiber program",
      backgroundImage: background2Image,
      paddingTop: "105px",
      fontColor: "#ffffff"
    })));
  }

}

var _default = (0, _styles.withStyles)(styles)(SerialProjects);

exports.default = _default;