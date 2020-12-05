"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/core/styles");

var _clsx = _interopRequireDefault(require("clsx"));

var _Done = _interopRequireDefault(require("@material-ui/icons/Done"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const useStyles = (0, _styles.makeStyles)(theme => ({
  checkbox: {
    width: 30,
    height: 30,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 0,
    color: '#FFFFFF',
    borderColor: '#000000',
    backgroundColor: '#FFFFFF'
  },
  darkTheme: {
    borderWidth: 2,
    color: '#000000',
    borderColor: '#FFFFFF',
    backgroundColor: '#000000'
  },
  checked: {
    color: '#000000'
  },
  darkThemeChecked: {
    color: '#FFFFFF'
  },
  error: {
    borderColor: '#ff3a53'
  }
}));

var _default = props => {
  const {
    checked = false,
    setChecked = () => {},
    darkTheme,
    error
  } = props;
  const classes = useStyles();
  return _react.default.createElement("div", {
    className: (0, _clsx.default)(classes.checkbox, {
      [classes.checked]: !darkTheme && checked,
      [classes.darkThemeChecked]: darkTheme && checked,
      [classes.darkTheme]: darkTheme
    }, {
      [classes.error]: error
    }),
    onClick: () => {
      setChecked(!checked);
    }
  }, _react.default.createElement(_Done.default, null));
};

exports.default = _default;