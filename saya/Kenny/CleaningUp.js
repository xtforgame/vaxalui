"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _GreenButton = _interopRequireDefault(require("./GreenButton"));

var _ImageContainer = _interopRequireDefault(require("../ImageContainer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  root: {
    height: 1330,
    color: '#ffffff'
  },
  sction: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column'
  },
  topColumn: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    paddingTop: 90
  },
  bottomColumn: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 400
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
      classes,
      backgroundImage,
      onClick,
      children
    } = this.props;
    return _react.default.createElement(_ImageContainer.default, {
      image: backgroundImage,
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
    }, "World\u2019s Largest Recycling and Renewing Network"), _react.default.createElement("div", {
      className: classes.button
    }, _react.default.createElement(_GreenButton.default, {
      text: "Read More",
      onClick: onClick
    })), _react.default.createElement("div", {
      className: classes.bottomColumn
    }, _react.default.createElement("div", {
      className: classes.thirdTitle
    }, "Featured Content"), _react.default.createElement("div", {
      className: classes.secondLine
    }), _react.default.createElement("div", {
      className: classes.box
    }, children)))));
  }

}

var _default = (0, _styles.withStyles)(styles)(CleaningUp);

exports.default = _default;