import React, { useContext } from 'react';
import { MenuContext } from './MenuContext';

export default ({ to, disabled, children, ...props }) => {
  const { onLinkClick, noJsLink, LinkComponent = ({ children }) => children } = useContext(MenuContext);
  const style = { cursor: 'pointer' };
  if (disabled) {
    delete style.cursor;
  }
  const A = LinkComponent;
  return (
    <div {...props} style={style} onClick={e => {
      if (disabled) {
        e.preventDefault();
      }
      !disabled && !noJsLink && onLinkClick(to);
    }}>
      <A path={to}>
        {children}
      </A>
    </div>
  );
};
