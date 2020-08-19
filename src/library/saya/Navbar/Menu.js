import React from 'react';
import PropTypes from 'prop-types';
// import { graphql } from 'gatsby';
import { withStyles } from '@material-ui/core/styles';
import Item from './Item';
import ExpandItem from './ExpandItem';
import { MenuContext } from './MenuContext';

const styles = theme => ({
  specialExpandItem: {
    width: 'auto',
  },
  menuRoot: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
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
      leavePath: this.leavePath,
      pathStack: [],
    };
  }

  componentDidUpdate() {
    const {
      onChange,
    } = this.props;
    const {
      currentPath,
    } = this.state;
    onChange(null, currentPath);
  }

  enterPath = (path) => {
    const stack = this.state.pathStack;
    stack.push(path);
    this.setState({
      currentPath: path,
      pathStack: [...stack],
    });
  }

  leavePath = (path) => {
    const stack = this.state.pathStack;
    (stack[stack.length - 1] !== path) && console.error('Path leaving incorrect');
    stack.pop();
    this.setState({
      currentPath: (stack.length === 0) ? '' : stack[stack.length - 1],
      pathStack: [...stack],
    });
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
          >
            <ExpandItem
              name={name}
              path={`${index}`}
              items={items}
              listDirection="bottom"
              className={classes.specialExpandItem}
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
      onLinkClick,
    } = this.props;
    return (
      <MenuContext.Provider
        value={{
          ...this.state,
          onLinkClick: onLinkClick || ((path) => {
            console.warn('default onLinkClick', path);
          }),
        }}
      >
        <div
          className={classes.menuRoot}
        >
          {this.renderFirstLayer()}
        </div>
      </MenuContext.Provider>
    );
  }
}

export default withStyles(styles)(Menu);

// export const pageQuery = graphql`
//   query ABC {
//     abc
//   }
// `;
