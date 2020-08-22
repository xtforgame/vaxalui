"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _ImageContainer = _interopRequireDefault(require("../ImageContainer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  root: {
    width: 940,
    height: 235,
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  },
  block: {
    width: 350,
    marginLeft: 80
  },
  title: {
    fontSize: 20,
    fontFamily: 'FilsonSoftRegular',
    color: '#ffffff',
    paddingTop: 35
  },
  description: {
    fontSize: 14,
    fontFamily: 'FilsonSoftRegular',
    color: '#ffffff',
    paddingTop: 20
  }
};

class TransparentBlock extends _react.default.PureComponent {
  render() {
    const {
      classes,
      leftDescription,
      rightDescription,
      marginTop
    } = this.props;
    return _react.default.createElement("div", {
      className: classes.root,
      style: {
        marginTop: marginTop
      }
    }, _react.default.createElement("div", {
      className: classes.block
    }, _react.default.createElement("div", {
      className: classes.title
    }, "Type of Materials and Finishing"), _react.default.createElement("div", {
      className: classes.description
    }, leftDescription)), _react.default.createElement("div", {
      className: classes.block
    }, _react.default.createElement("div", {
      className: classes.title
    }, "Content Percentage"), _react.default.createElement("div", {
      className: classes.description
    }, rightDescription)));
  }

}

var _default = (0, _styles.withStyles)(styles)(TransparentBlock);

exports.default = _default;