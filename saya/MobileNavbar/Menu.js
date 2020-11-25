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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
    fontFamily: 'FilsonSoftRegular',
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
          className: (0, _clsx.default)(classes.itemRoot, classes.firstLayerItem)
        }, _react.default.createElement(_Item.default, {
          name: name,
          index: index,
          path: `${index}`,
          firstLayerItem: true,
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
      className,
      onLinkClick,
      noJsLink,
      LinkComponent
    } = this.props;
    return _react.default.createElement(_MenuContext.MenuContext.Provider, {
      value: _objectSpread({}, this.state, {
        onLinkClick: onLinkClick || (path => {
          console.warn('default onLinkClick', path);
        }),
        noJsLink,
        LinkComponent
      })
    }, _react.default.createElement("div", {
      className: (0, _clsx.default)(classes.menuRoot, className)
    }, this.renderFirstLayer()));
  }

}

Menu.propTypes = {};
Menu.defaultProps = {};

var _default = (0, _styles.withStyles)(styles)(Menu);

exports.default = _default;