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
    margin: 20,
    borderRadius: 30
  },
  media: {
    position: 'relative'
  },
  mask: {
    width: '100%',
    height: '100%',
    opacity: 0.5,
    backgroundColor: '#000000'
  },
  title: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    color: '#ffffff',
    top: 0,
    paddingTop: 60,
    paddingRight: 30,
    paddingLeft: 30
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
    elevation: 8
  }, _react.default.createElement(_CardActionArea.default, {
    onClick: onClick
  }, _react.default.createElement(_CardMedia.default, {
    className: classes.media,
    style: {
      height
    },
    image: image
  }, _react.default.createElement("div", {
    className: classes.mask
  }), _react.default.createElement("div", {
    className: classes.title
  }, _react.default.createElement(_BreakAllContentText.default, {
    style: {
      fontFamily: 'FilsonSoft-Bold',
      fontSize: 28
    }
  }, title))), _react.default.createElement(_CardContent.default, null, _react.default.createElement(_BreakAllContentText.default, {
    style: {
      fontFamily: 'FilsonSoftRegular',
      fontSize: 14,
      lineHeight: 1.5
    }
  }, description))), _react.default.createElement(_CardActions.default, {
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