import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AnimatedNumber from '../bob/AnimatedNumber';
import ImageContainer from '../ImageContainer';
import BreakAllContentText from '../BreakAllContentText';
import { Slide } from '../reveal';

const useStyles = makeStyles(theme => ({
  topSection: {
    display: 'flex',
    justifyContent: 'center',
    height: 175,
    color: '#000000',
    textAlign: 'center',
  },
  titleWhite: {
    color: '#ffffff',
    fontSize: 24,
    fontFamily: 'FilsonSoft-Bold',
    margin: 0,
  },
  root: {
    color: '#000000',
    paddingTop: 60,
  },
  number: {
    fontSize: 180,
    fontFamily: 'FilsonSoftRegular',
    lineHeight: 0.89,
    textAlign: 'left',
  },
  percent: {
    fontSize: 20,
    fontFamily: 'FilsonSoftRegular',
  },
  topTile: {
    fontSize: 20,
    fontFamily: 'FilsonSoft-Bold',
    paddingTop: 0,
    textAlign: 'left',
  },
  line: {
    width: 253,
    height: 1,
    backgroundColor: '#000000',
    marginTop: 11,
    textAlign: 'left',
  },
  bottomTitle: {
    fontSize: 20,
    fontFamily: 'FilsonSoft-Bold',
    paddingTop: 10,
    textAlign: 'left',
  },
  subtitle: {
    textAlign: 'left',
    fontSize: 20,
    paddingTop: 80,
  },
  description: {
    textAlign: 'left',
    fontSize: 13,
    paddingTop: 24,
  },
}));

export default (props) => {
  const {
    hideTop,
    topTitle,
    backgroundImage,
    numberUpTitle,
    number,
    numberColor,
    topTile,
    bottomTitle,
    subtitle,
    description,
    height,
    backgroundColor,
    percentDisplay,
    marginTop,
    sign = "%",
    hideSign,
  } = props;

  const classes = useStyles();

  return (
    <>
      {
        !hideTop && (
          <ImageContainer
            image={backgroundImage}
            className={classes.topSection}
          >
            <div>
              <pre className={classes.titleWhite}>{topTitle}</pre>
            </div>
          </ImageContainer>
        )
      }
      <ImageContainer
        className={classes.root}
        style={{ height, backgroundColor, width: '100%', }}
      >
        <div
          style={{ position: 'absolute', width: 320, marginTop: marginTop, alignSelf: 'center' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <Slide direction="up" triggerOnce>
              <div className={classes.numberUpTitle}> {numberUpTitle} </div>
              <div className={classes.number} style={{ color: numberColor, }} >
                <AnimatedNumber
                  number={number}
                  suffix={hideSign ? '' : sign}
                  numberPaddingTop={0}
                  numberColor={numberColor}
                  percentDisplay={percentDisplay}
                  percentColor={numberColor}
                />
              </div>
            </Slide>
            <div style={{ paddingLeft: 0, }}>
              <Slide direction="up" triggerOnce>
                <div className={classes.topTile}> {topTile} </div>
                <div className={classes.line} />
                <div className={classes.bottomTitle}> {bottomTitle} </div>
              </Slide>
            </div>
          </div>
          <Slide direction="up" triggerOnce>
            <div className={classes.subtitle}>
              <pre style={{ fontFamily: 'FilsonSoft-Bold', margin: 0, }}>{subtitle}</pre>
            </div>
            <div className={classes.description}>
              <BreakAllContentText style={{ fontFamily: 'FilsonSoftRegular' }}>{description}</BreakAllContentText>
            </div>
          </Slide>
        </div>
      </ImageContainer>
    </>
  );
};
