import React from 'react';
import { withStyles } from '@material-ui/styles';
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
  },
  titleBack:{
    fontWeight: 'normal',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 10,
  },
  button: {
    marginTop: 160,
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

        <div className={classes.button} >
          <GreenButton
            text="Learn more"
          />
        </div>


      </div>

    );
  }
}


export default withStyles(styles)(ImageBox);