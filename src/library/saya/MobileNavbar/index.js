// @flow weak

import React from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Menu from './Menu';
import navItems from './navigation';
import MenuIcon from './MenuIcon';

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  openedMenu: {
    width: '100%',
  },
  closedMenu: {
    display: 'none',
  },
  menuRoot: {
    position: 'fixed',
    zIndex: 2048,
    top: theme.spacing(8), // offset of AppBar
    width: '100%',
  },
});

class MobileNavbar extends React.PureComponent {
  state = {
    isOpen: false,
  }

  handleMenuOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  handleMenuChange = (e, value) => {
    console.log('[TODO] handleMenuChange, link clicked', value);
    this.setState({
      isOpen: false,
    });
  }

  render() {
    const {
      classes,
      children,
    } = this.props;
    const {
      isOpen,
    } = this.state;
    return (
      <div className={classes.root}>
        <AppBar position="fixed" style={{ backgroundColor: '#000000' }}>
          <Toolbar>
            {children}
            <div className={classes.grow} />
            <IconButton color="inherit" onClick={this.handleMenuOpen} aria-label="NotificationList">
              <MenuIcon
                open={isOpen}
              />
            </IconButton>
          </Toolbar>
        </AppBar>
        <div className={classes.menuRoot}>
          <Menu
            key={isOpen.toString()}
            className={clsx({
              [classes.openedMenu]: isOpen,
              [classes.closedMenu]: !isOpen,
            })}
            items={navItems}
            onChange={this.handleMenuChange}
          />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(MobileNavbar);
