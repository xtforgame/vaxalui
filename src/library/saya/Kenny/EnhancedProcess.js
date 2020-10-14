import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 30,
  },
  circle: {
    width: 120,
    height: 120,
    border: 'solid 1px #ffffff',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 18,
    color: '#ffffff',
    fontFamily: 'FilsonSoft-Bold',
  },
  topRaw: {
    display: 'flex',
    marginTop: 30,
    height: 260,
    justifyContent: 'center',
  },
  img: {
    height: '100%',
    marginLeft: 40,
  },
};

class EnhancedProcess extends React.PureComponent {
  render() {
    const {
      classes,
      enhancedProcessImg,
    } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.topRaw}>
          <img className={classes.img} src={enhancedProcessImg} />
        </div>
      </div>
    );
  }
}


export default withStyles(styles)(EnhancedProcess);
