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
    height: 'auto',
    position: 'relative'
  },
  itemListRoot: {},
  name: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: theme.spacing(3),
    height: (0, _Item.getSize)(theme).height
  }
});

const isOpened = (path, currentPath) => {
  if (currentPath === '') return false;
  if (!currentPath.startsWith(path)) return false;
  return true;
};

exports.isOpened = isOpened;

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
      let endAdornment = '>';

      if (this.isOpened()) {
        endAdornment = '^';
      }

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
      if (!this.isOpened()) return null;
      return _react.default.createElement("div", {
        className: classes.itemListRoot
      }, _react.default.createElement(_ItemList.default, {
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
      className: (0, _clsx.default)(classes.root, className)
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