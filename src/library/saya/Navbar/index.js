import React from 'react';
import PropTypes from 'prop-types';
// import { graphql } from 'gatsby';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import navItems from './navigation';
import Menu from './Menu';

const styles = theme => ({
  root: {
    width: '100%',
    position: 'fixed',
    zIndex: 1024,
  },
  body: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    color: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: (theme.spacing(8) - theme.spacing(3)) / 2,
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
  },
  logo: {
    marginRight: 'auto', // TODO make a global style covering this
  },
  closing: {
    // TODO maybe height is relevant to list item size
    height: theme.spacing(8),
    transitionProperty: 'height',
    transitionDuration: '0.33s',
    transitionDelay: '0.33s',
  },
  opening: {
    // TODO maybe height is relevant to list item size
    height: theme.spacing(8) * 6,
    transitionProperty: 'height',
    transitionDuration: '0.33s',
    transitionDelay: '0s',
  },
});

class Navbar extends React.PureComponent {
  state = {
    isOpen: false,
  }

  handleMenuChange = (e, value) => {
    const isOpening = (value !== '')    
    this.setState({
      isOpen: isOpening,
    });
  }

  render() {
    const {
      onLinkClick,
      classes,
      items,
      children,
    } = this.props;
    const {
      isOpen,
    } = this.state;
    return (
      <div
        className={clsx(classes.root, {
          [classes.closing]: !isOpen,
          [classes.opening]: isOpen,
        })}
      >
        <div
          className={classes.body}
        >
          <div
            className={classes.logo}
          >
            {children}
          </div>
          <div>
            <Menu
              items={items || navItems}
              onLinkClick={onLinkClick}
              onChange={this.handleMenuChange}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Navbar);

// export const pageQuery = graphql`
//   query ABC {
//     abc
//   }
// `;
