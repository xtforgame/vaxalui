import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Link from './Link';

const styles = theme => ({
  root: {
    position: 'relative',
    color: 'white',
    // '&:hover': {
    //   color: 'white',
    //   // backgroundColor: 'aqua',
    //   // transitionProperty: 'background-color',
    //   // transitionDuration: '0.1s',
    //   // transitionDelay: '0s',
    // },
  },
});

class LinkItem extends React.PureComponent {
  render() {
    const {
      classes,
      className,
      to,
      name,
      disabled,
    } = this.props;
    return (
      <Link
        to={to}
        disabled={disabled}
      >
        <div
          className={clsx(classes.root, className)}
        >
          {name}
        </div>
      </Link>
    );
  }
}

export default withStyles(styles)(LinkItem);
