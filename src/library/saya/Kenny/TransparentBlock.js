import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    width: '100%',
    height: 235,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  block: {
    width: 350,
    marginLeft: 0,
  },
  title: {
    fontSize: 20,
    fontFamily: 'FilsonSoftRegular',
    color: '#ffffff',
    paddingTop: 35,
  },
  description: {
    fontSize: 14,
    fontFamily: 'FilsonSoftRegular',
    color: '#ffffff',
    paddingTop: 20,
  }
};

class TransparentBlock extends React.PureComponent {
  render() {
    const {
      classes,
      leftDescription,
      rightDescription,
      marginTop,
    } = this.props;
    return (
      <div className={classes.root} style={{ marginTop: marginTop }}>
        <div className={classes.block}>
          <div className={classes.title}>Type of Materials and Finishing</div>
          <div className={classes.description}>{leftDescription}</div>
        </div>
        <div className={classes.block}>
          <div className={classes.title}>Content Percentage</div>
          <div className={classes.description}>{rightDescription}</div>

        </div>
      </div>
    );
  }
}


export default withStyles(styles)(TransparentBlock);
