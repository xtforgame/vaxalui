import React from 'react';
import ImageBoxSmall from 'library/saya/Kenny/ImageBoxSmall';

import backgroundImage from '../../img/bg8.jpg';

export default () => (
  <ImageBoxSmall
    title="SAYA"
    secondTitle="MICROFIBER"
    backgroundImage={backgroundImage}
    subtitle={'Microfiber Good,\nMicro-plastic Bad'}
    titleWidth="155px"
    paddingTop='50px'
    fontColor="#ffffff"
    marginTop="125px"
  />
);
