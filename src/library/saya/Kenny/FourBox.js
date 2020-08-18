import React from 'react';
import ImageBox from './ImageBox';
import ClassicFibers from './ClassicFibers';

import topLeftBox from '../../../../stories/saya/img/bg5.jpg';
import topRightBox from '../../../../stories/saya/img/bg6.jpg';
import bottomLeftBox from '../../../../stories/saya/img/bg7.jpg';
import bottomRightBox from '../../../../stories/saya/img/bg8.jpg';


class FourBox extends React.PureComponent {
  render() {
    return (
      <ClassicFibers
        height="1500px"
        backgroundColor="#c8c6c6"
        fontColor="#000000"
        marginTop="35px"
        borderStyle="1px solid #000000"
      >
        <ImageBox
          title="CHROMUCH Solution Dyed"
          subtitle="Color without Compromise"
          backgroundImage={topLeftBox}
          paddingTop='50px'
          fontColor="#ffffff"
        />

        <ImageBox
          title="UltraStretch"
          subtitle="Stretch with a Good Conscious"
          backgroundImage={topRightBox}
          paddingTop="105px"
          fontColor="#ffffff"
        />

        <ImageBox
          title="TopFresh"
          subtitle="lor sit amet, consectetuer ad"
          backgroundImage={bottomLeftBox}
          paddingTop="105px"
          fontColor="#ffffff"
        />

        <ImageBox
          title="MicroFilament"
          subtitle="lor sit amet, consectetuer ad"
          backgroundImage={bottomRightBox}
          paddingTop="105px"
          fontColor="#ffffff"
        />
      </ClassicFibers>
    );
  }
}


export default FourBox;
