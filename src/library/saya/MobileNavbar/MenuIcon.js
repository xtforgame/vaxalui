import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    position: 'relative',
  },
  opened: {

  },
  closed: {

  },
  symbol: {
    position: 'absolute',
    width: 18,
    height: 2,
    left: 3,
    backgroundColor: 'white',
  },
  symbol1: {
    top: 6,
    transitionProperty: 'transform',
    transitionDuration: '0.2s',
    transitionDelay: '0s',
  },
  symbol2: {
    top: 10,
  },
  symbol3: {
    top: 14,
    transitionProperty: 'transform',
    transitionDuration: '0.2s',
    transitionDelay: '0s',
  },
  symbol1Open: {
    top: 10,
    transformOrigin: 'center',
    transform: 'rotate(45deg)',
    transitionProperty: 'transform',
    transitionDuration: '0.2s',
    transitionDelay: '0s',
  },
  symbol2Open: {
    display: 'none',
  },
  symbol3Open: {
    top: 10,
    transformOrigin: 'center',
    transform: 'rotate(-45deg)',
    transitionProperty: 'transform',
    transitionDuration: '0.2s',
    transitionDelay: '0s',
  },
});

class MenuIcon extends React.PureComponent {
  render() {
    const {
      classes,
      className,
      open,
    } = this.props;
    return (
      <div
        className={clsx(classes.root, className)}
      >
        <span className={clsx(classes.symbol, classes.symbol1, {
          [classes.symbol1Open]: open,
        })} />
        <span className={clsx(classes.symbol, classes.symbol2, {
          [classes.symbol2Open]: open,
        })} />
        <span className={clsx(classes.symbol, classes.symbol3, {
          [classes.symbol3Open]: open,
        })} />
      </div>
    );
  }
}

MenuIcon.propTypes = {
};

MenuIcon.defaultProps = {
};

export default withStyles(styles)(MenuIcon);
