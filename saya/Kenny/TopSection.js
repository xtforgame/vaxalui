"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  root: {
    width: '100%',
    height: 330,
    backgroundColor: 'yellow',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexWrap: 'wrap',
    textAlign: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%'
  },
  firstTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    lineHeight: 1.31,
    color: '#000000',
    paddingTop: 90
  },
  firstLine: {
    width: 85,
    height: 1,
    border: '1px solid #000000',
    marginTop: 2
  },
  secondTitle: {
    fontSize: 55,
    fontWeight: 'bold',
    color: '#000000',
    paddingTop: 10
  },
  secondTitleBack: {
    fontWeight: 'normal',
    color: '#000000'
  },
  secondLine: {
    width: 420,
    height: 1,
    border: '1px solid #000000',
    marginTop: 2
  },
  thirdTitle: {
    width: 390,
    fontSize: 20,
    color: '#000000',
    paddingTop: 10
  }
};

class TopSection extends _react.default.PureComponent {
  render() {
    const {
      classes,
      firstTitle,
      secondTitle,
      secondTitleBack,
      thirdTitle,
      backgroundImage
    } = this.props;
    return _react.default.createElement("div", {
      className: classes.root,
      style: {
        backgroundImage: `url(${backgroundImage})`
      }
    }, _react.default.createElement("div", {
      className: classes.firstTitle
    }, firstTitle), _react.default.createElement("div", {
      className: classes.firstLine
    }), _react.default.createElement("div", {
      className: classes.secondTitle
    }, secondTitle, _react.default.createElement("a", {
      className: classes.secondTitleBack
    }, secondTitleBack)), _react.default.createElement("div", {
      className: classes.secondLine
    }), _react.default.createElement("div", {
      className: classes.thirdTitle
    }, thirdTitle));
  }

}

var _default = (0, _styles.withStyles)(styles)(TopSection);

exports.default = _default;