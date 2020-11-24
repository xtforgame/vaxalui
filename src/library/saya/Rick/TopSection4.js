import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageContainer from '../ImageContainer';
import Text from './Text';
import { Slide } from '../reveal';

const useStyles = makeStyles(theme => ({
  root: {
    color: '#000000',
    backgroundColor: '#e3e3e3',
    textAlign: 'center',
  },
  section: {
    width: 320,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    paddingTop: 60,
    alignItems: 'center',
  },
  firstTitle: {
    fontSize: 20,
    fontFamily: 'FilsonSoft-Bold',
    lineHeight: 'normal',
  },
  firstLine: {
    height: 1,
    width: 306,
    backgroundColor: '#000000',
    marginTop: 12,
  },
  title: {
    fontSize: 38,
    paddingTop: 35,
    lineHeight: 'normal',
    fontFamily: 'FilsonSoft-Bold',
  },
  topTitle: {
    fontSize: 17,
    paddingTop: 47,
    lineHeight: 'normal',
    fontFamily: 'FilsonSoft-Bold',
  },
  bottomTitle: {
    fontSize: 17,
    paddingTop: 12,
    lineHeight: 'normal',
    fontFamily: 'FilsonSoft-Bold',
  },
}));


export default (props) => {
  const {
    backgroundImage,
    firstTitle,
    firstTitleBack,
    title,
    topTitle,
    bottomTitle,
    height,
    children,
    color,
    lineColor,

  } = props;

  const classes = useStyles();

  return (
    <ImageContainer
      className={classes.root}
      image={backgroundImage}
      style={{ height, color }}
    >
      <div className={classes.section}>
        <Slide direction="up" triggerOnce>
          <div className={classes.firstTitle}>{firstTitle}</div>
          <div className={classes.title}>{title}</div>
          <div className={classes.topTitle}>{topTitle}</div>
          <div className={classes.firstLine} style={{ backgroundColor: lineColor }} />
          <div className={classes.bottomTitle}>{bottomTitle}</div>
        </Slide>
        <div>{children}</div>
      </div>
    </ImageContainer>
  );
};
