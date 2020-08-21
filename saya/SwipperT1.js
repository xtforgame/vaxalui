"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactSwipeableViews = _interopRequireDefault(require("react-swipeable-views"));

var _reactSwipeableViewsUtils = require("react-swipeable-views-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const VirtualizeSwipeableViews = (0, _reactSwipeableViewsUtils.bindKeyboard)((0, _reactSwipeableViewsUtils.virtualize)(_reactSwipeableViews.default));

var _default = props => {
  const [tabIndex, setTabIndex] = (0, _react.useState)(0);
  const {
    children,
    contentContainerStyle,
    swipeableViewsStyle,
    scrollArrowLeftImage,
    scrollArrowRightImage,
    height = 500,
    slideRenderer,
    childrenUnderSlides
  } = props;
  return _react.default.createElement("div", {
    style: {
      height,
      width: '100%',
      position: 'relative',
      display: 'flex'
    }
  }, childrenUnderSlides && _react.default.createElement("div", {
    style: _objectSpread({
      position: 'absolute',
      width: '100%'
    }, contentContainerStyle)
  }, children), _react.default.createElement(VirtualizeSwipeableViews, _extends({
    index: tabIndex
  }, {}, {
    style: _objectSpread({
      flex: 1,
      height
    }, swipeableViewsStyle),
    containerStyle: {
      width: '100%',
      height: '100%',
      position: 'relative'
    },
    slideStyle: {
      height: '100%',
      position: 'relative'
    },
    slideRenderer: slideRenderer
  })), !childrenUnderSlides && _react.default.createElement("div", {
    style: _objectSpread({
      position: 'absolute',
      width: '100%'
    }, contentContainerStyle)
  }, children), _react.default.createElement("div", {
    style: {
      'user-select': 'none',
      width: 100,
      height: '100%',
      flexShrink: 0,
      position: 'absolute',
      left: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: 40
    },
    onClick: () => setTabIndex(tabIndex - 1)
  }, _react.default.createElement("img", {
    src: scrollArrowLeftImage
  })), _react.default.createElement("div", {
    style: {
      'user-select': 'none',
      width: 100,
      height: '100%',
      flexShrink: 0,
      position: 'absolute',
      right: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: 40
    },
    onClick: () => setTabIndex(tabIndex + 1)
  }, _react.default.createElement("img", {
    src: scrollArrowRightImage
  })));
};

exports.default = _default;