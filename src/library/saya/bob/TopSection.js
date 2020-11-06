import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Slide } from '../reveal';
import ImageContainer from '../ImageContainer';
import BreakAllContentText from '../BreakAllContentText';
import TweenMove from './TweenMove';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    height: 500,
    textAlign: 'center',
  },
  firstTitle: {
    fontSize: 20,
    fontFamily: 'FilsonSoft-Bold',
  },
  firstLine: {
    height: 1,
    marginTop: 2,
    width: '100%',
  },
  secondTitle: {
    width: 780,
    fontSize: 72,
    lineHeight: 1.11,
    fontFamily: 'FilsonSoft-Bold',
    marginTop: 38,
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


class TopSection extends React.PureComponent {
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
        <TweenMove
          height={500}
          image={backgroundImage}
        >
          <ImageContainer
            // image={backgroundImage}
            className={classes.root}
            style={{ color }}
          >
            <BreakAllContentText className={classes.firstTitle}>
              {firstTitle}
              <div
                className={classes.firstLine}
                style={{ backgroundColor: color }}
              />
            </BreakAllContentText>
            <div>
              <div className={classes.secondTitle}>
                {secondTitle}
              </div>
              <BreakAllContentText className={classes.thirdTitle}>
                {thirdTitle}
              </BreakAllContentText>
            </div>
          </ImageContainer>
        </TweenMove>
        <div className={classes.space} />
      </React.Fragment>
    );
  }
}


export default withStyles(styles)(TopSection);
