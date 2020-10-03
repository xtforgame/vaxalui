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
    paddingTop: 60,
    backgroundColor: '#444343',
    color: '#ffffff'
  },
  container: {
    width: 320
  },
  title: {
    width: 'fit-content',
    fontSize: 15,
    lineHeight: 'normal',
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold'
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#ffffff'
  },
  subtitle: {
    fontSize: 20,
    fontFamily: 'FilsonSoftRegular',
    marginTop: 50,
    marginBottom: 80
  }
};

class ProductFeatures extends _react.default.PureComponent {
  render() {
    const {
      classes,
      color,
      title,
      list,
      block
    } = this.props;
    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ImageContainer.default, {
      className: classes.root
    }, _react.default.createElement("div", {
      className: classes.container
    }, _react.default.createElement("div", {
      className: classes.title
    }, _react.default.createElement("div", {
      style: {
        fontFamily: 'FilsonSoft-Bold'
      }
    }, title), _react.default.createElement("div", {
      className: classes.line
    })), _react.default.createElement("div", {
      className: classes.subtitle
    }, list.map(l => _react.default.createElement("div", {
      style: {
        fontSize: 20,
        fontFamily: 'FilsonSoftRegular',
        display: 'flex',
        paddingBottom: 20
      }
    }, "\u30FB", _react.default.createElement("span", {
      style: {
        width: 315,
        fontSize: 20,
        fontFamily: 'FilsonSoftRegular',
        paddingLeft: 0
      }
    }, `${l}`)))))));
  }

}

var _default = (0, _styles.withStyles)(styles)(ProductFeatures);

exports.default = _default;