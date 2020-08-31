"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _ImageContainer = _interopRequireDefault(require("../ImageContainer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useStyles = (0, _styles.makeStyles)(theme => ({
  root: {
    color: '#000000'
  },
  number: {
    fontSize: 121,
    fontFamily: 'FilsonSoftRegular',
    lineHeight: 0.83,
    textAlign: 'left'
  },
  percent: {
    fontSize: 20,
    fontFamily: 'FilsonSoftRegular'
  },
  topTile: {
    fontSize: 18,
    fontFamily: 'FilsonSoftRegular',
    paddingTop: 16,
    textAlign: 'left'
  },
  line: {
    width: 189,
    height: 1,
    border: '1px solid #000000',
    marginTop: 8,
    textAlign: 'left'
  },
  bottomTitle: {
    fontSize: 18,
    fontFamily: 'FilsonSoftRegular',
    paddingTop: 9,
    textAlign: 'left'
  },
  subtitle: {
    textAlign: 'left',
    fontSize: 18,
    paddingTop: 37
  },
  content: {
    textAlign: 'left',
    fontSize: 14,
    paddingTop: 7
  }
}));

var _default = props => {
  const {
    numberUpTitle,
    number,
    numberColor,
    topTile,
    bottomTitle,
    subtitle,
    content,
    height,
    backgroundColor,
    percentDisplay,
    marginTop
  } = props;
  const classes = useStyles();
  return _react.default.createElement(_ImageContainer.default, {
    className: classes.root,
    style: {
      height,
      backgroundColor,
      width: '100%'
    }
  }, _react.default.createElement("div", {
    style: {
      position: 'absolute',
      width: 310,
      marginTop: marginTop
    }
  }, _react.default.createElement("div", {
    className: classes.numberUpTitle
  }, " ", numberUpTitle, " "), _react.default.createElement("div", {
    className: classes.number,
    style: {
      color: numberColor
    }
  }, number, _react.default.createElement("span", {
    className: classes.percent,
    style: {
      display: percentDisplay
    }
  }, "%")), _react.default.createElement("div", {
    style: {
      paddingLeft: 10
    }
  }, _react.default.createElement("div", {
    className: classes.topTile
  }, " ", topTile, " "), _react.default.createElement("div", {
    className: classes.line
  }), _react.default.createElement("div", {
    className: classes.bottomTitle
  }, " ", bottomTitle, " "), _react.default.createElement("div", {
    className: classes.subtitle
  }, _react.default.createElement("pre", {
    style: {
      fontFamily: 'FilsonSoft-Bold',
      marginBottom: 0
    }
  }, subtitle)), _react.default.createElement("div", {
    className: classes.content
  }, _react.default.createElement("pre", {
    style: {
      fontFamily: 'FilsonSoftRegular'
    }
  }, content)))));
};

exports.default = _default;