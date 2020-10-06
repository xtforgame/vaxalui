import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MUISelect from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import clsx from 'clsx';
// import { graphql } from 'gatsby';

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    position: 'relative',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'white',
    color: 'white',
    outline: 'none',
    paddingLeft: theme.spacing(1.5),
    // paddingRight: theme.spacing(1.5),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}))(InputBase);

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
    color: '#000000',
  },
  icon: {
    color: 'white',
    marginRight: 10,
  },
});

class Select extends React.PureComponent {
  render() {
    const {
      classes,
      className,
      value,
      onChange,
      options,
      style,
      ...others
    } = this.props;
    return (
      <FormControl className={classes.margin}>
        <MUISelect
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={value}
          onChange={onChange}
          input={<BootstrapInput style={style} />}
          inputProps={{
            classes: {
              icon: classes.icon,
            },
          }}
        >
          {options.map(o => (
            <MenuItem
              key={o.toString()}
              value={o}
              className={classes.option}
            >
              {o}
            </MenuItem>
          ))}
        </MUISelect>
      </FormControl>
    );
  }
}

export default withStyles(styles)(Select);
