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
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  title: {
    fontSize: 40,
    fontFamily: 'FilsonSoft-Bold',
    paddingTop: 160
  },
  titleBack: {
    fontFamily: 'FilsonSoft-Light'
  },
  line: {
    width: 420,
    height: 1,
    marginTop: 20
  },
  subtitle: {
    fontSize: 20,
    fontFamily: 'FilsonSoftRegular',
    paddingTop: 20
  },
  box: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 115,
    flexWrap: 'wrap'
  }
};

class ClassicFibers extends _react.default.PureComponent {
  render() {
    const {
      classes,
      height,
      backgroundColor,
      fontColor,
      marginTop,
      children,
      borderStyle,
      subtitle,
      title,
      titleBack,
      boxWidth
    } = this.props;
    return _react.default.createElement("div", {
      className: classes.root,
      style: {
        height: height,
        backgroundColor: backgroundColor,
        color: fontColor,
        marginTop: marginTop
      }
    }, _react.default.createElement("div", {
      className: classes.title
    }, title, _react.default.createElement("span", {
      className: classes.titleBack
    }, titleBack)), _react.default.createElement("div", {
      className: classes.line,
      style: {
        border: borderStyle
      }
    }), _react.default.createElement("div", {
      className: classes.subtitle
    }, subtitle), _react.default.createElement("div", {
      className: classes.box,
      style: {
        width: boxWidth
      }
    }, children));
  }

}

var _default = (0, _styles.withStyles)(styles)(ClassicFibers);

exports.default = _default;