"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _Item = _interopRequireDefault(require("./Item"));

var _ExpandItem = _interopRequireDefault(require("./ExpandItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const styles = theme => ({
  specialExpandItem: {
    width: 'auto'
  },
  menuRoot: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  itemRoot: {
    marginLeft: 30,
    marginRight: 30
  }
});

class Menu extends _react.default.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "renderFirstLayer", () => {
      const {
        classes,
        items
      } = this.props;
      const firstLayerItems = items.map((item, index) => {
        const {
          name,
          items
        } = item;
        return _react.default.createElement("div", {
          key: index.toString(),
          className: classes.itemRoot
        }, _react.default.createElement(_Item.default, {
          name: name,
          index: index,
          path: `${index}`,
          firstLayer: true
        }, _react.default.createElement(_ExpandItem.default, {
          name: name,
          path: `${index}`,
          items: items,
          listDirection: "bottom",
          className: classes.specialExpandItem
        })));
      });
      return firstLayerItems;
    });
  }

  render() {
    const {
      classes
    } = this.props;
    return _react.default.createElement("div", {
      className: classes.menuRoot
    }, this.renderFirstLayer());
  }

}

var _default = (0, _styles.withStyles)(styles)(Menu);

exports.default = _default;