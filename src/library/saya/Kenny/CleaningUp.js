import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import GreenButton from './GreenButton';
import ImageContainer from '../ImageContainer';

const styles = {
  root: {
    height: 1330,
    color: '#ffffff',
  },
  sction: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
  },
  topColumn: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    paddingTop: 90,
  },
  bottomColumn: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 400,
  },
  firstTitle: {
    width: 540,
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold',
    lineHeight: 1.25,
  },
  firstLine: {
    width: 420,
    height: 1,
    border: '1px solid #ffffff',
    marginTop: 20,
  },
  secondTitle: {
    fontSize: 20,
    fontFamily: 'FilsonSoftRegular',
    paddingTop: 20,
  },
  button: {
    marginTop: 50,
  },
  thirdTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold',
  },
  secondLine: {
    width: 820,
    height: 1,
    border: '1px solid #ffffff',
    marginTop: 25,
  },
  box: {
    width: 820,
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 35,
  },
};


class CleaningUp extends React.PureComponent {
  render() {
    const {
      classes,
      backgroundImage,
      children,
    } = this.props;
    return (
      <ImageContainer
        image={backgroundImage}
        className={classes.root}
      >
        <div className={classes.section}>
          <div className={classes.topColumn}>
            <div className={classes.firstTitle}>Cleaning Up the World,<br/> 75 Billion Bottles at a Time.</div>
            <div className={classes.firstLine} />
            <div className={classes.secondTitle}>World’s largest recycling and renewing network.</div>
            <div className={classes.button}>
              <GreenButton
                text="Read More"
              />
            </div>

            <div className={classes.bottomColumn}>
              <div className={classes.thirdTitle}>Featured Content</div>
              <div className={classes.secondLine} />
              <div className={classes.box}>
                {children}
              </div>
            </div>
          </div>
        </div>
      </ImageContainer>
    );
  }
}


export default withStyles(styles)(CleaningUp);
