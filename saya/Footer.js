"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/core/styles");

var _clsx = _interopRequireDefault(require("clsx"));

var _TextField = _interopRequireDefault(require("./bob/TextField"));

var _Select = _interopRequireDefault(require("./Select"));

var _Button = _interopRequireDefault(require("./Button"));

var _Checkbox = _interopRequireDefault(require("./Checkbox"));

var _HelperText = _interopRequireDefault(require("./HelperText"));

var _subscriptionContext = _interopRequireDefault(require("./contexts/subscriptionContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const useStyles = (0, _styles.makeStyles)(theme => ({
  rowFlex: {
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    fontFamily: 'FilsonSoftRegular',
    paddingTop: 42,
    paddingBottom: 42,
    paddingLeft: 80,
    paddingRight: 80
  },
  root: {
    flex: 1,
    paddingRight: 32,
    flexDirection: 'column',
    flexWrap: 'wrap',
    position: 'relative',
    color: 'white'
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
    width: 300,
    height: 38
  },
  checkbox: {
    display: 'flex',
    paddingTop: 6
  },
  box: {
    width: 30,
    height: 30,
    '&$checked': {
      backgroundColor: 'white'
    },
    '&:after': {
      backgroundColor: '#ff0000',
      color: '#fff'
    }
  },
  labelContent: {
    width: 270,
    fontSize: 10,
    fontFamily: 'FilsonSoftRegular',
    paddingLeft: 10
  }
}));

var _default = props => {
  let {
    fbIcon,
    igIcon
  } = props;
  const classes = useStyles();
  const [language, setLanguage] = (0, _react.useState)('English');
  const {
    email = '',
    setEmail = () => {},
    checked,
    setChecked,
    errorMessage,
    successMessage,
    onSubmit,
    emailErrorMessage,
    checkErrorMessage
  } = (0, _react.useContext)(_subscriptionContext.default);
  return _react.default.createElement("div", {
    className: (0, _clsx.default)(classes.rowFlex)
  }, _react.default.createElement("div", {
    className: (0, _clsx.default)(classes.root)
  }, _react.default.createElement("div", {
    className: classes.subtitle
  }, _react.default.createElement("pre", {
    style: {
      fontSize: 14,
      margin: 0,
      fontFamily: 'FilsonSoft-Bold'
    }
  }, "Follow SAYA")), _react.default.createElement("div", {
    style: {
      width: '100%'
    }
  }, _react.default.createElement("div", {
    style: {
      paddingTop: 50,
      display: 'flex'
    }
  }, _react.default.createElement("a", {
    href: "https://www.facebook.com/sayarenew",
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      color: '#ffffff'
    }
  }, fbIcon), _react.default.createElement("div", {
    style: {
      width: 20,
      height: 1
    }
  }), _react.default.createElement("a", {
    href: "https://www.instagram.com/sayafibers",
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      color: '#ffffff'
    }
  }, igIcon))), _react.default.createElement("div", {
    style: {
      textAlign: 'left'
    }
  }, _react.default.createElement("div", {
    style: {
      width: 10,
      height: 50
    }
  }), _react.default.createElement("div", {
    style: {
      display: 'inline',
      fontSize: 12,
      marginRight: 4
    }
  }, "Contact:"), _react.default.createElement("div", {
    style: {
      display: 'inline',
      fontSize: 12
    }
  }, _react.default.createElement("a", {
    href: "mailto:change@sayarenew.com",
    style: {
      color: '#ffffff'
    }
  }, _react.default.createElement("u", null, "change@sayarenew.com"))), _react.default.createElement("div", {
    style: {
      width: 10,
      height: 0
    }
  }), _react.default.createElement("div", {
    style: {
      display: 'inline',
      fontSize: 12,
      marginRight: 4
    }
  }, "Saya is a brand of Nan Ya plastic Corp. :"), _react.default.createElement("div", {
    style: {
      display: 'inline',
      fontSize: 12
    }
  }, _react.default.createElement("a", {
    href: "http://npc.com.tw",
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      color: '#ffffff'
    }
  }, _react.default.createElement("u", null, "http://npc.com.tw"))), _react.default.createElement("div", {
    style: {
      width: 10,
      height: 72
    }
  }), _react.default.createElement("div", {
    style: {
      fontSize: 12
    }
  }, "Copyright \xA9 2020 SAYA All Rights Reserved"))), _react.default.createElement("div", {
    className: (0, _clsx.default)(classes.root)
  }, _react.default.createElement("div", {
    style: {
      textAlign: 'left'
    }
  }, _react.default.createElement("div", {
    style: {
      fontSize: 14,
      fontFamily: 'FilsonSoft-Bold'
    }
  }, "Sign up to receive our newsletter"), _react.default.createElement("div", {
    style: {
      width: 10,
      height: 8
    }
  }), _react.default.createElement("div", {
    style: {
      width: '100%'
    }
  }, _react.default.createElement("div", {
    style: {
      display: 'flex'
    }
  }, _react.default.createElement(_TextField.default, {
    darkTheme: true,
    className: classes.emailInput,
    value: email,
    onChange: e => setEmail(e.target.value),
    placeholder: "Your email address",
    error: !!emailErrorMessage
  }), _react.default.createElement("div", {
    style: {
      width: 20,
      height: 20
    }
  }), _react.default.createElement(_Button.default, {
    width: 100,
    onClick: onSubmit
  }, "SUBMIT"))), emailErrorMessage && _react.default.createElement(_HelperText.default, {
    style: {},
    error: true
  }, emailErrorMessage), !emailErrorMessage && _react.default.createElement("div", {
    style: {
      height: 10
    }
  }), _react.default.createElement("div", {
    className: classes.checkbox
  }, _react.default.createElement(_Checkbox.default, {
    darkTheme: true,
    checked: checked,
    setChecked: setChecked,
    error: !!checkErrorMessage
  }), _react.default.createElement("div", {
    className: classes.labelContent
  }, _react.default.createElement("label", null, "SAYA Brand may use my email address to provide relevant marketing updates. I can unsubscribe these communications at anytime."))), checkErrorMessage && _react.default.createElement(_HelperText.default, {
    style: {},
    error: true
  }, checkErrorMessage), successMessage && _react.default.createElement(_HelperText.default, {
    style: {}
  }, successMessage), errorMessage && _react.default.createElement(_HelperText.default, {
    style: {},
    error: true
  }, errorMessage))));
};

exports.default = _default;