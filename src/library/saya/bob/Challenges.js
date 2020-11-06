import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Slide } from '../reveal';
import BreakAllContentText from '../BreakAllContentText';

const styles = {
  title: {
    width: 320,
    fontSize: 32,
    fontFamily: 'FilsonSoft-Bold',
  },
  subtitle: {
    fontSize: 20,
    marginTop: 40,
    fontFamily: 'FilsonSoft-Light',
  },
  titleWhite: {
    color: '#ffffff',
    fontSize: 40,
    fontFamily: 'FilsonSoft-Bold',
  },
  root: {
    width: '100%',
    height: 450,
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
    justifyContent: 'center',
  },
  numberUpTitle: {
    fontSize: 20,
    color: '#000000',
    fontFamily: 'FilsonSoft-Bold',
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
    fontFamily: 'FilsonSoft-Bold',
    paddingTop: 16,
    paddingLeft: 10,
  },
  line: {
    marginTop: 16,
  },
  rightTitle: {
    fontSize: 20,
    color: '#000000',
    fontFamily: 'FilsonSoft-Bold',
  },
  description: {
    paddingTop: 8,
    width: 380,
    fontSize: 14,
    color: '#000000',
    fontFamily: 'FilsonSoftRegular',
  },
  Avatar: {
    width: 340,
    height: 340,
  },
  space: {
    height: 12,
  },
};


class Challenges extends React.PureComponent {
  render() {
    const {
      classes,
      description,
      height,
      leftPaddingTop,
      leftPaddingRight,
      backgroundColor,
      title,
      subtitle,
      image,
    } = this.props;
    return (
      <>
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
            <div
              className={classes.container}
            >
              <div
                className={classes.title}
              >
                <Slide direction="up" triggerOnce>
                  <BreakAllContentText style={{ fontFamily: 'FilsonSoft-Bold' }}>{title}</BreakAllContentText>
                </Slide>
              </div>
              <Slide direction="up" triggerOnce>
                <div
                  className={classes.line}
                  style={{
                    borderBottom: '1px solid #000000',
                  }}
                />
              </Slide>
              <div
                className={classes.subtitle}
              >
                <Slide direction="up" triggerOnce>
                  <BreakAllContentText style={{ fontFamily: 'FilsonSoft-Light', fontWeight: 300 }}>{subtitle}</BreakAllContentText>
                </Slide>
              </div>
              <div
                className={classes.description}
              >
                <Slide direction="up" triggerOnce>
                  <BreakAllContentText style={{ fontFamily: 'FilsonSoftRegular' }}>{description}</BreakAllContentText>
                </Slide>
              </div>
            </div>
          </div>
          <div
            className={classes.rightColumn}
          >
            <Slide direction="up" triggerOnce>
              <Avatar className={classes.Avatar} src={image} />
            </Slide>
          </div>
        </div>
        <div className={classes.space} />
      </>
    );
  }
}


export default withStyles(styles)(Challenges);
