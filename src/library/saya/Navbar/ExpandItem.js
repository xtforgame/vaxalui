import React from 'react';
import PropTypes from 'prop-types';
// import { graphql } from 'gatsby';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import ItemList from './ItemList';
import { MenuContext } from './MenuContext';
import { getSize } from './Item';

const styles = theme => ({
  root: {
    ...getSize(theme),
    position: 'relative',
  },
  itemListRoot: {
    position: 'absolute',
  },
  specialNameRoot: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: theme.spacing(3),
  },
});

export const isOpened = (path, currentPath) => {
  if (currentPath === '') return false;
  if (!currentPath.startsWith(path)) return false;
  return true;
}

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

  getTopOffset = () => {
    const {
      path,
      theme,
    } = this.props;
    const ith = path.split('/').pop();
    return ith * getSize(theme).height * -1;
  }

  renderName = () => {
    const {
      classes,
      name: inName,
      listDirection,
    } = this.props;

    let name;
    if (listDirection === 'bottom') {
      name = inName;
    } else if (listDirection === 'right') {
      name = (
        <div
          className={classes.specialNameRoot}
        >
          <div>{inName}</div>
          <div>—</div>
        </div>
      );
    }

    return (
      <div>
        {name}
      </div>
    );
  }

  renderItemList = () => {
    const {
      classes,
      path,
      items,
      listDirection,
      theme,
    } = this.props;
    if (!this.isOpened()) return null;

    const listAtRight = {
      left: getSize(theme).width,
      top: this.getTopOffset(),
    };
    const style = (listDirection === 'right') ? listAtRight : {};
    return (
      <div
        className={classes.itemListRoot}
        style={style}
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
  listDirection: PropTypes.oneOf(['bottom', 'right']),
};

ExpandItem.defaultProps = {
  listDirection: 'bottom',
};

ExpandItem.contextType = MenuContext;

export default withStyles(styles, { withTheme: true })(ExpandItem);

// export const pageQuery = graphql`
//   query ABC {
//     abc
//   }
// `;
