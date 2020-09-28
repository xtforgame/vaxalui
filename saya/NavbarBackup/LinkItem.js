"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _clsx = _interopRequireDefault(require("clsx"));

var _Link = _interopRequireDefault(require("./Link"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = theme => ({
  root: {
    position: 'relative',
    color: 'white'
  }
});

class LinkItem extends _react.default.PureComponent {
  render() {
    const {
      classes,
      className,
      to,
      name,
      disabled
    } = this.props;
    return _react.default.createElement(_Link.default, {
      to: to,
      disabled: disabled
    }, _react.default.createElement("div", {
      className: (0, _clsx.default)(classes.root, className)
    }, name));
  }

}

var _default = (0, _styles.withStyles)(styles)(LinkItem);

exports.default = _default;