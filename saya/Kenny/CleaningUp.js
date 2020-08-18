import React from 'react';
import { withStyles } from '@material-ui/styles';
import GreenButton from './GreenButton';
import Background from '../img/bg15.jpg';
import ImageBoxSmall from './ImageBoxSmall';
import LeftBox from '../img/bg17.jpg';
import MidBox from '../img/bg18.jpg';
import RightBox from '../img/bg19.jpg';


const styles = {
  root: {
    width: '100%',
    height: 1330,
    color: '#ffffff',
    display: 'flex',
    justifyContent: 'center',
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'no-repeat',
  },
  sction: {
    width: 1024,
    display: 'flex',
    flexDirection: 'column',
  },
  topColumn: {
    width: 1024,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    paddingTop: 90,
    paddingLeft: 40,
  },
  bottomColumn: {
    width: 1024,
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 400,
    paddingLeft: 60,
  },
  firstTitle: {
    width: 540,
    fontSize: 40,
    fontWeight: 'bold',
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
    paddingTop: 20,
  },
  button: {
    marginTop: 50,
  },
  thirdTitle: {
    fontSize: 20,
    fontWeight: 'bold',
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
    } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.section}>
          <div className={classes.topColumn}>
            <div className={classes.firstTitle}>Cleaning Up the World, 75 Billion Bottles at a Time.</div>

            <div className={classes.firstLine} />

            <div className={classes.secondTitle}>World’s largest recycling and renewing network.</div>

            <div className={classes.button}>
              <GreenButton
                text="READ MORE"
              />
            </div>

            <div className={classes.bottomColumn}>
              <div className={classes.thirdTitle}>Featured Content</div>

              <div className={classes.secondLine} />



              <div className={classes.box}>
                <ImageBoxSmall
                  title="About SAYA"
                  backgroundImage={LeftBox}
                  paddingTop='75px'
                  fontColor="#ffffff"
                  marginTop="150px"
                />
                <ImageBoxSmall
                  title="Partners in Sustainability"
                  backgroundImage={MidBox}
                  paddingTop='60px'
                  fontColor="#ffffff"
                  marginTop="125px"
                />

                <ImageBoxSmall
                  title="SAYA"
                  titleBack="COASTAL"
                  backgroundImage={RightBox}
                  paddingTop='75px'
                  fontColor="#ffffff"
                  marginTop="150px"
                />

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default withStyles(styles)(CleaningUp);
