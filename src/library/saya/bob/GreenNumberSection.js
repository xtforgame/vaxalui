import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import BreakAllContentText from '../BreakAllContentText';
import ImageContainer from '../ImageContainer';

const styles = {
  topSection: {
    display: 'flex',
    justifyContent: 'center',
    height: 350,
    color: '#000000',
  },
  titleWhite: {
    color: '#ffffff',
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold',
  },
  root: {
    width: '100%',
    height: 450,
    display: 'flex',
    justifyContent: 'center',
  },
  leftColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  rightColumn: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  numberUpTitle: {
    fontSize: 20,
    color: '#000000',
    fontFamily: 'FilsonSoft-Bold',
    paddingLeft: 10,
  },
  number: {
    fontSize: 180,
    lineHeight: 0.74,
    fontFamily: 'FilsonSoftRegular',
  },
  percent: {
    fontSize: 20,
    fontFamily: 'FilsonSoftRegular',
  },
  topTile: {
    fontSize: 20,
    color: '#000000',
    fontFamily: 'FilsonSoft-Bold',
    paddingTop: 16,
    paddingLeft: 10,
  },
  line: {
    height: 2,
    backgroundColor: '#000000',
    marginTop: 12,
    marginLeft: 10,
  },
  bottomTitle: {
    fontSize: 20,
    color: '#000000',
    fontFamily: 'FilsonSoft-Bold',
    paddingTop: 12,
    paddingLeft: 10,
  },
  rightTitle: {
    fontSize: 20,
    color: '#000000',
    fontFamily: 'FilsonSoft-Bold',
  },
  description: {
    paddingTop: 20,
    width: 380,
    fontSize: 14,
    color: '#000000',
    fontFamily: 'FilsonSoftRegular',
  },
  space: {
    height: 12,
  },
};


class GreenNumberSection extends React.PureComponent {
  render() {
    const {
      classes,
      numberUpTitle,
      number,
      topTile,
      bottomTitle,
      rightTitle,
      description,
      lineWidth,
      height,
      numberPaddingTop,
      leftPaddingTop,
      leftPaddingRight,
      rightPaddingLeft,
      descriptionPaddingTop,
      percentDisplay,
      backgroundColor,
      numberColor,
      percentColor,
      backgroundImage,
      topTitle,
    } = this.props;
    return (
      <>
        <ImageContainer
          image={backgroundImage}
          className={classes.topSection}
        >
          <div>
            <span className={classes.titleWhite}>{topTitle}</span>
          </div>
        </ImageContainer>
        <div
          className={classes.root}
          style={{
            height: height,
            backgroundColor: backgroundColor,
          }}
        >
          <div
            className={classes.leftColumn}
            style={{
              paddingTop: leftPaddingTop,
              paddingRight: leftPaddingRight,
            }}
          >
            <div className={classes.numberUpTitle}> {numberUpTitle} </div>

            <div
              className={classes.number}
              style={{
                paddingtTop: numberPaddingTop,
                color: numberColor,
              }}
            >
              {number}
              <span
                className={classes.percent}
                style={{
                  display: percentDisplay,
                  color:percentColor,
                }}
              >
                %</span>
            </div>
            <div className={classes.topTile}>{topTile}</div>
            <div
              className={classes.line}
              style={{
                width: lineWidth
              }}
            />
            <div className={classes.bottomTitle}>{bottomTitle}</div>
          </div>
          <div
            className={classes.rightColumn}
            style={{
              paddingLeft: rightPaddingLeft,
            }}
          >
            <div className={classes.rightTitle}>{rightTitle}</div>
            <div
              className={classes.description}
              style={{
                paddingTop: descriptionPaddingTop,
              }}
            >
              <BreakAllContentText style={{ fontFamily: 'FilsonSoftRegular' }}>{description}</BreakAllContentText></div>
          </div>
        </div>
        <div className={classes.space} />
      </>
    );
  }
}


export default withStyles(styles)(GreenNumberSection);
