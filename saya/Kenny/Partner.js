"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/styles");

var _GreenButton = _interopRequireDefault(require("./GreenButton"));

var _TextField = _interopRequireDefault(require("./TextField"));

var _bg = _interopRequireDefault(require("../../../../stories/saya/img/bg16.jpg"));

var _bottle_w = _interopRequireDefault(require("../../../../stories/saya/img/bottle_w.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const styles = {
  root: {
    width: '100%',
    height: 500,
    backgroundImage: `url(${_bg.default})`,
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottle: {
    width: 880,
    height: 320,
    backgroundImage: `url(${_bottle_w.default})`,
    color: '#000000',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    paddingTop: 50,
    paddingLeft: 110
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold',
    lineHeight: 1.25
  },
  line: {
    width: 420,
    height: 1,
    marginTop: 2.5,
    border: ' solid 1px #000000'
  },
  subtitle: {
    width: 420,
    fontSize: 14,
    fontFamily: 'FilsonSoftRegular',
    paddingTop: 25
  },
  email: {
    display: 'flex',
    marginTop: 10
  },
  emailInput: {
    width: 420,
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
    width: 340,
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
    return _react.default.createElement("div", {
      className: classes.root
    }, _react.default.createElement("div", {
      className: classes.bottle
    }, _react.default.createElement("div", {
      className: classes.title
    }, "Become our partner"), _react.default.createElement("div", {
      className: classes.line
    }), _react.default.createElement("div", {
      className: classes.subtitle
    }, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod."), _react.default.createElement("div", {
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
    }, _react.default.createElement("input", {
      className: classes.box,
      type: "checkbox",
      value: "checkbox"
    }), _react.default.createElement("div", {
      className: classes.labelContent
    }, _react.default.createElement("label", null, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.")))));
  }

}

var _default = (0, _styles.withStyles)(styles)(Partner);

exports.default = _default;