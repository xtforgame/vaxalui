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
    height: 888,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: 18
  },
  title: {
    fontSize: 33,
    fontWeight: 'bold',
    color: '#000000',
    paddingTop: 110
  },
  circle: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 60
  }
};

class TwoCircleSection extends _react.default.PureComponent {
  render() {
    const {
      classes,
      backgroundImage
    } = this.props;
    const content = 'SAYA Recycling Technologies\nfrom Bottles to Garments and Beyond';
    return _react.default.createElement("div", {
      className: classes.root
    }, _react.default.createElement("div", {
      style: {
        width: '100%',
        marginTop: 40
      }
    }, _react.default.createElement("pre", {
      style: {
        fontFamily: 'FilsonSoftRegular'
      }
    }, content)), _react.default.createElement("div", {
      className: classes.circle
    }, _react.default.createElement("img", {
      src: backgroundImage,
      height: 610
    })));
  }

}

var _default = (0, _styles.withStyles)(styles)(TwoCircleSection);

exports.default = _default;