"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Breadcrumbs = _interopRequireDefault(require("@material-ui/core/Breadcrumbs"));

var _Link = _interopRequireDefault(require("@material-ui/core/Link"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useStyles = (0, _styles.makeStyles)(theme => ({}));

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

var _default = props => {
  const {
    data = []
  } = props;
  const classes = useStyles();

  const renderBreadcrumb = (breadcrumb, index, breadcrumbs) => {
    if (breadcrumb.link) {
      return _react.default.createElement(_Link.default, {
        key: index,
        color: "inherit",
        href: "/",
        onClick: handleClick
      }, _react.default.createElement("span", {
        style: {
          fontSize: 14,
          fontFamily: 'FilsonSoftRegular',
          color: 'black'
        }
      }, breadcrumb.label));
    } else if (index !== breadcrumbs.length - 1) {
      return _react.default.createElement(_Link.default, {
        key: index,
        color: "inherit",
        href: "/",
        onClick: handleClick
      }, _react.default.createElement("span", {
        style: {
          fontSize: 14,
          fontFamily: 'FilsonSoftRegular',
          color: 'black'
        }
      }, breadcrumb.label));
    }

    return _react.default.createElement("span", {
      key: index,
      style: {
        fontSize: 14,
        fontFamily: 'FilsonSoft-Bold',
        color: 'black'
      }
    }, breadcrumb.label);
  };

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
    style: {
      paddingTop: 40,
      display: 'flex',
      justifyContent: 'center'
    }
  }, _react.default.createElement(_Breadcrumbs.default, {
    "aria-label": "breadcrumb"
  }, (data || []).map(renderBreadcrumb))));
};

exports.default = _default;