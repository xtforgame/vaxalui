import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Slide } from '../reveal';
import ImageContainer from '../ImageContainer';
import BreakAllContentText from '../BreakAllContentText';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    height: 380,
    textAlign: 'center',
  },
  firstTitle: {
    fontSize: 20,
    fontFamily: 'FilsonSoft-Bold',
    lineHeight: 1,
  },
  firstLine: {
    height: 1,
    width: '100%',
  },
  secondTitle: {
    width: 780,
    fontSize: 72,
    fontWeight: 300,
    fontFamily: 'FilsonSoft-Light',
    marginTop: 34,
    lineHeight: 1,
  },
  secondLine: {
    width: 420,
    height: 1,
    marginTop: 2,
  },
  thirdTitle: {
    marginTop: 16,
    fontSize: 20,
    fontFamily: 'FilsonSoft-Light',
  },
  flex1: {
    flex: 1,
  },
  space: {
    height: 12,
  },
};


class TopSection2 extends React.PureComponent {
  render() {
    const {
      classes,
      firstTitle,
      secondTitle,
      thirdTitle,
      backgroundImage,
      thirdTitleWidth,

      color = '#ffffff',
    } = this.props;
    return (
      <React.Fragment>
        <ImageContainer
          image={backgroundImage}
          className={classes.root}
          style={{ color }}
        >
          <Slide direction="up" triggerOnce>
            <BreakAllContentText className={classes.firstTitle}>
              {firstTitle}
              <div
                className={classes.firstLine}
                style={{ backgroundColor: color }}
              />
            </BreakAllContentText>
          </Slide>
          <div>
            <Slide direction="up" triggerOnce>
              <BreakAllContentText className={classes.secondTitle}>
                {secondTitle}
              </BreakAllContentText>
            </Slide>
            <Slide direction="up" triggerOnce>
              <BreakAllContentText
                className={classes.thirdTitle}
                style={{
                  width: thirdTitleWidth,
                  margin: 0,
                }}
              >
                {thirdTitle}
              </BreakAllContentText>
            </Slide>
          </div>
        </ImageContainer>
        <div className={classes.space} />
      </React.Fragment>
    );
  }
}


export default withStyles(styles)(TopSection2);
