"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _reveal = require("../reveal");

var _ImageContainer = _interopRequireDefault(require("../ImageContainer"));

var _BreakAllContentText = _interopRequireDefault(require("../BreakAllContentText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  root: {
    paddingTop: 80
  },
  container: {
    width: 940
  },
  title: {
    fontSize: 40,
    lineHeight: 1.2,
    fontFamily: 'FilsonSoft-Bold'
  },
  line: {
    width: 461,
    height: 1,
    marginTop: 16
  },
  subtitle: {
    fontSize: 20,
    fontFamily: 'FilsonSoft-Light',
    marginTop: 40
  },
  description: {
    width: 460,
    marginTop: 8
  },
  bottomContent: {
    fontSize: 14,
    fontFamily: 'FilsonSoftRegular',
    marginTop: 80
  },
  space: {
    height: 12
  }
};

class Methodology extends _react.default.PureComponent {
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
      bottomContent,
      descriptionWidth,
      fontColor,
      lineBorder,
      backgroundColor,
      children
    } = this.props;
    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ImageContainer.default, {
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
    }, _react.default.createElement(_reveal.Slide, {
      direction: "up",
      triggerOnce: true
    }, _react.default.createElement(_BreakAllContentText.default, {
      style: {
        fontFamily: 'FilsonSoft-Bold'
      }
    }, title))), _react.default.createElement("div", {
      className: classes.line,
      style: {
        borderBottom: lineBorder
      }
    }), _react.default.createElement("div", {
      className: classes.subtitle,
      style: {
        width: subtitleWidth
      }
    }, _react.default.createElement(_reveal.Slide, {
      direction: "up",
      triggerOnce: true
    }, _react.default.createElement(_BreakAllContentText.default, {
      style: {
        fontFamily: 'FilsonSoft-Light'
      }
    }, subtitle))), _react.default.createElement("div", {
      className: classes.description
    }, _react.default.createElement(_BreakAllContentText.default, {
      style: {
        fontFamily: 'FilsonSoftRegular'
      }
    }, description)), _react.default.createElement("div", {
      className: classes.bottomContent,
      style: {
        width: descriptionWidth
      }
    }, _react.default.createElement(_reveal.Slide, {
      direction: "up",
      triggerOnce: true
    }, _react.default.createElement(_BreakAllContentText.default, {
      style: {
        fontFamily: 'FilsonSoftRegular'
      }
    }, bottomContent))), _react.default.createElement("div", null, children))), _react.default.createElement("div", {
      className: classes.space
    }));
  }

}

var _default = (0, _styles.withStyles)(styles)(Methodology);

exports.default = _default;