"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _Select = _interopRequireDefault(require("@material-ui/core/Select"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _InputBase = _interopRequireDefault(require("@material-ui/core/InputBase"));

var _clsx = _interopRequireDefault(require("clsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const BootstrapInput = (0, _styles.withStyles)(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3)
    }
  },
  input: {
    position: 'relative',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'white',
    color: 'white',
    outline: 'none',
    paddingLeft: theme.spacing(1.5),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  }
}))(_InputBase.default);

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
    color: '#000000'
  },
  icon: {
    color: 'white',
    marginRight: 10
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
      options,
      formControlStyle,
      selectStyle,
      style
    } = _this$props,
          others = _objectWithoutProperties(_this$props, ["classes", "className", "value", "onChange", "options", "formControlStyle", "selectStyle", "style"]);

    return _react.default.createElement(_FormControl.default, {
      className: classes.margin,
      style: formControlStyle
    }, _react.default.createElement(_Select.default, {
      style: selectStyle,
      labelId: "demo-customized-select-label",
      id: "demo-customized-select",
      value: value,
      onChange: onChange,
      input: _react.default.createElement(BootstrapInput, {
        style: style
      }),
      inputProps: {
        classes: {
          icon: classes.icon
        }
      }
    }, options.map(o => _react.default.createElement(_MenuItem.default, {
      key: o.toString(),
      value: o,
      className: classes.option
    }, o))));
  }

}

var _default = (0, _styles.withStyles)(styles)(Select);

exports.default = _default;