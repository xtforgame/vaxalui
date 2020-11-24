"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _styles = require("@material-ui/core/styles");

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _CardActionArea = _interopRequireDefault(require("@material-ui/core/CardActionArea"));

var _CardActions = _interopRequireDefault(require("@material-ui/core/CardActions"));

var _CardContent = _interopRequireDefault(require("@material-ui/core/CardContent"));

var _CardMedia = _interopRequireDefault(require("@material-ui/core/CardMedia"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _BreakAllContentText = _interopRequireDefault(require("../BreakAllContentText"));

var _reveal = require("../reveal");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useStyles = (0, _styles.makeStyles)({
  root: {
    marginBottom: 60,
    display: 'inline-block',
    borderRadius: 0
  },
  media: {
    position: 'relative'
  },
  title: {
    display: 'flex',
    alignItems: 'center'
  },
  content: {
    paddingTop: 16,
    paddingBottom: 20,
    paddingLeft: 0,
    paddingRight: 0
  },
  cardAction: {
    paddingTop: 0,
    paddingRight: 0,
    paddingLeft: 0,
    paddingBottom: 0,
    marginBottom: 20
  }
});

var _default = ({
  height,
  width,
  title,
  timestamp = new Date(),
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
  }, _react.default.createElement(_CardMedia.default, {
    className: classes.media,
    style: {
      height
    },
    image: image
  }), _react.default.createElement(_CardContent.default, {
    className: classes.content
  }, timestamp && _react.default.createElement(_BreakAllContentText.default, {
    style: {
      fontFamily: 'FilsonSoft-Bold',
      fontSize: 12,
      lineHeight: 1.5,
      marginBottom: 8
    }
  }, (0, _moment.default)(timestamp).format('LL')), _react.default.createElement(_BreakAllContentText.default, {
    style: {
      fontFamily: 'FilsonSoft-Bold',
      fontSize: 22,
      lineHeight: '26px',
      textAlign: 'left',
      marginBottom: 8
    }
  }, title), _react.default.createElement(_BreakAllContentText.default, {
    style: {
      fontFamily: 'FilsonSoftRegular',
      fontSize: 14,
      lineHeight: 1.4
    }
  }, description)), _react.default.createElement(_CardActions.default, {
    className: classes.cardAction
  }, _react.default.createElement(_Button.default, {
    size: "small",
    color: "primary",
    style: {
      textDecoration: 'underline',
      color: '#c0c823',
      textTransform: 'none',
      padding: 0
    },
    onClick: onClick
  }, _react.default.createElement("span", null, "Read More"))));
};

exports.default = _default;