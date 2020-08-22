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
    lineHeight: 1.31,
    paddingTop: 90,
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
    fontFamily: 'FilsonSoftRegular',
    paddingTop: 10,
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
        <BreakAllContentText className={classes.firstTitle}>
          {firstTitle}
        </BreakAllContentText>

        <div
          className={classes.firstLine}
          style={{
            width: firstLineWidth,
            border: lineBorder,
          }}
        />

        <div className={classes.secondTitle}>
          {secondTitle}<span className={classes.secondTitleBack}>{secondTitleBack} </span>
        </div>

        <div
          className={classes.secondLine}
          style={{
            border: lineBorder,
          }}
        />

        <BreakAllContentText
          className={classes.thirdTitle}
          style={{
            width: thirdTitleWidth,
          }}
        >
          {thirdTitle}
        </BreakAllContentText>
      </ImageContainer>
    );
  }
}


export default withStyles(styles)(TopSection);
