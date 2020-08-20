import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    width: '100%',
    height: 565,
    display: 'flex',
    justifyContent: 'center',
  },
  section: {
    width: 860,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
};

class ImageNumberSection extends React.PureComponent {
  render() {
    const {
      classes,
      children,
    } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.section}>
          {children}
        </div>
      </div>
    );
  }
}


export default withStyles(styles)(ImageNumberSection);
