import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import clsx from 'clsx';
import { Link } from 'gatsby';
import { constant } from './Item';

const styles = theme => ({
  root: {
    width: constant.width,
    height: constant.height,
    position: 'relative',
    color: 'white',
    '&:hover': {
      color: 'white',
      // backgroundColor: 'aqua',
      // transitionProperty: 'background-color',
      // transitionDuration: '0.1s',
      // transitionDelay: '0s',
    },
  },
});

class LinkItem extends React.PureComponent {
  render() {
    const {
      classes,
      className,
      to,
      name,
    } = this.props;
    return (
      <Link
        to={to}
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

LinkItem.propTypes = {
  to: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

LinkItem.defaultProps = {
};

export default withStyles(styles)(LinkItem);

// export const pageQuery = graphql`
//   query ABC {
//     abc
//   }
// `;
