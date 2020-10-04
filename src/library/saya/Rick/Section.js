import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageContainer from '../ImageContainer';
import GreenButton from './GreenButton';

const useStyles = makeStyles(theme => ({
  root: {
    color: '#ffffff',
  },
  section: {
    width: 320,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    paddingTop: 60,
  },
  firstTitle: {
    width: 'fit-content',
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold',
    lineHeight: 1.33,
  },
  firstTitleBack: {
    fontFamily: 'FilsonSoft-Light',
    fontWeight: 300,
  },
  firstLine: {
    height: 1,
    width: '100%',
    backgroundColor: '#ffffff',
    marginTop: 1,
  },
  title: {
    fontSize: 50,
    fontWeight: 300,
    fontFamily: 'FilsonSoft-Light',
    paddingTop: 32,
    whiteSpace: 'pre-line',
    lineHeight: 1,
  },
  subTitle: {
    fontSize: 20,
    fontFamily: 'FilsonSoft-Bold',
    paddingTop: 24,
  },
  button: {
    marginTop: 32,
  },
}));


export default (props) => {
  const {
    backgroundImage,
    onClick,
    hideButton,
    firstTitle,
    firstTitleBack,
    title,
    subTitle,
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
        <div className={classes.firstTitle}>
          {firstTitle}
          <span className={classes.firstTitleBack}>{firstTitleBack}</span>
          <div className={classes.firstLine} style={{ backgroundColor: lineColor }} />
        </div>
        <div className={classes.title}>{title}</div>
        <div className={classes.subTitle}>{subTitle}</div>
      </div>
      <div style={{ width: '100%' }}>{children}</div>
      {!hideButton && (
        <div className={classes.button} style={{ width: 320 }}>
          <GreenButton
            text="Learn More"
            onClick={onClick}
          />
        </div>
      )}

    </ImageContainer>

  );
};
