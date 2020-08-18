import React from 'react';
import { withStyles } from '@material-ui/styles';
import GreenButton from '../components/GreenButton';


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

  },
  button: {
    marginLeft: 135,
  },
};

class SeeProduct extends React.PureComponent {
  render() {
    const {
      classes,
    } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.section}>
          <div className={classes.title}>See our Products Section<br />for more details on yarn selection.</div>
          <div className={classes.button}>
            <GreenButton

              text="Learn more"
            />
          </div>
        </div>
      </div>

    );
  }
}


export default withStyles(styles)(SeeProduct);
