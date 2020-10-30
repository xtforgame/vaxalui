"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _reactAwesomeReveal = require("react-awesome-reveal");

var _ImageContainer = _interopRequireDefault(require("../ImageContainer"));

var _BreakAllContentText = _interopRequireDefault(require("../BreakAllContentText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  root: {
    paddingTop: 100,
    backgroundColor: '#444343',
    color: '#FFFFFF'
  },
  container: {
    width: 940
  },
  title: {
    width: 'fit-content',
    fontSize: 20,
    lineHeight: 1.2,
    fontFamily: 'FilsonSoft-Bold'
  },
  line: {
    width: '100%',
    height: 1,
    borderBottom: '1px solid #FFFFFF'
  },
  subtitle: {
    fontSize: 20,
    fontFamily: 'FilsonSoftRegular',
    marginTop: 60,
    marginBottom: 146
  },
  blockRoot: {},
  block: {
    position: 'relative',
    display: 'inline-block',
    width: '50vw',
    height: '50vw'
  },
  blockContent: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  num: {
    fontSize: 180,
    lineHeight: 0.8
  },
  top: {
    fontSize: 20,
    fontFamily: 'FilsonSoft-Bold'
  },
  bottom: {
    fontSize: 20,
    fontFamily: 'FilsonSoft-Bold'
  },
  space: {
    height: 12
  }
};

class ProductFeatures extends _react.default.PureComponent {
  render() {
    const {
      classes,
      color,
      title,
      list,
      block
    } = this.props;
    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ImageContainer.default, {
      className: classes.root
    }, _react.default.createElement("div", {
      className: classes.container
    }, _react.default.createElement("div", {
      className: classes.title
    }, _react.default.createElement("div", {
      style: {
        fontFamily: 'FilsonSoft-Bold'
      }
    }, title), _react.default.createElement("div", {
      className: classes.line
    })), _react.default.createElement("div", {
      className: classes.subtitle
    }, list.map(l => _react.default.createElement(_reactAwesomeReveal.Fade, {
      triggerOnce: true
    }, _react.default.createElement(_BreakAllContentText.default, {
      style: {
        fontSize: 28,
        fontFamily: 'FilsonSoftRegular'
      }
    }, `・ ${l}`)))))), _react.default.createElement("div", {
      className: classes.blockRoot
    }, block.map(b => _react.default.createElement("div", {
      className: classes.block,
      style: {
        backgroundSize: 'cover',
        backgroundColor: b.bg,
        backgroundImage: `url(${b.bg})`
      }
    }, _react.default.createElement("div", {
      className: classes.blockContent
    }, _react.default.createElement("div", {
      style: {
        color: b.color
      },
      className: classes.num
    }, b.num, _react.default.createElement("span", {
      style: {
        fontSize: 20,
        color: b.color
      }
    }, "%"), _react.default.createElement("div", {
      style: {
        color: b.color
      },
      className: classes.top
    }, b.top), _react.default.createElement("div", {
      style: {
        margin: '12px 0',
        color: b.color,
        width: '100%',
        border: `1px solid ${b.color}`
      }
    }), _react.default.createElement("div", {
      style: {
        color: b.color
      },
      className: classes.bottom
    }, b.bottom)))))));
  }

}

var _default = (0, _styles.withStyles)(styles)(ProductFeatures);

exports.default = _default;