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
  ol: {
    alignItems: 'baseline',
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
      separatorColor,
    } = this.props;
    return (
      <MUIBreadcrumbs
        classes={{
          ol: classes.ol,
          separator: {
            ...classes.separator,
            color: separatorColor,
          },
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
