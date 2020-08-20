"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _GreenButton = _interopRequireDefault(require("./GreenButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  root: {
    width: '100%',
    height: 255,
    backgroundColor: '#444343',
    display: 'flex',
    alignItems: 'center'
  },
  section: {
    width: 1024,
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 120
  },
  title: {
    fontSize: 32,
    color: '#ffffff',
    fontFamily: 'FilsonSoftRegular'
  },
  button: {
    marginLeft: 135
  }
};

class SeeProduct extends _react.default.PureComponent {
  render() {
    const {
      classes
    } = this.props;
    return _react.default.createElement("div", {
      className: classes.root
    }, _react.default.createElement("div", {
      className: classes.section
    }, _react.default.createElement("div", {
      className: classes.title
    }, "See our Products Section", _react.default.createElement("br", null), "for more details on yarn selection."), _react.default.createElement("div", {
      className: classes.button
    }, _react.default.createElement(_GreenButton.default, {
      text: "Learn more"
    }))));
  }

}

var _default = (0, _styles.withStyles)(styles)(SeeProduct);

exports.default = _default;