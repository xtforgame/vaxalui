import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ImageContainer from '../ImageContainer';
import BreakAllContentText from '../BreakAllContentText';


const styles = {
  root: {
    height: 330,
    textAlign: 'center',
  },
  firstTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold',
    lineHeight: 1,
  },
  firstLine: {
    height: 1,
    marginTop: 2,
  },
  secondTitle: {
    fontSize: 55,
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold',
    paddingTop: 10,
  },
  secondTitleBack: {
    fontWeight: 'normal',
    fontFamily: 'FilsonSoft-Light',
  },
  secondLine: {
    width: 420,
    height: 1,
    marginTop: 2,
  },
  thirdTitle: {
    fontSize: 20,
    lineHeight: 1.2,
    fontFamily: 'FilsonSoftRegular',
  },
  flex1: {
    flex: 1,
  },
};


class TopSection extends React.PureComponent {
  render() {
    const {
      classes,
      firstTitle,
      secondTitle,
      secondTitleBack,
      thirdTitle,
      backgroundImage,
      fontColor,
      lineBorder,
      firstLineWidth,
      thirdTitleWidth,
    } = this.props;
    return (
      <ImageContainer
        image={backgroundImage}
        className={classes.root}
        style={{
          color: fontColor,
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 55,
            height: 72,
          }}
        >
          <BreakAllContentText className={classes.firstTitle}>
            {firstTitle}
          </BreakAllContentText>
          <div
            className={classes.firstLine}
            style={{
              width: '100%',
              border: lineBorder,
            }}
          />
        </div>

        <div className={classes.flex1} />

        <div className={classes.secondTitle}>
          {secondTitle}<span className={classes.secondTitleBack}>{secondTitleBack}</span>
        </div>

        <div className={classes.flex1} />

        <div
          style={{
            position: 'absolute',
            bottom: 0,
            height: 72,
          }}
        >
          <BreakAllContentText
            className={classes.thirdTitle}
            style={{
              width: thirdTitleWidth,
              margin: 0,
            }}
          >
            {thirdTitle}
          </BreakAllContentText>
        </div>
      </ImageContainer>
    );
  }
}


export default withStyles(styles)(TopSection);
