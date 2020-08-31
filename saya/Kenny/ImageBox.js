"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _GreenButton = _interopRequireDefault(require("./GreenButton"));

var _BreakAllContentText = _interopRequireDefault(require("../BreakAllContentText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  box: {
    borderRadius: 30,
    margin: 20
  },
  root: {
    width: 368,
    height: 460,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 30,
    position: 'relative'
  },
  title: {
    fontSize: 40,
    fontFamily: 'FilsonSoft-Bold',
    lineHeight: 1.07,
    display: 'flex',
    flexDirection: 'column',
    height: 157
  },
  titleText: {
    flexGrow: 0
  },
  titleBack: {
    flexGrow: 0,
    fontFamily: 'FilsonSoft-Light'
  },
  secondTitle: {
    flexGrow: 0,
    lineHeight: 1.07
  },
  subtitle: {
    fontSize: 18,
    fontFamily: 'FilsonSoft-Bold',
    position: 'absolute',
    top: 164
  },
  space: {
    flex: 1
  },
  button: {
    flexShrink: 0,
    marginBottom: 46
  }
};

class ImageBoxSmall extends _react.default.PureComponent {
  render() {
    const {
      classes,
      title,
      titleBack,
      secondTitle,
      subtitle,
      backgroundImage,
      fontColor,
<<<<<<< HEAD
      onClick
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> a529698... no message
=======
>>>>>>> a78145c517218727181ab8e23b49f90b15a6f29f
=======
      paddingTop,
      buttonDisplay,
      onClick,
      children
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> af40d3e... release for v0.1.25
=======
>>>>>>> b81bf0c... release for v0.1.25
>>>>>>> b5028bb... no message
=======
>>>>>>> 53ed284... no message
=======
>>>>>>> b81bf0c... release for v0.1.25
>>>>>>> a529698... no message
=======
>>>>>>> b81bf0c... release for v0.1.25
>>>>>>> a78145c517218727181ab8e23b49f90b15a6f29f
    } = this.props;
    return _react.default.createElement(_Box.default, {
      className: classes.box,
      boxShadow: 8
    }, _react.default.createElement("div", {
      className: classes.root,
      style: {
        backgroundImage: `url(${backgroundImage})`,
        color: fontColor
      }
    }, _react.default.createElement(_BreakAllContentText.default, {
      className: classes.title
    }, _react.default.createElement("div", {
      className: classes.space
    }), _react.default.createElement("div", {
      className: classes.titleText
    }, title, _react.default.createElement("span", {
      className: classes.titleBack
<<<<<<< HEAD

    }, titleBack)), _react.default.createElement(_BreakAllContentText.default, {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> af40d3e... release for v0.1.25
=======
>>>>>>> b81bf0c... release for v0.1.25
>>>>>>> b5028bb... no message
=======

<<<<<<< HEAD
>>>>>>> 53ed284... no message
=======
=======

>>>>>>> a78145c517218727181ab8e23b49f90b15a6f29f
=======
<<<<<<< HEAD
    }, titleBack)), _react.default.createElement("div", {
      className: classes.secondTitle
    }, secondTitle)), _react.default.createElement("div", {
=======
    }, titleBack)), _react.default.createElement(_BreakAllContentText.default, {
>>>>>>> b81bf0c... release for v0.1.25
>>>>>>> 62bbf5a... no message
<<<<<<< HEAD
>>>>>>> a529698... no message
=======
>>>>>>> a78145c517218727181ab8e23b49f90b15a6f29f
      className: classes.subtitle
    }, _react.default.createElement(_BreakAllContentText.default, {
      style: {
        fontFamily: 'FilsonSoft-Bold'
      }
    }, subtitle)), _react.default.createElement("div", {
      className: classes.space
    }), _react.default.createElement("div", {
      className: classes.button
    }, _react.default.createElement(_GreenButton.default, {
<<<<<<< HEAD
      onClick: onClick,
      text: "Learn More"
    })), _react.default.createElement("div", null, children)));
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> af40d3e... release for v0.1.25
=======
>>>>>>> b81bf0c... release for v0.1.25
>>>>>>> b5028bb... no message
=======

<<<<<<< HEAD
>>>>>>> 53ed284... no message
=======
=======

>>>>>>> a78145c517218727181ab8e23b49f90b15a6f29f
=======
<<<<<<< HEAD
      text: "Learn More",
      onClick: onClick
    }))));
=======
      onClick: onClick,
      text: "Learn More"
    })), _react.default.createElement("div", null, children)));
>>>>>>> b81bf0c... release for v0.1.25
>>>>>>> 62bbf5a... no message
<<<<<<< HEAD
>>>>>>> a529698... no message
=======
>>>>>>> a78145c517218727181ab8e23b49f90b15a6f29f
  }

}

var _default = (0, _styles.withStyles)(styles)(ImageBoxSmall);

exports.default = _default;