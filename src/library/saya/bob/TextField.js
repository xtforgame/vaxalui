import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { TextField as MUITextField } from '@material-ui/core';
import clsx from 'clsx';
// import { graphql } from 'gatsby';

const styles = theme => ({
  root: {
    height: theme.spacing(5.5),
    color: '#000000',
    backgroundColor: 'transparent',
    padding: theme.spacing(1.5),
    borderStyle: 'solid',
    borderRadius: 0,
    borderWidth: 1,
    borderColor: '#000000',
    outline: 'none',
    '&::placeholder': {
      color: '#000000',
    },
  },
  darkTheme: {
    borderWidth: 2,
    color: '#FFFFFF',
    borderColor: '#FFFFFF',
    backgroundColor: '#000000',
    '&::placeholder': {
      color: '#FFFFFF',
    },
  },
});

class TextField extends React.PureComponent {
  render() {
    const {
      darkTheme,
      classes,
      className,
      value,
      onChange,
      ...others
    } = this.props;
    return (
      <input
        className={clsx(classes.root, { [classes.darkTheme]: darkTheme }, className)}
        value={value}
        onChange={onChange}
        {...others}
      />
    )
  }
}

TextField.propTypes = {
};

TextField.defaultProps = {
};

export default withStyles(styles)(TextField);
