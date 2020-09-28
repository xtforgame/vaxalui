import React from 'react';
import { storiesOf } from '@storybook/react';
import { AddCircle } from '@material-ui/icons';
import TopSection from 'library/saya/bob/TopSection';
import Introduction from 'library/saya/bob/Introduction';
import GreenNumberSection from 'library/saya/bob/GreenNumberSection';
import Challenges from 'library/saya/bob/Challenges';
import ClassicFibers from 'library/saya/Kenny/ClassicFibers';
import ImageBoxSmall from 'library/saya/Kenny/ImageBoxSmall';

import Layout from '../../../shared/Layout';

import background_TopSection from '../../../img/bg58.jpg';
import introduction1 from '../../../img/bg59.jpg';
import leftBox from '../../../img/bg60.jpg';
import midBox from '../../../img/bg61.jpg';
import rightBox from '../../../img/bg62.jpg';

storiesOf('saya|Pages/NewDesktop', module)
  .add('Module1',
    () => (
      <div style={{ width: '100%' }}>
        <Layout>
          <TopSection
            firstTitle={
              <>
                <span style={{ fontFamily: 'FilsonSoft-Bold' }}>RSCUW</span>
                <span> / </span>
                <span style={{ fontFamily: 'FilsonSoft-Bold' }}>SAYA</span>
                <span style={{ fontFamily: 'FilsonSoft-light' }}>NEXT</span>
              </>
            }
            secondTitle="Cutting Scraps and Overstocks"
            thirdTitle="Addressing the Industry’s Real Elephant In the Room"
            backgroundImage={background_TopSection}
          />
          <Introduction
            height="465px"
            // backgroundImage={introduction1}
            backgroundColor="#64703f"
            title="RSCUW provides a renewal solution for rolls of fabric and offcuts that don’t make it into a garment"
            subtitle="RSCUW = Recycled Scrap and Cutting Waste"
            fontColor="#ffffff"
            titleWidth="780px"
            lineBorder="solid 1px #ffffff"
            subtitleWidth="620px"
            descriptionWidth="460px"
            description={<AddCircle style={{ width: 46, height: 46, color: '#e3e3e3' }} />}
          />
          <GreenNumberSection
            topTitle="Offcut Waste, a Big Inconvenient Reality"
            backgroundImage={introduction1}
            backgroundColor="#e3e3e3"
            number="20"
            topTile="industrial waste"
            bottomTitle="garment cutting scraps"
            rightTitle="Cutting Scrap"
            description="Fabric cutting scrap is an inevitable part of garment manufacturing that results in up to 20% wastage per yard. In the past most of these scraps are downcycled, end up in landfills or incinerators as there are no commercially effective methods of recycling them. As a leader in the renewal fiber industry, SAYA is committed to finding a solution. Working together with our global network of brands and garment manufacturers worldwide, SAYA is tackling the issue head on."
            height="450px"
            lineWidth="220px"
            leftPaddingTop="110px"
            rightPaddingTop="145px"
            leftPaddingRight="80px"
            rightPaddingLeft="80px"
            descriptionPaddingTop="22px"
            percentDisplay="inline-block"
            numberColor="#000000"
            percentColor="#000000"
          />
          <GreenNumberSection
            topTitle="Offcut Waste, a Big Inconvenient Reality"
            backgroundImage={introduction1}
            backgroundColor="#e3e3e3"
            number="34"
            topTile="overstock"
            bottomTitle="annual waste"
            rightTitle="Deadstock and Overstock Fabrics"
            description={`Despite good intentions and improved efficiencies in production planning, fast fashion and the textile industry on the whole, production overstock is still a serious and overlooked problem.

These deadstock and overstock creates millions of yards of our industry’s unaccountable waste. This has been a hidden and inconvenient reality as there are no effective ways of alleviating them. SAYA RSCUW provides a renewal solution for rolls of fabric that don’t make it to the garment stage.`}
            height="450px"
            lineWidth="220px"
            leftPaddingTop="110px"
            rightPaddingTop="145px"
            leftPaddingRight="80px"
            rightPaddingLeft="80px"
            descriptionPaddingTop="22px"
            percentDisplay="inline-block"
            numberColor="#000000"
            percentColor="#000000"
          />
          <Challenges
            topTitle="Offcut Waste, a Big Inconvenient Reality"
            topTile="industrial waste"
            title="Challenges"
            subtitle="Make it available and affordable"
            description="Removing colors, pigments and finishings from fabrics is a difficult task. Previous technology has been extremely expensive and price prohibitive. SAYA’s team was able to make this commercially available and affordable."
            height="450px"
            lineWidth="220px"
            leftPaddingTop="110px"
            leftPaddingRight="80px"
            descriptionPaddingTop="22px"
            image={introduction1}
          />
        </Layout>
      </div>
    )
  );
  