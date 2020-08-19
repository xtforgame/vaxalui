import React from 'react';
import { withStyles } from '@material-ui/styles';


const styles = {
  root: {
    width: 400,
    height: 400,
    display: 'flex',
    flexDirection: 'column',
    color: '#ffffff',
    paddingTop: 85,
    paddingLeft: 90,
  },
  number: {
    fontSize: 180,
    lineHeight: 0.74,
  },
  topTile: {
    fontSize: 20,
    paddingTop: 20,
  },
  line: {
    width: 210,
    height: 2,
    border: '3px solid #ffffff',
    marginTop: 15,
  },
  bottomTitle: {
    fontSize: 20,
    paddingTop: 10,
  },
};

class ImageNumber extends React.PureComponent {
  render() {
    const {
      classes,
      backgroundImage,
      number,
      topTile,
      bottomTitle,
    } = this.props;


    return (
      <div
        className={classes.root}
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className={classes.number}> {number} </div>

        <div className={classes.topTile}> {topTile} </div>

        <div className={classes.line} />

        <div className={classes.bottomTitle}> {bottomTitle} </div>
      </div>
    );

    
  }
}


export default withStyles(styles)(ImageNumber);