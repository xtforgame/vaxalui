import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageContainer from '../ImageContainer';
import Text from './Text';
import TweenMove from '../bob/TweenMove';
import { Slide } from '../reveal';

const useStyles = makeStyles(theme => ({
  root: {
    color: '#ffffff',
  },
  section: {
    width: 320,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    paddingTop: 95,
  },
  firstTitle: {
    width: 'fit-content',
    fontSize: 15,
    fontFamily: 'FilsonSoft-Bold',
    lineHeight: 'normal',
  },
  firstTitleBack: {
    fontFamily: 'FilsonSoft-Light',
  },
  firstLine: {
    height: 1,
    width: '100%',
    backgroundColor: '#ffffff',
    marginTop: 1,
  },
  title: {
    fontSize: 50,
    paddingTop: 40,
    whiteSpace: 'pre-line',
    lineHeight: 1,
    // fontFamily: 'FilsonSoft-Bold',
  },
  // subTitle: {
  //   fontSize: 20,
  //   paddingTop: 16,
  //   lineHeight: 1.6,
  //   // fontFamily: 'FilsonSoft-Light',
  // },
}));


export default (props) => {
  const {
    backgroundImage,
    firstTitle,
    firstTitleBack,
    title,
    subTitle,
    height,
    children,
    color,
    lineColor,
    titleFontFamily,
    subtitleFontFamily,
    buttonPosition,
  } = props;

  const classes = useStyles();

  return (
    <TweenMove
      image={backgroundImage}
    >
      <ImageContainer
        className={classes.root}
        style={{ height, color }}
      >
        <div className={classes.section}>
          <div className={classes.firstTitle}>
            <Slide direction="up" triggerOnce>
              <div>{firstTitle}</div>
              <span className={classes.firstTitleBack}>{firstTitleBack}</span>
              <div className={classes.firstLine} style={{ backgroundColor: lineColor }} />
            </Slide>
          </div>
          <Slide direction="up" triggerOnce>
            <Text family={titleFontFamily} className={classes.title}>{title}</Text>
          </Slide>
          {/* <Text family={subtitleFontFamily} className={classes.subTitle}>{subTitle}</Text> */}
          <div>{children}</div>
        </div>
      </ImageContainer>
    </TweenMove>
  );
};
