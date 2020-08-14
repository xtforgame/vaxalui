import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ImageBox from './ImageBox';

const styles = {
  root: {
    width: '100%',
    height: 785,
    paddingTop: 90,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    width: 780,
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'flex-start',
  },
  line: {
    width: 780,
    height: 1,
    border: '1px solid #979797',
    marginTop: 25,
  },
  box: {
    width: 780,
    display: 'flex',
    marginTop: 90,
    justifyContent: 'space-between',
  },
};

class SerialProjects extends React.PureComponent {
  render() {
    const {
      classes,
    } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.title}>
          <div>SAYA NOW Serial Projects</div>
        </div>
        <div className={classes.line} />
        <div className={classes.box}>
          <ImageBox
            title="SAYAGLOBAL"
            subtitle="lor sit amet, consectetuer ad"
            backgroundColor="pink"
            paddingTop="105px"
            fontColor="#ffffff"
          />
          <ImageBox
            title="SAYAUSA"
            subtitle="USA-based fiber program"
            backgroundColor="black"
            paddingTop="105px"
            fontColor="#ffffff"
          />
        </div>
      </div>
    );
  }
}


export default withStyles(styles)(SerialProjects);
