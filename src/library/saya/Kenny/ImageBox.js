import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import GreenButton from '../bob/GreenButton';
import BreakAllContentText from '../BreakAllContentText';

const styles = {
  box: {
    borderRadius: 30,
    margin: 20,
  },
  root: {
    width: 368,
    height: 460,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 30,
    position: 'relative',
  },
  title: {
    fontSize: 40,
    fontFamily: 'FilsonSoft-Bold',
    lineHeight: 1.07,
    display: 'flex',
    flexDirection: 'column',
    height: 157,
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
    top: 164,
  },
  space: {
    flex: 1,
  },
  button: {
    flexShrink: 0,
    marginBottom: 46,
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
      hideButton,
      rootStyle,
      children,
    } = this.props;


    return (
      <Box className={classes.box} boxShadow={8}>
        <div
          className={classes.root}
          style={{
            backgroundImage: `url(${backgroundImage})`,
            color: fontColor,
            ...rootStyle,
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
            <BreakAllContentText style={{ fontFamily: 'FilsonSoft-Bold' }}>
              {subtitle}
            </BreakAllContentText>
          </div>

          <BreakAllContentText className={classes.subtitle}>
            {subtitle}
          </BreakAllContentText>
          <div className={classes.space} />
          {
            !hideButton && (
              <div className={classes.button}>
                <GreenButton
                  onClick={onClick}
                  text="Learn More"
                />
              </div>
            )
          }
          {children}
        </div>
      </Box>
    );
  }
}


export default withStyles(styles)(ImageBoxSmall);
