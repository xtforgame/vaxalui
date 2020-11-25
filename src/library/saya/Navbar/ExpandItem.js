import React, { useContext, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
// import { graphql } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import ItemList from './ItemList';
import { MenuContext } from './MenuContext';

const useStyles = makeStyles(theme => ({
  root: {
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
    // paddingRight: theme.spacing(3),
  },
  darkArrow: {
    borderLeftColor: '#808080',
  },
  rightArrow: {
    width: 0,
    height: 0,
    borderTop: '4px solid transparent',
    borderBottom: '4px solid transparent',
    // backgroundColor: '#ffffff',
    borderLeftStyle: 'solid',
    borderLeftWidth: '4px',
    // borderLeftColor: '#ffffff',

    transitionProperty: 'border-left-color',
    transitionDuration: '0.2s',
    transitionDelay: '0s',
  },
  space: {
    width: 8,
    height: 8,
  },
}));

export const isOpened = (path, currentPath) => {
  if (currentPath === '') return false;
  if (!currentPath.startsWith(path)) return false;
  return true;
};

export default (props) => {
  const {
    path,
    name: inName,
    listDirection,
    items,
    theme,
    dark,
    className,
  } = props;

  // console.log('dark :', dark);

  const {
    currentPath,
  } = useContext(MenuContext);
  const classes = useStyles();
  const textItem = useRef();

  useEffect(() => {
    // console.log('textItem :', textItem);
    // console.log('textItem.current.offsetHeight :', textItem.current.offsetHeight);
  });

  const renderName = () => {
    let name;
    if (listDirection === 'bottom') {
      name = (
        <div>
          <div>{inName}</div>
          <div className={classes.space} />
        </div>
      );
    } else if (listDirection === 'right') {
      name = (
        <div
          className={classes.specialNameRoot}
        >
          <div>{inName}</div>
          <div className={classes.space} />
          <div
            className={clsx(classes.rightArrow, { [classes.darkArrow]: dark })}
          />
        </div>
      );
    }

    return (
      <div ref={textItem}>
        {name}
      </div>
    );
  };

  const renderItemList = () => {
    const isOpenedFlag = isOpened(path, currentPath);
    // if (!isOpened(path, currentPath)) return null;

    const listAtRight = {
      left: (textItem.current && textItem.current.offsetWidth),
      top: -4,
      paddingLeft: 8,
    };
    const style = (listDirection === 'right') ? listAtRight : {};
    if (!isOpenedFlag) {
      style.display = 'none';
    }
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
  };

  return (
    <div
      className={clsx(classes.root, className)}
    >
      {renderName()}
      {renderItemList()}
    </div>
  );
};
