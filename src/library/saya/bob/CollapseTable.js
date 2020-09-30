import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AddCircle, RemoveCircle } from '@material-ui/icons';
import clsx from 'clsx';
import CenteredContainer from '../CenteredContainer';
import Text from './Text';
import Table from './Table';

const useStyle = makeStyles(theme => ({
  upperPart: {
    paddingTop: 80,
    paddingBottom: 110,
    textAlign: 'center',
  },
  title: {
    width: 620,
    fontSize: 40,
    lineHeight: 1.2,
  },
  button: {
    marginTop: 34,
    marginBottom: 4,
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
      <CenteredContainer className={classes.upperPart} style={{ backgroundColor, color }}>
        <Text className={classes.title} family="bold">{title}</Text>
        {!expended && !hideButton && <AddCircle className={classes.button} onClick={() => { setExpanded(true); }} style={{ width: 46, height: 46, color: buttonColor }} />}
        {expended && !hideButton && <RemoveCircle className={classes.button} onClick={() => { setExpanded(false); }} style={{ width: 46, height: 46, color: buttonColor }} />}
        <div className={clsx(classes.expandedArea, { [classes.hide]: !expended })}>
          <Table rows={rows} />
        </div>
      </CenteredContainer>
    </>
  );
};