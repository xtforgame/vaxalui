import React, { useContext } from 'react';
import { MenuContext } from './MenuContext';

export default ({ to, disabled, ...props }) => {
  const { onLinkClick } = useContext(MenuContext);
  const style = { cursor: 'pointer' };
  if (disabled) {
    delete style.cursor;
  }
  return (
    <div {...props} style={style} onClick={e => {
      if (disabled) {
        e.preventDefault();
      }
      !disabled && onLinkClick(to)
    }} />
  );
};
