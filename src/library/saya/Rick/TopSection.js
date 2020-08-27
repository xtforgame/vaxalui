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
    lineHeight: '1.18',
  },
  firstTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: '1.18',
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
    paddingTop: 10,
    fontFamily: 'FilsonSoftRegular',
  },
}));

export default (props) => {
  const {
    firstTitle,
    firsrtTitlePaddingTop,
    secondTitle,
    secondTitleBack,
    secondTitleFontSize,
    secondTitlePaddingTop,
    lineDisplay,
    secondLineMarginTop,
    thirdTitle,
    backgroundImage,
    lineBackgroundColor,
    color,
    height,
    thirdTitleFontFamily,
    children,
  } = props;

  const classes = useStyles();

  return (
    <ImageContainer
      image={backgroundImage}
      className={classes.root}
      style={{ color, height, }}
    >
      <div
        style={{ position: 'absolute' }}
      >
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className={classes.firstTitle} style={{ paddingTop: firsrtTitlePaddingTop, }}>
            {firstTitle}
            <div className={classes.firstLine} style={{ backgroundColor: lineBackgroundColor, display: lineDisplay, }} />
          </div>
        </div>

        <div className={classes.secondTitle}>
          <pre style={{
            fontFamily: 'FilsonSoft-Bold',
            fontSize: secondTitleFontSize,
            marginBottom: 0,
            marginTop: 0,
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
          <pre
            style={{
              fontFamily: thirdTitleFontFamily,
              marginBottom: 0,
              marginTop: 0,
            }}
          >
            {thirdTitle}
          </pre>
        </div>
        <div>
          {children}
        </div>

      </div>
    </ImageContainer>
  );
};
