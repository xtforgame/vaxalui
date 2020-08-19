import React from 'react';
import { withStyles } from '@material-ui/styles';

import background from '../../../../stories/saya/img/now_next_circle_sample.jpg';

const styles = {
  root: {
    width: 710,
    height: 370,
    backgroundImage: `url(${background})`,
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
      linkText,
    } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.leftCircle}>
          <div className={classes.title}>
            SAYA<span className={classes.titleBack}>NOW</span>
          </div>
          <div className={classes.subtitle}>Fabric Made by<br />Used and Recycled PET Bottles</div>
          <a className={classes.link} href="">{linkText}</a>
        </div>

        <div className={classes.rightCircle}>
          <div className={classes.title}>
            SAYA<span className={classes.titleBack}>NEXT</span>
          </div>
          <div className={classes.subtitle}>Fabric Made of<br />Garments, Fabrics, and Other Wastes</div>
          <a className={classes.link} href="">{linkText}</a>
        </div>
      </div>
    );
  }
}


export default withStyles(styles)(ImageCircle);
