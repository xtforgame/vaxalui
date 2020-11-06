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
    fontSize: 180,
    lineHeight: 0.74,
    fontFamily: 'FilsonSoftRegular',
  },
  percent: {
    fontSize: 20,
    fontFamily: 'FilsonSoftRegular',
  },
});

const AnimatedNumber = ({ isVisible, number }) => {
  const [currentNumber, setCurrentNumber] = useState(Math.round(Math.random() * 5));
  const formatValue = value => value.toFixed(0);

  useEffect(() => {
    if (isVisible) {
      setCurrentNumber(number);
      setTimeout(() => {
        setCurrentNumber(number);
      }, 601);
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
  width = 235,
  number,
  suffix = '%',
  numberPaddingTop,
  numberColor,
  percentDisplay,
  percentColor,
}) => {
  const classes = useStyles();
  return (
    <div
      className={classes.number}
      style={{
        paddingtTop: numberPaddingTop,
        color: numberColor,
        display: 'flex',
        alignItems: 'flex-end',
      }}
    >
      <div style={{ width, textAlign: 'right' }}>
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
      <span
        className={classes.percent}
        style={{
          display: percentDisplay,
          color: percentColor,
        }}
      >
        {suffix}
      </span>
    </div>
  );
};
