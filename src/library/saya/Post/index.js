/* eslint-disable jsx-a11y/alt-text */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageContainer from '../ImageContainer';
import BreakAllContentText from '../BreakAllContentText';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    // textAlign: 'center',
    color: '#000000',
  },
  container: {
    width: 780,
  },
  title: {
    textAlign: 'left',
    fontSize: 40,
    marginTop: 10,
    marginBottom: 60,
  },
  paragraph: {
    textAlign: 'left',
    fontSize: 14,
    marginTop: 60,
    marginBottom: 60,
  },
  image: {
    marginTop: 60,
    marginBottom: 60,
  },
}));

export default (props) => {
  const {
    image,
    backgroundImage,
  } = props;

  const classes = useStyles();

  const title = 'What is post-consumer\nrecycled polyester';
  const p1 = 'Recycled polyester (rPET) is obtained by melting down existing plastic and re-spinning it into new polyester fiber. Often rPET is made from plastic bottles but it can also be derived from other post-industrial and post-consumer input materials including textiles or garments. If recycled content is labeled post-consumer some of the content has been derived from used items or garments as opposed to post-industrial recycled content which never reached the consumer such as cutting scraps from a manufacturing facility.';

  const p2 = 'Using rPET gives a second life to a material that’s not biodegradable and would otherwise end up in landfill or the ocean. The Environmental Protection Agency reported that US’s landfills receive over 26 million tons of plastic a year and Ocean Conservancy reports that 8 million metric tons of plastic enter the ocean every year.\n\nIn addition, production of fiber or products using rPET over virgin plastic requires less energy and produces less CO2 and it contributes to reducing the extraction of crude oil and natural gas from the Earth to make more plastic.';

  const image1 = image;

  return (
    <ImageContainer
      image={backgroundImage}
      className={classes.root}
    >
      <div className={classes.container}>
        <div className={classes.title}>
          <BreakAllContentText style={{ fontFamily: 'FilsonSoft-Bold' }}>
            {title}
          </BreakAllContentText>
        </div>

        <div className={classes.paragraph}>
          <BreakAllContentText style={{ fontFamily: 'FilsonSoftRegular', lineHeight: 2 }}>
            {p1}
          </BreakAllContentText>
        </div>
        <div className={classes.image}>
          <img
            width={780}
            src={image1}
          />
        </div>
        <div className={classes.paragraph}>
          <BreakAllContentText style={{ fontFamily: 'FilsonSoftRegular', lineHeight: 2 }}>
            {p2}
          </BreakAllContentText>
        </div>
      </div>
    </ImageContainer>
  );
};
