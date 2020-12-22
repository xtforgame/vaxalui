import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import useDialogState, { Cancel } from '../YoutubeDialog/useDialogState';
import { Slide } from '../reveal';
import ImageContainer from '../ImageContainer';
import GreenButton from './GreenButton';
import BreakAllContentText from '../BreakAllContentText';
import YoutubeDialog from '../YoutubeDialog';

const useStyles = makeStyles(() => ({
  root: {
    height: 590,
    color: '#000000',
  },
  section: {
    width: 940,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    paddingTop: 88,
  },
  section2: {
    width: 320,
    display: 'flex',
    // flexDirection: 'column',
    // flexWrap: 'wrap',
  },
  breadCrumbs: {
    width: 'fit-content',
    fontSize: 16,
    fontFamily: 'FilsonSoft-Bold',
    lineHeight: 1.31,
  },
  firstLine: {
    height: 1,
    marginTop: 2,
  },
  title: {
    width: 920,
    fontSize: 72,
    fontWeight: 300,
    fontStretch: 'normal',
    fontFamily: 'FilsonSoft-Light',
    lineHeight: 1,
    paddingTop: 45,
    whiteSpace: 'pre-line',
  },
  subTitle: {
    fontSize: 20,
    fontFamily: 'FilsonSoft-Bold',
    paddingTop: 24,
  },
  button: {
    marginTop: 48,
  },
  space: {
    height: 12,
  },
}));

export default (props) => {
  const {
    color = '#FFFFFF',
    backgroundImage,
    onClick,
    showButton = true,
    // showVideoButton,
    videoId,
    // onVideoButtonClick,
    breadCrumbs,
    title,
    subTitle,
    height = 590,
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
    <>
      <ImageContainer
        className={classes.root}
        image={backgroundImage}
        style={{ height, color }}
      >
        <div className={classes.section}>
          <Slide direction="up" triggerOnce>
            <div className={classes.breadCrumbs}>
              {breadCrumbs}
              <div className={classes.firstLine} style={{ backgroundColor: color }} />
            </div>
            <BreakAllContentText className={classes.title}>{title}</BreakAllContentText>
            <BreakAllContentText className={classes.subTitle}>{subTitle}</BreakAllContentText>
            <div className={classes.section2}>
              {showButton && (
                <Slide direction="up" triggerOnce>
                  <div className={classes.button}>
                    <GreenButton
                      text="Read More"
                      onClick={onClick}
                    />
                  </div>
                </Slide>
              )}
              {videoId && (
                <Slide direction="up" triggerOnce>
                  <div className={classes.button} style={{ marginLeft: 12 }}>
                    <GreenButton
                      text="Video"
                      onClick={handleOpen}
                    />
                  </div>
                </Slide>
              )}
            </div>
          </Slide>
        </div>
        {
          !exited && (
            <YoutubeDialog
              videoId={videoId}
              {...dialogProps}
            />
          )
        }
      </ImageContainer>
      <div className={classes.space} />
    </>
  );
};
