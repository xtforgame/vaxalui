import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import clsx from 'clsx';
// import { graphql } from 'gatsby';

const styles = theme => ({
  root: {
    height: theme.spacing(5.5),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
  },
});

class Button extends React.PureComponent {
  render() {
    const {
      classes,
      className,
      text,
      onClick,
      ...others
    } = this.props;
    return (
      <button
        className={clsx(classes.root, className)}
        type="button"
        onClick={onClick}
        {...others}
      >
        {text}
      </button>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: () => {},
};

export default withStyles(styles)(Button);

// export const pageQuery = graphql`
//   query ABC {
//     abc
//   }
// `;
