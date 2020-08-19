import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MenuContext } from './MenuContext';

export const getSize = theme => ({
  width: theme.spacing(16),
  height: theme.spacing(6),
  indent: theme.spacing(2),
});

const styles = theme => ({
  root: {
    paddingLeft: getSize(theme).indent,
  },
});

class Item extends React.PureComponent {
  handleClick = () => {
    this.context.enterPath(this.props.path);
  }

  render() {
    const {
      classes,
      children,
    } = this.props;
    return (
      <div
        data-id="menu-item"
        className={classes.root}
        onClick={this.handleClick}
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

export default withStyles(styles, { withTheme: true })(Item);
