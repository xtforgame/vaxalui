"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getSize = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MenuContext = require("./MenuContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const getSize = theme => ({
  width: theme.spacing(16),
  height: theme.spacing(3)
});

exports.getSize = getSize;

class Item extends _react.default.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "showMenu", e => {
      this.context.enterPath(this.props.path);
    });

    _defineProperty(this, "closeMenu", e => {
      this.context.leavePath(this.props.path);
    });
  }

  render() {
    const {
      children
    } = this.props;
    return _react.default.createElement("div", {
      "data-id": "menu-item",
      onMouseEnter: this.showMenu,
      onMouseLeave: this.closeMenu
    }, children);
  }

}

Item.propTypes = {
  path: _propTypes.default.string.isRequired,
  children: _propTypes.default.node.isRequired
};
Item.defaultProps = {};
Item.contextType = _MenuContext.MenuContext;
var _default = Item;
exports.default = _default;