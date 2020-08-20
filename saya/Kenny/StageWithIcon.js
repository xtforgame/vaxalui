"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 30
  },
  circle: {
    width: 120,
    height: 120,
    border: 'solid 1px #ffffff',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'FilsonSoft-Bold'
  },
  topRaw: {
    display: 'flex',
    marginTop: 30
  },
  bottomRaw: {
    marginTop: 55,
    display: 'flex'
  },
  img: {
    height: 120,
    marginLeft: 40
  }
};

class StageWithIcon extends _react.default.PureComponent {
  render() {
    const {
      classes,
      topImg,
      bottomImg
    } = this.props;
    return _react.default.createElement("div", {
      className: classes.root
    }, _react.default.createElement("div", {
      className: classes.topRaw
    }, _react.default.createElement("div", {
      className: classes.circle
    }, "5 Stage", _react.default.createElement("br", null), "Filtration"), _react.default.createElement("img", {
      className: classes.img,
      src: topImg
    })), _react.default.createElement("div", {
      className: classes.bottomRaw
    }, _react.default.createElement("div", {
      className: classes.circle
    }, "2 Stage", _react.default.createElement("br", null), "Purification"), _react.default.createElement("img", {
      className: classes.img,
      src: bottomImg
    })));
  }

}

var _default = (0, _styles.withStyles)(styles)(StageWithIcon);

exports.default = _default;