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
    width: 400,
    height: 400,
    display: 'flex',
    flexDirection: 'column',
    color: '#ffffff',
    paddingTop: 85,
    paddingLeft: 90
  },
  number: {
    fontSize: 180,
    fontFamily: 'FilsonSoftRegular',
    lineHeight: 0.74
  },
  topTile: {
    fontSize: 20,
    fontFamily: 'FilsonSoftRegular',
    paddingTop: 20
  },
  line: {
    width: 210,
    height: 2,
    backgroundColor: '#ffffff',
    marginTop: 15
  },
  bottomTitle: {
    fontSize: 20,
    fontFamily: 'FilsonSoftRegular',
    paddingTop: 10
  }
};

class ImageNumber extends _react.default.PureComponent {
  render() {
    const {
      classes,
      backgroundImage,
      number,
      topTile,
      bottomTitle
    } = this.props;
    return _react.default.createElement("div", {
      className: classes.root,
      style: {
        backgroundImage: `url(${backgroundImage})`
      }
    }, _react.default.createElement("div", {
      className: classes.number
    }, " ", number, " "), _react.default.createElement("div", {
      className: classes.topTile
    }, " ", topTile, " "), _react.default.createElement("div", {
      className: classes.line
    }), _react.default.createElement("div", {
      className: classes.bottomTitle
    }, " ", bottomTitle, " "));
  }

}

var _default = (0, _styles.withStyles)(styles)(ImageNumber);

exports.default = _default;