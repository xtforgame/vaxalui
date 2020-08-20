import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ImageCircle from './ImageCircle';

const styles = {
  root: {
    width: '100%',
    height: 870,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold',
    color: '#000000',
    paddingTop: 110,
  },
  circle: {
    marginTop: 110,
  },
};

class TwoCireSection extends React.PureComponent {
  render() {
    const {
      classes,
      backgroundImage,
    } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.title}>
          All The Products are Available in
          <br />
          SAYA Now & SAYA Next Technologies.
        </div>
        <div className={classes.circle}>
          <ImageCircle
            linkText="Explore this Technology"
            backgroundImage={backgroundImage}
          />
        </div>
      </div>

    );
  }
}


export default withStyles(styles)(TwoCireSection);
