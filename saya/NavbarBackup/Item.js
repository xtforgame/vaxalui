"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _styles = require("@material-ui/core/styles");

var _MenuContext = require("./MenuContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const styles = theme => ({
  firstLayer: {
    fontFamily: 'FilsonSoft-Bold'
  },
  otherLayer: {
    paddingTop: 4,
    paddingBottom: 4,
    fontFamily: 'FilsonSoftRegular'
  }
});

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
      firstLayer,
      classes,
      children
    } = this.props;
    return _react.default.createElement("div", {
      className: (0, _clsx.default)({
        [classes.firstLayer]: firstLayer,
        [classes.otherLayer]: !firstLayer
      }),
      "data-id": "menu-item",
      onMouseEnter: this.showMenu,
      onMouseLeave: this.closeMenu
    }, children);
  }

}

Item.contextType = _MenuContext.MenuContext;

var _default = (0, _styles.withStyles)(styles)(Item);

exports.default = _default;