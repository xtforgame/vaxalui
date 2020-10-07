"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _ImageContainer = _interopRequireDefault(require("../ImageContainer"));

var _GreenButton = _interopRequireDefault(require("../bob/GreenButton"));

var _Text = _interopRequireDefault(require("./Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  root: {},
  title: {
    width: 280,
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 60
  },
  button: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 40,
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
      label = 'Learn More',
      onClick
    } = this.props;
    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ImageContainer.default, {
      className: classes.root,
      image: background,
      style: {
        color,
        backgroundColor: background
      }
    }, _react.default.createElement("div", {
      className: classes.section
    }, _react.default.createElement(_Text.default, {
      family: "bold",
      className: classes.title
    }, title), _react.default.createElement("div", {
      className: classes.button
    }, _react.default.createElement(_GreenButton.default, {
      text: label,
      onClick: onClick
    })))));
  }

}

var _default = (0, _styles.withStyles)(styles)(TitleButton);

exports.default = _default;