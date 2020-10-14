"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _styles = require("@material-ui/core/styles");

var _GreenButton = _interopRequireDefault(require("../bob/GreenButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  root: {
    width: 460,
    height: 140,
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    border: '1px solid #000000',
    backgroundColor: '#FFFFFF',
    marginBottom: 20
  },
  disabledBackground: {
    border: '0px solid #000000',
    backgroundColor: '#c8c6c6'
  },
  left: {
    width: 280
  },
  title: {
    width: '100%',
    fontSize: 20,
    fontFamily: 'FilsonSoft-Bold'
  },
  type: {
    fontSize: 12,
    marginTop: 20,
    fontFamily: 'FilsonSoft-Bold'
  }
};

class Project extends _react.default.PureComponent {
  render() {
    const {
      classes,
      title = 'Backbone of our sustainable textile business',
      buttonText = 'Learn More',
      disabled,
      type,
      onClick
    } = this.props;
    return _react.default.createElement("div", {
      className: (0, _clsx.default)(classes.root, {
        [classes.disabledBackground]: disabled
      })
    }, _react.default.createElement("div", {
      className: classes.left
    }, _react.default.createElement("div", {
      className: classes.title
    }, title), type && _react.default.createElement("div", {
      className: classes.type
    }, type)), _react.default.createElement(_GreenButton.default, {
      disabled: disabled,
      text: buttonText,
      onClick: onClick
    }));
  }

}

var _default = (0, _styles.withStyles)(styles)(Project);

exports.default = _default;