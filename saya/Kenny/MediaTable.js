"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _BreakAllContentText = _interopRequireDefault(require("../BreakAllContentText"));

var _GreenButton = _interopRequireDefault(require("./GreenButton"));

var _TextField = _interopRequireDefault(require("./TextField"));

var _ImageContainer = _interopRequireDefault(require("../ImageContainer"));

var _PartnerForm = _interopRequireDefault(require("./PartnerForm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useStyles = (0, _styles.makeStyles)(theme => ({
  container: {},
  root: {
    width: 660
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold'
  },
  divider1: {
    width: '100%',
    height: 2,
    backgroundColor: '#000000'
  },
  divider2: {
    width: '100%',
    height: 1,
    backgroundColor: '#000000'
  }
}));

var _default = props => {
  const {
    title,
    rows = []
  } = props;
  const classes = useStyles();
  return _react.default.createElement("div", {
    className: classes.root
  }, _react.default.createElement("div", {
    className: classes.title
  }, _react.default.createElement(_BreakAllContentText.default, {
    style: {
      fontFamily: 'FilsonSoft-Bold'
    }
  }, title)), _react.default.createElement("div", {
    style: {
      width: '100%',
      height: 10
    }
  }), _react.default.createElement("div", {
    className: classes.divider1
  }), rows.map(row => {
    return _react.default.createElement(_react.default.Fragment, {
      key: row.id
    }, _react.default.createElement("div", {
      style: {
        width: '100%',
        height: 62,
        display: 'flex',
        justifyContent: 'start'
      }
    }, _react.default.createElement("div", {
      style: {
        flex: 1,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }
    }, _react.default.createElement(_BreakAllContentText.default, {
      style: {
        fontFamily: 'FilsonSoft-Bold',
        fontSize: 14
      }
    }, row.name)), _react.default.createElement("div", {
      style: {
        flex: 1,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: 8
      }
    }, _react.default.createElement(_BreakAllContentText.default, {
      style: {
        fontFamily: 'FilsonSoftRegular',
        fontSize: 14,
        color: '#64703f'
      }
    }, row.url ? _react.default.createElement("a", {
      href: row.url,
      target: "_blank",
      style: {
        fontFamily: 'FilsonSoftRegular',
        fontSize: 14,
        color: '#64703f'
      }
    }, _react.default.createElement("u", null, row.linkName)) : row.linkName))), row.body, _react.default.createElement("div", {
      className: classes.divider2
    }));
  }), _react.default.createElement("div", {
    className: classes.divider2
  }));
};

exports.default = _default;