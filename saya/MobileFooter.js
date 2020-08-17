"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/core/styles");

var _clsx = _interopRequireDefault(require("clsx"));

var _TextField = _interopRequireDefault(require("./TextField"));

var _Select = _interopRequireDefault(require("./Select"));

var _Button = _interopRequireDefault(require("./Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const useStyles = (0, _styles.makeStyles)(theme => ({
  root: {
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 47,
    width: '100%',
    height: 630,
    flexDirection: 'column',
    alignItems: 'center',
    flexWrap: 'wrap',
    textAlign: 'center',
    fontFamily: 'FilsonSoftRegular',
    position: 'relative',
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
}));

var _default = props => {
  const {
    fbIcon,
    igIcon
  } = props;
  const classes = useStyles();
  const [email, setEmail] = (0, _react.useState)('');
  const [language, setLanguage] = (0, _react.useState)('');
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
  }, fbIcon, _react.default.createElement("div", {
    style: {
      width: 10,
      height: 1
    }
  }), igIcon)), _react.default.createElement("div", {
    style: {
      textAlign: 'left'
    }
  }, _react.default.createElement("div", {
    style: {
      width: 10,
      height: 40
    }
  }), _react.default.createElement("div", null, "Sign up to newsletter"), _react.default.createElement("div", {
    style: {
      width: 10,
      height: 8
    }
  }), _react.default.createElement(_TextField.default, {
    className: classes.emailInput,
    value: email,
    onChange: e => setEmail(e.target.value),
    placeholder: "Your email address"
  }), _react.default.createElement("div", {
    style: {
      width: 10,
      height: 40
    }
  }), _react.default.createElement("div", null, "Select language"), _react.default.createElement("div", {
    style: {
      width: 10,
      height: 8
    }
  }), _react.default.createElement(_Select.default, {
    style: {
      width: '100%'
    },
    options: ['English', 'Traditional Chinese'],
    value: language,
    onChange: e => setLanguage(e.target.value)
  }), _react.default.createElement("div", {
    style: {
      width: 10,
      height: 80
    }
  }), _react.default.createElement("div", {
    style: {
      fontSize: 18
    }
  }, "Contact:"), _react.default.createElement("div", {
    style: {
      fontSize: 18
    }
  }, _react.default.createElement("u", null, "service@sayanow.com")), _react.default.createElement("div", {
    style: {
      width: 10,
      height: 10
    }
  }), _react.default.createElement("div", {
    style: {
      fontSize: 18
    }
  }, "Also visit Nan Ya Plastic:"), _react.default.createElement("div", {
    style: {
      fontSize: 18
    }
  }, _react.default.createElement("u", null, "https://www.npc.com.tw/")), _react.default.createElement("div", {
    style: {
      width: 10,
      height: 40
    }
  }), _react.default.createElement("div", {
    style: {
      fontSize: 12
    }
  }, "Copyright \xA9 2020 SAYA All Rights Reserved")));
};

exports.default = _default;