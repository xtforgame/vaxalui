import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from './Card';
import ImageContainer from '../ImageContainer';
import BreakAllContentText from '../BreakAllContentText';

const styles = {
  root: {
    paddingTop: 60,
    textAlign: 'center',
  },
  container: {
    width: '80%',
  },
  title: {
    fontSize: 40,
    lineHeight: 1.2,
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold',
  },
  boxRoot: {
    marginTop: 72,
    marginBottom: 88,
    textAlign: 'left',
  },
  space: {
    height: 12,
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
            <div className={classes.title}>
              <BreakAllContentText style={{ fontFamily: 'FilsonSoft-Bold' }}>{title}</BreakAllContentText>
            </div>
            <div className={classes.boxRoot}>
            {item.map(i => (
              <Card
                height={i.height}
                width={i.width}
                title={i.title}
                description={i.description}
                image={i.image}
                onClick={i.onClick}
              />
            ))}
            </div>
          </div>
        </ImageContainer>
        <div className={classes.space} />
      </>
    );
  }
}


export default withStyles(styles)(AboutNews);
