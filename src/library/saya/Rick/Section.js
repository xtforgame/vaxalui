import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageContainer from '../ImageContainer';
import GreenButton from '../bob/GreenButton';
import { Slide } from '../reveal';
import useDialogState, { Cancel } from '../YoutubeDialog/useDialogState';
import YoutubeDialog from '../YoutubeDialog';

const useStyles = makeStyles(theme => ({
  root: {
    color: '#ffffff',
  },
  section: {
    width: 320,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    paddingTop: 60,
  },
  section2: {
    width: 320,
    display: 'flex',
    // flexDirection: 'column',
    // flexWrap: 'wrap',
  },
  firstTitle: {
    width: 'fit-content',
    fontSize: 15,
    fontFamily: 'FilsonSoft-Bold',
    lineHeight: 1.33,
  },
  firstTitleBack: {
    fontFamily: 'FilsonSoft-Light',
    fontWeight: 300,
  },
  firstLine: {
    height: 1,
    width: '100%',
    backgroundColor: '#ffffff',
    marginTop: 1,
  },
  title: {
    fontSize: 50,
    fontWeight: 300,
    fontFamily: 'FilsonSoft-Light',
    paddingTop: 32,
    whiteSpace: 'pre-line',
    lineHeight: 1,
  },
  subTitle: {
    fontSize: 20,
    fontFamily: 'FilsonSoft-Bold',
    paddingTop: 24,
  },
  button: {
    marginTop: 32,
  },
}));


export default (props) => {
  const {
    backgroundImage,
    onClick,
    hideButton,
    showVideoButton,
    videoId,
    onVideoButtonClick,
    firstTitle,
    firstTitleBack,
    title,
    subTitle,
    height,
    children,
    color,
    lineColor,
    buttonPosition = 'flex-start',
  } = props;

  const classes = useStyles();
  const [{
    // open,
    exited,
    dialogProps,
  }, {
    handleOpen,
    handleClose,
    // handleExited,
  }] = useDialogState({
    open: (t) => {
    },
    close: (v) => {
    },
  });

  return (
    <ImageContainer
      className={classes.root}
      image={backgroundImage}
      style={{ height, color }}
    >
      <div className={classes.section}>
        <div className={classes.firstTitle}>
          <Slide direction="up" triggerOnce>
            <div>{firstTitle}</div>
            <span className={classes.firstTitleBack}>{firstTitleBack}</span>
            <div className={classes.firstLine} style={{ backgroundColor: lineColor }} />
          </Slide>
        </div>
        <Slide direction="up" triggerOnce>
          <div className={classes.title}>{title}</div>
          <div className={classes.subTitle}>{subTitle}</div>
        </Slide>
      </div>
      <div style={{ width: '100%' }}>{children}</div>
      <div className={classes.section2}>
        {!hideButton && (
          <Slide direction="up" triggerOnce>
            <div className={classes.button} style={{ alignSelf: buttonPosition }}>
              <GreenButton
                text="Learn More"
                onClick={onClick}
              />
            </div>
          </Slide>
        )}
        {videoId && (
          <Slide direction="up" triggerOnce>
            <div className={classes.button} style={{ marginLeft: 13, alignSelf: buttonPosition }}>
              <GreenButton
                text="Video"
                onClick={handleOpen}
              />
            </div>
          </Slide>
        )}
        {
          !exited && (
            <YoutubeDialog
              videoId={videoId}
              {...dialogProps}
            />
          )
        }
      </div>
    </ImageContainer>
  );
};
