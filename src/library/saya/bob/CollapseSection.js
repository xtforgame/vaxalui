import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { AddCircle, RemoveCircle } from '@material-ui/icons';
import { Slide } from '../reveal';
import CenteredContainer from '../CenteredContainer';
import Text from './Text';
import ImageContainer from '../ImageContainer';
import TweenMove from './TweenMove';


const useStyle = makeStyles(theme => ({
  upperPart: {
    paddingTop: 80,
    color: '#ffffff',
  },
  lowerPart: {
    color: '#ffffff',
    display: 'flex',
    justifyContent: 'flex-start',
    marginBottom: 12,
  },
  lowerLeft: {
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
    height: 'fit-content',
  },
  lowerRight: {
    width: 0,
    position: 'relative',
    left: 'calc(-50% - 10px)',
  },
  lowerFlexContainer: {},
  container: {
    width: 940,
  },
  container2: {
    width: 940,
    display: 'flex',
    justifyContent: 'flex-start',
    position: 'relative',
  },
  title: {
    width: 780,
    fontSize: 40,
    lineHeight: 1.2,
  },
  line: {
    width: '100%',
    height: 1,
    marginTop: 36,
    marginBottom: 20,
  },
  leftContainer: {
    width: 460,
  },
  rightContainer: {
    width: 480,
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: 40,
    // height: 600,
  },
  subtitle: {
    fontSize: 20,
    fontFamily: 'FilsonSoft-Bold',
  },
  button: {
    marginTop: 32,
    marginBottom: 32,
  },
  description: {
    fontSize: 14,
    marginBottom: 80,
  },
  expandedArea: {
    overflow: 'hidden',
    transitionProperty: 'height',
    transitionDuration: '0.33s',
    // transitionDelay: '0.1s',
  },
  hide: {
    height: 0,
  },

  topSection: {
    display: 'flex',
    justifyContent: 'center',
    height: 350,
    color: '#000000',
  },
  titleWhite: {
    color: '#ffffff',
    fontSize: 40,
    fontFamily: 'FilsonSoft-Bold',
  },
}));

export default (props) => {
  const {
    title,
    subtitle,
    description,
    image,
    expended: e,
    color = '#ffffff',
    topTitle,
    backgroundImage,
    backgroundColor = '#64703f',
    buttonColor = '#e3e3e3',
  } = props;
  const classes = useStyle();
  const [expended, setExpanded] = useState(!!e);

  return (
    <>
      {
        topTitle && (
          <TweenMove
            image={backgroundImage}
          >
            <ImageContainer
              className={classes.topSection}
            >
              <div>
                <span className={classes.titleWhite}>{topTitle}</span>
              </div>
            </ImageContainer>
          </TweenMove>
        )
      }
      <CenteredContainer className={classes.upperPart} style={{ backgroundColor, color }}>
        <div className={classes.container}>
          <Slide direction="up" triggerOnce>
            <Text className={classes.title} family="bold">{title}</Text>
            <div className={classes.leftContainer}>
              <div className={classes.line} style={{ backgroundColor: color }} />
            </div>
          </Slide>
        </div>
      </CenteredContainer>
      <div className={classes.lowerPart} style={{ color }}>
        <div className={classes.lowerLeft} style={{ backgroundColor }}>
          <div className={classes.container2}>
            <div className={classes.leftContainer}>
              <Slide direction="up" triggerOnce>
                <Text className={classes.subtitle}>{subtitle}</Text>
                <div>{!expended && <AddCircle className={classes.button} onClick={() => { setExpanded(true); }} style={{ width: 46, height: 46, color: buttonColor }} />}</div>
                <div>{expended && <RemoveCircle className={classes.button} onClick={() => { setExpanded(false); }} style={{ width: 46, height: 46, color: buttonColor }} />}</div>
                <div className={clsx(classes.expandedArea, { [classes.hide]: !expended })}>
                  <Text className={classes.description}>{description}</Text>
                </div>
              </Slide>
            </div>
          </div>
        </div>
        <div className={classes.lowerRight}>
          <Slide direction="up" triggerOnce>
            <div className={classes.rightContainer}>
              {image}
            </div>
          </Slide>
        </div>
      </div>
    </>
  );
};