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
    height: 565,
    display: 'flex',
    justifyContent: 'center'
  },
  section: {
    width: 860,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
};

class ImageNumberSection extends _react.default.PureComponent {
  render() {
    const {
      classes,
      children
    } = this.props;
    return _react.default.createElement("div", {
      className: classes.root
    }, _react.default.createElement("div", {
      className: classes.section
    }, children));
  }

}

var _default = (0, _styles.withStyles)(styles)(ImageNumberSection);

exports.default = _default;