import React from 'react';
import YouTube from 'react-youtube';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';

const styles = {
  container: {
    height: '100%',
  },
  root: {
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
  },
};


class Section extends React.PureComponent {
  render() {
    const {
      open,
      onClose,
      classes,
      videoId,
      ...rest
    } = this.props;
    return (
      <Dialog
        fullWidth
        BackdropProps={{
          className: classes.root,
        }}
        PaperProps={{
          style: {
            borderRadius: 0,
            maxWidth: 'calc(100% - 64px)',
            maxHeight: 'calc(100% - 128px)',
            // backgroundColor: 'transparent',
            width: '100%',
            height: '100%',
          },
        }}
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        {...rest}
      >
        <div style={{ position: 'fixed', top: 0, right: 0, color: 'white' }}>
          <IconButton color="inherit" onClick={onClose} aria-label="NotificationList">
            <ClearIcon fontSize="large" />
          </IconButton>
        </div>
        <YouTube
          videoId={videoId}
          containerClassName={classes.container}
          opts={{
            width: '100%',
            height: '100%',
            playerVars: { // https://developers.google.com/youtube/player_parameters
              // autoplay: 1,
            },
          }}
          onReady={() => {
            console.log('onReady');
          }}
        />
      </Dialog>
    );
  }
}


export default withStyles(styles)(Section);
