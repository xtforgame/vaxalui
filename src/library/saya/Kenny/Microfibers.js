import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
  root: {
    width: '100%',
    height: 580,
    backgroundColor: 'pink',
    paddingTop: 80,
    paddingLeft: 40,
    display: 'flex',
    justifyContent: 'center',

  },
  section: {
    width: 1024,
    display: 'flex',
    flexWrap: 'wrap',
  },
  title: {
    width: 630,
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000000',
  },
};


class Microfibers extends React.PureComponent {
  render() {
    const {
      classes,
    } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.section}>
          <div className={classes.title}>
            We Turn Potential Microplastics into Microfibers.
          </div>
        </div>
      </div>
    );
  }
}


export default withStyles(styles)(Microfibers);
