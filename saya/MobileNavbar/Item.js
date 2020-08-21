"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getSize = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _MenuContext = require("./MenuContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const getSize = theme => ({
  width: theme.spacing(16),
  height: theme.spacing(6),
  indent: theme.spacing(2)
});

exports.getSize = getSize;

const styles = theme => ({
  root: {
    paddingLeft: getSize(theme).indent,
    borderTopStyle: 'solid',
    borderTopColor: '#828282',
    borderTopWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: '#828282',
    borderBottomWidth: 1
  }
});

class Item extends _react.default.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleClick", e => {
      e.preventDefault();
      e.stopPropagation();
      this.context.enterPath(this.props.path, this.props.type);
    });
  }

  render() {
    const {
      classes,
      children
    } = this.props;
    return _react.default.createElement("div", {
      "data-id": "menu-item",
      className: classes.root,
      onClick: this.handleClick
    }, children);
  }

}

Item.propTypes = {
  path: _propTypes.default.string.isRequired,
  type: _propTypes.default.oneOf(['link', 'expand']).isRequired,
  children: _propTypes.default.node.isRequired
};
Item.defaultProps = {};
Item.contextType = _MenuContext.MenuContext;

var _default = (0, _styles.withStyles)(styles, {
  withTheme: true
})(Item);

exports.default = _default;