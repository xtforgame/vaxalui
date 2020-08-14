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
    height: 580,
    backgroundColor: 'pink',
    paddingTop: 80,
    paddingLeft: 40,
    display: 'flex',
    justifyContent: 'center'
  },
  section: {
    width: 1024,
    display: 'flex',
    flexWrap: 'wrap'
  },
  title: {
    width: 630,
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000000'
  }
};

class Microfibers extends _react.default.PureComponent {
  render() {
    const {
      classes
    } = this.props;
    return _react.default.createElement("div", {
      className: classes.root
    }, _react.default.createElement("div", {
      className: classes.section
    }, _react.default.createElement("div", {
      className: classes.title
    }, "We Turn Potential Microplastics into Microfibers.")));
  }

}

var _default = (0, _styles.withStyles)(styles)(Microfibers);

exports.default = _default;