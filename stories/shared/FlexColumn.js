import React from 'react';

const FlexColumn = (props) => {
  return (
    <div {...props} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: 16 }} />
  );
};
FlexColumn.displayName = 'FlexColumn';

export default FlexColumn;
