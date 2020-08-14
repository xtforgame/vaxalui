import React from 'react';
import ImageBox from './ImageBox';
import ClassicFibers from './ClassicFibers';
import LeftBox from '../img/bg3.jpg';
import RightBox from '../img/bg4.jpg';


class TwoBox extends React.PureComponent {
  render() {
    return (
      <ClassicFibers
        height="1000px"
        backgroundColor="#444343"
        fontColor="#ffffff"
        marginTop="0"
        borderStyle="1px solid #ffffff"
      >
        <ImageBox
          title="FDY"
          subtitle="Fully drawn yarn"
          backgroundImage={LeftBox}
          paddingTop="105px"
          fontColor="#000000"
        />
        <ImageBox
          title="DTY"
          subtitle="Drawn-texturning yarn"
          backgroundImage={RightBox}
          paddingTop="105px"
          fontColor="#000000"
        />
      </ClassicFibers>

    );
  }
}


export default TwoBox;
