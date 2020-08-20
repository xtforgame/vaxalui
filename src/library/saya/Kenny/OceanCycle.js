import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    width: '100%',
    height: 450,
    backgroundColor: '#c8c6c6',
    border: 'solid 1px #979797',
    display: 'flex',
    justifyContent: 'center',
  },
  oceanCycle: {
    width: 220,
    height: 300,
    marginTop: 75,
    marginRight: 90,
  },
  rightColumn: {
    width: 470,
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 165,
    paddingLeft: 90,
    flexWrap: 'wrap',
  },
  rightTitle: {
    fontSize: 20,
    color: '#000000',
    fontFamily: 'FilsonSoftRegular',
  },
  description: {
    fontSize: 14,
    color: '#000000',
    paddingTop: 20,
    fontFamily: 'FilsonSoftRegular',
  },
};


class OceanCycle extends React.PureComponent {
  render() {
    const {
      classes,
      backgroundImage,
    } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.oceanCycle} style={{ backgroundImage: `url(${backgroundImage})` }} />
        <div className={classes.rightColumn}>
          <div className={classes.rightTitle}>Lorem ipsum dolor sit amet.</div>
          <div className={classes.description}>
            We work with OceanCycle’s network of
            certified coastal recyclers. Treated with
            SAYA Now’s proprietary renewing technology,
            we turn potential microplastics into microfibers.
          </div>
        </div>
      </div>
    );
  }
}


export default withStyles(styles)(OceanCycle);
