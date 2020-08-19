"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/styles");

var _GreenButton = _interopRequireDefault(require("./GreenButton"));

var _icon = _interopRequireDefault(require("../../../../stories/saya/img/icon11.svg"));

var _icon2 = _interopRequireDefault(require("../../../../stories/saya/img/icon12.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  root: {
    width: "100%",
    height: 360,
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'FilsonSoft-Bold'
  },
  leftColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingRight: 110,
    paddingTop: 85
  },
  rightColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingLeft: 110,
    paddingTop: 85
  },
  leftIcon: {
    width: 90
  },
  rightIcon: {
    width: 85
  },
  leftTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    paddingTop: 10
  },
  rightTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    paddingTop: 15
  },
  button: {
    marginTop: 40
  }
};

class TwoIconSection extends _react.default.PureComponent {
  render() {
    const {
      classes
    } = this.props;
    return _react.default.createElement("div", {
      className: classes.root
    }, _react.default.createElement("div", {
      className: classes.leftColumn
    }, _react.default.createElement("div", {
      className: classes.leftIcon
    }, _react.default.createElement("img", {
      src: _icon.default
    })), _react.default.createElement("div", {
      className: classes.leftTitle
    }, "Mechanical Recycling"), _react.default.createElement("div", {
      className: classes.button
    }, _react.default.createElement(_GreenButton.default, {
      text: "Learn More"
    }))), _react.default.createElement("div", {
      className: classes.rightColumn
    }, _react.default.createElement("div", {
      className: classes.rightIcon
    }, _react.default.createElement("img", {
      src: _icon2.default
    })), _react.default.createElement("div", {
      className: classes.rightTitle
    }, "Mechanical Recycling"), _react.default.createElement("div", {
      className: classes.button
    }, _react.default.createElement(_GreenButton.default, {
      text: "Learn More"
    }))));
  }

}

var _default = (0, _styles.withStyles)(styles)(TwoIconSection);

exports.default = _default;