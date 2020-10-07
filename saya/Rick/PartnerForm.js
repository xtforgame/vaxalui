"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _GreenButton = _interopRequireDefault(require("../bob/GreenButton"));

var _TextField = _interopRequireDefault(require("./TextField"));

var _Checkbox = _interopRequireDefault(require("../Checkbox"));

var _BreakAllContentText = _interopRequireDefault(require("../BreakAllContentText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const styles = {
  subtitle: {
    width: '100%',
    fontSize: 13,
    fontFamily: 'FilsonSoftRegular',
    lineHeight: 1.54
  },
  email: {
    display: 'flex',
    marginTop: 11,
    width: '100%'
  },
  emailInput: {
    width: '100%',
    fontSize: 12,
    color: '#000000',
    border: 'solid 1px #000000',
    backgroundColor: '#ffffff'
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 11,
    width: '100%'
  },
  checkbox: {
    display: 'flex',
    paddingTop: 20
  },
  labelContent: {
    flex: 1,
    fontSize: 10,
    fontFamily: 'FilsonSoftRegular',
    paddingLeft: 20
  }
};

class Partner extends _react.default.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      email: ''
    });

    _defineProperty(this, "handleEmailChange", e => {
      this.setState({
        email: e.target.value
      });
    });
  }

  render() {
    const {
      subtitle = 'Sign up to stay in touch on the newest renewal technologies, products, events, and news from SAYA.',
      labelContent = 'SAYA Brand may use my email address to provide relevant marketing updates. I can unsubscribe these communications at anytime.',
      email
    } = this.state;
    const {
      classes,
      onClick
    } = this.props;
    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_BreakAllContentText.default, {
      className: classes.subtitle,
      style: {
        marginTop: 0,
        marginBottom: 0
      }
    }, subtitle), _react.default.createElement("div", {
      className: classes.email
    }, _react.default.createElement(_TextField.default, {
      className: classes.emailInput,
      value: email,
      onChange: this.handleEmailChange,
      placeholder: "Your email address"
    })), _react.default.createElement("div", {
      className: classes.checkbox
    }, _react.default.createElement(_Checkbox.default, null), _react.default.createElement("div", {
      className: classes.labelContent
    }, _react.default.createElement("label", null, labelContent))), _react.default.createElement("div", {
      className: classes.button
    }, _react.default.createElement(_GreenButton.default, {
      text: "SUBMIT",
      style: {
        width: '100%'
      },
      onClick: onClick
    })));
  }

}

var _default = (0, _styles.withStyles)(styles)(Partner);

exports.default = _default;