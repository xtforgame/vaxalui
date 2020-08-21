/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions, jsx-a11y/alt-text */
import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { virtualize, bindKeyboard } from 'react-swipeable-views-utils';

const VirtualizeSwipeableViews = bindKeyboard(virtualize(SwipeableViews));

export default (props) => {
  const [tabIndex, setTabIndex] = useState(0);

  const {
    children,
    contentContainerStyle,
    swipeableViewsStyle,
    scrollArrowLeftImage,
    scrollArrowRightImage,
    height = 500,
    slideRenderer,
    childrenUnderSlides,
  } = props;

  return (
    <div
      style={{
        height, width: '100%', position: 'relative', display: 'flex',
      }}
    >
      {childrenUnderSlides && (
        <div
          style={{ position: 'absolute', width: '100%', ...contentContainerStyle }}
        >
          {children}
        </div>
      )}
      <VirtualizeSwipeableViews
        index={tabIndex}
        {...{}/* onChangeIndex={handleChangeIndex} */}
        style={{ flex: 1, height, ...swipeableViewsStyle }}
        containerStyle={{ width: '100%', height: '100%', position: 'relative' }}
        slideStyle={{ height: '100%', position: 'relative' }}
        slideRenderer={slideRenderer}
      />
      {!childrenUnderSlides && (
        <div
          style={{ position: 'absolute', width: '100%', ...contentContainerStyle }}
        >
          {children}
        </div>
      )}

      <div
        style={{
          'user-select': 'none', width: 100, height: '100%', flexShrink: 0, position: 'absolute', left: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 40,
        }}
        onClick={() => setTabIndex(tabIndex - 1)}
      >
        <img src={scrollArrowLeftImage} />
      </div>
      <div
        style={{
          'user-select': 'none', width: 100, height: '100%', flexShrink: 0, position: 'absolute', right: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 40,
        }}
        onClick={() => setTabIndex(tabIndex + 1)}
      >
        <img src={scrollArrowRightImage} />
      </div>
    </div>
  );
};
