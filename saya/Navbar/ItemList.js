"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _clsx = _interopRequireDefault(require("clsx"));

var _Item = _interopRequireDefault(require("./Item"));

var _ExpandItem = _interopRequireWildcard(require("./ExpandItem"));

var _LinkItem = _interopRequireDefault(require("./LinkItem"));

var _MenuContext = require("./MenuContext");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const styles = theme => ({
  root: {
    zIndex: 2048,
    backgroundColor: 'transparent'
  },
  itemRoot: {},
  darkItem: {
    color: '#808080',
    transitionProperty: 'color',
    transitionDuration: '0.2s',
    transitionDelay: '0s',
    '&:hover': {
      color: '808080'
    }
  }
});

class ItemList extends _react.default.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "renderItem", (item, index) => {
      console.log('item :', item);
      const {
        classes,
        root
      } = this.props;
      const {
        name,
        link,
        items,
        listDirection
      } = item;
      const {
        currentPath
      } = this.context;
      const path = `${root}/${index}`;
      let body;

      if (link) {
        body = _react.default.createElement(_Item.default, {
          path: path
        }, _react.default.createElement(_LinkItem.default, {
          to: link,
          name: name,
          disabled: item.disabled,
          className: (0, _clsx.default)({
            [classes.darkItem]: !this.allClosed && !(0, _ExpandItem.isOpened)(path, currentPath) || item.disabled
          })
        }));
      } else if (items) {
        body = _react.default.createElement(_Item.default, {
          path: path
        }, _react.default.createElement(_ExpandItem.default, {
          name: name,
          path: path,
          items: items,
          listDirection: listDirection,
          className: (0, _clsx.default)({
            [classes.darkItem]: !this.allClosed && !(0, _ExpandItem.isOpened)(path, currentPath) || item.disabled
          })
        }));
      }

      return _react.default.createElement("div", {
        key: index.toString(),
        className: classes.itemRoot
      }, body);
    });

    _defineProperty(this, "renderItems", () => {
      const {
        items,
        root
      } = this.props;
      const {
        currentPath
      } = this.context;
      this.allClosed = items.every((item, index) => item.link || !(0, _ExpandItem.isOpened)(`${root}/${index}`, currentPath));
      return items.map(this.renderItem);
    });
  }

  render() {
    const {
      classes
    } = this.props;
    return _react.default.createElement("div", {
      className: classes.root
    }, this.renderItems());
  }

}

ItemList.propTypes = {
  root: _propTypes.default.string.isRequired,
  items: _propTypes.default.arrayOf(_propTypes.default.shape({
    name: _propTypes.default.string.isRequired,
    link: _propTypes.default.string,
    items: _propTypes.default.array,
    listDirection: _propTypes.default.oneOf(['bottom', 'right'])
  })).isRequired
};
ItemList.defaultProps = {};
ItemList.contextType = _MenuContext.MenuContext;

var _default = (0, _styles.withStyles)(styles)(ItemList);

exports.default = _default;