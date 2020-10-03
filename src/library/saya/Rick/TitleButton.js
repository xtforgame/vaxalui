import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ImageContainer from '../ImageContainer';
import GreenButton from './GreenButton';

const styles = {
  root: {
    height: 273,
  },
  section: {
    width: 320,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    height: '100%',
  },
  title: {
    width: 280,
    fontSize: 20,
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontFamily: 'FilsonSoft-Bold',
    whiteSpace: 'pre-line',
    textAlign: 'center',
    paddingTop: 60,
  },
  button: {
    marginBottom: 60,
  },
};


class TitleButton extends React.PureComponent {
  render() {
    const {
      classes,
      background,
      title,
      color,
      height,
      label = 'Learn More',
      onClick,
    } = this.props;
    return (
      <>
        <ImageContainer
          className={classes.root}
          image={background}
          style={{ height, color, backgroundColor: background }}
        >
          <div className={classes.section}>
            <div className={classes.title}>{title}</div>
            <GreenButton text={label} onClick={onClick} />
          </div>
        </ImageContainer>
      </>
    );
  }
}


export default withStyles(styles)(TitleButton);
