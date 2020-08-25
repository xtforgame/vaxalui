import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
// import { graphql } from 'gatsby';
import { withStyles } from '@material-ui/core/styles';
import { MenuContext } from './MenuContext';

const styles = theme => ({
  firstLayer: {
    fontFamily: 'FilsonSoft-Bold',
  },
  otherLayer: {
    paddingTop: 4,
    paddingBottom: 4,
    fontFamily: 'FilsonSoftRegular',
  },
});

class Item extends React.PureComponent {
  showMenu = (e) => {
    this.context.enterPath(this.props.path);
  }

  closeMenu = (e) => {
    this.context.leavePath(this.props.path);
  }

  render() {
    const {
      firstLayer,
      classes,
      children,
    } = this.props;
    return (
      <div
        className={clsx({ [classes.firstLayer]: firstLayer, [classes.otherLayer]: !firstLayer })}
        data-id="menu-item"
        onMouseEnter={this.showMenu}
        // onMouseLeave={this.closeMenu}
      >
        {children}
      </div>
    );
  }
}

Item.contextType = MenuContext;

export default withStyles(styles)(Item);

// export const pageQuery = graphql`
//   query ABC {
//     abc
//   }
// `;
