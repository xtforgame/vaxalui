import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    width: 325,
    height: 405,
    textAlign: 'center',
    // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'center',
    // flexWrap: 'wrap',
    borderRadius: 30,
    marginBottom: 50,
    fontFamily: 'FilsonSoft-Bold',
    position: 'relative',
  },
  title: {
    fontSize: 33,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 10,
  },
  button: {
    width: 130,
    height: 45,
    fontSize: 14,
    color: '#ffffff',
    backgroundColor: '#64703f',
    border: 'none',
    borderRadius: 22,
    marginTop: 160,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'FilsonSoft-Bold',
  },
};

class ImageBox extends React.PureComponent {
  render() {
    const {
      classes,
      title,
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
            paddingTop,
          }}
        >
          {title}
        </div>

        <div className={classes.subtitle}>
          {subtitle}
        </div>

        <div
          style={{
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            bottom: 62,
          }}
        >
          <button className={classes.button}>
            Learn More
          </button>
        </div>
      </div>

    );
  }
}


export default withStyles(styles)(ImageBox);
