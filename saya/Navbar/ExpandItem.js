"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.isOpened = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _clsx = _interopRequireDefault(require("clsx"));

var _ItemList = _interopRequireDefault(require("./ItemList"));

var _MenuContext = require("./MenuContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const useStyles = (0, _styles.makeStyles)(theme => ({
  root: {
    position: 'relative'
  },
  itemListRoot: {
    position: 'absolute'
  },
  specialNameRoot: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  darkArrow: {
    borderLeftColor: '#808080'
  },
  rightArrow: {
    width: 0,
    height: 0,
    borderTop: '4px solid transparent',
    borderBottom: '4px solid transparent',
    borderLeftStyle: 'solid',
    borderLeftWidth: '4px',
    transitionProperty: 'border-left-color',
    transitionDuration: '0.2s',
    transitionDelay: '0s'
  },
  space: {
    width: 8,
    height: 8
  }
}));

const isOpened = (path, currentPath) => {
  if (currentPath === '') return false;
  if (!currentPath.startsWith(path)) return false;
  return true;
};

exports.isOpened = isOpened;

var _default = props => {
  const {
    path,
    name: inName,
    listDirection,
    items,
    theme,
    dark,
    className
  } = props;
  const {
    currentPath
  } = (0, _react.useContext)(_MenuContext.MenuContext);
  const classes = useStyles();
  const textItem = (0, _react.useRef)();
  (0, _react.useEffect)(() => {});

  const renderName = () => {
    let name;

    if (listDirection === 'bottom') {
      name = _react.default.createElement("div", null, _react.default.createElement("div", null, inName), _react.default.createElement("div", {
        className: classes.space
      }));
    } else if (listDirection === 'right') {
      name = _react.default.createElement("div", {
        className: classes.specialNameRoot
      }, _react.default.createElement("div", null, inName), _react.default.createElement("div", {
        className: classes.space
      }), _react.default.createElement("div", {
        className: (0, _clsx.default)(classes.rightArrow, {
          [classes.darkArrow]: dark
        })
      }));
    }

    return _react.default.createElement("div", {
      ref: textItem
    }, name);
  };

  const renderItemList = () => {
    if (!isOpened(path, currentPath)) return null;
    const listAtRight = {
      left: textItem.current && textItem.current.offsetWidth,
      top: -4,
      paddingLeft: 8
    };
    const style = listDirection === 'right' ? listAtRight : {};
    return _react.default.createElement("div", {
      className: classes.itemListRoot,
      style: style
    }, _react.default.createElement(_ItemList.default, {
      items: items,
      root: path
    }));
  };

  return _react.default.createElement("div", {
    className: (0, _clsx.default)(classes.root, className)
  }, renderName(), renderItemList());
};

exports.default = _default;