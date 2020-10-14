import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageContainer from '../ImageContainer';
import Text from './Text';

const useStyles = makeStyles(theme => ({
  root: {
    color: '#ffffff',
  },
  section: {
    width: 310,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    paddingTop: 63,
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
    fontSize: 30,
    paddingTop: 132,
    whiteSpace: 'pre-line',
    lineHeight: 'normal',
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
    <ImageContainer
      className={classes.root}
      image={backgroundImage}
      style={{ height, color }}
    >
      <div className={classes.section}>
        <div className={classes.firstTitle}>
          {firstTitle}
          <span className={classes.firstTitleBack}>{firstTitleBack}</span>
          <div className={classes.firstLine} style={{ backgroundColor: lineColor }} />
        </div>
        <Text family={titleFontFamily} className={classes.title}>{title}</Text>
        {/* <Text family={subtitleFontFamily} className={classes.subTitle}>{subTitle}</Text> */}
        <div>{children}</div>
      </div>
    </ImageContainer>
  );
};
