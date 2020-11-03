"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/core/styles");

var _animatedNumberReact = _interopRequireDefault(require("animated-number-react"));

var _reactVisibilitySensor = _interopRequireDefault(require("react-visibility-sensor"));

var _reveal = require("../reveal");

var _BreakAllContentText = _interopRequireDefault(require("../BreakAllContentText"));

var _ImageContainer = _interopRequireDefault(require("../ImageContainer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const useStyles = (0, _styles.makeStyles)({
  number: {
    fontSize: 180,
    lineHeight: 0.74,
    fontFamily: 'FilsonSoftRegular'
  },
  percent: {
    fontSize: 20,
    fontFamily: 'FilsonSoftRegular'
  }
});

const AnimatedNumber = ({
  isVisible,
  number
}) => {
  const [currentNumber, setCurrentNumber] = (0, _react.useState)(Math.round(Math.random() * 5));

  const formatValue = value => value.toFixed(0);

  (0, _react.useEffect)(() => {
    if (isVisible) {
      setCurrentNumber(number);
    }
  }, [isVisible]);
  return _react.default.createElement(_animatedNumberReact.default, {
    duration: 600,
    value: currentNumber,
    formatValue: formatValue
  });
};

var _default = ({
  width = 235,
  number,
  suffix = '%',
  numberPaddingTop,
  numberColor,
  percentDisplay,
  percentColor
}) => {
  const classes = useStyles();
  return _react.default.createElement("div", {
    className: classes.number,
    style: {
      paddingtTop: numberPaddingTop,
      color: numberColor,
      display: 'flex',
      alignItems: 'flex-end'
    }
  }, _react.default.createElement("div", {
    style: {
      width,
      textAlign: 'right'
    }
  }, _react.default.createElement(_reactVisibilitySensor.default, {
    partialVisibility: true
  }, ({
    isVisible
  }) => _react.default.createElement(AnimatedNumber, {
    isVisible: isVisible,
    number: number
  }))), _react.default.createElement("span", {
    className: classes.percent,
    style: {
      display: percentDisplay,
      color: percentColor
    }
  }, suffix));
};

exports.default = _default;