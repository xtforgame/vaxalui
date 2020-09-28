import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    border: '1px solid #e8e8e8',
  },
};
class IconBoxSection extends React.PureComponent {
  render() {
    const {
      classes,
      children,
    } = this.props;
    return (
      <div className={classes.root}>
        {children}
      </div>
    );
  }
}


export default withStyles(styles)(IconBoxSection);
