import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    borderTop: '1px solid #e3e3e3',
    borderBottom: '1px solid #e3e3e3',
    marginBottom: -1,
  },
};
class IconBoxSection extends React.PureComponent {
  render() {
    const {
      classes,
      children,
      borderColor,
    } = this.props;
    return (
      <div className={classes.root} style={{ borderColor }}>
        {children}
      </div>
    );
  }
}


export default withStyles(styles)(IconBoxSection);
