import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    width: 260,
    height: 325,
    textAlign: 'center',
    // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'center',
    // flexWrap: 'wrap',
    borderRadius: 30,
    marginRight: 24,
    fontFamily: 'FilsonSoft-Bold',
    position: 'relative',
    backgroundSize: 'cover',
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingTop: 4,
  },
  button: {
    width: 160,
    height: 50,
    fontSize: 15,
    color: '#ffffff',
    fontWeight: 'bold',
    backgroundColor: '#64703f',
    border: 'none',
    borderRadius: 25,
    marginTop: 97,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'FilsonSoft-Bold',
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
      subtitleFontFamily,
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
        <pre
          className={classes.title}
          style={{
            paddingTop, marginTop: 0, marginBottom: 0,
          }}
        >
          {title}
          <span style={{
            fontFamily: 'FilsonSoftLight', fontWeight: 'normal',
          }}>{titleBack}</span>
        </pre>

        <pre
          className={classes.subtitle}
          style={{
            marginTop: 0, marginBottom: 0,
          }}>
          {subtitle}
        </pre>

        <div
          style={{
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            bottom: 50,
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


export default withStyles(styles)(ImageBoxSmall);
