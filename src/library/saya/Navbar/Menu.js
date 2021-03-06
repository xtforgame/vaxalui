import React from 'react';
// import { graphql } from 'gatsby';
import { withStyles } from '@material-ui/core/styles';
import Item from './Item';
import ExpandItem from './ExpandItem';

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
    marginLeft: 30,
    marginRight: 30,
  },
});

class Menu extends React.PureComponent {
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
            firstLayer
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
    } = this.props;
    return (
      <div
        className={classes.menuRoot}
      >
        {this.renderFirstLayer()}
      </div>
    );
  }
}

export default withStyles(styles)(Menu);

// export const pageQuery = graphql`
//   query ABC {
//     abc
//   }
// `;
