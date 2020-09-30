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

var _BreakAllContentText = _interopRequireDefault(require("../BreakAllContentText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useStyles = (0, _styles.makeStyles)({
  root: {
    marginBottom: 72,
    display: 'inline-block'
  },
  media: {
    position: 'relative'
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 26,
    width: '100%',
    height: '100%',
    position: 'absolute',
    color: '#ffffff',
    top: 0,
    padding: 15
  },
  cardAction: {
    paddingTop: 0,
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: 16
  }
});

var _default = ({
  height,
  width,
  title,
  description,
  image,
  onClick
}) => {
  const classes = useStyles();
  return _react.default.createElement(_Card.default, {
    className: classes.root,
    style: {
      width
    },
    elevation: 0
  }, _react.default.createElement(_CardActionArea.default, {
    onClick: onClick
  }, _react.default.createElement(_CardMedia.default, {
    className: classes.media,
    style: {
      height
    },
    image: image
  }, _react.default.createElement("div", {
    className: classes.title
  }, _react.default.createElement(_BreakAllContentText.default, {
    style: {
      fontFamily: 'FilsonSoft-Bold',
      fontSize: 28,
      textAlign: 'left'
    }
  }, title))), _react.default.createElement(_CardContent.default, null, _react.default.createElement(_BreakAllContentText.default, {
    style: {
      fontFamily: 'FilsonSoftRegular',
      fontSize: 14,
      lineHeight: 1.5
    }
  }, description))), _react.default.createElement(_CardActions.default, {
    className: classes.cardAction
  }, _react.default.createElement(_Button.default, {
    size: "small",
    color: "primary",
    style: {
      textDecoration: 'underline',
      color: '#c0c823',
      textTransform: 'none'
    },
    onClick: onClick
  }, _react.default.createElement("span", null, "Read More"))));
};

exports.default = _default;