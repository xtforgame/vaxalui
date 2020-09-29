"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _BreakAllContentText = _interopRequireDefault(require("../BreakAllContentText"));

var _ImageContainer = _interopRequireDefault(require("../ImageContainer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  topSection: {
    display: 'flex',
    justifyContent: 'center',
    height: 350,
    color: '#000000'
  },
  titleWhite: {
    color: '#ffffff',
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold'
  },
  root: {
    width: '100%',
    height: 450,
    display: 'flex',
    justifyContent: 'center'
  },
  leftColumn: {
    display: 'flex',
    flexDirection: 'column'
  },
  rightColumn: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  numberUpTitle: {
    fontSize: 20,
    color: '#000000',
    fontFamily: 'FilsonSoft-Bold',
    paddingLeft: 10
  },
  number: {
    fontSize: 180,
    lineHeight: 0.74,
    fontFamily: 'FilsonSoftRegular'
  },
  percent: {
    fontSize: 20,
    fontFamily: 'FilsonSoftRegular'
  },
  topTile: {
    fontSize: 20,
    color: '#000000',
    fontFamily: 'FilsonSoft-Bold',
    paddingTop: 16,
    paddingLeft: 10
  },
  line: {
    height: 2,
    backgroundColor: '#000000',
    marginTop: 12,
    marginLeft: 10
  },
  bottomTitle: {
    fontSize: 20,
    color: '#000000',
    fontFamily: 'FilsonSoft-Bold',
    paddingTop: 12,
    paddingLeft: 10
  },
  rightTitle: {
    fontSize: 20,
    color: '#000000',
    fontFamily: 'FilsonSoft-Bold'
  },
  description: {
    paddingTop: 20,
    width: 380,
    fontSize: 14,
    color: '#000000',
    fontFamily: 'FilsonSoftRegular'
  },
  space: {
    height: 12
  }
};

class GreenNumberSection extends _react.default.PureComponent {
  render() {
    const {
      classes,
      numberUpTitle,
      number,
      suffix = '%',
      topTile,
      bottomTitle,
      rightTitle,
      description,
      lineWidth,
      height,
      numberPaddingTop,
      leftPaddingTop,
      leftPaddingRight,
      rightPaddingLeft,
      descriptionPaddingTop,
      percentDisplay,
      backgroundColor,
      numberColor,
      percentColor,
      backgroundImage,
      topTitle,
      hideTop
    } = this.props;
    return _react.default.createElement(_react.default.Fragment, null, !hideTop && _react.default.createElement(_ImageContainer.default, {
      image: backgroundImage,
      className: classes.topSection
    }, _react.default.createElement("div", null, _react.default.createElement("span", {
      className: classes.titleWhite
    }, topTitle))), _react.default.createElement("div", {
      className: classes.root,
      style: {
        height: height,
        backgroundColor: backgroundColor
      }
    }, _react.default.createElement("div", {
      className: classes.leftColumn,
      style: {
        paddingTop: leftPaddingTop,
        paddingRight: leftPaddingRight
      }
    }, _react.default.createElement("div", {
      className: classes.numberUpTitle
    }, " ", numberUpTitle, " "), _react.default.createElement("div", {
      className: classes.number,
      style: {
        paddingtTop: numberPaddingTop,
        color: numberColor
      }
    }, number, _react.default.createElement("span", {
      className: classes.percent,
      style: {
        display: percentDisplay,
        color: percentColor
      }
    }, suffix)), _react.default.createElement("div", {
      className: classes.topTile
    }, topTile), _react.default.createElement("div", {
      className: classes.line,
      style: {
        width: lineWidth
      }
    }), _react.default.createElement("div", {
      className: classes.bottomTitle
    }, bottomTitle)), _react.default.createElement("div", {
      className: classes.rightColumn,
      style: {
        paddingLeft: rightPaddingLeft
      }
    }, _react.default.createElement("div", {
      className: classes.rightTitle
    }, rightTitle), _react.default.createElement("div", {
      className: classes.description,
      style: {
        paddingTop: descriptionPaddingTop
      }
    }, _react.default.createElement(_BreakAllContentText.default, {
      style: {
        fontFamily: 'FilsonSoftRegular'
      }
    }, description)))), _react.default.createElement("div", {
      className: classes.space
    }));
  }

}

var _default = (0, _styles.withStyles)(styles)(GreenNumberSection);

exports.default = _default;