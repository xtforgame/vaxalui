import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageContainer from '../ImageContainer';
import Introduction from './Introduction';
import BreakAllContentText from '../BreakAllContentText';
import { Slide } from '../reveal';

const useStyles = makeStyles(theme => ({
  root: {
    height: 548,
    // display: 'flex',
    // flexDirection: 'column',
    textAlign: 'left',
    color: '#ffffff',
    width: 320,
  },
  title: {
    textAlign: 'left',
    fontSize: 20,
    lineHeight: 1.6,
    paddingTop: 40,
    fontFamily: 'FilsonSoft-Light',
  },
  description: {
    textAlign: 'left',
    fontSize: 13,
    paddingTop: 12,
    lineHeight: 1.54,
    fontFamily: 'FilsonSoftRegular',
  },
}));

export default (props) => {
  const {
    backgroundImage,
  } = props;

  const classes = useStyles();

  return (
    <>
      <Introduction
        height={355}
        title={'Challenges and\nTransparency'}
        subtitle={'Recruiting like-minded brands\nand garment manufacturers'}
        description="SAYA is working on pilot projects with key brand partners to recover and recycle deadstock and cutting scrap from their mills and garment factories."
        color="#ffffff"
        lineColor="#ffffff"
        subtitleFontFamily="bold"
        backgroundImage={backgroundImage}
      />
      <ImageContainer style={{ backgroundColor: '#444343' }}>
        <div className={classes.root}>
          <Slide direction="up" triggerOnce>
            <div className={classes.title}>Type of Materials and Finishing</div>
            <BreakAllContentText className={classes.description}>
              {'Right now we are limited to 100% Polyester fabric cutting scraps without coating nor finishing, including water repellent.\n\nWe aim to start recovering and recycling uncoated 100% Polyester fabrics with WR or DWR finishing in 2021.'}
            </BreakAllContentText>
            <div className={classes.title}>Content Percentage</div>
            <BreakAllContentText className={classes.description}>
              {'SAYA RSCUW Fibers consist of 3 types of recycled components. Garment cutting scrap, overstock fabric, waste yarn, and post-consumer PET bottles. Post industrial wastes make up a minimum of 15%, and post consumer bottles about 80-85%.\n\nWe aim to continuously increase the percentage of garment and overstock waste as well as the types of coatings and finishings for a more inclusive solution. '}
            </BreakAllContentText>
          </Slide>
        </div>
      </ImageContainer>
    </>
  );
};
