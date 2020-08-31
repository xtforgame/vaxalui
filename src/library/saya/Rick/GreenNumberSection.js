import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageContainer from '../ImageContainer';

const useStyles = makeStyles(theme => ({
  root: {
    color: '#000000',
  },
  number: {
    fontSize: 121,
    fontFamily: 'FilsonSoftRegular',
    lineHeight: 0.83,
    textAlign: 'left',
  },
  percent: {
    fontSize: 20,
    fontFamily: 'FilsonSoftRegular',
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
    border: '1px solid #000000',
    marginTop: 8,
    textAlign: 'left',
  },
  bottomTitle: {
    fontSize: 18,
    fontFamily: 'FilsonSoftRegular',
    paddingTop: 9,
    textAlign: 'left',
  },
  subtitle: {
    textAlign: 'left',
    fontSize: 18,
    paddingTop: 37,
  },
  content: {
    textAlign: 'left',
    fontSize: 14,
    paddingTop: 7,
  },
}));

export default (props) => {
  const {
    numberUpTitle,
    number,
    numberColor,
    topTile,
    bottomTitle,
    subtitle,
    content,
    height,
    backgroundColor,
    percentDisplay,
    marginTop,
  } = props;

  const classes = useStyles();

  return (
    <ImageContainer
      className={classes.root}
      style={{ height, backgroundColor, width: '100%', }}
    >
      <div
        style={{ position: 'absolute', width: 310, marginTop: marginTop, }}
      >
        <div className={classes.numberUpTitle}> {numberUpTitle} </div>
        <div className={classes.number} style={{color:numberColor,}} >
          {number}
          <span
            className={classes.percent}
            style={{
              display: percentDisplay,
            }}
          >
            %</span>
        </div>
        <div style={{ paddingLeft: 10, }}>
          <div className={classes.topTile}> {topTile} </div>
          <div className={classes.line} />
          <div className={classes.bottomTitle}> {bottomTitle} </div>

          <div className={classes.subtitle}>
            <pre style={{ fontFamily: 'FilsonSoft-Bold', marginBottom: 0, }}>{subtitle}</pre>
          </div>
          <div className={classes.content}>
            <pre style={{ fontFamily: 'FilsonSoftRegular' }}>{content}</pre>
          </div>
        </div>
      </div>
    </ImageContainer>
  );
};
