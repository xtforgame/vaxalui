import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Breadcrumbs as MUIBreadcrumbs } from '@material-ui/core';
import Link from '@material-ui/core/Link';

const styles = {
  separator: {
    color: '#FFFFFF',
    fontSize: 20,
    marginTop: -3,
  },
  link: {
    color: '#FFFFFF',
    fontSize: 20,
  }
};


class Breadcrumbs extends React.PureComponent {
  render() {
    const {
      classes,
      color = '#FFFFFF',
      bread = [],
    } = this.props;
    return (
      <MUIBreadcrumbs
        classes={{
          separator: classes.separator,
        }}
      >
        {bread.map(b => (
          <Link className={classes.link} style={{ color }} key={b.path} href={b.path} underline="none">
            {b.name}
          </Link>
        ))}
      </MUIBreadcrumbs>
    );
  }
}


export default withStyles(styles)(Breadcrumbs);
