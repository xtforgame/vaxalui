"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _Project = _interopRequireDefault(require("./Project"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  root: {
    height: 595,
    paddingTop: 60,
    display: 'flex',
    justifyContent: 'center'
  },
  title: {
    fontSize: 12,
    fontFamily: 'FilsonSoft-Bold'
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#979797',
    marginTop: 14
  },
  listRoot: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 32
  }
};

class TechnologyProjects extends _react.default.PureComponent {
  render() {
    const {
      classes,
      height,
      title,
      list,
      backgroundColor
    } = this.props;
    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
      className: classes.root,
      style: {
        backgroundColor,
        height
      }
    }, _react.default.createElement("div", {
      style: {
        width: 320
      }
    }, _react.default.createElement("div", {
      className: classes.title
    }, title), _react.default.createElement("div", {
      className: classes.line
    }), _react.default.createElement("div", {
      className: classes.listRoot
    }, list.map(l => _react.default.createElement(_Project.default, l))))));
  }

}

var _default = (0, _styles.withStyles)(styles)(TechnologyProjects);

exports.default = _default;