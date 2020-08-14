"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  root: {
    width: 370,
    height: 460,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexWrap: 'wrap',
    borderRadius: 30,
    marginBottom: 50
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 10
  },
  button: {
    width: 130,
    height: 45,
    fontSize: 14,
    color: '#ffffff',
    fontWeight: 'bold',
    backgroundColor: '#64703f',
    border: 'none',
    borderRadius: 22,
    marginTop: 160,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

class ImageBox extends _react.default.PureComponent {
  render() {
    const {
      classes,
      title,
      subtitle,
      backgroundColor,
      fontColor,
      paddingTop
    } = this.props;
    return _react.default.createElement("div", {
      className: classes.root,
      style: {
        backgroundColor,
        color: fontColor
      }
    }, _react.default.createElement("div", {
      className: classes.title,
      style: {
        paddingTop
      }
    }, title), _react.default.createElement("div", {
      className: classes.subtitle
    }, subtitle), _react.default.createElement("button", {
      className: classes.button
    }, "Learn more"));
  }

}

var _default = (0, _styles.withStyles)(styles)(ImageBox);

exports.default = _default;