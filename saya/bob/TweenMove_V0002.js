"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _reactScrollmagic = require("react-scrollmagic");

var _reactGsap = require("react-gsap");

var _ImageContainer = _interopRequireDefault(require("../ImageContainer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useStyle = (0, _styles.makeStyles)({
  section: {
    height: '100vh'
  },
  parallax: {
    position: 'relative',
    overflow: 'hidden'
  },
  img: {
    width: '100%',
    height: 'auto',
    position: 'absolute',
    transition: 'top 0s'
  }
});

var _default = props => {
  const {
    height = 620,
    children,
    image
  } = props;
  const classes = useStyle();
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
    style: {
      position: 'relative'
    }
  }, _react.default.createElement(_reactScrollmagic.Controller, null, _react.default.createElement(_reactScrollmagic.Scene, {
    duration: height,
    triggerHook: 0
  }, _react.default.createElement(_reactGsap.Timeline, {
    wrapper: _react.default.createElement("div", {
      style: {
        height
      },
      className: classes.parallax
    })
  }, _react.default.createElement(_reactGsap.Tween, {
    position: "0",
    from: {
      top: 0,
      height
    },
    to: {
      top: height - 200,
      height
    },
    ease: "none"
  }, _react.default.createElement(_ImageContainer.default, {
    image: image,
    className: classes.img
  })))), _react.default.createElement("div", {
    className: "section"
  })), _react.default.createElement("div", {
    style: {
      position: 'absolute',
      width: '100%',
      top: 0
    }
  }, children)));
};

exports.default = _default;