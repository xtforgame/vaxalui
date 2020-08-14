import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
  root: {
    width: 715,
    height: 370,
    position: 'relative',
  },
  leftCircle: {
    width: 370,
    height: 370,
    borderRadius: '50%',
    backgroundColor: 'pink',
    position: 'absolute',
  },
  rightCircle: {
    width: 370,
    height: 370,
    borderRadius: '50%',
    backgroundColor: 'yellow',
    position: 'absolute',
    right: 0,
  },
};

class ImageCircle extends React.PureComponent {
  render() {
    const {
      classes,
    } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.leftCircle} />
        <div className={classes.rightCircle} />
      </div>
    );
  }
}


export default withStyles(styles)(ImageCircle);
