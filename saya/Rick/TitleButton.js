"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _ImageContainer = _interopRequireDefault(require("../ImageContainer"));

var _GreenButton = _interopRequireDefault(require("./GreenButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  root: {
    height: 273
  },
  section: {
    width: 320,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    height: '100%'
  },
  title: {
    width: 280,
    fontSize: 20,
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontFamily: 'FilsonSoft-Bold',
    whiteSpace: 'pre-line',
    textAlign: 'center',
    paddingTop: 60
  },
  button: {
    marginBottom: 60
  }
};

class TitleButton extends _react.default.PureComponent {
  render() {
    const {
      classes,
      background,
      title,
      color,
      height,
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
    }))));
  }

}

var _default = (0, _styles.withStyles)(styles)(TitleButton);

exports.default = _default;