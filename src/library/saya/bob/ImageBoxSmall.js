import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import GreenButton from '../bob/GreenButton';
import BreakAllContentText from '../BreakAllContentText';

const styles = {
  box: {
    margin: 20,
  },
  root: {
    width: 255,
    height: 368,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
  },
  title: {
    fontSize: 24,
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
      onClick,
    } = this.props;


    return (
      <Box className={classes.box} boxShadow={0}>
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
            <BreakAllContentText style={{ fontFamily: 'FilsonSoftRegular' }}>
              {subtitle}
            </BreakAllContentText>
          </div>

          <div className={classes.space} />

          <div className={classes.button}>
            <GreenButton
              text="Learn More"
              onClick={onClick}
            />
          </div>
        </div>
      </Box>
    );
  }
}


export default withStyles(styles)(ImageBoxSmall);
