import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AddCircle, RemoveCircle } from '@material-ui/icons';
import CenteredContainer from '../CenteredContainer';
import Text from './Text';
import clsx from 'clsx';

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
  },
  button: {
    marginTop: 32,
    marginBottom: 32,
  },
  description: {
    fontSize: 14,
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
}));

export default (props) => {
  const {
    title,
    subtitle,
    description,
    image,
    expended: e,
    color = '#ffffff',
    backgroundColor = '#64703f',
    buttonColor = '#e3e3e3',
  } = props;
  const classes = useStyle();
  const [expended, setExpanded] = useState(!!e);
  return (
    <>
      <CenteredContainer className={classes.upperPart} style={{ backgroundColor, color }}>
        <div className={classes.container}>
          <Text className={classes.title} family="bold">{title}</Text>
          <div className={classes.leftContainer}>
            <div className={classes.line} style={{ backgroundColor: color }} />
          </div>
        </div>
      </CenteredContainer>
      <div className={classes.lowerPart} style={{ color }}>
        <div className={classes.lowerLeft} style={{ backgroundColor }}>
          <div className={classes.container2}>
            <div className={classes.leftContainer}>
              <Text className={classes.subtitle}>{subtitle}</Text>
              {!expended && <AddCircle className={classes.button} onClick={() => { setExpanded(true); }} style={{ width: 46, height: 46, color: buttonColor }} />}
              {expended && <RemoveCircle className={classes.button} onClick={() => { setExpanded(false); }} style={{ width: 46, height: 46, color: buttonColor }} />}
              <div className={clsx(classes.expandedArea, { [classes.hide]: !expended })}>
                <Text className={classes.description}>{description}</Text>
              </div>
            </div>
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