import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    width: '100%',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontFamily: 'FilsonSoft-Bold',
    paddingTop: 100,
  },
  titleBack: {
    fontFamily: 'FilsonSoft-Light',
  },
  line: {
    width: 420,
    height: 1,
    marginTop: 32,
  },
  subtitle: {
    fontSize: 20,
    fontFamily: 'FilsonSoft-Light',
    fontWeight: 300,
    paddingTop: 22,
  },
  box: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 115,
    flexWrap: 'wrap',
  },
};

class ClassicFibers extends React.PureComponent {
  render() {
    const {
      classes,
      height,
      backgroundColor,
      fontColor,
      marginTop,
      children,
      borderStyle,
      subtitle,
      title,
      titleBack,
      boxWidth,
    } = this.props;
    return (
      <div
        className={classes.root}
        style={{
          height,
          backgroundColor,
          color: fontColor,
          marginTop,
        }}
      >
        <div className={classes.title}>
          {title}
          <span className={classes.titleBack}>
            {titleBack}
          </span>
        </div>

        <div
          className={classes.line}
          style={{
            backgroundColor: fontColor,
          }}
        />

        <div className={classes.subtitle}>
          {subtitle}
        </div>

        <div
          className={classes.box}
          style={{
            width: boxWidth,
          }}
        >
          {children}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ClassicFibers);
