import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageContainer from '../ImageContainer';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
    fontFamily: 'FilsonSoft-Bold',
    color: '#000000',
  },
  firstTitle: {
    fontSize: 50,
    fontWeight: 'bold',
    lineHeight: 1.18,
    paddingTop: 112,
  },
  secondTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop: 31,
  },
  line: {
    width: 230,
    height: 1,
    backgroundColor: '#000000',
    marginTop: 31,
  },
  thirdTitle: {
    fontSize: 17,
    lineHeight: 1.35,
    fontFamily: 'FilsonSoftRegular ',
    paddingTop: 10,
  },
}));

export default (props) => {
  const {
    backgroundImage,
    img,
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
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <pre className={classes.firstTitle} style={{ marginBottom: 0, }}>
            {'SAYA\nRSCUW\nProject'}
          </pre>
        </div>
        <div className={classes.secondTitle} >
          - Recycled Scrap & Cutting Waste -
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
        }}
        >
          <div className={classes.line} />
        </div>

        <div className={classes.thirdTitle} >
          <pre style={{ marginBottom: 0, marginTop: 0, }}>
            {'Addressing Garment\nIndustry Waste -\nA true and inconvenient reality'}
          </pre>
        </div>
        <img src={img} style={{ width: 55, height: 55, marginTop: 24, }} />
      </div>
    </ImageContainer>
  );
};
