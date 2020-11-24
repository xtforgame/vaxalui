import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Breadcrumbs as MUIBreadcrumbs } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import ImageContainer from '../ImageContainer';
import { Slide } from '../reveal';

const styles = {
  separator: {
    fontSize: 12,
    marginTop: -3,
  },
  ol: {
    alignItems: 'baseline',
    justifyContent: 'center',
  },
  link: {
    fontSize: 0,
  },
};

const handleClick = (e) => {
  e.preventDefault();
};

class Breadcrumbs extends React.PureComponent {
  render() {
    const {
      classes,
      color = '#FFFFFF',
      bread = [],
      separatorColor,
      style,
      breadcrumbsStyle,
    } = this.props;

    return (
      <div style={style}>
        <MUIBreadcrumbs
          classes={{
            ol: classes.ol,
            separator: classes.separator,
          }}
          separator={<span style={{ color: separatorColor }}>/</span>}
          style={breadcrumbsStyle}
        >
          {bread.map(b => (
            <Link className={classes.link} onClick={b.path ? (() => {}) : handleClick} style={{ color }} key={`${b.name}${b.path}`} href={b.path} underline="none">
              {b.name}
            </Link>
          ))}
        </MUIBreadcrumbs>
      </div>
    );
  }
}


export default withStyles(styles)(Breadcrumbs);
