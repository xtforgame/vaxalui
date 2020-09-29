"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _clsx = _interopRequireDefault(require("clsx"));

var _BreakAllContentText = _interopRequireDefault(require("../BreakAllContentText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const useStyles = (0, _styles.makeStyles)({
  light: {
    fontFamily: 'FilsonSoft-Light'
  },
  regular: {
    fontFamily: 'FilsonSoftRegular'
  },
  bold: {
    fontFamily: 'FilsonSoft-Bold'
  }
});

var _default = (_ref) => {
  let {
    family = '',
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["family", "className"]);

  const classes = useStyles();
  let fontClass = classes.regular;

  switch (family) {
    case 'light':
      fontClass = classes.regular;
      break;

    case 'bold':
      fontClass = classes.bold;
      break;

    default:
      break;
  }

  return _react.default.createElement(_BreakAllContentText.default, _extends({}, props, {
    className: (0, _clsx.default)(fontClass, className)
  }));
};

exports.default = _default;