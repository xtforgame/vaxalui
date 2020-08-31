"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _GreenButton = _interopRequireDefault(require("./GreenButton"));

var _TextField = _interopRequireDefault(require("./TextField"));

var _ImageContainer = _interopRequireDefault(require("../ImageContainer"));

var _PartnerForm = _interopRequireDefault(require("./PartnerForm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  root: {
    height: 675,
    paddingTop: 260
  },
  bottle: {
    color: '#000000',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  title: {
    fontSize: 33,
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold',
    lineHeight: 1.21,
    textAlign: 'center'
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
  render() {
    const {
      classes,
      backgroundImage
    } = this.props;
    return _react.default.createElement(_ImageContainer.default, {
      className: classes.root,
      image: backgroundImage
    }, _react.default.createElement("div", {
      className: classes.bottle
    }, _react.default.createElement("pre", {
      className: classes.title,
      style: {
        marginTop: 0,
        marginBottom: 0
      }
    }, 'Stay in Touch\nwith SAYA'), _react.default.createElement(_PartnerForm.default, null)));
  }

}

var _default = (0, _styles.withStyles)(styles)(Partner);

exports.default = _default;