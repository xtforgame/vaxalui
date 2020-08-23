import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageContainer from '../ImageContainer';

const useStyles = makeStyles(theme => ({
  root: {
    color: '#ffffff',
    paddingTop: 40,
  },
  number: {
    fontSize: 121,
    fontFamily: 'FilsonSoftRegular',
    lineHeight: 0.83,
    textAlign: 'center',
  },
  topTile: {
    fontSize: 18,
    fontFamily: 'FilsonSoftRegular',
    paddingTop: 16,
    textAlign: 'left',

  },
  line: {
    width: 189,
    height: 1,
    border: '1px solid #ffffff',
    marginTop: 8,
  },
  bottomTitle: {
    fontSize: 18,
    fontFamily: 'FilsonSoftRegular',
    paddingTop: 9,
    textAlign: 'left',
  },
}));

export default (props) => {
  const {
    number,
    topTile,
    bottomTitle,
    backgroundImage,
  } = props;

  const classes = useStyles();

  return (
    <ImageContainer
      image={backgroundImage}
      className={classes.root}
      style={{ height: 260, width: 260, }}
    >
      <div
        style={{ position: 'absolute' }}
      >
        <div className={classes.number}> {number} </div>

        <div className={classes.topTile}> {topTile} </div>

        <div className={classes.line} />

        <div className={classes.bottomTitle}> {bottomTitle} </div>
      </div>
    </ImageContainer>
  );
};
