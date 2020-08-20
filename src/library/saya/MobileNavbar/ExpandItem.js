import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import ItemList from './ItemList';
import { MenuContext } from './MenuContext';
import { getSize } from './Item';

const styles = theme => ({
  root: {
    width: '100%',
    height: 'auto',
    position: 'relative',
  },
  itemListRoot: {
  },
  name: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: theme.spacing(3),
    height: getSize(theme).height,
  },
});

export const isOpened = (path, currentPath) => {
  if (currentPath === '') return false;
  if (!currentPath.startsWith(path)) return false;
  return true;
};

class ExpandItem extends React.PureComponent {
  isOpened = () => {
    const {
      path,
    } = this.props;
    const {
      currentPath,
    } = this.context;
    return isOpened(path, currentPath);
  }

  renderName = () => {
    const {
      classes,
      name,
    } = this.props;

    let endAdornment = '>';
    if (this.isOpened()) {
      endAdornment = '^';
    }
    return (
      <div
        className={classes.name}
      >
        <div>{name}</div>
        <div>{endAdornment}</div>
      </div>
    );
  }

  renderItemList = () => {
    const {
      classes,
      path,
      items,
      theme,
    } = this.props;
    if (!this.isOpened()) return null;
    return (
      <div
        className={classes.itemListRoot}
      >
        <ItemList
          items={items}
          root={path}
        />
      </div>
    );
  }

  render() {
    const {
      classes,
      className,
    } = this.props;
    return (
      <div
        className={clsx(classes.root, className)}
      >
        {this.renderName()}
        {this.renderItemList()}
      </div>
    );
  }
}

ExpandItem.propTypes = {
  path: PropTypes.string.isRequired, // decide isOpen and pass down to ItemList
  name: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired, // pass down
};

ExpandItem.defaultProps = {
};

ExpandItem.contextType = MenuContext;

export default withStyles(styles, { withTheme: true })(ExpandItem);
