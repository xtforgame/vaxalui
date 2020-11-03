"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/core/styles");

var _icons = require("@material-ui/icons");

var _clsx = _interopRequireDefault(require("clsx"));

var _CenteredContainer = _interopRequireDefault(require("../CenteredContainer"));

var _reveal = require("../reveal");

var _Text = _interopRequireDefault(require("./Text"));

var _Table = _interopRequireDefault(require("./Table"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const useStyle = (0, _styles.makeStyles)(theme => ({
  upperPart: {
    paddingTop: 80,
    paddingBottom: 110,
    textAlign: 'center'
  },
  title: {
    width: 620,
    fontSize: 40,
    lineHeight: 1.2
  },
  button: {
    marginTop: 34,
    marginBottom: 4
  },
  description: {
    fontSize: 14
  },
  expandedArea: {
    overflow: 'hidden',
    transitionProperty: 'height',
    transitionDuration: '0.33s'
  },
  hide: {
    height: 0
  }
}));

var _default = props => {
  const {
    title,
    expended: e,
    color = '#000000',
    backgroundColor = '#ffffff',
    buttonColor = '#64703f',
    hideButton,
    rows
  } = props;
  const classes = useStyle();
  const [expended, setExpanded] = (0, _react.useState)(!!e);
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_CenteredContainer.default, {
    className: classes.upperPart,
    style: {
      backgroundColor,
      color
    }
  }, _react.default.createElement(_reveal.Slide, {
    direction: "up",
    triggerOnce: true,
    duration: 1000
  }, _react.default.createElement(_Text.default, {
    className: classes.title,
    family: "bold"
  }, title), _react.default.createElement("div", null, !expended && !hideButton && _react.default.createElement(_icons.AddCircle, {
    className: classes.button,
    onClick: () => {
      setExpanded(true);
    },
    style: {
      width: 46,
      height: 46,
      color: buttonColor
    }
  }), expended && !hideButton && _react.default.createElement(_icons.RemoveCircle, {
    className: classes.button,
    onClick: () => {
      setExpanded(false);
    },
    style: {
      width: 46,
      height: 46,
      color: buttonColor
    }
  })), _react.default.createElement("div", {
    className: (0, _clsx.default)(classes.expandedArea, {
      [classes.hide]: !expended
    })
  }, _react.default.createElement(_Table.default, {
    rows: rows
  })))));
};

exports.default = _default;