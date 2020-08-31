"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _GreenButton = _interopRequireDefault(require("./GreenButton"));

var _TextField = _interopRequireDefault(require("./TextField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const styles = {
  subtitle: {
    width: 280,
    fontSize: 13,
    fontFamily: 'FilsonSoftRegular',
    paddingTop: 23
  },
  email: {
    display: 'flex',
    marginTop: 15
  },
  emailInput: {
    width: 280,
    fontSize: 12,
    color: '#000000',
    borderColor: '#ffffff',
    backgroundColor: '#ffffff'
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 23
  },
  checkbox: {
    display: 'flex',
    paddingTop: 23
  },
  box: {
    width: 25,
    height: 25
  },
  labelContent: {
    width: 231,
    fontSize: 10,
    fontFamily: 'FilsonSoftRegular',
    paddingLeft: 18
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
      email
    } = this.state;
    const {
      classes
    } = this.props;
    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("pre", {
      className: classes.subtitle,
      style: {
        marginTop: 0,
        marginBottom: 0
      }
    }, 'Sign up to stay in touch on the newest\nrenewal technologies, products, events, and\nnews from SAYA.'), _react.default.createElement("div", {
      className: classes.email
    }, _react.default.createElement(_TextField.default, {
      className: classes.emailInput,
      value: email,
      onChange: this.handleEmailChange,
      placeholder: "Your email address"
    })), _react.default.createElement("div", {
      className: classes.checkbox
    }, _react.default.createElement("input", {
      className: classes.box,
      type: "checkbox",
      value: "checkbox"
    }), _react.default.createElement("div", {
      className: classes.labelContent
    }, _react.default.createElement("label", null, "SAYA  may use my email address provided above to send me relevant marketing communications. I understand that I can unsubscribe from these communications at any time. "))), _react.default.createElement("div", {
      className: classes.button
    }, _react.default.createElement(_GreenButton.default, {
      text: "SUBMIT",
      width: 280,
      height: 44
    })));
  }

}

var _default = (0, _styles.withStyles)(styles)(Partner);

exports.default = _default;