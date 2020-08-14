"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _Item = _interopRequireDefault(require("./Item"));

var _ExpandItem = _interopRequireDefault(require("./ExpandItem"));

var _MenuContext = require("./MenuContext");

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
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)
  }
});

class Menu extends _react.default.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "enterPath", path => {
      const stack = this.state.pathStack;
      stack.push(path);
      this.setState({
        currentPath: path,
        pathStack: [...stack]
      });
    });

    _defineProperty(this, "leavePath", path => {
      const stack = this.state.pathStack;
      stack[stack.length - 1] !== path && console.error('Path leaving incorrect');
      stack.pop();
      this.setState({
        currentPath: stack.length === 0 ? '' : stack[stack.length - 1],
        pathStack: [...stack]
      });
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
          path: `${index}`
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

    this.state = {
      currentPath: '',
      enterPath: this.enterPath,
      leavePath: this.leavePath,
      pathStack: []
    };
  }

  componentDidUpdate() {
    const {
      onChange
    } = this.props;
    const {
      currentPath
    } = this.state;
    onChange(null, currentPath);
  }

  render() {
    const {
      classes
    } = this.props;
    return _react.default.createElement(_MenuContext.MenuContext.Provider, {
      value: this.state
    }, _react.default.createElement("div", {
      className: classes.menuRoot
    }, this.renderFirstLayer()));
  }

}

Menu.propTypes = {};
Menu.defaultProps = {};

var _default = (0, _styles.withStyles)(styles)(Menu);

exports.default = _default;