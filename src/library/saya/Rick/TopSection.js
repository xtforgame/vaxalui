import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import ImageContainer from '../ImageContainer';

const useStyles = makeStyles(theme => ({
  root: {
    height: 590,
    textAlign: 'center',
    fontFamily: 'FilsonSoft-Bold',
  },
  firstTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 1.4,
    color: '#000000',
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
    color: '#000000',
    paddingTop: 10,
  },
  secondTitleBack: {
    fontWeight: 'normal',
    color: '#000000',
  },
  secondLine: {
    width: 220,
    height: 1,
    backgroundColor: '#000000',
    marginTop: 2,
  },
  thirdTitle: {
    fontSize: 18,
    color: '#000000',
    paddingTop: 10,
  },
}));

export default (props) => {
  const {
    firstTitle,
    secondTitle,
    secondTitleBack,
    thirdTitle,
    backgroundImage,
  } = props;

  const classes = useStyles();

  return (
    <ImageContainer
      image={backgroundImage}
      className={classes.root}
      style={{ height: 590 }}
    >
      <div
        style={{ position: 'absolute' }}
      >
        <div style={{ display: 'flex', justifyContent: 'center'  }}>
          <div className={classes.firstTitle}>
            {firstTitle}
            <div className={classes.firstLine} />
          </div>
        </div>

        <div className={classes.secondTitle}>
          <pre style={{ fontFamily: 'FilsonSoft-Bold' }}>{secondTitle}</pre>
          <a className={classes.secondTitleBack}>
            {secondTitleBack}
          </a>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className={classes.secondLine} />
        </div>

        <div className={classes.thirdTitle}>
          <pre style={{ fontFamily: 'FilsonSoftRegular' }}>{thirdTitle}</pre>
        </div>
      </div>
    </ImageContainer>
  );
};
