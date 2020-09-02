import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import BreakAllContentText from '../BreakAllContentText';

const styles = {
  root: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    // backgroundColor: 'rgba(0, 0, 0, 0.3)',
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
  },
};

class TransparentBlock extends React.PureComponent {
  render() {
    const {
      classes,
      height = 235,
      leftTitle,
      leftDescription,
      rightTitle,
      rightDescription,
      marginTop,
    } = this.props;
    return (
      <div className={classes.root} style={{ marginTop, height }}>
        <div className={classes.block}>
          <div className={classes.title}>{leftTitle}</div>
          <div className={classes.description}>
            <BreakAllContentText style={{ fontFamily: 'FilsonSoftRegular' }}>{leftDescription}</BreakAllContentText>
          </div>
        </div>
        <div className={classes.block}>
          <div className={classes.title}>{rightTitle}</div>
          <div className={classes.description}>
            <BreakAllContentText style={{ fontFamily: 'FilsonSoftRegular' }}>{rightDescription}</BreakAllContentText>
          </div>
        </div>
      </div>
    );
  }
}


export default withStyles(styles)(TransparentBlock);
