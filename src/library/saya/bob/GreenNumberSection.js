import React, { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AN from 'animated-number-react';
import VisibilitySensor from 'react-visibility-sensor';
import AnimatedNumber from './AnimatedNumber';
import BreakAllContentText from '../BreakAllContentText';
import ImageContainer from '../ImageContainer';
import { Slide } from '../reveal';
import TweenMove from './TweenMove';

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


  return (
    <React.Fragment>
      {
        !hideTop && (
          <TweenMove
            image={backgroundImage}
          >
            <ImageContainer
              className={classes.topSection}
            >
              <div>
                <span className={classes.titleWhite}>{topTitle}</span>
              </div>
            </ImageContainer>
          </TweenMove>
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
          <AnimatedNumber
            number={number}
            suffix={suffix}
            numberPaddingTop={numberPaddingTop}
            numberColor={numberColor}
            percentDisplay={percentDisplay}
            percentColor={percentColor}
          />
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
          <Slide direction="up" triggerOnce>
            <div className={classes.rightTitle}>{rightTitle}</div>
            <div
              className={classes.description}
              style={{
                paddingTop: descriptionPaddingTop,
              }}
            >
              <BreakAllContentText style={{ fontFamily: 'FilsonSoftRegular' }}>{description}</BreakAllContentText>
            </div>
          </Slide>
        </div>
      </div>
      <div className={classes.space} />
    </React.Fragment>
  );
};


export default withStyles(styles)(GreenNumberSection);
