import React from 'react';
import { withStyles } from '@material-ui/styles';

import leftIcon from '../../../../stories/saya/img/icon13.svg';
import rightIcon from '../../../../stories/saya/img/icon14.svg';

const styles = {
  root: {
    display: 'flex',
    paddingTop: 65,
    paddingLeft: 540,
  },
  leftIcon: {
    width: 120,
    height: 80,
  },
  rightIcon: {
    width: 220,
    height: 80,
    marginLeft: 60,
  },
};

class GreenIconBottom extends React.PureComponent {
  render() {
    const {
      classes,
    } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.leftIcon}><img src={leftIcon} /></div>
        <div className={classes.rightIcon}><img src={rightIcon} /></div>
      </div>

    );
  }
}


export default withStyles(styles)(GreenIconBottom);
