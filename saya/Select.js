"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/styles");

var _clsx = _interopRequireDefault(require("clsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const styles = theme => ({
  root: {
    height: theme.spacing(5.5),
    color: 'white',
    backgroundColor: 'transparent',
    paddingLeft: theme.spacing(1.5),
    paddingRight: theme.spacing(1.5),
    paddingTop: theme.spacing(1.25),
    paddingBottom: theme.spacing(1.25),
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'white',
    outline: 'none'
  },
  option: {
    color: 'red'
  }
});

class Select extends _react.default.PureComponent {
  render() {
    const _this$props = this.props,
          {
      classes,
      className,
      value,
      onChange,
      options
    } = _this$props,
          others = _objectWithoutProperties(_this$props, ["classes", "className", "value", "onChange", "options"]);

    return _react.default.createElement("select", _extends({
      className: (0, _clsx.default)(classes.root, className),
      value: value,
      onChange: onChange
    }, others), options.map(o => _react.default.createElement("option", {
      key: o.toString(),
      value: o,
      className: classes.option
    }, o)));
  }

}

Select.propTypes = {};
Select.defaultProps = {};

var _default = (0, _styles.withStyles)(styles)(Select);

exports.default = _default;