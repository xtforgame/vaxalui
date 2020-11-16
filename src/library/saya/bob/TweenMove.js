import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

const useStyle = makeStyles({
  section: {
    height: '100vh',
  },

  parallax: {
    position: 'relative',
    overflow: 'hidden',
  },

  img: {
    width: '100%',
    height: 'auto',
    position: 'absolute',
    transition: 'top 0s',
  },
});


export default (props) => {
  const {
    children,
    image,
  } = props;
  const classes = useStyle();
  return (
    <React.Fragment>
      <div
        style={{
          position: 'relative',

          backgroundSize: 'cover',

          backgroundImage: `url(${image})`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
        }}
      >
        {children}
      </div>
    </React.Fragment>
  );
};
