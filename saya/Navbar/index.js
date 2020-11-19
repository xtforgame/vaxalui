"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _clsx = _interopRequireDefault(require("clsx"));

var _MenuContext = require("./MenuContext");

var _navigation = _interopRequireDefault(require("./navigation"));

var _Menu = _interopRequireDefault(require("./Menu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const styles = theme => ({
  root: {
    width: '100%',
    position: 'fixed',
    zIndex: 1024,
    fontSize: 12
  },
  body: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    color: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    whiteSpace: 'pre'
  },
  logo: {
    height: 64,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginRight: 'auto'
  },
  menu: {
    paddingTop: (theme.spacing(8) - theme.spacing(2)) / 2
  },
  closing: {
    height: theme.spacing(8),
    transitionProperty: 'height',
    transitionDuration: '0.33s',
    transitionDelay: '0.1s'
  },
  opening: {
    height: theme.spacing(8) * 4,
    transitionProperty: 'height',
    transitionDuration: '0.15s',
    transitionDelay: '0s'
  }
});

class Navbar extends _react.default.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleMenuChange", (e, value) => {
      const isOpening = value !== '';
      this.setState({
        isOpen: isOpening
      });
    });

    this.state = {
      currentPath: '',
      enterPath: path => {
        const stack = this.state.pathStack;
        stack.push(path);
        this.setState({
          currentPath: path,
          pathStack: [...stack]
        });
      },
      leavePath: path => {
        const stack = this.state.pathStack;
        stack[stack.length - 1] !== path && console.error('Path leaving incorrect');
        stack.pop();
        this.setState({
          currentPath: stack.length === 0 ? '' : stack[stack.length - 1],
          pathStack: [...stack]
        });
      },
      clearPath: () => {
        this.setState({
          currentPath: '',
          pathStack: []
        });
      },
      pathStack: [],
      isOpen: false
    };
  }

  componentDidUpdate() {
    const {
      currentPath
    } = this.state;
    this.handleMenuChange(null, currentPath);
  }

  render() {
    const {
      onLinkClick,
      classes,
      items,
      children
    } = this.props;
    const {
      isOpen
    } = this.state;
    return _react.default.createElement("div", {
      className: (0, _clsx.default)(classes.root, {
        [classes.closing]: !isOpen,
        [classes.opening]: isOpen
      }),
      onMouseLeave: () => {
        console.log('handleMenuChange');
        this.state.clearPath();
      }
    }, _react.default.createElement("div", {
      className: classes.body
    }, _react.default.createElement("div", {
      className: classes.logo
    }, children), _react.default.createElement("div", {
      className: classes.menu
    }, _react.default.createElement(_MenuContext.MenuContext.Provider, {
      value: _objectSpread({}, this.state, {
        onLinkClick: onLinkClick || (path => {
          console.warn('default onLinkClick', path);
        })
      })
    }, _react.default.createElement(_Menu.default, {
      items: items || _navigation.default
    })))));
  }

}

var _default = (0, _styles.withStyles)(styles)(Navbar);

exports.default = _default;