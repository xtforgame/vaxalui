import React from 'react';
import { withStyles } from '@material-ui/styles';
import ImageCircle from './ImageCircle';

const styles = {
  root: {
    width: '100%',
    height: 870,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000000',
    paddingTop: 110,
  },
  circle: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 110,
  },
};

class TwocircleSection extends React.PureComponent {
  render() {
    const {
      classes,
    } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.title}>
          All The Products are Available in
          <br />
          SAYA Now & SAYA Next Technologies.
        </div>

        <div className={classes.circle}>
          <ImageCircle />
        </div>
      </div>

    );
  }
}


export default withStyles(styles)(TwocircleSection);
