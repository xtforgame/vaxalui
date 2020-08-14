import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    width: '100%',
    height: 580,
    backgroundColor: 'pink',
    display: 'flex',
    justifyContent: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
  },
  section: {
    width: 1024,
    display: 'flex',
    flexWrap: 'wrap',
    paddingTop: 80,
    paddingLeft: 40,
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
      backgroundImage,
    } = this.props;
    return (
      <div
        className={classes.root}
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
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
