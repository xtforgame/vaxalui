"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/styles");

var _GreenButton = _interopRequireDefault(require("./GreenButton"));

var _ImageBoxSmall = _interopRequireDefault(require("./ImageBoxSmall"));

var _bg = _interopRequireDefault(require("../../../../stories/saya/img/bg15.jpg"));

var _bg2 = _interopRequireDefault(require("../../../../stories/saya/img/bg17.jpg"));

var _bg3 = _interopRequireDefault(require("../../../../stories/saya/img/bg18.jpg"));

var _bg4 = _interopRequireDefault(require("../../../../stories/saya/img/bg19.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  root: {
    width: '100%',
    height: 1330,
    color: '#ffffff',
    display: 'flex',
    justifyContent: 'center',
    backgroundImage: `url(${_bg.default})`,
    backgroundRepeat: 'no-repeat'
  },
  sction: {
    width: 1024,
    display: 'flex',
    flexDirection: 'column'
  },
  topColumn: {
    width: 1024,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    paddingTop: 90,
    paddingLeft: 40
  },
  bottomColumn: {
    width: 1024,
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 400,
    paddingLeft: 60
  },
  firstTitle: {
    width: 540,
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold',
    lineHeight: 1.25
  },
  firstLine: {
    width: 420,
    height: 1,
    border: '1px solid #ffffff',
    marginTop: 20
  },
  secondTitle: {
    fontSize: 20,
    fontFamily: 'FilsonSoftRegular',
    paddingTop: 20
  },
  button: {
    marginTop: 50
  },
  thirdTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold'
  },
  secondLine: {
    width: 820,
    height: 1,
    border: '1px solid #ffffff',
    marginTop: 25
  },
  box: {
    width: 820,
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 35
  }
};

class CleaningUp extends _react.default.PureComponent {
  render() {
    const {
      classes
    } = this.props;
    return _react.default.createElement("div", {
      className: classes.root
    }, _react.default.createElement("div", {
      className: classes.section
    }, _react.default.createElement("div", {
      className: classes.topColumn
    }, _react.default.createElement("div", {
      className: classes.firstTitle
    }, "Cleaning Up the World,", _react.default.createElement("br", null), " 75 Billion Bottles at a Time."), _react.default.createElement("div", {
      className: classes.firstLine
    }), _react.default.createElement("div", {
      className: classes.secondTitle
    }, "World\u2019s largest recycling and renewing network."), _react.default.createElement("div", {
      className: classes.button
    }, _react.default.createElement(_GreenButton.default, {
      text: "READ MORE"
    })), _react.default.createElement("div", {
      className: classes.bottomColumn
    }, _react.default.createElement("div", {
      className: classes.thirdTitle
    }, "Featured Content"), _react.default.createElement("div", {
      className: classes.secondLine
    }), _react.default.createElement("div", {
      className: classes.box
    }, _react.default.createElement(_ImageBoxSmall.default, {
      title: "About SAYA",
      backgroundImage: _bg2.default,
      paddingTop: "75px",
      fontColor: "#ffffff",
      marginTop: "150px"
    }), _react.default.createElement(_ImageBoxSmall.default, {
      title: "Partners in Sustainability",
      backgroundImage: _bg3.default,
      paddingTop: "60px",
      fontColor: "#ffffff",
      marginTop: "125px"
    }), _react.default.createElement(_ImageBoxSmall.default, {
      title: "SAYA",
      titleBack: "COASTAL",
      backgroundImage: _bg4.default,
      paddingTop: "75px",
      fontColor: "#ffffff",
      marginTop: "150px"
    }))))));
  }

}

var _default = (0, _styles.withStyles)(styles)(CleaningUp);

exports.default = _default;