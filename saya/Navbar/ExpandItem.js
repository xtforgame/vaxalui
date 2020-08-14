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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const styles = theme => ({
  root: _objectSpread({}, (0, _Item.getSize)(theme), {
    position: 'relative'
  }),
  itemListRoot: {
    position: 'absolute'
  },
  specialNameRoot: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: theme.spacing(3)
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

    _defineProperty(this, "getTopOffset", () => {
      const {
        path,
        theme
      } = this.props;
      const ith = path.split('/').pop();
      return ith * (0, _Item.getSize)(theme).height * -1;
    });

    _defineProperty(this, "renderName", () => {
      const {
        classes,
        name: inName,
        listDirection
      } = this.props;
      let name;

      if (listDirection === 'bottom') {
        name = inName;
      } else if (listDirection === 'right') {
        name = _react.default.createElement("div", {
          className: classes.specialNameRoot
        }, _react.default.createElement("div", null, inName), _react.default.createElement("div", null, "\u2014"));
      }

      return _react.default.createElement("div", null, name);
    });

    _defineProperty(this, "renderItemList", () => {
      const {
        classes,
        path,
        items,
        listDirection,
        theme
      } = this.props;
      if (!this.isOpened()) return null;
      const listAtRight = {
        left: (0, _Item.getSize)(theme).width,
        top: this.getTopOffset()
      };
      const style = listDirection === 'right' ? listAtRight : {};
      return _react.default.createElement("div", {
        className: classes.itemListRoot,
        style: style
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
  items: _propTypes.default.array.isRequired,
  listDirection: _propTypes.default.oneOf(['bottom', 'right'])
};
ExpandItem.defaultProps = {
  listDirection: 'bottom'
};
ExpandItem.contextType = _MenuContext.MenuContext;

var _default = (0, _styles.withStyles)(styles, {
  withTheme: true
})(ExpandItem);

exports.default = _default;