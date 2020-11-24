import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageContainer from '../ImageContainer';
import Text from './Text';
import BreakAllContentText from '../BreakAllContentText';
import { Slide } from '../reveal';


const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
  },
  title: {
    textAlign: 'left',
    fontSize: 30,
    paddingTop: 60,
  },
  line: {
    width: '100%',
    height: 1,
    marginTop: 16,
  },
  subtitle: {
    textAlign: 'left',
    fontSize: 20,
    paddingTop: 27,
    lineHeight: 'normal',
  },
  description: {
    textAlign: 'left',
    fontSize: 13,
    paddingTop: 12,
    lineHeight: 1.54,
  },
}));

export default (props) => {
  const {
    title,
    titlePaddingTop,
    subtitle,
    subtitleFontFamily,
    description,
    height,
    backgroundImage,
    backgroundColor,
    color,
    lineColor,
    lineDisplay,
    children,
    hideTitle,
  } = props;

  const classes = useStyles();

  return (
    <ImageContainer
      image={backgroundImage}
      className={classes.root}
      style={{
        height, color, backgroundColor, width: '100%'
      }}
    >
      <div
        style={{ position: 'absolute', width: 320, }}
      >
        {
          !hideTitle &&
          <Slide direction="up" triggerOnce>
            <div className={classes.title}>
              <pre style={{ fontFamily: 'FilsonSoft-Bold', margin: 0, }}>{title}</pre>
            </div>
          </Slide>
        }
        <Slide direction="up" triggerOnce>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className={classes.line} style={{ backgroundColor: lineColor, display: lineDisplay, }} />
          </div>

          <div className={classes.subtitle}>
            <Text family={subtitleFontFamily} style={{ margin: 0 }}>{subtitle}</Text>
          </div>
          <div className={classes.description}>
            <BreakAllContentText style={{ fontFamily: 'FilsonSoftRegular', margin: 0 }}>{description}</BreakAllContentText>
          </div>
        </Slide>
        <div>
          {children}
        </div>
      </div>
    </ImageContainer>
  );
};
