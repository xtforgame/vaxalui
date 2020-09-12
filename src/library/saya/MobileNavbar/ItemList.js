import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Item from './Item';
import ExpandItem, { isOpened as isExpanded } from './ExpandItem';
import LinkItem from './LinkItem';
import { MenuContext } from './MenuContext';

const styles = theme => ({
  root: {
    zIndex: 2048,
    backgroundColor: 'transparent',
  },
  itemRoot: {
    // TODO not yet
  },
  darkItem: {
    color: '#808080',
    transitionProperty: 'color',
    transitionDuration: '0.2s',
    transitionDelay: '0s',
  },
});

class ItemList extends React.PureComponent {
  renderItem = (item, index) => {
    const {
      classes,
      root,
    } = this.props;
    const {
      name,
      link,
      items,
    } = item;
    const {
      currentPath,
    } = this.context;

    const path = `${root}/${index}`;
    let body;

    if (link) {
      body = (
        <Item
          path={path}
          type="link"
        >
          <LinkItem
            to={link}
            name={name}
            disabled={item.disabled}
            className={clsx({
              [classes.darkItem]: (!this.allClosed && !isExpanded(path, currentPath)) || item.disabled,
            })}
          />
        </Item>
      );
    } else if (items) {
      body = (
        <Item
          path={path}
          type="expand"
        >
          <ExpandItem
            name={name}
            path={path}
            items={items}
            className={clsx({
              [classes.darkItem]: (!this.allClosed && !isExpanded(path, currentPath)) || item.disabled,
            })}
          />
        </Item>
      );
    }
    return (
      <div
        key={index.toString()}
        className={classes.itemRoot}
      >
        {body}
      </div>
    );
  }

  renderItems = () => {
    const {
      items,
      root,
    } = this.props;
    const {
      currentPath,
    } = this.context;
    this.allClosed = items.every(
      (item, index) => item.link || !isExpanded(`${root}/${index}`, currentPath)
    );
    return items.filter(i => i.name).map(this.renderItem);
  }

  render() {
    const {
      className,
      classes,
    } = this.props;
    return (
      <div
        className={clsx(classes.root, className)}
      >
        {this.renderItems()}
      </div>
    )
  }
}

ItemList.propTypes = {
  root: PropTypes.string.isRequired, // parent(i.e. an ExpandItem)'s path
  items: PropTypes.arrayOf(PropTypes.shape({ // Items of this list
    name: PropTypes.string.isRequired,
    link: PropTypes.string, // excluding items
    items: PropTypes.array, // excluding link
  })).isRequired,
};

ItemList.defaultProps = {
};

ItemList.contextType = MenuContext;

export default withStyles(styles)(ItemList);
