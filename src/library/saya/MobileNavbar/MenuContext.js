/* eslint-disable import/prefer-default-export */
import React from 'react';

export const MenuContext = React.createContext({
  currentPath: '', // '0/1/3' means touching on [0][1][3]'s item
  enterPath: (path, itemType) => {
    console.warn('default enterPath', path, itemType);
  },
});
