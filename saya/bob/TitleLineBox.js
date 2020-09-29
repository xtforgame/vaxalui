"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      children,
      rootStyle,
      boxStyle
    } = this.props;
    return _react.default.createElement("div", {
      className: classes.root,
      style: _objectSpread({
        height,
        color: fontColor,
        backgroundColor
      }, rootStyle)
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
      style: _objectSpread({
        width: boxWidth
      }, boxStyle)
    }, children)));
  }

}

var _default = (0, _styles.withStyles)(styles)(TitleLineBox);

exports.default = _default;