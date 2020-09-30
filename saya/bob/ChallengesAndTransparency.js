"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _ImageContainer = _interopRequireDefault(require("../ImageContainer"));

var _BreakAllContentText = _interopRequireDefault(require("../BreakAllContentText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  root: {
    paddingTop: 80
  },
  container: {
    width: 940
  },
  title: {
    fontSize: 40,
    lineHeight: 1.2,
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold'
  },
  line: {
    width: '100%',
    height: 1,
    marginTop: 16
  },
  subtitle: {
    fontSize: 20,
    fontFamily: 'FilsonSoftRegular',
    marginTop: 40
  },
  description: {
    fontSize: 14,
    fontFamily: 'FilsonSoftRegular',
    marginTop: 10
  },
  extendedRoot: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  extended: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 1024,
    height: 364,
    backgroundColor: '#444343',
    marginBottom: 54,
    marginTop: -182,
    zIndex: 2
  },
  left: {
    color: '#ffffff',
    width: 352,
    margin: 24,
    height: '100%',
    '& > .title': {
      fontSize: 20,
      marginTop: 80
    }
  },
  right: {
    color: '#ffffff',
    width: 352,
    margin: 24,
    height: '100%',
    '& > .title': {
      fontSize: 20,
      marginTop: 80
    }
  },
  space: {
    height: 12
  }
};

class ChallengesAndTransparency extends _react.default.PureComponent {
  render() {
    const {
      classes,
      height,
      title,
      backgroundImage,
      titleWidth,
      titlMarginTop,
      titleBack,
      subtitle,
      subtitleWidth,
      description,
      descriptionWidth,
      fontColor,
      lineBorder,
      backgroundColor,
      children
    } = this.props;
    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ImageContainer.default, {
      image: backgroundImage,
      className: classes.root,
      style: {
        height,
        color: fontColor,
        backgroundColor
      }
    }, _react.default.createElement("div", {
      className: classes.container
    }, _react.default.createElement("div", {
      className: classes.title,
      style: {
        width: titleWidth,
        marginTop: titlMarginTop
      }
    }, _react.default.createElement(_BreakAllContentText.default, {
      style: {
        fontFamily: 'FilsonSoft-Bold'
      }
    }, title)), _react.default.createElement("div", {
      className: classes.line,
      style: {
        border: lineBorder
      }
    }), _react.default.createElement("div", {
      className: classes.subtitle,
      style: {
        width: subtitleWidth
      }
    }, _react.default.createElement(_BreakAllContentText.default, {
      style: {
        fontFamily: 'FilsonSoftRegular'
      }
    }, subtitle)), _react.default.createElement("div", {
      className: classes.description,
      style: {
        width: descriptionWidth
      }
    }, _react.default.createElement(_BreakAllContentText.default, {
      style: {
        fontFamily: 'FilsonSoftRegular'
      }
    }, description)))), _react.default.createElement("div", {
      className: classes.extendedRoot
    }, _react.default.createElement("div", {
      className: classes.extended
    }, _react.default.createElement("div", {
      className: classes.left
    }, _react.default.createElement("div", {
      className: "title"
    }, "Type of Materials and Finishing"), _react.default.createElement("div", {
      style: {
        whiteSpace: 'pre-line',
        marginTop: 22,
        fontSize: 14
      }
    }, `Right now we are limited to 100% Polyester fabric cutting scraps without coating nor finishing, including water repellent.

                We aim to start recovering and recycling uncoated 100% Polyester fabrics with WR or DWR finishing by 1H 2021.`)), _react.default.createElement("div", {
      className: classes.right
    }, _react.default.createElement("div", {
      className: "title"
    }, "Content Percentage"), _react.default.createElement("div", {
      style: {
        whiteSpace: 'pre-line',
        marginTop: 22,
        fontSize: 14
      }
    }, `SAYA RSCUW Fibers consist of 3 types of recycled components. Garment cutting scrap, overstock fabric, waste yarn, and post-consumer PET bottles. Post industrial wastes make up a minimum of 15%, and post consumer bottles about 80-85%.

                Removing colors and pigments We aim to continuously increase the percentage of garment cutting scrap and overstock fabrics.`)))), _react.default.createElement("div", {
      className: classes.space
    }));
  }

}

var _default = (0, _styles.withStyles)(styles)(ChallengesAndTransparency);

exports.default = _default;