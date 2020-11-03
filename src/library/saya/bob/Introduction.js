import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Slide } from '../reveal';
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
  },
  line: {
    width: 461,
    height: 1,
    marginTop: 36,
  },
  subtitle: {
    fontSize: 20,
    fontFamily: 'FilsonSoftRegular',
    marginTop: 20,
  },
  description: {
    fontSize: 14,
    fontFamily: 'FilsonSoftRegular',
    marginTop: 32,
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
            <div
              className={classes.title}
              style={{
                width: titleWidth,
                marginTop: titlMarginTop,
              }}
            >
              <Slide direction="up" triggerOnce>
                <BreakAllContentText style={{ fontFamily: 'FilsonSoft-Bold' }}>{title}</BreakAllContentText>
              </Slide>
            </div>
            <div
              className={classes.line}
              style={{
                border: lineBorder,
              }}
            />
            <div
              className={classes.subtitle}
              style={{
                width: subtitleWidth,
              }}
            >
              <Slide direction="up" triggerOnce>
                <BreakAllContentText style={{ fontFamily: 'FilsonSoft-Bold' }}>{subtitle}</BreakAllContentText>
              </Slide>
            </div>
            <div
              className={classes.description}
              style={{
                width: descriptionWidth,
              }}
            >
              <Slide direction="up" triggerOnce>
                <BreakAllContentText style={{ fontFamily: 'FilsonSoftRegular' }}>{description}</BreakAllContentText>
              </Slide>
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
