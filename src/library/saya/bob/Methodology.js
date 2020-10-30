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
  },
  title: {
    fontSize: 40,
    lineHeight: 1.2,
    fontFamily: 'FilsonSoft-Bold',
  },
  line: {
    width: 461,
    height: 1,
    marginTop: 16,
  },
  subtitle: {
    fontSize: 20,
    fontFamily: 'FilsonSoft-Light',
    marginTop: 40,
  },
  description: {
    width: 460,
    marginTop: 8,
  },
  bottomContent: {
    fontSize: 14,
    fontFamily: 'FilsonSoftRegular',
    marginTop: 80,
  },
  space: {
    height: 12,
  },
};

class Methodology extends React.PureComponent {
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
      bottomContent,
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
            <div
              className={classes.title}
              style={{
                width: titleWidth,
                marginTop: titlMarginTop,
              }}
            >
              <Fade>
                <BreakAllContentText style={{ fontFamily: 'FilsonSoft-Bold' }}>{title}</BreakAllContentText>
              </Fade>
            </div>
            <div
              className={classes.line}
              style={{
                borderBottom: lineBorder,
              }}
            />
            <div
              className={classes.subtitle}
              style={{
                width: subtitleWidth,
              }}
            >
              <Fade>
                <BreakAllContentText style={{ fontFamily: 'FilsonSoft-Light' }}>{subtitle}</BreakAllContentText>
              </Fade>
            </div>
            <div className={classes.description}>
              <BreakAllContentText style={{ fontFamily: 'FilsonSoftRegular' }}>{description}</BreakAllContentText>
            </div>
            <div
              className={classes.bottomContent}
              style={{
                width: descriptionWidth,
              }}
            >
              <Fade>
                <BreakAllContentText style={{ fontFamily: 'FilsonSoftRegular' }}>{bottomContent}</BreakAllContentText>
              </Fade>
            </div>
            <div>
              {children}
            </div>
          </div>
        </ImageContainer>
        <div className={classes.space} />
      </>
    );
  }
}


export default withStyles(styles)(Methodology);
