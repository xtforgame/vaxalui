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
    // '&:hover': {
    //   color: '808080',
    //   // backgroundColor: 'aqua',
    //   // transitionProperty: 'background-color',
    //   // transitionDuration: '0.1s',
    //   // transitionDelay: '0s',
    // },
  },
});

class ItemList extends React.PureComponent {
  renderItem = (item, index) => {

    // console.log('item :', item);

    const {
      classes,
      root,
    } = this.props;
    const {
      name,
      link,
      items,
      listDirection,
    } = item;
    const {
      currentPath,
    } = this.context;

    const path = `${root}/${index}`;
    let body;

    if (link) {
      const dark = (!this.allClosed && path !== currentPath) || !!item.disabled;
      body = (
        <Item
          path={path}
        >
          <LinkItem
            to={link}
            name={name}
            disabled={item.disabled}
            className={clsx({
              [classes.darkItem]: dark,
            })}
          />
        </Item>
      );
    } else if (items) {
      const dark = (!this.allClosed && !isExpanded(path, currentPath)) || !!item.disabled;
      body = (
        <Item
          path={path}
        >
          <ExpandItem
            name={name}
            path={path}
            items={items}
            listDirection={listDirection}
            dark={dark}
            className={clsx({
              [classes.darkItem]: dark,
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
      (item, index) => {
        if (item.link) {
          return `${root}/${index}` !== currentPath;
        }
        return !isExpanded(`${root}/${index}`, currentPath);
      }
    );
    return items.filter(i => i.name).map(this.renderItem);
  }

  render() {
    const {
      classes,
    } = this.props;
    return (
      <div
        className={classes.root}
      >
        {this.renderItems()}
      </div>
    );
  }
}

ItemList.propTypes = {
  root: PropTypes.string.isRequired, // parent(i.e. an ExpandItem)'s path
  items: PropTypes.arrayOf(PropTypes.shape({ // Items of this list
    name: PropTypes.string.isRequired,
    link: PropTypes.string, // excluding items
    items: PropTypes.array, // excluding link
    listDirection: PropTypes.oneOf(['bottom', 'right']), // only when having items
  })).isRequired,
};

ItemList.defaultProps = {
};

ItemList.contextType = MenuContext;

export default withStyles(styles)(ItemList);

// export const pageQuery = graphql`
//   query ABC {
//     abc
//   }
// `;
