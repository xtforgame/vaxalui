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
    height: 330,
    textAlign: 'center'
  },
  firstTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold',
    lineHeight: 1.31,
    paddingTop: 90
  },
  firstLine: {
    height: 1,
    marginTop: 2
  },
  secondTitle: {
    fontSize: 55,
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold',
    paddingTop: 10
  },
  secondTitleBack: {
    fontWeight: 'normal',
    fontFamily: 'FilsonSoft-Light'
  },
  secondLine: {
    width: 420,
    height: 1,
    marginTop: 2
  },
  thirdTitle: {
    fontSize: 20,
    fontFamily: 'FilsonSoftRegular',
    paddingTop: 10
  }
};

class TopSection extends _react.default.PureComponent {
  render() {
    const {
      classes,
      firstTitle,
      secondTitle,
      secondTitleBack,
      thirdTitle,
      backgroundImage,
      fontColor,
      lineBorder,
      firstLineWidth,
      thirdTitleWidth
    } = this.props;
    return _react.default.createElement(_ImageContainer.default, {
      image: backgroundImage,
      className: classes.root,
      style: {
        color: fontColor
      }
    }, _react.default.createElement(_BreakAllContentText.default, {
      className: classes.firstTitle
    }, firstTitle), _react.default.createElement("div", {
      className: classes.firstLine,
      style: {
        width: firstLineWidth,
        border: lineBorder
      }
    }), _react.default.createElement("div", {
      className: classes.secondTitle
    }, secondTitle, _react.default.createElement("span", {
      className: classes.secondTitleBack
    }, secondTitleBack, " ")), _react.default.createElement("div", {
      className: classes.secondLine,
      style: {
        border: lineBorder
      }
    }), _react.default.createElement(_BreakAllContentText.default, {
      className: classes.thirdTitle,
      style: {
        width: thirdTitleWidth
      }
    }, thirdTitle));
  }

}

var _default = (0, _styles.withStyles)(styles)(TopSection);

exports.default = _default;