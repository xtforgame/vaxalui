import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AN from 'animated-number-react';
import VisibilitySensor from 'react-visibility-sensor';
import { Slide } from '../reveal';
import BreakAllContentText from '../BreakAllContentText';
import ImageContainer from '../ImageContainer';


// const C = ({ isVisible, visibilityRect }) => <div>{`${isVisible}`}</div>;

const useStyles = makeStyles({
  number: {
    // fontFamily: 'FilsonSoftRegular',
  },
});

const AnimatedNumber = ({ isVisible, number }) => {
  const [currentNumber, setCurrentNumber] = useState(Math.round(Math.random() * 5));
  const formatValue = value => value.toFixed().replace(/\d(?=(\d{3})+$)/g, '$&,');

  useEffect(() => {
    if (isVisible) {
      setCurrentNumber(number);
    }
  }, [isVisible]);

  return (
    <AN
      duration={600}
      value={currentNumber}
      formatValue={formatValue}
    />
  );
};


export default ({
  number,
  numberPaddingTop,
}) => {
  const classes = useStyles();
  return (
    <div
      className={classes.number}
      style={{
        paddingtTop: numberPaddingTop,
        display: 'flex',
        alignItems: 'flex-end',
      }}
    >
      <div style={{ width: '100%' }}>
        <VisibilitySensor
          partialVisibility
        >
          {({ isVisible }) => (
            <AnimatedNumber
              isVisible={isVisible}
              number={number}
            />
          )}
        </VisibilitySensor>
      </div>
    </div>
  );
};
