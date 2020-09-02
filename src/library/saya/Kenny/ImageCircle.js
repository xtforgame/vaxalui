import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    width: 710,
    height: 370,
    display: 'flex',
    textAlign: 'center',
    color: '#ffffff',
  },
  leftCircle: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 80,
    paddingTop: 140,
  },
  rightCircle: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 115,
    paddingTop: 140,
  },
  title: {
    fontSize: 40,
    fontFamily: 'FilsonSoft-Bold',
    fontWeight: 'bold',
  },
  titleBack: {
    fontWeight: 300,  
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'FilsonSoftRegular',
    paddingTop:3,
  },
  link:{
    fontSize: 14,
    fontFamily: 'FilsonSoftRegular',
    color:' #c0c823',
    textDecoration:'underline',
    paddingTop:50,
  },
};

class ImageCircle extends React.PureComponent {
  render() {
    const {
      classes,
      linkText1,
      linkText2,
      backgroundImage,
      oc1,
      oc2,
    } = this.props;
    return (
      <div className={classes.root} style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className={classes.leftCircle}>
          <div className={classes.title}>
            SAYA<span className={classes.titleBack}>NOW</span>
          </div>
          <div className={classes.subtitle}>Premium Fibers from<br />Recycled PET Bottles</div>
          <a className={classes.link} onClick={oc1} href="#">Find Out the SAYA Difference</a>
        </div>
        <div className={classes.rightCircle}>
          <div className={classes.title}>
            SAYA<span className={classes.titleBack}>NEXT</span>
          </div>
          <div className={classes.subtitle}>Advanced Fibers from<br />Garments, Overstocks, and More</div>
          <a className={classes.link} onClick={oc2} href="#">Recycling Solution with Real Impact</a>
        </div>
      </div>
    );
  }
}


export default withStyles(styles)(ImageCircle);
