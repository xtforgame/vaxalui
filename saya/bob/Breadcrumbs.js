"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _Link = _interopRequireDefault(require("@material-ui/core/Link"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  separator: {
    color: '#FFFFFF',
    fontSize: 20,
    marginTop: -3
  },
  ol: {
    alignItems: 'baseline'
  },
  link: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center'
  }
};

class Breadcrumbs extends _react.default.PureComponent {
  render() {
    const {
      classes,
      color = '#FFFFFF',
      bread = [],
      separatorColor
    } = this.props;
    return _react.default.createElement(_core.Breadcrumbs, {
      classes: {
        ol: classes.ol,
        separator: classes.separator
      },
      separator: _react.default.createElement("span", {
        style: {
          color: separatorColor
        }
      }, "/")
    }, bread.map(b => _react.default.createElement(_Link.default, {
      className: classes.link,
      style: {
        color
      },
      key: b.path,
      href: b.path,
      underline: "none"
    }, b.name)));
  }

}

var _default = (0, _styles.withStyles)(styles)(Breadcrumbs);

exports.default = _default;