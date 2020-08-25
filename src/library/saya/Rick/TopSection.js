import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import ImageContainer from '../ImageContainer';

const useStyles = makeStyles(theme => ({
  root: {
    height: 590,
    textAlign: 'center',
    fontFamily: 'FilsonSoft-Bold',
    color: '#000000',
  },
  firstTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 1.4,

    paddingTop: 57,
    // borderBottomStyle: 'solid',
    // borderBottomWidth: 2,
    // borderBottomColor: 'white',
  },
  firstLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#000000',
    marginTop: 2,
  },
  secondTitle: {
    fontSize: 50,
    fontWeight: 'bold',

  },
  secondTitleBack: {
    fontWeight: 'normal',
    fontFamily: 'FilsonSoftLight',

  },
  secondLine: {
    width: 230,
    height: 1,
    backgroundColor: '#000000',
  },
  thirdTitle: {
    fontSize: 18,

  },
}));

export default (props) => {
  const {
    firstTitle,
    secondTitle,
    secondTitleBack,
    secondTitlePaddingTop,
    secondLineMarginTop,
    thirdTitle,
    backgroundImage,
    lineBackgroundColor,
    color,
  } = props;

  const classes = useStyles();

  return (
    <ImageContainer
      image={backgroundImage}
      className={classes.root}
      style={{ color, height: 590 }}
    >
      <div
        style={{ position: 'absolute' }}
      >
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className={classes.firstTitle}>
            {firstTitle}
            <div className={classes.firstLine} style={{ backgroundColor: lineBackgroundColor, }} />
          </div>
        </div>

        <div className={classes.secondTitle}>
          <pre style={{
            fontFamily: 'FilsonSoft-Bold',
            paddingTop: secondTitlePaddingTop
          }}
          >
            {secondTitle}
            <a className={classes.secondTitleBack}>
              {secondTitleBack}
            </a></pre>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: secondLineMarginTop,
        }}
        >
          <div className={classes.secondLine} style={{ backgroundColor: lineBackgroundColor, }} />
        </div>

        <div className={classes.thirdTitle}>
          <pre style={{ fontFamily: 'FilsonSoftRegular' }}>{thirdTitle}</pre>
        </div>
      </div>
    </ImageContainer>
  );
};
