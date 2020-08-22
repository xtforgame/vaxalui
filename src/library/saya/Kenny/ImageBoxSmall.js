import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import GreenButton from './GreenButton';
import BreakAllContentText from '../BreakAllContentText';

const styles = {
  root: {
    width: 255,
    height: 370,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 30,
    margin: 20,
    position: 'relative',
  },
  title: {
    fontSize: 28,
    fontFamily: 'FilsonSoft-Bold',
    lineHeight: 1.07,
    display: 'flex',
    flexDirection: 'column',
    height: 116,
  },
  titleText: {
    flexGrow: 0,
  },
  titleBack: {
    flexGrow: 0,
    fontFamily: 'FilsonSoft-Light',
  },
  secondTitle: {
    flexGrow: 0,
    lineHeight: 1.07,
  },
  subtitle: {
    fontSize: 18,
    fontFamily: 'FilsonSoft-Bold',
    position: 'absolute',
    top: 124,
  },
  space: {
    flex: 1,
  },
  button: {
    flexShrink: 0,
    marginBottom: 58,
  },
};

class ImageBoxSmall extends React.PureComponent {
  render() {
    const {
      classes,
      title,
      titleBack,
      secondTitle,
      subtitle,
      backgroundImage,
      fontColor,
    } = this.props;


    return (
      <div
        className={classes.root}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          color: fontColor,
        }}
      >
        <BreakAllContentText
          className={classes.title}
        >
          <div className={classes.space} />
          <div className={classes.titleText}>
            {title}
            <span className={classes.titleBack}>
              {titleBack}
            </span>
          </div>
          <div className={classes.secondTitle}>{secondTitle}</div>
        </BreakAllContentText>

        <div className={classes.subtitle}>
          <BreakAllContentText style={{ fontFamily: 'FilsonSoftegular' }}>
            {subtitle}
          </BreakAllContentText>
        </div>

        <div className={classes.space} />

        <div className={classes.button}>
          <GreenButton
            text="Learn more"
          />
        </div>
      </div>

    );
  }
}


export default withStyles(styles)(ImageBoxSmall);
