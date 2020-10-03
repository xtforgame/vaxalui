import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Breadcrumbs as MUIBreadcrumbs } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import ImageContainer from '../ImageContainer';

const styles = {
  separator: {
    fontSize: 12,
    marginTop: -3,
  },
  ol: {
    alignItems: 'baseline',
  },
  link: {
    fontSize: 0,
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
      <div style={{ width: 310 }}>
        <MUIBreadcrumbs
          classes={{
            ol: classes.ol,
            separator: classes.separator,
          }}
          separator={<span style={{ color: separatorColor }}>/</span>}
        >
          {bread.map(b => (
            <Link className={classes.link} style={{ color}} key={b.path} href={b.path} underline="none">
              {b.name}
            </Link>
          ))}
        </MUIBreadcrumbs>
      </div>
    );
  }
}


export default withStyles(styles)(Breadcrumbs);
