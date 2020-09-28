import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
}));

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default (props) => {
  const {
    data = [],
  } = props;

  const classes = useStyles();

  const renderBreadcrumb = (breadcrumb, index, breadcrumbs) => {
    if (breadcrumb.link) {
      return (
        <Link key={index} color="inherit" href="/" onClick={handleClick}>
          <span style={{ fontSize: 14, fontFamily: 'FilsonSoftRegular', color: 'black' }}>
            {breadcrumb.label}
          </span>
        </Link>
      );
    } else if (index !== breadcrumbs.length - 1) {
      return (
        <Link key={index} color="inherit" href="/" onClick={handleClick}>
          <span style={{ fontSize: 14, fontFamily: 'FilsonSoftRegular', color: 'black' }}>
            {breadcrumb.label}
          </span>
        </Link>
      );
    }
    // <Typography color="textPrimary">What is post-consumer recycled polyester</Typography>
    return (
      <span key={index} style={{ fontSize: 14, fontFamily: 'FilsonSoft-Bold', color: 'black' }}>
        {breadcrumb.label}
      </span>
    );
  };

  return (
    <React.Fragment>
      {/* <div style={{ paddingTop: 40, fontSize: 14, textAlign: 'center' }}>
        About / News /
        <span style={{ fontFamily: 'FilsonSoft-Bold' }}>
          What is post-consumer recycled polyester
        </span>
      </div> */}
      <div style={{ paddingTop: 40, display: 'flex', justifyContent: 'center' }}>
        <Breadcrumbs aria-label="breadcrumb">
          {(data || []).map(renderBreadcrumb)}
        </Breadcrumbs>
      </div>
    </React.Fragment>
  );
};
