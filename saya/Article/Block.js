"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _BreakAllContentText = _interopRequireDefault(require("../BreakAllContentText"));

var _clsx = _interopRequireDefault(require("clsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useStyles = (0, _styles.makeStyles)(theme => ({
  root: {
    width: '100%',
    color: '#000000'
  },
  container: {
    width: 780
  },
  title: {
    textAlign: 'left',
    fontSize: 40,
    marginTop: 10,
    marginBottom: 40
  },
  paragraph: {
    textAlign: 'left',
    fontSize: 14,
    marginBottom: 40,
    fontFamily: 'FilsonSoft-Bold',
    lineHeight: 1.5
  },
  paragraphBody: {
    fontSize: 14,
    fontFamily: 'FilsonSoftRegular',
    lineHeight: 1.5
  },
  paragraphHeading4: {
    fontSize: 20,
    fontFamily: 'FilsonSoft-Bold',
    lineHeight: 1.5
  },
  paragraphSubtitle: {
    fontSize: 16,
    fontFamily: 'FilsonSoft-Bold',
    lineHeight: 1.5
  },
  image: {
    marginBottom: 40
  }
}));

var _default = props => {
  const {
    data
  } = props;
  const classes = useStyles();

  if (data.type === 'paragraph') {
    let textClass = classes.paragraphBody;

    switch (data.variant) {
      case 'heading4':
        textClass = classes.paragraphHeading4;
        break;

      case 'subtitle':
        textClass = classes.paragraphSubtitle;
        break;

      default:
        textClass = classes.paragraphBody;
        break;
    }

    return _react.default.createElement("div", null, _react.default.createElement(_BreakAllContentText.default, {
      className: (0, _clsx.default)(classes.paragraph, textClass)
    }, data.text));
  } else if (data.type === 'image') {
    return _react.default.createElement("div", {
      className: classes.image
    }, _react.default.createElement("img", {
      width: "100%",
      src: data.src
    }));
  }

  return null;
};

exports.default = _default;