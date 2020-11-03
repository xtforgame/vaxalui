import React from 'react';
import { keyframes } from "@emotion/core";
import Reveal, { Slide } from 'react-awesome-reveal';

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 20px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;


const XSlide = (props) => {
  return (<Reveal {...props} keyframes={customAnimation} />);
};

export {
  XSlide as Slide,
};
