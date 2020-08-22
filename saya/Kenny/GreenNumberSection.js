"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  root: {
    width: '100%',
    height: 560,
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
    flexWrap: 'wrap'
  },
  numberUpTitle: {
    fontSize: 20,
    color: '#000000',
    fontFamily: 'FilsonSoftRegular',
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
    fontFamily: 'FilsonSoftRegular',
    paddingTop: 20,
    paddingLeft: 10
  },
  line: {
    height: 2,
    border: '3px solid #000000',
    backgroundColor: '#000000',
    marginTop: 15,
    marginLeft: 10
  },
  bottomTitle: {
    fontSize: 20,
    color: '#000000',
    fontFamily: 'FilsonSoftRegular',
    paddingTop: 10,
    paddingLeft: 10
  },
  rightTitle: {
    fontSize: 20,
    color: '#000000',
    fontFamily: 'FilsonSoftRegular'
  },
  description: {
    paddingTop: 20,
    width: 380,
    fontSize: 14,
    color: '#000000',
    fontFamily: 'FilsonSoftRegular'
  }
};

class GreenNumberSection extends _react.default.PureComponent {
  render() {
    const {
      classes,
      numberUpTitle,
      number,
      topTile,
      bottomTitle,
      rightTitle,
      description,
      lineWidth,
      height,
      numberPaddingTop,
      leftPaddingTop,
      rightPaddingTop,
      leftPaddingRight,
      rightPaddingLeft,
      descriptionPaddingTop,
      percentDisplay,
      backgroundColor,
      numberColor,
      percentColor
    } = this.props;
    return _react.default.createElement("div", {
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
    }, "%")), _react.default.createElement("div", {
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
        paddingTop: rightPaddingTop,
        paddingLeft: rightPaddingLeft
      }
    }, _react.default.createElement("div", {
      className: classes.rightTitle
    }, rightTitle), _react.default.createElement("div", {
      className: classes.description,
      style: {
        paddingTop: descriptionPaddingTop
      }
    }, description)));
  }

}

var _default = (0, _styles.withStyles)(styles)(GreenNumberSection);

exports.default = _default;