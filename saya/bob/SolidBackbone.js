"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _ImageContainer = _interopRequireDefault(require("../ImageContainer"));

var _BreakAllContentText = _interopRequireDefault(require("../BreakAllContentText"));

var _AnimatedNumber = _interopRequireDefault(require("./AnimatedNumber"));

var _reveal = require("../reveal");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 501,
    color: '#FFFFFF'
  },
  firstTitle: {
    width: 'fit-content',
    fontSize: 20,
    fontFamily: 'FilsonSoft-Bold',
    textAlign: 'left'
  },
  container: {
    width: 940
  },
  firstLine: {
    height: 1,
    border: '1px solid #ffffff',
    width: '100%'
  },
  secondTitle: {
    width: 780,
    fontSize: 72,
    fontWeight: 300,
    fontFamily: 'FilsonSoft-Light',
    lineHeight: 1,
    marginTop: 30
  },
  secondLine: {
    width: 420,
    height: 1,
    marginTop: 2
  },
  thirdTitle: {
    marginTop: 16,
    fontSize: 20,
    fontFamily: 'FilsonSoft-Bold'
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

class SolidBackbone extends _react.default.PureComponent {
  render() {
    const {
      classes,
      backgroundImage,
      firstTitle,
      secondTitle,
      thirdTitle,
      block
    } = this.props;
    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ImageContainer.default, {
      image: backgroundImage,
      className: classes.root
    }, _react.default.createElement("div", {
      className: classes.container
    }, _react.default.createElement(_BreakAllContentText.default, {
      className: classes.firstTitle
    }, _react.default.createElement(_reveal.Slide, {
      direction: "up",
      triggerOnce: true
    }, _react.default.createElement("div", null, firstTitle), _react.default.createElement("div", {
      className: classes.firstLine
    }))), _react.default.createElement("div", null, _react.default.createElement(_reveal.Slide, {
      direction: "up",
      triggerOnce: true
    }, _react.default.createElement("div", {
      className: classes.secondTitle
    }, secondTitle), _react.default.createElement(_BreakAllContentText.default, {
      className: classes.thirdTitle
    }, thirdTitle))))), _react.default.createElement("div", {
      className: classes.blockRoot
    }, block.map(b => {
      let suffix = '%';

      if (b.suffix != null) {
        ({
          suffix
        } = b);
      }

      return _react.default.createElement("div", {
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
      }, _react.default.createElement(_AnimatedNumber.default, {
        width: 200,
        number: b.num,
        suffix: suffix,
        numberColor: b.color,
        percentDisplay: !!suffix,
        percentColor: b.color
      }), _react.default.createElement("div", {
        style: {
          color: b.color,
          marginTop: 8
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
      }, b.bottom))));
    })));
  }

}

var _default = (0, _styles.withStyles)(styles)(SolidBackbone);

exports.default = _default;