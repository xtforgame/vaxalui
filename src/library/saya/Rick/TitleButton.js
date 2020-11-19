import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Slide } from '../reveal';
import ImageContainer from '../ImageContainer';
import GreenButton from '../bob/GreenButton';
import Text from './Text';

const styles = {
  root: {},
  title: {
    width: 280,
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 60,
  },
  button: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 40,
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
      label = 'Learn More',
      onClick,
    } = this.props;
    return (
      <>
        <ImageContainer
          className={classes.root}
          image={background}
          style={{ color, backgroundColor: background }}
        >
          <div className={classes.section}>
            <Slide direction="up" triggerOnce>
              <Text family="bold" className={classes.title}>{title}</Text>
            </Slide>
            <Slide direction="up" triggerOnce>
              <div className={classes.button}>
                <GreenButton text={label} onClick={onClick} />
              </div>
            </Slide>
          </div>
        </ImageContainer>
      </>
    );
  }
}


export default withStyles(styles)(TitleButton);
