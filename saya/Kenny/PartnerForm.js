"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _GreenButton = _interopRequireDefault(require("../bob/GreenButton"));

var _TextField = _interopRequireDefault(require("../bob/TextField"));

var _Checkbox = _interopRequireDefault(require("../Checkbox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const styles = {
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold',
    lineHeight: 0.6
  },
  line: {
    width: 468,
    height: 1,
    marginTop: 2.5,
    border: ' solid 1px #000000'
  },
  subtitle: {
    width: 465,
    fontSize: 14,
    fontFamily: 'FilsonSoftRegular',
    paddingTop: 10
  },
  email: {
    display: 'flex',
    marginTop: 10
  },
  emailInput: {
    width: 465,
    fontSize: 10,
    color: '#000000',
    borderColor: '#000000'
  },
  button: {
    marginLeft: 15
  },
  checkbox: {
    display: 'flex',
    paddingTop: 20
  },
  box: {
    width: 30,
    height: 30
  },
  labelContent: {
    width: 440,
    fontSize: 10,
    fontFamily: 'FilsonSoftRegular',
    paddingLeft: 10
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
    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
      className: classes.subtitle
    }, "Stay connected for only meaningful and useful updates on sustainable fibers and recycling technology."), _react.default.createElement("div", {
      className: classes.email
    }, _react.default.createElement(_TextField.default, {
      className: classes.emailInput,
      value: email,
      onChange: this.handleEmailChange,
      placeholder: "Your email address"
    }), _react.default.createElement("div", {
      className: classes.button
    }, _react.default.createElement(_GreenButton.default, {
      text: "SUBMIT"
    }))), _react.default.createElement("div", {
      className: classes.checkbox
    }, _react.default.createElement(_Checkbox.default, null), _react.default.createElement("div", {
      className: classes.labelContent
    }, _react.default.createElement("label", null, "SAYA Brand may use my email address to provide relevant marketing updates. I can unsubscribe these communications at anytime."))));
  }

}

var _default = (0, _styles.withStyles)(styles)(Partner);

exports.default = _default;