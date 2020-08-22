"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.isOpened = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _clsx = _interopRequireDefault(require("clsx"));

var _ItemList = _interopRequireDefault(require("./ItemList"));

var _MenuContext = require("./MenuContext");

var _Item = require("./Item");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const styles = theme => ({
  root: {
    width: '100%',
    position: 'relative'
  },
  itemListRoot: {
    opacity: 0
  },
  name: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: theme.spacing(3),
    height: (0, _Item.getSize)(theme).height
  },
  openedMaxHeight: {
    maxHeight: 1000,
    transitionProperty: 'max-height',
    transitionDuration: '1s',
    transitionDelay: '0s'
  },
  openedOpacity: {
    opacity: 1,
    transitionProperty: 'opacity',
    transitionDuration: '0.1s',
    transitionDelay: '0.25s'
  },
  closedMaxHeight: {
    maxHeight: (0, _Item.getSize)(theme).height,
    transitionProperty: 'max-height',
    transitionDuration: '0.5s',
    transitionDelay: '0s'
  },
  closedOpacity: {
    opacity: 0,
    transitionProperty: 'opacity',
    transitionDuration: '0.1s',
    transitionDelay: '0s'
  }
});

const isOpened = (path, currentPath) => {
  if (currentPath === '') return false;
  if (!currentPath.startsWith(path)) return false;
  return true;
};

exports.isOpened = isOpened;

const triangleStyles = theme => ({
  up: {
    width: 0,
    height: 0,
    borderLeft: '5px solid transparent',
    borderRight: '5px solid transparent',
    borderBottom: '5px solid white',
    transform: 'rotate(0deg)',
    transitionProperty: 'transform',
    transitionDuration: '0.1s',
    transitionDelay: '0s'
  },
  right: {
    transform: 'rotate(90deg)',
    transitionProperty: 'transform',
    transitionDuration: '0.1s',
    transitionDelay: '0s'
  }
});

const UpTriangle = (0, _styles.withStyles)(triangleStyles)(({
  classes,
  up
}) => _react.default.createElement("div", {
  className: (0, _clsx.default)(classes.up, {
    [classes.right]: !up
  })
}));

class ExpandItem extends _react.default.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "isOpened", () => {
      const {
        path
      } = this.props;
      const {
        currentPath
      } = this.context;
      return isOpened(path, currentPath);
    });

    _defineProperty(this, "renderName", () => {
      const {
        classes,
        name
      } = this.props;

      const endAdornment = _react.default.createElement(UpTriangle, {
        up: this.isOpened()
      });

      return _react.default.createElement("div", {
        className: classes.name
      }, _react.default.createElement("div", null, name), _react.default.createElement("div", null, endAdornment));
    });

    _defineProperty(this, "renderItemList", () => {
      const {
        classes,
        path,
        items,
        theme
      } = this.props;
      return _react.default.createElement("div", {
        className: (0, _clsx.default)(classes.itemListRoot, {
          [classes.openedOpacity]: this.isOpened(),
          [classes.closedOpacity]: !this.isOpened()
        })
      }, this.isOpened() && _react.default.createElement(_ItemList.default, {
        items: items,
        root: path
      }));
    });
  }

  render() {
    const {
      classes,
      className
    } = this.props;
    return _react.default.createElement("div", {
      className: (0, _clsx.default)(classes.root, className, {
        [classes.openedMaxHeight]: this.isOpened(),
        [classes.closedMaxHeight]: !this.isOpened()
      })
    }, this.renderName(), this.renderItemList());
  }

}

ExpandItem.propTypes = {
  path: _propTypes.default.string.isRequired,
  name: _propTypes.default.string.isRequired,
  items: _propTypes.default.array.isRequired
};
ExpandItem.defaultProps = {};
ExpandItem.contextType = _MenuContext.MenuContext;

var _default = (0, _styles.withStyles)(styles, {
  withTheme: true
})(ExpandItem);

exports.default = _default;