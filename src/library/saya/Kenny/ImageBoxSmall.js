import React from 'react';
import { withStyles } from '@material-ui/styles';
import GreenButton from './GreenButton';

const styles = {
  root: {
    width: 255,
    height: 370,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexWrap: 'wrap',
    borderRadius: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold',
  },
  titleBack: {
    fontWeight: 300,
    },
  subtitle: {
    width: 125,
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 10,
  },
};

class ImageBoxSmall extends React.PureComponent {
  render() {
    const {
      classes,
      title,
      titleBack,
      subtitle,
      backgroundImage,
      fontColor,
      paddingTop,
      marginTop,
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
          {title}<span className={classes.titleBack}>{titleBack} </span>
        </div>

        <div className={classes.subtitle}>
          {subtitle}
        </div>

        <div 
        className={classes.button} 
        style={{
          marginTop: marginTop,
        }}
        >
          <GreenButton
            text="Learn more"
          />
        </div>


      </div>

    );
  }
}


export default withStyles(styles)(ImageBoxSmall);