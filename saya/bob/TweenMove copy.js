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
    children,
    image
  } = props;
  const classes = useStyle();
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
    style: {
      position: 'relative',
      backgroundSize: 'cover',
      backgroundImage: `url(${image})`,
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center'
    }
  }, children));
};

exports.default = _default;