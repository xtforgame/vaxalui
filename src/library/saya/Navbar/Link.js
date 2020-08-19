import React, { useContext } from 'react';
import { MenuContext } from './MenuContext';

export default ({ to, ...props }) => {
  const { onLinkClick } = useContext(MenuContext);
  return (
    <div {...props} style={{ cursor: 'pointer' }} onClick={e => onLinkClick(to)} />
  );
};
