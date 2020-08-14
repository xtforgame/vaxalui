import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Background from '../img/bg2.jpg';

const styles = {
  root: {
    width: '100%',
    height: 590,
    backgroundColor: '#000000',
    color: '#ffffff',
    display: 'flex',
    justifyContent: 'center',
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
  },
  section: {
    width: 1024,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    paddingTop: 80,
    paddingLeft: 40,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  line: {
    width: 420,
    height: 1,
    border: '1px solid #ffffff',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 20,
    marginTop: 20,
  },
  description: {
    fontSize: 14,
    marginTop: 20,
    width: 460,
  },
};

class Introduction extends React.PureComponent {
  render() {
    const {
      classes,
    } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.section}>
          <div className={classes.title}>
            Design Consciously,
            <br />
            Know What Goes Into Your Gears.
          </div>

          <div className={classes.line} />

          <div className={classes.subtitle}>
            Smooth and Painless Transition to Smarter Fibers.
          </div>

          <div className={classes.description}>
            Vestibulum rutrum quam vitae fringilla tincidunt.
            Suspendisse nec tortor urna. Ut laoreet sodales nisi,
            quis iaculis nulla iaculis vitae.
            Donec sagittis faucibus lacus eget blandit.
            Mauris vitae ultricies metus, at condimentum nulla.
            Donec quis ornare lacus.
            Etiam gravida mollis tortor quis porttitor.
          </div>
        </div>
      </div>

    );
  }
}


export default withStyles(styles)(Introduction);
