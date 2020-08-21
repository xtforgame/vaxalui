"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _styles = require("@material-ui/core/styles");

var _Item = _interopRequireDefault(require("./Item"));

var _ExpandItem = _interopRequireDefault(require("./ExpandItem"));

var _MenuContext = require("./MenuContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const styles = theme => ({
  rootExpandItem: {
    width: '100%'
  },
  menuRoot: {
    display: 'block',
    backgroundColor: 'black',
    color: 'white'
  },
  itemRoot: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)
  }
});

class Menu extends _react.default.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "enterPath", (path, itemType) => {
      const {
        currentPath
      } = this.state;

      if (itemType === 'link') {
        this.setState({
          currentPath: ''
        });
        const {
          items,
          onChange
        } = this.props;
        const indexes = path.split('/');
        const {
          link: linkAddress
        } = indexes.reduce((accu, i) => (accu = accu.items[i], accu), {
          items
        });
        onChange(null, linkAddress);
      } else if (path === currentPath) {
        this.setState({
          currentPath: currentPath.split('/').slice(0, -1).join('/')
        });
      } else {
        this.setState({
          currentPath: path
        });
      }
    });

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
          type: "expand"
        }, _react.default.createElement(_ExpandItem.default, {
          name: name,
          path: `${index}`,
          items: items,
          className: classes.rootExpandItem
        })));
      });
      return firstLayerItems;
    });

    this.state = {
      currentPath: '',
      enterPath: this.enterPath
    };
  }

  render() {
    const {
      classes,
      className
    } = this.props;
    return _react.default.createElement(_MenuContext.MenuContext.Provider, {
      value: this.state
    }, _react.default.createElement("div", {
      className: (0, _clsx.default)(classes.menuRoot, className)
    }, this.renderFirstLayer()));
  }

}

Menu.propTypes = {};
Menu.defaultProps = {};

var _default = (0, _styles.withStyles)(styles)(Menu);

exports.default = _default;