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
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold',
    paddingTop: 160,
  },
  line: {
    width: 420,
    height: 1,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 20,
    fontFamily: 'FilsonSoftRegular',
    paddingTop: 20,
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
      boxWidth,
    } = this.props;
    return (
      <div
        className={classes.root}
        style={{
          height: height,
          backgroundColor: backgroundColor,
          color: fontColor,
          marginTop: marginTop,
        }}
      >
        <div className={classes.title}>
          {title}
          </div>

        <div
          className={classes.line}
          style={{
            border: borderStyle,
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
