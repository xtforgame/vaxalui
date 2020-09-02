import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import GreenButton from './GreenButton';


const styles = {
  root: {
    width: '100%',
    height: 255,
    backgroundColor: '#444343',
    display: 'flex',
    alignItems: 'center',
  },
  section: {
    width: 1024,
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 120,
  },
  title: {
    fontSize: 32,
    color: '#ffffff',
    fontFamily: 'FilsonSoftRegular',
  },
  button: {
    marginLeft: 135,
  },
};

class SeeProduct extends React.PureComponent {
  render() {
    const {
      classes,
      onClick,
    } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.section}>
          <div className={classes.title}>Apply your favorite recycling technology to Fibers.</div>
          <div className={classes.button}>
            <GreenButton
              text="SAYA Products"
              onClick={onClick}
            />
          </div>
        </div>
      </div>

    );
  }
}


export default withStyles(styles)(SeeProduct);
