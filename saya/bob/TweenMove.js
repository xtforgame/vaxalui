"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _reactScrollmagic = require("react-scrollmagic");

var _reactGsap = require("react-gsap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useStyle = (0, _styles.makeStyles)({
  section: {
    position: 'relative',
    width: '100%',
    height: '100%'
  },
  bgWrap: {
    clip: 'rect(0, auto, auto, 0)',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },
  bg: {
    position: 'fixed',
    display: 'block',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    transform: 'translateZ(0)',
    willChange: 'transform'
  },
  main: {
    zIndex: 1
  }
});

var _default = props => {
  const {
    children,
    image
  } = props;
  const classes = useStyle();
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("section", {
    className: classes.section
  }, _react.default.createElement("div", {
    className: classes.bgWrap
  }, _react.default.createElement("div", {
    className: classes.bg,
    style: {
      backgroundImage: `url(${image})`
    }
  })), _react.default.createElement("div", {
    className: classes.main
  }, children)));
};

exports.default = _default;