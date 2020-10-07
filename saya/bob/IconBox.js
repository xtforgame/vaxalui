"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _clsx = _interopRequireDefault(require("clsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  root: {
    borderLeftStyle: 'solid',
    borderLeftWidth: 1,
    borderRightStyle: 'solid',
    borderRightWidth: 1,
    marginLeft: -1,
    borderBottom: 0,
    borderTop: 0
  },
  normalSize: {
    width: 140,
    height: 140
  },
  smallSize: {
    width: 80,
    height: 80
  },
  clickable: {
    cursor: 'pointer'
  }
};

class IconBox extends _react.default.PureComponent {
  render() {
    const {
      classes,
      cell,
      width,
      color = '#e8e8e8',
      size = 'normal'
    } = this.props;
    const sizeClass = classes[`${size}Size`] || '';
    const {
      imgUrl,
      url,
      onClick
    } = cell || {};
    let oc = onClick;

    if (!oc && url) {
      oc = () => {
        window.open(url, '_blank');
      };
    }

    return _react.default.createElement("div", {
      className: (0, _clsx.default)(classes.root, sizeClass, {
        [classes.clickable]: !!(oc || url)
      }),
      style: {
        borderLeftColor: color,
        borderRightColor: color
      }
    }, imgUrl && _react.default.createElement("img", {
      src: imgUrl,
      width: width,
      style: {
        width
      },
      onClick: oc
    }));
  }

}

var _default = (0, _styles.withStyles)(styles)(IconBox);

exports.default = _default;