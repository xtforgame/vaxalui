import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Link from './Link';
import { getSize } from './Item';

const styles = theme => ({
  root: {
    width: getSize(theme).width,
    height: getSize(theme).height,
    position: 'relative',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
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
