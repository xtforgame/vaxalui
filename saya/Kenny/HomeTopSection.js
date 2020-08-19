"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/styles");

var _bg = _interopRequireDefault(require("../../../../stories/saya/img/bg0.jpg"));

var _round_arrow = _interopRequireDefault(require("../../../../stories/saya/img/round_arrow.svg"));

var _scrollArrow = _interopRequireDefault(require("../../../../stories/saya/img/scroll arrow.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  root: {
    width: '100%',
    height: 500,
    display: 'flex',
    justifyContent: 'center'
  },
  section: {
    width: 1024,
    height: 500,
    color: '#000000',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    backgroundImage: `url(${_bg.default})`,
    backgroundRepeat: 'no-repeat'
  },
  scrollArrow: {
    width: 1024,
    height: 50,
    marginTop: 225
  },
  title: {
    fontSize: 44,
    fontWeight: 300,
    paddingTop: 30
  },
  titleBack: {
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold'
  },
  line: {
    width: 420,
    height: 1,
    marginTop: 10,
    border: ' solid 1px #000000'
  },
  subtitle: {
    fontSize: 18,
    fontFamily: 'FilsonSoftRegular',
    paddingTop: 20
  },
  roundArrow: {
    width: 50,
    height: 50,
    marginTop: 30
  }
};

class HomeTopSection extends _react.default.PureComponent {
  render() {
    const {
      classes
    } = this.props;
    return _react.default.createElement("div", {
      className: classes.root
    }, _react.default.createElement("div", {
      className: classes.section
    }, _react.default.createElement("div", {
      className: classes.scrollArrow
    }, _react.default.createElement("img", {
      src: _scrollArrow.default
    })), _react.default.createElement("div", {
      className: classes.title
    }, "In the Business of ", _react.default.createElement("span", {
      className: classes.titleBack
    }, "Renewal")), _react.default.createElement("div", {
      className: classes.line
    }), _react.default.createElement("div", {
      className: classes.subtitle
    }, "The next of recycled goods."), _react.default.createElement("div", {
      className: classes.roundArrow
    }, _react.default.createElement("img", {
      src: _round_arrow.default
    }))));
  }

}

var _default = (0, _styles.withStyles)(styles)(HomeTopSection);

exports.default = _default;