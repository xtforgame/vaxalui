"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _CardActionArea = _interopRequireDefault(require("@material-ui/core/CardActionArea"));

var _CardActions = _interopRequireDefault(require("@material-ui/core/CardActions"));

var _CardContent = _interopRequireDefault(require("@material-ui/core/CardContent"));

var _CardMedia = _interopRequireDefault(require("@material-ui/core/CardMedia"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _BreakAllContentText = _interopRequireDefault(require("./BreakAllContentText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useStyles = (0, _styles.makeStyles)({
  root: {
    margin: 12,
    borderRadius: 0,
    width: 260
  },
  media: {
    position: 'relative',
    width: 205
  },
  titleSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'left',
    width: 220,
    height: 150,
    color: '#ffffff'
  },
  cardAction: {
    paddingTop: 0,
    paddingRight: 0,
    paddingLeft: 0,
    paddingBottom: 0
  }
});

var _default = ({
  title,
  description,
  image,
  onClick,
  elevation = 0,
  style
}) => {
  const classes = useStyles();
  return _react.default.createElement(_Card.default, {
    className: classes.root,
    style: style,
    elevation: elevation
  }, _react.default.createElement(_CardActionArea.default, {
    onClick: onClick
  }, _react.default.createElement(_CardMedia.default, {
    className: classes.media,
    image: image
  }, _react.default.createElement("div", {
    className: classes.titleSection
  }, _react.default.createElement("div", {
    className: classes.title
  }, _react.default.createElement(_BreakAllContentText.default, {
    style: {
      fontFamily: 'FilsonSoft-Bold',
      fontSize: 23
    }
  }, title)))), _react.default.createElement(_BreakAllContentText.default, {
    style: {
      fontFamily: 'FilsonSoftRegular',
      fontSize: 12,
      lineHeight: 1.54,
      paddingTop: 16,
      paddingBottom: 10,
      paddingLeft: 20,
      paddingRight: 20
    }
  }, description)), _react.default.createElement("div", {
    className: classes.cardAction
  }, _react.default.createElement("div", {
    style: {
      flex: 1
    }
  }), _react.default.createElement(_Button.default, {
    size: "small",
    color: "primary",
    style: {
      color: '#c0c823'
    },
    onClick: onClick
  }, _react.default.createElement("u", null, "Read More"))));
};

exports.default = _default;