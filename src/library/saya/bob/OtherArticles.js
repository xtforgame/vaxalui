import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from './Card';
import ImageContainer from '../ImageContainer';
import BreakAllContentText from '../BreakAllContentText';

const styles = {
  root: {
    paddingTop: 90,
  },
  container: {
    width: 940,
  },
  title: {
    fontSize: 20,
    lineHeight: 1.2,
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold',
  },
  line: {
    width: 781,
    borderBottom: '1px solid #979797',
    height: 1,
    marginTop: 26,
  },
  boxRoot: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 90,
    marginBottom: 62,
    textAlign: 'left',
  },
  space: {
    height: 12,
  },
};

class OtherArticles extends React.PureComponent {
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
              <BreakAllContentText style={{ fontFamily: 'FilsonSoft-Bold' }}>Other Articles</BreakAllContentText>
            </div>
            <div className={classes.line} />
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


export default withStyles(styles)(OtherArticles);
