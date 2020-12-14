import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

const useStyle = makeStyles({
  section: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },

  bgWrap: {
    clip: 'rect(0, auto, auto, 0)',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
  },

  bg: {
    position: 'fixed',
    display: 'block',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    transform: 'translateZ(0)',
    willChange: 'transform',
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
      <section className={classes.section}>
        <div className={classes.bgWrap}>
          <div
            className={classes.bg}
            style={{ backgroundImage: `url(${image})` }}
          />
        </div>
        {children}
      </section>
      {/* <div
        style={{
          position: 'relative',

          backgroundSize: 'cover',

          backgroundImage: `url(${image})`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
        }}
      >
        {children}
      </div> */}
    </React.Fragment>
  );
};
