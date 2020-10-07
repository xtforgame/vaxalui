import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageContainer from '../ImageContainer';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: 658,
    color: '#000000',
  },
  title: {
    textAlign: 'left',
    paddingTop: 140,
  },
  titleWhite: {
    fontSize: 45,
    color: '#ffffff',
    fontFamily: 'FilsonSoft-Bold',
    // lineHeight: 'normal',
  },
  line: {
    width: '100%',
    height: 1,
    marginTop: 19,
    backgroundColor: '#ffffff',
  },
  subtitle: {
    color: '#ffffff',
    fontSize: 20,
    fontFamily: 'FilsonSoft-Light',
    textAlign: 'left',
    lineHeight: 1.6,
    paddingTop: 19,
    paddingBottom: 33,
  },
  roundArrow: {
    width: 50,
    height: 50,
  },
}));

export default (props) => {
  const {
    backgroundImage,
    roundArrowImage,
    onClick,
  } = props;

  const classes = useStyles();

  return (
    <ImageContainer
      image={backgroundImage}
      className={classes.root}
    >
      <div className={classes.title}>
        <pre className={classes.titleWhite} style={{ margin: 0 }}>
          {'Innovating\nRenewal\nTechnologies'}
        </pre>
        <div className={classes.line} />
        <pre className={classes.subtitle} style={{ margin: 0 }}>
          {'Recycling Solutions from Bottles\nto Garments and Beyond'}
        </pre>

        <img className={classes.roundArrow} onClick={onClick} src={roundArrowImage} />
      </div>
    </ImageContainer>
  );
};
