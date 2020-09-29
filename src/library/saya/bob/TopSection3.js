import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ImageContainer from '../ImageContainer';
import BreakAllContentText from '../BreakAllContentText';


const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    height: 461,
    textAlign: 'center',
    backgroundColor: '#e3e3e3',
  },
  firstTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold',
  },
  firstLine: {
    height: 1,
    margin: '14px auto',
    width: 462,
  },
  secondTitle: {
    width: 780,
    fontSize: 72,
    lineHeight: 1.11,
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold',
    marginTop: 38,
  },
  secondLine: {
    width: 420,
    height: 1,
    marginTop: 2,
  },
  thirdTitle: {
    marginTop: 24,
    fontSize: 20,
    fontFamily: 'FilsonSoft-Bold',
    fontWeight: 300,
  },
  space: {
    height: 12,
  },
};


class TopSection3 extends React.PureComponent {
  render() {
    const {
      classes,
      firstTitle,
      secondTitle,
      topTitle,
      bottomTitle,
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
          <BreakAllContentText className={classes.firstTitle}>
            {firstTitle}
          </BreakAllContentText>
          <div>
            <div className={classes.secondTitle}>
              {secondTitle}
            </div>
            <BreakAllContentText
              className={classes.thirdTitle}
              style={{
                width: thirdTitleWidth,
              }}
            >
              <div style={{ marginTop: 24 }}>{topTitle}</div>
              <div className={classes.firstLine} style={{ backgroundColor: color }} />
              <div>{bottomTitle}</div>
            </BreakAllContentText>
          </div>
        </ImageContainer>
        <div className={classes.space} />
      </React.Fragment>
    );
  }
}


export default withStyles(styles)(TopSection3);
