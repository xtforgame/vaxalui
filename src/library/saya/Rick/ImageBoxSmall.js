import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import GreenButton from '../bob/GreenButton';

const styles = {
  root: {
    width: 260,
    height: 325,
    textAlign: 'center',
    // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'center',
    // flexWrap: 'wrap',
    borderRadius: 0,
    marginRight: 24,
    fontFamily: 'FilsonSoft-Bold',
    position: 'relative',
    backgroundSize: 'cover',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold',

  },
  subtitle: {
    fontSize: 13,
    fontWeight: 'bold',
    paddingTop: 4,
  },
  button: {
    width: 160,
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
      onClick,
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
            fontFamily: 'FilsonSoft-Light', fontWeight: 'normal',
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
            bottom: 40,
          }}
        >
          <GreenButton className={classes.button} onClick={onClick} text="Learn More" />
        </div>
      </div>

    );
  }
}


export default withStyles(styles)(ImageBoxSmall);
