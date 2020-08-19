/* eslint-disable import/prefer-default-export */
import React from 'react';

export const MenuContext = React.createContext({
  currentPath: '', // '0/1/3' means hovering on [0][1][3]'s expand item
  enterPath: (path) => {
    console.warn('default enterPath', path);
  },
  leavePath: (path) => {
    console.warn('default leavePath', path);
  },
  onLinkClick: (path) => {
    console.warn('default onLinkClick', path);
  },
});
