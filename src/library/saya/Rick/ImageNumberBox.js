import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageContainer from '../ImageContainer';

const useStyles = makeStyles(theme => ({
  root: {
    color: '#ffffff',
  },
  number: {
    fontSize: 70,
    fontFamily: 'FilsonSoftRegular',
    lineHeight: 0.96,
    textAlign: 'left',
  },
  topTile: {
    fontSize: 13,
    fontFamily: 'FilsonSoftRegular',
    paddingTop: 11,
    lineHeight: 1.54,
    textAlign: 'left',
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#ffffff',
    marginTop: 1,
  },
  bottomTitle: {
    fontSize: 13,
    fontFamily: 'FilsonSoftRegular',
    paddingTop: 1,
    lineHeight: 1.54,
    textAlign: 'left',
  },
}));

export default (props) => {
  const {
    number,
    topTile,
    bottomTitle,
    backgroundImage,
    backgroundColor,
    color,
    lineColor,
    hidePercent,
  } = props;

  const classes = useStyles();

  return (
    <ImageContainer
      image={backgroundImage}
      className={classes.root}
      style={{ height: 194, width: '50%', backgroundColor, color }}
    >
      <div
        style={{ position: 'absolute', height: 115, marginTop: 36 }}
      >
        <div className={classes.number}>{number}
          {!hidePercent && <span style={{ fontSize: 12, }}>%</span>}
        </div>
        <div className={classes.topTile}> {topTile} </div>
        <div className={classes.line} style={{ backgroundColor: lineColor }} />
        <div className={classes.bottomTitle}> {bottomTitle} </div>
      </div>
    </ImageContainer>
  );
};
