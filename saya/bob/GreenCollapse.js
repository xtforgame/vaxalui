"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/core/styles");

var _icons = require("@material-ui/icons");

var _CenteredContainer = _interopRequireDefault(require("../CenteredContainer"));

var _Text = _interopRequireDefault(require("./Text"));

var _clsx = _interopRequireDefault(require("clsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const useStyle = (0, _styles.makeStyles)(theme => ({
  upperPart: {
    paddingTop: 80,
    color: '#ffffff',
    backgroundColor: '#64703f'
  },
  lowerPart: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginBottom: 12
  },
  lowerLeft: {
    color: '#ffffff',
    backgroundColor: '#64703f',
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
    height: 'fit-content'
  },
  lowerRight: {
    color: '#ffffff',
    width: 0,
    position: 'relative',
    left: 'calc(-50% - 10px)'
  },
  lowerFlexContainer: {},
  container: {
    width: 940
  },
  container2: {
    width: 940,
    display: 'flex',
    justifyContent: 'flex-start',
    position: 'relative'
  },
  title: {
    width: 780,
    fontSize: 40,
    lineHeight: 1.2
  },
  line: {
    width: '100%',
    height: 1,
    marginTop: 36,
    backgroundColor: '#ffffff',
    marginBottom: 20
  },
  leftContainer: {
    width: 460,
    paddingBottom: 48
  },
  rightContainer: {
    width: 480,
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: 40
  },
  subtitle: {
    fontSize: 20
  },
  button: {
    marginTop: 32,
    marginBottom: 32
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
    subtitle,
    description,
    image,
    expended: e
  } = props;
  const classes = useStyle();
  const [expended, setExpanded] = (0, _react.useState)(!!e);
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_CenteredContainer.default, {
    className: classes.upperPart
  }, _react.default.createElement("div", {
    className: classes.container
  }, _react.default.createElement(_Text.default, {
    className: classes.title,
    family: "bold"
  }, title), _react.default.createElement("div", {
    className: classes.leftContainer
  }, _react.default.createElement("div", {
    className: classes.line
  })))), _react.default.createElement("div", {
    className: classes.lowerPart
  }, _react.default.createElement("div", {
    className: classes.lowerLeft
  }, _react.default.createElement("div", {
    className: classes.container2
  }, _react.default.createElement("div", {
    className: classes.leftContainer
  }, _react.default.createElement(_Text.default, {
    className: classes.subtitle
  }, subtitle), !expended && _react.default.createElement(_icons.AddCircle, {
    className: classes.button,
    onClick: () => {
      setExpanded(true);
    },
    style: {
      width: 46,
      height: 46,
      color: '#e3e3e3'
    }
  }), expended && _react.default.createElement(_icons.RemoveCircle, {
    className: classes.button,
    onClick: () => {
      setExpanded(false);
    },
    style: {
      width: 46,
      height: 46,
      color: '#e3e3e3'
    }
  }), _react.default.createElement("div", {
    className: (0, _clsx.default)(classes.expandedArea, {
      [classes.hide]: !expended
    })
  }, _react.default.createElement(_Text.default, {
    className: classes.description
  }, description))))), _react.default.createElement("div", {
    className: classes.lowerRight
  }, _react.default.createElement("div", {
    className: classes.rightContainer
  }, image))));
};

exports.default = _default;