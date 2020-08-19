import React from 'react';
import ImageBox from '../components/ImageBox';
import ClassicFibers from '../components/ClassicFibers';
import TopLeftBox from '../img/bg5.jpg';
import TopRightBox from '../img/bg6.jpg';
import BottomLeftBox from '../img/bg7.jpg';
import BottomRightBox from '../img/bg8.jpg';



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
          backgroundImage= {TopLeftBox}
          paddingTop='50px'
          fontColor="#ffffff"
        />

        <ImageBox
          title="UltraStretch"
          subtitle="Stretch with a Good Conscious"
          backgroundImage= {TopRightBox}
          paddingTop="105px"
          fontColor="#ffffff"
        />

        <ImageBox
          title="TopFresh"
          subtitle="lor sit amet, consectetuer ad"
          backgroundImage= {BottomLeftBox}
          paddingTop="105px"
          fontColor="#ffffff"
        />

        <ImageBox
          title="MicroFilament"
          subtitle="lor sit amet, consectetuer ad"
          backgroundImage= {BottomRightBox}
          paddingTop="105px"
          fontColor="#ffffff"
        />

      </ClassicFibers>

    );
  }
}


export default FourBox;