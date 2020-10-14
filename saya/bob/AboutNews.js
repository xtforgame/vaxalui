"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _Card = _interopRequireDefault(require("./Card"));

var _ImageContainer = _interopRequireDefault(require("../ImageContainer"));

var _BreakAllContentText = _interopRequireDefault(require("../BreakAllContentText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  root: {
    paddingTop: 60,
    textAlign: 'center'
  },
  container: {
    width: 940
  },
  title: {
    fontSize: 40,
    lineHeight: 1.2,
    fontFamily: 'FilsonSoft-Bold'
  },
  boxRoot: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 72,
    marginBottom: 16,
    textAlign: 'left'
  },
  space: {
    height: 12,
    backgroundColor: '#FFFFFF'
  }
};

class AboutNews extends _react.default.PureComponent {
  render() {
    const {
      classes,
      title,
      backgroundImage,
      fontColor,
      backgroundColor,
      item = []
    } = this.props;
    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ImageContainer.default, {
      image: backgroundImage,
      className: classes.root,
      style: {
        color: fontColor,
        backgroundColor
      }
    }, _react.default.createElement("div", {
      className: classes.container
    }, _react.default.createElement("div", {
      className: classes.title
    }, _react.default.createElement(_BreakAllContentText.default, {
      style: {
        fontFamily: 'FilsonSoft-Bold'
      }
    }, title)), _react.default.createElement("div", {
      className: classes.boxRoot
    }, item.map(i => _react.default.createElement(_Card.default, {
      height: i.height,
      width: i.width,
      title: i.title,
      description: i.description,
      image: i.image,
      onClick: i.onClick
    }))))), _react.default.createElement("div", {
      className: classes.space
    }));
  }

}

var _default = (0, _styles.withStyles)(styles)(AboutNews);

exports.default = _default;