import React from 'react';

export default ({ style, ...props }) => (
  <pre
    {...props}
    style={{
      wordWrap: 'break-word',
      whiteSpace: 'pre-wrap',
      // wordBreak: 'break-all',
      margin: 0,
      ...style,
    }}
  />
);
