import React from 'react';
import ImageBox from './ImageBox';
import ClassicFibers from './ClassicFibers';


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
          backgroundColor="brown"
          paddingTop="50px"
          fontColor="#ffffff"
        />

        <ImageBox
          title="UltraStretch"
          subtitle="Stretch with a Good Conscious"
          backgroundColor="red"
          paddingTop="105px"
          fontColor="#ffffff"
        />

        <ImageBox
          title="TopFresh"
          subtitle="lor sit amet, consectetuer ad"
          backgroundColor="green"
          paddingTop="105px"
          fontColor="#ffffff"
        />

        <ImageBox
          title="MicroFilament"
          subtitle="lor sit amet, consectetuer ad"
          backgroundColor="orange"
          paddingTop="105px"
          fontColor="#ffffff"
        />

      </ClassicFibers>

    );
  }
}


export default FourBox;
