import React from 'react';
import { withStyles } from '@material-ui/styles';
import clsx from 'clsx';
// import { graphql } from 'gatsby';

const styles = theme => ({
  root: {
    height: theme.spacing(5.5),
    color: 'white',
    backgroundColor: 'transparent',
    paddingLeft: theme.spacing(1.5),
    paddingRight: theme.spacing(1.5),
    paddingTop: theme.spacing(1.25),
    paddingBottom: theme.spacing(1.25),
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'white',
    outline: 'none',
  },
  option: {
    color: 'red',
  },
});

class Selects extends React.PureComponent {
  render() {
    const {
      classes,
      className,
      value,
      onChange,
      options,
      ...others
    } = this.props;
    return (
      <select
        className={clsx(classes.root, className)}
        value={value}
        onChange={onChange}
        {...others}
      >
        {options.map(o => (
          <option
            key={o.toString()}
            value={o}
            className={classes.option}
          >
            {o}
          </option>
        ))}
      </select>
    );
  }
}

Selects.propTypes = {
};

Selects.defaultProps = {
};

export default withStyles(styles)(Selects);

// export const pageQuery = graphql`
//   query ABC {
//     abc
//   }
// `;
