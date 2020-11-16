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

var _validators = require("../utils/validators");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const useStyles = (0, _styles.makeStyles)(theme => ({
  root: {
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 51,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    flexWrap: 'wrap',
    textAlign: 'center',
    fontFamily: 'FilsonSoftRegular',
    position: 'relative',
    backgroundColor: 'black',
    color: 'white'
  },
  checkbox: {
    display: 'flex',
    paddingTop: 12
  },
  labelContent: {
    width: 270,
    fontSize: 10,
    fontFamily: 'FilsonSoftRegular',
    paddingLeft: 10
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
}));

var _default = props => {
  let {
    fbIcon,
    igIcon,
    email = '',
    setEmail = () => {},
    checked,
    setChecked,
    successMessage,
    errorMessage,
    onSubmit,
    emailError
  } = props;
  const classes = useStyles();
  const [language, setLanguage] = (0, _react.useState)('English');

  if (emailError == null) {
    emailError = !(0, _validators.isValidEmail)(email);
  }

  return _react.default.createElement("div", {
    className: (0, _clsx.default)(classes.root)
  }, _react.default.createElement("div", {
    className: classes.subtitle
  }, _react.default.createElement("pre", {
    style: {
      fontSize: 24,
      margin: 0,
      fontFamily: 'FilsonSoftRegular'
    }
  }, "Follow SAYA")), _react.default.createElement("div", {
    style: {
      width: '100%'
    }
  }, _react.default.createElement("pre", {
    style: {
      display: 'flex',
      justifyContent: 'center'
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
      width: 10,
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
      height: 60
    }
  }), _react.default.createElement("div", null, "Sing up to receive our newsletter"), _react.default.createElement("div", {
    style: {
      width: 10,
      height: 10
    }
  }), _react.default.createElement(_TextField.default, {
    darkTheme: true,
    className: classes.emailInput,
    value: email,
    onChange: e => setEmail(e.target.value),
    error: emailError,
    placeholder: "Your email address"
  }), successMessage && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
    style: {
      fontSize: 14,
      fontFamily: 'FilsonSoftRegular',
      color: 'green'
    }
  }, successMessage), _react.default.createElement("div", {
    style: {
      width: 10,
      height: 8
    }
  })), errorMessage && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
    style: {
      fontSize: 14,
      fontFamily: 'FilsonSoftRegular',
      color: 'ff3a53'
    }
  }, errorMessage), _react.default.createElement("div", {
    style: {
      width: 10,
      height: 8
    }
  })), _react.default.createElement("div", {
    className: classes.checkbox
  }, _react.default.createElement(_Checkbox.default, {
    darkTheme: true,
    checked: checked,
    setChecked: setChecked
  }), _react.default.createElement("div", {
    className: classes.labelContent
  }, _react.default.createElement("label", null, "SAYA Brand may use my email address to provide relevant marketing updates. I can unsubscribe these communications at anytime."))), _react.default.createElement("div", {
    style: {
      width: 10,
      height: 12
    }
  }), _react.default.createElement(_Button.default, {
    width: '100%',
    onClick: onSubmit
  }, "SUBMIT"), _react.default.createElement("div", {
    style: {
      width: 10,
      height: 32
    }
  }), _react.default.createElement("div", {
    style: {
      fontSize: 18
    }
  }, "Contact:"), _react.default.createElement("div", {
    style: {
      fontSize: 18
    }
  }, _react.default.createElement("a", {
    href: "mailto:change@sayarenew.com",
    style: {
      color: '#ffffff'
    }
  }, _react.default.createElement("u", null, "change@sayarenew.com"))), _react.default.createElement("div", {
    style: {
      width: 10,
      height: 18
    }
  }), _react.default.createElement("div", {
    style: {
      fontSize: 18
    }
  }, "Also visit Nan Ya Plastic:"), _react.default.createElement("div", {
    style: {
      fontSize: 18
    }
  }, _react.default.createElement("a", {
    href: "https://www.npc.com.tw",
    target: "_blank",
    style: {
      color: '#ffffff'
    }
  }, _react.default.createElement("u", null, "https://www.npc.com.tw"))), _react.default.createElement("div", {
    style: {
      width: 10,
      height: 75
    }
  }), _react.default.createElement("div", {
    style: {
      fontSize: 12
    }
  }, "Copyright \xA9 2020 SAYA All Rights Reserved"), _react.default.createElement("div", {
    style: {
      width: 10,
      height: 20
    }
  })));
};

exports.default = _default;