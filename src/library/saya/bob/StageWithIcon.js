import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 30,
  },
  circle: {
    width: 128,
    height: 128,
    border: 'solid 1px #ffffff',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'FilsonSoft-Bold',
  },
  topRaw: {
    display: 'flex',
    marginTop: 30,
  },
  bottomRaw: {
    marginTop: 55,
    display: 'flex',
  },
  img: {
    height: 128,
    marginLeft: 43,
  },
};

class StageWithIcon extends React.PureComponent {
  render() {
    const {
      classes,
      topImg,
      bottomImg,
    } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.topRaw}>
          <div className={classes.circle}>
            5 Stage
            <br />
            Filtration
          </div>
          <img className={classes.img} src={topImg} />
        </div>

        <div className={classes.bottomRaw}>
          <div className={classes.circle}>
            2 Stage
            <br />
            Purification
          </div>
          <img className={classes.img} src={bottomImg} />

        </div>
      </div>
    );
  }
}


export default withStyles(styles)(StageWithIcon);
