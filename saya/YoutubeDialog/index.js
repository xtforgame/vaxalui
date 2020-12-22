"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactYoutube = _interopRequireDefault(require("react-youtube"));

var _styles = require("@material-ui/core/styles");

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Clear = _interopRequireDefault(require("@material-ui/icons/Clear"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const styles = {
  container: {
    height: '100%'
  }
};

class Section extends _react.default.PureComponent {
  render() {
    const _this$props = this.props,
          {
      open,
      onClose,
      classes,
      videoId
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, ["open", "onClose", "classes", "videoId"]);

    return _react.default.createElement(_Dialog.default, _extends({
      fullWidth: true,
      PaperProps: {
        style: {
          borderRadius: 0,
          maxWidth: 'calc(100% - 64px)',
          maxHeight: 'calc(100% - 128px)',
          width: '100%',
          height: '100%'
        }
      },
      open: open,
      onClose: onClose,
      "aria-labelledby": "alert-dialog-title",
      "aria-describedby": "alert-dialog-description"
    }, rest), _react.default.createElement("div", {
      style: {
        position: 'fixed',
        top: 0,
        right: 0,
        color: 'white'
      }
    }, _react.default.createElement(_IconButton.default, {
      color: "inherit",
      onClick: onClose,
      "aria-label": "NotificationList"
    }, _react.default.createElement(_Clear.default, {
      fontSize: "large"
    }))), _react.default.createElement(_reactYoutube.default, {
      videoId: videoId,
      containerClassName: classes.container,
      opts: {
        width: '100%',
        height: '100%',
        playerVars: {}
      },
      onReady: () => {
        console.log('onReady');
      }
    }));
  }

}

var _default = (0, _styles.withStyles)(styles)(Section);

exports.default = _default;