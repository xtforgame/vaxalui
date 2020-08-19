"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _clsx = _interopRequireDefault(require("clsx"));

var _Link = _interopRequireDefault(require("./Link"));

var _Item = require("./Item");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const styles = theme => ({
  root: _objectSpread({}, (0, _Item.getSize)(theme), {
    position: 'relative',
    color: 'white',
    '&:hover': {
      color: 'white'
    }
  })
});

class LinkItem extends _react.default.PureComponent {
  render() {
    const {
      classes,
      className,
      to,
      name
    } = this.props;
    console.log('name :', name);
    return _react.default.createElement(_Link.default, {
      to: to
    }, _react.default.createElement("div", {
      className: (0, _clsx.default)(classes.root, className)
    }, name));
  }

}

LinkItem.propTypes = {
  to: _propTypes.default.string.isRequired,
  name: _propTypes.default.string.isRequired
};
LinkItem.defaultProps = {};

var _default = (0, _styles.withStyles)(styles)(LinkItem);

exports.default = _default;