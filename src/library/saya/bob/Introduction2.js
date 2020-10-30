import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';
import ImageContainer from '../ImageContainer';
import BreakAllContentText from '../BreakAllContentText';

const styles = {
  root: {
    paddingTop: 80,
  },
  container: {
    width: 940,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontSize: 32,
    lineHeight: 1.2,
    fontFamily: 'FilsonSoft-Bold',
  },
  line: {
    width: 780,
    height: 1,
    marginTop: 16,
  },
  subtitle: {
    fontSize: 20,
    fontFamily: 'FilsonSoft-Bold',
    marginTop: 39,
  },
  description: {
    fontSize: 14,
    fontFamily: 'FilsonSoftRegular',
    marginTop: 10,
    paddingBottom: 250,
  },
  space: {
    height: 12,
  },
};

class Introduction extends React.PureComponent {
  render() {
    const {
      classes,
      height,
      title,
      backgroundImage,
      titleWidth,
      titlMarginTop,
      titleBack,
      subtitle,
      subtitleWidth,
      description,
      descriptionWidth,
      fontColor,
      lineBorder,
      backgroundColor,
      children,
    } = this.props;
    return (
      <>
        <ImageContainer
          image={backgroundImage}
          className={classes.root}
          style={{
            height,
            color: fontColor,
            backgroundColor,
          }}
        >
          <div
            className={classes.container}
          >
            <Fade>
              <div
                className={classes.title}
                style={{
                  width: titleWidth,
                  marginTop: titlMarginTop,
                }}
              >
                {title}
              </div>
            </Fade>
            <div
              className={classes.line}
              style={{
                backgroundColor: fontColor,
              }}
            />
            <Fade>
              <div
                className={classes.subtitle}
                style={{
                  width: subtitleWidth,
                }}
              >
                {subtitle}
              </div>
            </Fade>
            <div
              className={classes.description}
              style={{
                width: descriptionWidth,
              }}
            >
              <Fade>
                <BreakAllContentText style={{ fontFamily: 'FilsonSoftRegular' }}>{description}</BreakAllContentText>
              </Fade>
            </div>
          </div>
        </ImageContainer>
        <div>
          {children}
        </div>
        <div className={classes.space} />
      </>
    );
  }
}


export default withStyles(styles)(Introduction);
