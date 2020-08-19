import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Item from './Item';
import ExpandItem from './ExpandItem';
import { MenuContext } from './MenuContext';

const styles = theme => ({
  rootExpandItem: {
    width: '100%',
  },
  menuRoot: {
    display: 'block',
    backgroundColor: 'black',
    color: 'white',
  },
  itemRoot: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
});

class Menu extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentPath: '',
      enterPath: this.enterPath,
    };
  }

  enterPath = (path, itemType) => {
    // NOTE, items are just blindly report onClick,
    // let menu decide who should open and close
    const {
      currentPath,
    } = this.state;
    if (itemType === 'link') {
      this.setState({
        currentPath: '',
      });
      const {
        items,
        onChange,
      } = this.props;
      const indexes = path.split('/');
      const { link: linkAddress } = indexes.reduce((accu, i) => (accu = accu.items[i], accu), { items });
      // accu's init value is wrapped in an object due to bad navigation export design
      onChange(null, linkAddress);
    } else if (path === currentPath) {
      // rollback 1 level
      this.setState({
        currentPath: currentPath.split('/').slice(0, -1).join('/'),
      });
    } else {
      this.setState({
        currentPath: path,
      });
    }
  }

  renderFirstLayer = () => {
    const {
      classes,
      items,
    } = this.props;
    const firstLayerItems = items.map((item, index) => {
      const {
        name,
        items,
      } = item;
      return (
        <div
          key={index.toString()}
          className={classes.itemRoot}
        >
          <Item
            name={name}
            index={index}
            path={`${index}`}
            type="expand"
          >
            <ExpandItem
              name={name}              
              path={`${index}`}
              items={items}
              className={classes.rootExpandItem}
            />
          </Item>
        </div>
      );
    });
    return firstLayerItems;
  }

  render() {
    const {
      classes,
      className,
    } = this.props;
    return (
      <MenuContext.Provider
        value={this.state}
      >
        <div
          className={clsx(classes.menuRoot, className)}
        >
          {this.renderFirstLayer()}
        </div>
      </MenuContext.Provider>
    );
  }
}

Menu.propTypes = {
};

Menu.defaultProps = {
};

export default withStyles(styles)(Menu);