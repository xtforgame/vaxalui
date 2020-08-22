import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import GreenButton from './GreenButton';

const styles = {
  root: {
    width: 370,
    height: 460,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexWrap: 'wrap',
    borderRadius: 30,
    marginBottom: 50,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold',
  },
  titleBack: {
    fontWeight: 'normal',
    fontFamily: 'FilsonSoft-Light',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold',
    paddingTop: 10,
  },
  button: {
    marginTop: 160,
    fontFamily: 'FilsonSoft-Bold',
  },
};

class ImageBox extends React.PureComponent {
  render() {
    const {
      classes,
      title,
      titleBack,
      subtitle,
      backgroundImage,
      fontColor,
      paddingTop,
      buttonDisplay,
      children,
    } = this.props;
    return (
      <div
        className={classes.root}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          color: fontColor,
        }}
      >
        <div
          className={classes.title}
          style={{
            paddingTop: paddingTop,
          }}
        >
          {title}<span className={classes.titleBack}>{titleBack}</span>
        </div>

        <div className={classes.subtitle}>
          {subtitle}
        </div>

        <div className={classes.button} style={{ display: buttonDisplay }}>
          <GreenButton
            text="Learn more"
          />
        </div>
        
        <div>
          {children}
        </div>
      </div>
    );
  }
}


export default withStyles(styles)(ImageBox);
