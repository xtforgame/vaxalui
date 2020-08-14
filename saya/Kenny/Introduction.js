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
    height: 590,
    backgroundColor: '#000000',
    textAlign: 'left',
    paddingLeft: 40,
    paddingTop: 80,
    color: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexWrap: 'wrap'
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold'
  },
  line: {
    width: 420,
    height: 1,
    border: '1px solid #ffffff',
    marginTop: 20
  },
  subtitle: {
    fontSize: 20,
    marginTop: 20
  },
  description: {
    fontSize: 14,
    marginTop: 20,
    width: 460
  }
};

class Introduction extends _react.default.PureComponent {
  render() {
    const {
      classes
    } = this.props;
    return _react.default.createElement("div", {
      className: classes.root
    }, _react.default.createElement("div", {
      className: classes.title
    }, "Design Consciously,", _react.default.createElement("br", null), "Know What Goes Into Your Gears."), _react.default.createElement("div", {
      className: classes.line
    }), _react.default.createElement("div", {
      className: classes.subtitle
    }, "Smooth and Painless Transition to Smarter Fibers."), _react.default.createElement("div", {
      className: classes.description
    }, "Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodales nisi, quis iaculis nulla iaculis vitae. Donec sagittis faucibus lacus eget blandit. Mauris vitae ultricies metus, at condimentum nulla. Donec quis ornare lacus. Etiam gravida mollis tortor quis porttitor."));
  }

}

var _default = (0, _styles.withStyles)(styles)(Introduction);

exports.default = _default;