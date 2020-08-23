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
    paddingTop: 90,
    display: 'flex',
    justifyContent: 'center'
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold',
    alignSelf: 'flex-start'
  },
  line: {
    height: 1,
    marginTop: 25
  },
  box: {
    display: 'flex',
    marginTop: 90,
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  }
};

class TitleLineBox extends _react.default.PureComponent {
  render() {
    const {
      classes,
      title,
      height,
      fontColor,
      boxWidth,
      lineBorder,
      backgroundColor,
      children
    } = this.props;
    return _react.default.createElement("div", {
      className: classes.root,
      style: {
        height: height,
        color: fontColor,
        backgroundColor: backgroundColor
      }
    }, _react.default.createElement("div", {
      className: classes.section,
      style: {
        width: boxWidth
      }
    }, _react.default.createElement("div", {
      className: classes.title
    }, _react.default.createElement("div", null, title)), _react.default.createElement("div", {
      className: classes.line,
      style: {
        width: boxWidth,
        border: lineBorder
      }
    }), _react.default.createElement("div", {
      className: classes.box,
      style: {
        width: boxWidth
      }
    }, children)));
  }

}

var _default = (0, _styles.withStyles)(styles)(TitleLineBox);

exports.default = _default;