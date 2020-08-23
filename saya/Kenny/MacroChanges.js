"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _ImageContainer = _interopRequireDefault(require("../ImageContainer"));

var _GreenButton = _interopRequireDefault(require("./GreenButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  root: {
    height: 610,
    color: '#000000'
  },
  section: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    paddingTop: 65,
    paddingLeft: 40
  },
  firstTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold',
    lineHeight: 1.31
  },
  firstLine: {
    width: 85,
    height: 1,
    border: '1px solid #000000',
    marginTop: 2
  },
  secondTitle: {
    width: 425,
    fontSize: 54,
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold',
    lineHeight: 1,
    paddingTop: 45
  },
  secondLine: {
    width: 420,
    height: 1,
    border: '1px solid #000000',
    marginTop: 20
  },
  thirdTitle: {
    fontSize: 20,
    fontFamily: 'FilsonSoftRegular',
    paddingTop: 20
  },
  button: {
    marginTop: 50
  }
};

class MacroChanges extends _react.default.PureComponent {
  render() {
    const {
      classes,
      backgroundImage
    } = this.props;
    return _react.default.createElement(_ImageContainer.default, {
      className: classes.root,
      image: backgroundImage
    }, _react.default.createElement("div", {
      className: classes.section
    }, _react.default.createElement("div", {
      className: classes.firstTitle
    }, "PRODUCTS"), _react.default.createElement("div", {
      className: classes.firstLine
    }), _react.default.createElement("div", {
      className: classes.secondTitle
    }, "Micro fibers. Macro changes."), _react.default.createElement("div", {
      className: classes.secondLine
    }), _react.default.createElement("div", {
      className: classes.thirdTitle
    }, "Functional Fibers for Every Challenge."), _react.default.createElement("div", {
      className: classes.button
    }, _react.default.createElement(_GreenButton.default, {
      text: "Read More"
    }))));
  }

}

var _default = (0, _styles.withStyles)(styles)(MacroChanges);

exports.default = _default;