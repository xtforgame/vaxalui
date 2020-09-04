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
    height: 450,
    backgroundColor: '#c8c6c6',
    border: 'solid 1px #979797',
    display: 'flex',
    justifyContent: 'center'
  },
  oceanCycle: {
    width: 220,
    height: 300,
    marginTop: 75,
    marginRight: 90
  },
  rightColumn: {
    width: 470,
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 165,
    paddingLeft: 90,
    flexWrap: 'wrap'
  },
  rightTitle: {
    fontSize: 20,
    color: '#000000',
    fontFamily: 'FilsonSoftRegular'
  },
  description: {
    fontSize: 14,
    color: '#000000',
    paddingTop: 20,
    fontFamily: 'FilsonSoftRegular'
  }
};

class OceanCycle extends _react.default.PureComponent {
  render() {
    const {
      classes,
      backgroundImage
    } = this.props;
    return _react.default.createElement("div", {
      className: classes.root
    }, _react.default.createElement("div", {
      className: classes.oceanCycle,
      style: {
        backgroundImage: `url(${backgroundImage})`
      }
    }), _react.default.createElement("div", {
      className: classes.rightColumn
    }, _react.default.createElement("div", {
      className: classes.rightTitle
    }, "Certified Ocean Plastic"), _react.default.createElement("div", {
      className: classes.description
    }, "We work with OceanCycle\u2019s network of certified coastal recyclers. Treated with SAYA Now\u2019s proprietary renewing technology, we turn potential microplastics into microfibers.")));
  }

}

var _default = (0, _styles.withStyles)(styles)(OceanCycle);

exports.default = _default;