"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _reveal = require("../reveal");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    borderTop: '1px solid #e3e3e3',
    borderBottom: '1px solid #e3e3e3',
    marginBottom: -1
  }
};

class IconBoxSection extends _react.default.PureComponent {
  render() {
    const {
      classes,
      children,
      borderColor
    } = this.props;
    return _react.default.createElement("div", {
      className: classes.root,
      style: {
        borderColor
      }
    }, children);
  }

}

var _default = (0, _styles.withStyles)(styles)(IconBoxSection);

exports.default = _default;