import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ImageContainer from '../ImageContainer';

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
  },
  secondLine: {
    width: 420,
    height: 1,
    marginTop: 2,
  },
  thirdTitle: {
    width: 390,
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
    } = this.props;
    return (
      <ImageContainer
        image={backgroundImage}
        className={classes.root}
        style={{
          color: fontColor,
        }}
      >
        <div className={classes.firstTitle}>
          {firstTitle}
        </div>

        <div
          className={classes.firstLine}
          style={{
            width: firstLineWidth,
            border: lineBorder,
          }}
        />

        <div className={classes.secondTitle}>
          {secondTitle} <span className={classes.secondTitleBack}> {secondTitleBack} </span>
        </div>

        <div
          className={classes.secondLine}
          style={{
            border: lineBorder,
          }}
        />

        <div className={classes.thirdTitle}>
          {thirdTitle}
        </div>
      </ImageContainer>
    );
  }
}


export default withStyles(styles)(TopSection);
