import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    width: '100%',
    height: 560,
    display: 'flex',
    justifyContent: 'center',
  },
  leftColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  rightColumn: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  numberUpTitle: {
    fontSize: 20,
    color: '#000000',
    fontFamily: 'FilsonSoftRegular',
    paddingLeft: 10,
  },
  number: {
    fontSize: 180,
    lineHeight: 0.74,
    fontFamily: 'FilsonSoftRegular',
  },
  percent: {
    fontSize: 20,
    fontFamily: 'FilsonSoftRegular',
  },
  topTile: {
    fontSize: 20,
    color: '#000000',
    fontFamily: 'FilsonSoftRegular',
    paddingTop: 20,
    paddingLeft: 10,
  },
  line: {
    height: 2,
    backgroundColor: '#000000',
    marginTop: 15,
    marginLeft: 10,
  },
  bottomTitle: {
    fontSize: 20,
    color: '#000000',
    fontFamily: 'FilsonSoftRegular',
    paddingTop: 10,
    paddingLeft: 10,
  },
  rightTitle: {
    fontSize: 20,
    color: '#000000',
    fontFamily: 'FilsonSoftRegular',
  },
  description: {
    paddingTop: 20,
    width: 380,
    fontSize: 14,
    color: '#000000',
    fontFamily: 'FilsonSoftRegular',
  },
};


class GreenNumberSection extends React.PureComponent {
  render() {
    const {
      classes,
      numberUpTitle,
      number,
      topTile,
      bottomTitle,
      rightTitle,
      description,
      lineWidth,
      height,
      numberPaddingTop,
      leftPaddingTop,
      rightPaddingTop,
      leftPaddingRight,
      rightPaddingLeft,
      descriptionPaddingTop,
      percentDisplay,
      backgroundColor,
      numberColor,
      percentColor,
    } = this.props;
    return (
      <div
        className={classes.root}
        style={{
          height: height,
          backgroundColor: backgroundColor,
        }}
      >
        <div
          className={classes.leftColumn}
          style={{
            paddingTop: leftPaddingTop,
            paddingRight: leftPaddingRight,
          }}
        >
          <div className={classes.numberUpTitle}> {numberUpTitle} </div>

          <div
            className={classes.number}
            style={{
              paddingtTop: numberPaddingTop,
              color: numberColor,
            }}
          >
            {number}
            <span
              className={classes.percent}
              style={{
                display: percentDisplay,
                color:percentColor,
              }}
            >
              %</span>
          </div>
          <div className={classes.topTile}>{topTile}</div>

          <div
            className={classes.line}
            style={{
              width: lineWidth
            }}
          />
          <div className={classes.bottomTitle}>{bottomTitle}</div>
        </div>

        <div
          className={classes.rightColumn}
          style={{
            paddingTop: rightPaddingTop,
            paddingLeft: rightPaddingLeft,
          }}
        >
          <div className={classes.rightTitle}>{rightTitle}</div>

          <div
            className={classes.description}
            style={{
              paddingTop: descriptionPaddingTop,
            }}

          >{description}</div>
        </div>
      </div>
    );
  }
}


export default withStyles(styles)(GreenNumberSection);
