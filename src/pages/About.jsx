import { useState } from 'react';
import AboutSubNav from '../components/aboutComponents/AboutSubNav'
import PageHeader from '../components/PageHeader'

// Import Components
import OurPurpose from '../components/aboutComponents/OurPurpose';
import WhatWeDo from '../components/aboutComponents/WhatWeDo';
import CurrentCampaign from '../components/aboutComponents/CurrentCampaign';
import History from '../components/aboutComponents/History';
import Trustees from '../components/aboutComponents/Trustees';
import AboutSponsors from '../components/aboutComponents/AboutSponsors';
import Seo from '../components/Seo';

const About = () => {
  const [shownComponent, setShownComponent] = useState('Our Purpose');

  const displayComponent = () => {
    switch (shownComponent) {
      case 'Our Purpose':
        return <OurPurpose />;
      case 'What We Do':
        return <WhatWeDo />;
      case 'Current Campaign':
        return <CurrentCampaign />;
      case 'History':
        return <History />;
      case 'Trustees':
        return <Trustees />;
      case 'Sponsors':
        return <AboutSponsors />;
      default:
        return <OurPurpose />;
    }
  }

  return (
    <>
      <Seo
        title={`${shownComponent} - About - HUHA Summative`}
        description='Get to know about HUHA!'
        url={window.location.href}
      />
      <PageHeader title='About' image_url='/header-bg-imgs/about-img.webp'/>
      <AboutSubNav setShownComponent={setShownComponent} />
      <div className='content-container'>{displayComponent()}</div>
    </>
   
  )
}

export default About
