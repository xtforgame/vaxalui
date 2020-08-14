"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _clsx = _interopRequireDefault(require("clsx"));

var _TextField = _interopRequireDefault(require("./TextField"));

var _Select = _interopRequireDefault(require("./Select"));

var _Button = _interopRequireDefault(require("./Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const styles = theme => ({
  root: {
    width: '100%',
    height: theme.spacing(38),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(16),
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(4),
    backgroundColor: 'black',
    color: 'white'
  },
  rowFlex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  leftColumn: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 'auto'
  },
  rightColumn: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: theme.spacing(38)
  },
  emailInput: {
    width: '100%'
  }
});

class Footer extends _react.default.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      email: '',
      language: ''
    });

    _defineProperty(this, "handleEmailChange", e => {
      this.setState({
        email: e.target.value
      });
    });

    _defineProperty(this, "handleLanguageChange", e => {
      this.setState({
        language: e.target.value
      });
    });

    _defineProperty(this, "signUpNewsletter", () => {
      console.warn('Implement signUpNewsletter', this.state.email);
    });
  }

  render() {
    const {
      classes
    } = this.props;
    const {
      email,
      languange
    } = this.state;
    return _react.default.createElement("div", {
      className: (0, _clsx.default)(classes.root, classes.rowFlex)
    }, _react.default.createElement("div", {
      className: classes.leftColumn
    }, _react.default.createElement("div", null, "Follow SAYA"), _react.default.createElement("div", {
      className: classes.rowFlex
    }, _react.default.createElement("div", null, "FB__"), _react.default.createElement("div", null, "IG__")), _react.default.createElement("div", null, "Contact: xx@xx.com"), _react.default.createElement("div", null, "Also visit..."), _react.default.createElement("div", null, "Copyright 2020")), _react.default.createElement("div", {
      className: classes.rightColumn
    }, _react.default.createElement("div", null, "Sign up to newsletter"), _react.default.createElement(_TextField.default, {
      className: classes.emailInput,
      value: email,
      onChange: this.handleEmailChange,
      placeholder: "Your email address"
    }), _react.default.createElement(_Button.default, {
      text: "SUBMIT",
      onClick: this.signUpNewsletter
    }), _react.default.createElement("div", null, "Select language"), _react.default.createElement(_Select.default, {
      options: ['English', 'Traditional Chinese'],
      value: languange,
      onChange: this.handleLanguageChange
    })));
  }

}

Footer.propTypes = {};
Footer.defaultProps = {};

var _default = (0, _styles.withStyles)(styles)(Footer);

exports.default = _default;