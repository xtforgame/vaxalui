import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ImageContainer from '../ImageContainer';
import BreakAllContentText from '../BreakAllContentText';

const styles = {
  root: {
    paddingTop: 80,
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
  line: {
    width: '100%',
    height: 1,
    marginTop: 16,
  },
  subtitle: {
    fontSize: 20,
    fontFamily: 'FilsonSoftRegular',
    marginTop: 40,
  },
  description: {
    fontSize: 14,
    fontFamily: 'FilsonSoftRegular',
    marginTop: 10,
  },
  extendedRoot: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  extended: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 1024,
    height: 364,
    backgroundColor: '#444343',
    marginBottom: 54,
    marginTop: -182,
    zIndex: 2,
  },
  left: {
    color: '#ffffff',
    width: 352,
    margin: 24,
    height: '100%',
    '& > .title': {
      fontSize: 20,
      marginTop: 80,
    }
  },
  right: {
    color: '#ffffff',
    width: 352,
    margin: 24,
    height: '100%',
    '& > .title': {
      fontSize: 20,
      marginTop: 80,
    }
  },
  space: {
    height: 12,
  },
};

class ChallengesAndTransparency extends React.PureComponent {
  render() {
    const {
      classes,
      height,
      title,
      backgroundImage,
      titleWidth,
      titlMarginTop,
      titleBack,
      subtitle,
      subtitleWidth,
      description,
      descriptionWidth,
      fontColor,
      lineBorder,
      backgroundColor,
      children,
    } = this.props;
    return (
      <>
        <ImageContainer
          image={backgroundImage}
          className={classes.root}
          style={{
            height,
            color: fontColor,
            backgroundColor,
          }}
        >
          <div
            className={classes.container}
          >
            <div
              className={classes.title}
              style={{
                width: titleWidth,
                marginTop: titlMarginTop,
              }}
            >
              <BreakAllContentText style={{ fontFamily: 'FilsonSoft-Bold' }}>{title}</BreakAllContentText>
            </div>
            <div
              className={classes.line}
              style={{
                border: lineBorder,
              }}
            />
            <div
              className={classes.subtitle}
              style={{
                width: subtitleWidth,
              }}
            >
              <BreakAllContentText style={{ fontFamily: 'FilsonSoftRegular' }}>{subtitle}</BreakAllContentText>
            </div>
            <div
              className={classes.description}
              style={{
                width: descriptionWidth,
              }}
            >
              <BreakAllContentText style={{ fontFamily: 'FilsonSoftRegular' }}>{description}</BreakAllContentText>
            </div>
          </div>
        </ImageContainer>
        <div className={classes.extendedRoot}>
          <div
            className={ classes.extended }
          >
            <div className={classes.left}>
              <div className="title">Type of Materials and Finishing</div>
              <div style={{ whiteSpace: 'pre-line', marginTop: 22, fontSize: 14 }}>
                {`Right now we are limited to 100% Polyester fabric cutting scraps without coating nor finishing, including water repellent.

                We aim to start recovering and recycling uncoated 100% Polyester fabrics with WR or DWR finishing by 1H 2021.`}
              </div>
            </div>
            <div className={classes.right}>
              <div className="title">Content Percentage</div>
              <div style={{ whiteSpace: 'pre-line', marginTop: 22, fontSize: 14 }}>
                {`SAYA RSCUW Fibers consist of 3 types of recycled components. Garment cutting scrap, overstock fabric, waste yarn, and post-consumer PET bottles. Post industrial wastes make up a minimum of 15%, and post consumer bottles about 80-85%.

                Removing colors and pigments We aim to continuously increase the percentage of garment cutting scrap and overstock fabrics.`}
              </div>
            </div>
          </div>
        </div>
        <div className={classes.space} />
      </>
    );
  }
}


export default withStyles(styles)(ChallengesAndTransparency);
