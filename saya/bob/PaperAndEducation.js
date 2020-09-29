"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _ImageContainer = _interopRequireDefault(require("../ImageContainer"));

var _PartnerForm = _interopRequireDefault(require("./PartnerForm"));

var _DownloadItem = _interopRequireDefault(require("./DownloadItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  root: {},
  bottle: {
    color: '#000000',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  title: {
    width: 'fit-content',
    marginTop: 80,
    marginBottom: 22,
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold',
    lineHeight: 0.6
  },
  subTitle: {
    width: 260,
    fontSize: 14,
    margin: '22px 0',
    fontFamily: 'FilsonSoft-Bold'
  },
  line: {
    width: 660,
    height: 1,
    border: ' solid 1px #000000'
  },
  partnerFormWrapper: {
    padding: '0px 20px 24px',
    backgroundColor: '#e5e5e5',
    marginBottom: 22
  },
  button: {
    marginLeft: 15
  },
  space: {
    height: 92
  }
};

class PaperAndEducation extends _react.default.PureComponent {
  render() {
    const {
      classes,
      backgroundImage
    } = this.props;
    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ImageContainer.default, {
      className: classes.root,
      image: backgroundImage
    }, _react.default.createElement("div", {
      className: classes.bottle
    }, _react.default.createElement("div", {
      className: classes.title
    }, "Papers and Education"), _react.default.createElement("div", {
      className: classes.line
    }), _react.default.createElement("div", {
      style: {
        display: 'flex'
      }
    }, _react.default.createElement("div", {
      className: classes.subTitle
    }, "Sustainability Report 2020"), _react.default.createElement("div", {
      style: {
        color: '#64703f',
        margin: '22px 0 22px 80px'
      }
    }, "Please subscribe our newsletter to download")), _react.default.createElement("div", {
      className: classes.partnerFormWrapper
    }, _react.default.createElement(_PartnerForm.default, {
      subtitle: "Sign up to stay in touch on the newest renewal technologies, products, events, and news from SAYA.",
      labelContent: "SAYA may use my email address provided above to send me relevant marketing communications. I understand that I can unsubscribe from these communications at any time. ",
      emailTextInputWidth: "460px"
    })), _react.default.createElement(_DownloadItem.default, {
      label: "Promostyl",
      href: "/"
    }), _react.default.createElement(_DownloadItem.default, {
      label: "Tools",
      href: "/"
    }), _react.default.createElement("div", {
      style: {
        border: '1px solid #000000'
      }
    }), _react.default.createElement("div", {
      className: classes.title
    }, "Artworks"), _react.default.createElement("div", {
      className: classes.line
    }), _react.default.createElement(_DownloadItem.default, {
      label: "Hangtag",
      href: "/"
    }), _react.default.createElement(_DownloadItem.default, {
      label: "Posters",
      href: "/"
    }), _react.default.createElement(_DownloadItem.default, {
      label: "Wallpaper",
      href: "/"
    }), _react.default.createElement("div", {
      className: classes.line
    }), _react.default.createElement("div", {
      className: classes.title
    }, "Press Releases"), _react.default.createElement(_DownloadItem.default, {
      label: "Nam dapibus nisl vitae elit fringilla rutrum - aenean sollicitudin",
      href: "/"
    }), _react.default.createElement(_DownloadItem.default, {
      label: "Lorem",
      href: "/"
    }), _react.default.createElement("div", {
      className: classes.line
    }))), _react.default.createElement("div", {
      className: classes.space
    }));
  }

}

var _default = (0, _styles.withStyles)(styles)(PaperAndEducation);

exports.default = _default;