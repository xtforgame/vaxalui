// @flow weak

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
  root: {
    // marginTop: theme.spacing(3),
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
});

class MainAppBar extends React.PureComponent {
  render() {
    const {
      classes,
      children,
    } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="fixed" style={{ backgroundColor: '#000000' }}>
          <Toolbar>
            {children}
            {/* <Typography variant="h6" color="inherit">
              logo
            </Typography> */}
            <div className={classes.grow} />
            <IconButton color="inherit" onClick={() => {}} aria-label="NotificationList">
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}


export default withStyles(styles)(MainAppBar);
