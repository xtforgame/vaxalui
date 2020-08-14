import React from 'react';
import PropTypes from 'prop-types';
// import { graphql } from 'gatsby';
import { MenuContext } from './MenuContext';

export const getSize = theme => ({
  width: theme.spacing(16),
  height: theme.spacing(3),
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
      children,
    } = this.props;
    return (
      <div
        data-id="menu-item"
        onMouseEnter={this.showMenu}
        onMouseLeave={this.closeMenu}
      >
        {children}
      </div>
    );
  }
}

Item.propTypes = {
  path: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

Item.defaultProps = {
};

Item.contextType = MenuContext;

export default Item;

// export const pageQuery = graphql`
//   query ABC {
//     abc
//   }
// `;
