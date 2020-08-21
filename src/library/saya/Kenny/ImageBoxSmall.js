import React from 'react';
import { withStyles } from '@material-ui/core/styles';
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
    margin: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold',
    lineHeight: 1.07,
  },
  titleBack: {
    fontWeight: 300,
  },
  secondTitle: {
    lineHeight: 1.07,
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
      secondTitle,
      titleWidth,
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
            paddingTop,
            width: titleWidth,
          }}
        >
          {title}
          <span className={classes.titleBack}>
            {titleBack}
            {' '}
          </span>
          <div className={classes.secondTitle}>{secondTitle}</div>
        </div>

        <div className={classes.subtitle}>
          <pre style={{ fontFamily: 'FilsonSoftegular' }}>{subtitle}</pre>
        </div>

        <div
          className={classes.button}
          style={{
            marginTop,
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
