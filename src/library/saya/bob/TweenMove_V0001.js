import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import ImageContainer from '../ImageContainer';

const useStyle = makeStyles({
  section: {
    height: '100vh',
  },

  parallax: {
    position: 'relative',
    overflow: 'hidden',
  },

  img: {
    // width: 'auto',
    // height: '100%',
    position: 'absolute',
    // transition: 'top 0s',
  },
});


export default (props) => {
  const {
    height = 620,
    children,
    image,
  } = props;
  const classes = useStyle();
  return (
    <React.Fragment>
      <div style={{ position: 'relative' }}>
        <Controller>
          <Scene
            // indicators
            duration={height}
            // triggerHook="onEnter"
            triggerHook={0}
          >
            <Timeline
              wrapper={<div style={{ height }} className={classes.parallax} />}
            >
              <Tween
                position="0"
                from={{ top: 0, height }}
                to={{ top: height - 200, height }}
                ease="none"
              >
                <ImageContainer
                  image={image}
                  className={classes.img}
                />
              </Tween>
              {/* <Tween
                position="0"
                from={{
                  top: '0%',
                  scale: 1.5,
                }}
                to={{
                  top: '70%',
                  scale: 2,
                }}
              >
                <h2 className={classes.h2}>Das ist ein Titel</h2>
              </Tween> */}
            </Timeline>
          </Scene>
          <div className="section" />
        </Controller>
        <div style={{ position: 'absolute', width: '100%', top: 0 }}>
          {children}
        </div>
      </div>
    </React.Fragment>
  );
};
