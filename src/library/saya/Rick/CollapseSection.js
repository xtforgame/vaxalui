import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AddCircle, RemoveCircle } from '@material-ui/icons';
import CenteredContainer from '../CenteredContainer';
import Text from './Text';
import ImageContainer from '../ImageContainer';
import clsx from 'clsx';
import { Slide } from '../reveal';

const useStyle = makeStyles(theme => ({
  upperPart: {
    paddingTop: 40,
    color: '#ffffff',
  },
  lowerPart: {
    color: '#ffffff',
    display: 'flex',
    justifyContent: 'flex-start',
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
    width: 320,
  },
  container2: {
    width: 320,
    display: 'flex',
    justifyContent: 'flex-start',
    position: 'relative',
  },
  title: {
    width: 320,
    fontSize: 30,
    lineHeight: 1.54,
  },
  line: {
    width: '100%',
    height: 1,
    marginTop: 28,
    marginBottom: 11,
  },
  leftContainer: {
    width: 320,
  },
  rightContainer: {
    width: 320,
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: 40,
    // height: 600,
  },
  subtitle: {
    fontSize: 20,
    fontFamily: 'FilsonSoft-Bold',
    lineHeight: 1.54,
  },
  button: {
    marginTop: 16,
    marginBottom: 16,
  },
  description: {
    fontSize: 13,
    marginBottom: 60,
    lineHeight: 1.54,
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
          <ImageContainer
            image={backgroundImage}
            className={classes.topSection}
          >
            <Slide direction="up" triggerOnce>
              <div>
                <span className={classes.titleWhite}>{topTitle}</span>
              </div>
            </Slide>
          </ImageContainer>
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
            <Slide direction="up" triggerOnce>
              <div className={classes.leftContainer}>
                <Text className={classes.subtitle}>{subtitle}</Text>
                {!expended && <AddCircle className={classes.button} onClick={() => { setExpanded(true); }} style={{ width: 46, height: 46, color: buttonColor }} />}
                {expended && <RemoveCircle className={classes.button} onClick={() => { setExpanded(false); }} style={{ width: 46, height: 46, color: buttonColor }} />}
                <div className={clsx(classes.expandedArea, { [classes.hide]: !expended })}>
                  <Text className={classes.description}>{description}</Text>
                </div>
              </div>
            </Slide>
          </div>
        </div>
        <div className={classes.lowerRight}>
          <div className={classes.rightContainer}>
            {image}
          </div>
        </div>
      </div>
    </>
  );
};