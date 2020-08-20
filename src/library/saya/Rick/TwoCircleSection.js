import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    width: '100%',
    height: 888,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: 18,
  },
  title: {
    fontSize: 33,
    fontWeight: 'bold',
    color: '#000000',
    paddingTop: 110,
  },
  circle: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 60,
  },
};

class TwoCircleSection extends React.PureComponent {
  render() {
    const {
      classes,
      backgroundImage,
    } = this.props;

    const content = `All The Products are Available in
    SAYA Now & SAYA Next
    Technologies.`;
    return (
      <div className={classes.root}>
        <div style={{ width: '100%', marginTop: 40 }}>
          <pre style={{ fontFamily: 'FilsonSoftRegular' }}>
            {content}
          </pre>
        </div>

        {/* <div className={classes.subtitle}>
          <pre style={{ fontFamily: 'FilsonSoftRegular' }}>SAYA Now SAYA Next Technologies.</pre>
        </div> */}

        <div className={classes.circle}>
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
