import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Slide } from '../reveal';

const styles = {
  root: {
    width: '100%',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: 18,
  },
  circle: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 45,
  },
};

class TwoCircleSection extends React.PureComponent {
  render() {
    const {
      classes,
      height,
      backgroundImage,
      backgroundColor,
      circleMarginTop,
      children,
    } = this.props;

    return (
      <div className={classes.root} style={{ height: height, backgroundColor: backgroundColor ,}}>
        <div>
          {children}
        </div>

        {/* <div className={classes.subtitle}>
          <pre style={{ fontFamily: 'FilsonSoftRegular' }}>SAYA Now SAYA Next Technologies.</pre>
        </div> */}

        <div className={classes.circle} style={{ marginTop: circleMarginTop, }}>
          <img
            src={backgroundImage}
            height={610}
          />
        </div>
      </div>

    );
  }
}
export default withStyles(styles)(TwoCircleSection);
