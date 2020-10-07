import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageContainer from '../ImageContainer';
import Text from './Text';

const useStyles = makeStyles(theme => ({
  root: {
    color: '#ffffff',
    justifyContent: 'center',
  },
  section: {
    width: 320,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    // paddingTop: 92,
  },
  firstTitle: {
    width: 'fit-content',
    fontSize: 15,
    lineHeight: 1.33,
  },
  firstTitleText: {
    display: 'flex',
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
    width: '100%',
    fontSize: 45,
    paddingTop: 42,
    lineHeight: 1.2,
    // whiteSpace: 'pre-line',
    // fontFamily: 'FilsonSoft-Bold',
  },
  subtitle: {
    fontSize: 20,
    paddingTop: 16,
    lineHeight: 1.6,
    // fontFamily: 'FilsonSoft-Light',
  },
}));


export default (props) => {
  const {
    backgroundImage,
    firstTitle,
    firstTitleBack,
    title,
    subtitle,
    height,
    children,
    color,
    lineColor,
    titleFontFamily = 'bold',
    subtitleFontFamily = 'light',
    titleFontSize,
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
          <div className={classes.firstTitleText}>
            <Text family="bold">{firstTitle}</Text>
            <Text className={classes.firstTitleBack} family="light">{firstTitleBack}</Text>
          </div>
          <div className={classes.firstLine} style={{ backgroundColor: lineColor }} />
        </div>
        <Text family={titleFontFamily} className={classes.title} style={{ fontSize: titleFontSize }}>{title}</Text>
        <Text family={subtitleFontFamily} className={classes.subtitle}>{subtitle}</Text>
        <div>{children}</div>
      </div>
    </ImageContainer>
  );
};
