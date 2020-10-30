import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';
import AnimatedNumber from 'animated-number-react';
import BreakAllContentText from '../BreakAllContentText';
import ImageContainer from '../ImageContainer';

const styles = {
  topSection: {
    display: 'flex',
    justifyContent: 'center',
    height: 350,
    color: '#000000',
    textAlign: 'center',
  },
  titleWhite: {
    color: '#ffffff',
    fontSize: 40,
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
    flexShrink: 0,
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


const GreenNumberSection = (props) => {
  const {
    classes,
    numberUpTitle,
    number,
    suffix = '%',
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
    hideTop,
  } = props;

  const [currentNumber, setCurrentNumber] = useState(10 + Math.round(Math.random() * 5));

  const formatValue = value => value.toFixed(0);

  return (
    <React.Fragment>
      {
        !hideTop && (
          <ImageContainer
            image={backgroundImage}
            className={classes.topSection}
          >
            <div>
              <span className={classes.titleWhite}>{topTitle}</span>
            </div>
          </ImageContainer>
        )
      }
      <div
        className={classes.root}
        style={{
          height,
          backgroundColor,
        }}
      >
        <div
          className={classes.leftColumn}
          style={{
            paddingTop: leftPaddingTop,
            paddingRight: leftPaddingRight,
          }}
        >
          <div className={classes.numberUpTitle}>
            {' '}
            {numberUpTitle}
            {' '}
          </div>

          <div
            className={classes.number}
            style={{
              paddingtTop: numberPaddingTop,
              color: numberColor,
              display: 'flex',
              alignItems: 'flex-end',
            }}
          >
            <div style={{ width: 235, textAlign: 'right' }}>
              <Fade duration={0} onReveal={() => setCurrentNumber(number)}>
                <AnimatedNumber
                  value={currentNumber}
                  formatValue={formatValue}
                />
              </Fade>
            </div>
            <span
              className={classes.percent}
              style={{
                display: percentDisplay,
                color: percentColor,
              }}
            >
              {suffix}
            </span>
          </div>
          <div className={classes.topTile}>{topTile}</div>
          <div
            className={classes.line}
            style={{
              width: lineWidth,
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
            <BreakAllContentText style={{ fontFamily: 'FilsonSoftRegular' }}>{description}</BreakAllContentText>
          </div>
        </div>
      </div>
      <div className={classes.space} />
    </React.Fragment>
  );
};


export default withStyles(styles)(GreenNumberSection);
