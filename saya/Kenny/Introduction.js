"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _ImageContainer = _interopRequireDefault(require("../ImageContainer"));

var _BreakAllContentText = _interopRequireDefault(require("../BreakAllContentText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  root: {
    paddingTop: 80
  },
  container: {
    width: '80%'
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold'
  },
  line: {
    width: 420,
    height: 1,
    marginTop: 20
  },
  subtitle: {
    fontSize: 20,
    fontFamily: 'FilsonSoftRegular',
    marginTop: 20
  },
  description: {
    fontSize: 14,
    fontFamily: 'FilsonSoftRegular',
    marginTop: 20
  }
};

class Introduction extends _react.default.PureComponent {
  render() {
    const {
      classes,
      height,
      title,
      backgroundImage,
      titleWidth,
      titlMarginTop,
      titleBack,
      subtitle,
      subtitleWidth,
      description,
      descriptionWidth,
      fontColor,
      lineBorder,
      backgroundColor,
      children
    } = this.props;
    return _react.default.createElement(_ImageContainer.default, {
      image: backgroundImage,
      className: classes.root,
      style: {
        height,
        color: fontColor,
        backgroundColor
      }
    }, _react.default.createElement("div", {
      className: classes.container
    }, _react.default.createElement("div", {
      className: classes.title,
      style: {
        width: titleWidth,
        marginTop: titlMarginTop
      }
    }, _react.default.createElement(_BreakAllContentText.default, {
      style: {
        fontFamily: 'FilsonSoft-Bold'
      }
    }, title)), _react.default.createElement("div", {
      className: classes.line,
      style: {
        border: lineBorder
      }
    }), _react.default.createElement("div", {
      className: classes.subtitle,
      style: {
        width: subtitleWidth
      }
    }, _react.default.createElement(_BreakAllContentText.default, {
      style: {
        fontFamily: 'FilsonSoftRegular'
      }
    }, subtitle)), _react.default.createElement("div", {
      className: classes.description,
      style: {
        width: descriptionWidth
      }
    }, _react.default.createElement(_BreakAllContentText.default, {
      style: {
        fontFamily: 'FilsonSoftRegular'
      }
    }, description)), _react.default.createElement("div", null, children)));
  }

}

var _default = (0, _styles.withStyles)(styles)(Introduction);

exports.default = _default;