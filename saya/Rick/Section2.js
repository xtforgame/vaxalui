"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _ImageContainer = _interopRequireDefault(require("../ImageContainer"));

var _GreenButton = _interopRequireDefault(require("../bob/GreenButton"));

var _BreakAllContentText = _interopRequireDefault(require("../BreakAllContentText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  root: {
    height: 700,
    color: '#000000'
  },
  section: {
    width: 320,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  title: {
    width: 320,
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontFamily: 'FilsonSoft-Bold',
    lineHeight: 'normal',
    paddingTop: 60,
    whiteSpace: 'pre-line'
  }
};

class Section2 extends _react.default.PureComponent {
  render() {
    const {
      classes,
      backgroundImage,
      title,
      color,
      height
    } = this.props;
    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ImageContainer.default, {
      className: classes.root,
      image: backgroundImage,
      style: {
        height
      }
    }, _react.default.createElement("div", {
      className: classes.section
    }, _react.default.createElement(_BreakAllContentText.default, {
      className: classes.title
    }, title))), _react.default.createElement("div", {
      className: classes.space
    }));
  }

}

var _default = (0, _styles.withStyles)(styles)(Section2);

exports.default = _default;