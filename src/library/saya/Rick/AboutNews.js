import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MobileCard from '../MobileCard';
import ImageContainer from '../ImageContainer';
import BreakAllContentText from '../BreakAllContentText';
import { Slide } from '../reveal';

const styles = {
  root: {
    paddingTop: 40,
    textAlign: 'center',
  },
  container: {
    width: 310,
  },
  title: {
    lineHeight: 1.2,
    fontFamily: 'FilsonSoft-Bold',
  },
  boxRoot: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 40,
    marginBottom: 0,
    textAlign: 'left',
  },
};

class AboutNews extends React.PureComponent {
  render() {
    const {
      classes,
      title,
      backgroundImage,
      fontColor,
      backgroundColor,
      item = [],
    } = this.props;
    return (
      <>
        <ImageContainer
          image={backgroundImage}
          className={classes.root}
          style={{
            color: fontColor,
            backgroundColor,
          }}
        >
          <div className={classes.container}>
            <Slide direction="up" triggerOnce>
              <div className={classes.title}>
                <BreakAllContentText style={{ fontFamily: 'FilsonSoft-Bold' }}>{title}</BreakAllContentText>
              </div>
            </Slide>
            <div className={classes.boxRoot}>
              {item.map(i => (
                <Slide direction="up" triggerOnce>
                  <MobileCard
                    height={i.height}
                    width={i.width}
                    title={i.title}
                    description={i.description}
                    image={i.image}
                    onClick={i.onClick}
                  />
                </Slide>
              ))}
            </div>
          </div>
        </ImageContainer>
      </>
    );
  }
}


export default withStyles(styles)(AboutNews);
