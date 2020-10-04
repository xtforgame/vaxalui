"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _Link = _interopRequireDefault(require("@material-ui/core/Link"));

var _ImageContainer = _interopRequireDefault(require("../ImageContainer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  separator: {
    fontSize: 12,
    marginTop: -3
  },
  ol: {
    alignItems: 'baseline',
    justifyContent: 'center'
  },
  link: {
    fontSize: 0
  }
};

const handleClick = e => {
  e.preventDefault();
};

class Breadcrumbs extends _react.default.PureComponent {
  render() {
    const {
      classes,
      color = '#FFFFFF',
      bread = [],
      separatorColor,
      style,
      breadcrumbsStyle
    } = this.props;
    return _react.default.createElement("div", {
      style: style
    }, _react.default.createElement(_core.Breadcrumbs, {
      classes: {
        ol: classes.ol,
        separator: classes.separator
      },
      separator: _react.default.createElement("span", {
        style: {
          color: separatorColor
        }
      }, "/"),
      style: breadcrumbsStyle
    }, bread.map(b => _react.default.createElement(_Link.default, {
      className: classes.link,
      onClick: b.path ? () => {} : handleClick,
      style: {
        color
      },
      key: `${b.name}${b.path}`,
      href: b.path,
      underline: "none"
    }, b.name))));
  }

}

var _default = (0, _styles.withStyles)(styles)(Breadcrumbs);

exports.default = _default;