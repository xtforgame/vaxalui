"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _Avatar = _interopRequireDefault(require("@material-ui/core/Avatar"));

var _BreakAllContentText = _interopRequireDefault(require("../BreakAllContentText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  title: {
    width: 320,
    fontSize: 32,
    fontFamily: 'FilsonSoft-Bold'
  },
  subtitle: {
    fontSize: 20,
    marginTop: 40,
    fontFamily: 'FilsonSoft',
    fontWeight: 300
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
    marginTop: 16
  },
  rightTitle: {
    fontSize: 20,
    color: '#000000',
    fontFamily: 'FilsonSoft-Bold'
  },
  description: {
    paddingTop: 8,
    width: 380,
    fontSize: 14,
    color: '#000000',
    fontFamily: 'FilsonSoftRegular'
  },
  Avatar: {
    width: 340,
    height: 340
  },
  space: {
    height: 12
  }
};

class Challenges extends _react.default.PureComponent {
  render() {
    const {
      classes,
      description,
      height,
      leftPaddingTop,
      leftPaddingRight,
      backgroundColor,
      title,
      subtitle,
      image
    } = this.props;
    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
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
      className: classes.container
    }, _react.default.createElement("div", {
      className: classes.title
    }, _react.default.createElement(_BreakAllContentText.default, {
      style: {
        fontFamily: 'FilsonSoft-Bold'
      }
    }, title)), _react.default.createElement("div", {
      className: classes.line,
      style: {
        borderBottom: '1px solid #000000'
      }
    }), _react.default.createElement("div", {
      className: classes.subtitle
    }, _react.default.createElement(_BreakAllContentText.default, {
      style: {
        fontFamily: 'FilsonSoft'
      }
    }, subtitle)), _react.default.createElement("div", {
      className: classes.description
    }, _react.default.createElement(_BreakAllContentText.default, {
      style: {
        fontFamily: 'FilsonSoftRegular'
      }
    }, description)))), _react.default.createElement("div", {
      className: classes.rightColumn
    }, _react.default.createElement(_Avatar.default, {
      className: classes.Avatar,
      src: image
    }))), _react.default.createElement("div", {
      className: classes.space
    }));
  }

}

var _default = (0, _styles.withStyles)(styles)(Challenges);

exports.default = _default;