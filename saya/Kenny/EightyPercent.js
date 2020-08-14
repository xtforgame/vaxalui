"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  root: {
    width: '100%',
    height: 560,
    display: 'flex',
    justifyContent: 'center'
  },
  leftColumn: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 165,
    paddingRight: 65
  },
  rightColumn: {
    width: 445,
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 200,
    paddingLeft: 65,
    flexWrap: 'wrap'
  },
  eighty: {
    fontSize: 180,
    color: '#64703f',
    lineHeight: 0.74
  },
  percent: {
    fontSize: 20,
    color: '#64703f'
  },
  topTile: {
    fontSize: 20,
    color: '#000000',
    paddingTop: 20,
    paddingLeft: 10
  },
  line: {
    width: 250,
    height: 1,
    border: '3px solid #000000',
    marginTop: 15,
    marginLeft: 10
  },
  bottomTitle: {
    fontSize: 20,
    color: '#000000',
    paddingTop: 10,
    paddingLeft: 10
  },
  rightTile: {
    fontSize: 20,
    color: '#000000'
  },
  description: {
    fontSize: 14,
    color: '#000000',
    paddingTop: 22
  }
};

class EightyPercent extends _react.default.PureComponent {
  render() {
    const {
      classes
    } = this.props;
    return _react.default.createElement("div", {
      className: classes.root
    }, _react.default.createElement("div", {
      className: classes.leftColumn
    }, _react.default.createElement("div", {
      className: classes.eighty
    }, "80", _react.default.createElement("a", {
      className: classes.percent
    }, "%")), _react.default.createElement("div", {
      className: classes.topTile
    }, "ocean plastics"), _react.default.createElement("div", {
      className: classes.line
    }), _react.default.createElement("div", {
      className: classes.bottomTitle
    }, "from coastal land")), _react.default.createElement("div", {
      className: classes.rightColumn
    }, _react.default.createElement("div", {
      className: classes.rightTile
    }, "Lorem ipsum dolor sit amet."), _react.default.createElement("div", {
      className: classes.description
    }, "SAYA Coastal is a specialized recycling program that targets the clean-up and renewal of discarded plastic bottles in coastal regions that would otherwise migrate out to sea. Study shows more than 80% of ocean plastics actually originated from coastal land.")));
  }

}

var _default = (0, _styles.withStyles)(styles)(EightyPercent);

exports.default = _default;