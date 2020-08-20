import React from 'react';
import { withStyles } from '@material-ui/styles';
import GreenButton from './GreenButton';

const styles = {
  root: {
    width: '100%',
    height: 360,
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'FilsonSoft-Bold',
  },
  leftColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingRight: 110,
    paddingTop: 85,
  },
  rightColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingLeft: 110,
    paddingTop: 85,
  },
  leftIcon: {
    width: 90,
  },
  rightIcon: {
    width: 85,
  },
  leftTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    paddingTop: 10,
  },
  rightTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    paddingTop: 15,
  },
  button: {
    marginTop: 40,
  },
};


class TwoIconSection extends React.PureComponent {
  render() {
    const {
      classes,
      leftIcon,
      rightIcon,
    } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.leftColumn}>
          <div className={classes.leftIcon}><img src={leftIcon} /></div>
          <div className={classes.leftTitle}>Mechanical Recycling</div>
          <div className={classes.button}>
            <GreenButton
              text="Learn More"
            />
          </div>

        </div>
        <div className={classes.rightColumn}>
          <div className={classes.rightIcon}><img src={rightIcon} /></div>
          <div className={classes.rightTitle}>Mechanical Recycling</div>
          <div className={classes.button}>
            <GreenButton
              text="Learn More"
            />
          </div>
        </div>

      </div>

    );
  }
}


export default withStyles(styles)(TwoIconSection);
