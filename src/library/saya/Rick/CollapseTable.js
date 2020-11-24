import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AddCircle, RemoveCircle } from '@material-ui/icons';
import clsx from 'clsx';
import CenteredContainer from '../CenteredContainer';
import Text from './Text';
import Table from './Table';
import ImageContainer from '../ImageContainer';
import { Slide } from '../reveal';

const useStyle = makeStyles(theme => ({
  upperPart: {
    paddingTop: 60,
    paddingBottom: 60,
    textAlign: 'center',
  },
  title: {
    width: 320,
    fontSize: 30,
    lineHeight: 'normal',
  },
  button: {
    marginTop: 20,
    marginBottom: 0,
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
    expended: e,
    color = '#000000',
    backgroundColor = '#ffffff',
    buttonColor = '#64703f',
    hideButton,
    rows,
  } = props;
  const classes = useStyle();
  const [expended, setExpanded] = useState(!!e);
  return (
    <>
      <ImageContainer>
        <CenteredContainer className={classes.upperPart} style={{ backgroundColor, color }}>
          <Text className={classes.title} family="bold">{title}</Text>
          {!expended && !hideButton && <AddCircle className={classes.button} onClick={() => { setExpanded(true); }} style={{ width: 46, height: 46, color: buttonColor }} />}
          {expended && !hideButton && <RemoveCircle className={classes.button} onClick={() => { setExpanded(false); }} style={{ width: 46, height: 46, color: buttonColor }} />}
          <div style={{ width: '100%' }}>
            <div className={clsx(classes.expandedArea, { [classes.hide]: !expended })}>
              <div style={{ overflow: 'scroll' }}>
                <Table rows={rows} />
              </div>
            </div>
          </div>
        </CenteredContainer>
      </ImageContainer>
    </>
  );
};