import { useState } from 'react';
import ImpactSubNav from '../components/ourImpactComponents/ImpactSubNav'
import PageHeader from '../components/PageHeader'

// Import Components
import AnimalExploitation from '../components/ourImpactComponents/AnimalExploitation';
import AnimalRescue from '../components/ourImpactComponents/AnimalRescue';
import DisasterResponse from '../components/ourImpactComponents/DisasterResponse';
import Education from '../components/ourImpactComponents/Education';
import WelfareReform from '../components/ourImpactComponents/WelfareReform';
import Seo from '../components/Seo';

const About = () => {
  const [shownComponent, setShownComponent] = useState('Disaster Response');

  const displayComponent = () => {
    switch (shownComponent) {
      case 'Disaster Response':
        return <DisasterResponse />;
      case 'Welfare Reform':
        return <WelfareReform />;
      case 'Animal Rescue':
        return <AnimalRescue />;
      case 'Animal Exploitation':
        return <AnimalExploitation />;
      case 'Education':
        return <Education />;
      default:
        return <DisasterResponse />;
    }
  }

  return (
    <>
      <Seo
        title={`${shownComponent} - Our Impact - HUHA Summative`}
        description='Look into how HUHA has helped animals since we have been founded'
        url={window.location.href}
      />
      <div className='page-container'>
        <PageHeader title='Our Impact' image_url='/header-bg-imgs/impact-img.webp'/>
        <div className='impact-about-container subnav-section-container'>
          <div className='impact-img-left-container'/>
          
          <div className='impact-text-right-container'>
            <h3>HUHA has advocated for, rescued, rehabilitated and rehomed or released tens of thousands of animals since its founding in 2001</h3>
            <p>From rescuing animals from volatile family violence situations to advocating for better animal welfare laws to working to heal wombats and koalas after Australia’s devastating bushfires, HUHA takes an integrated and collaborative approach to helping animals. Together with our HUHA community, we can - and do – change so many lives. </p>
          </div>
        </div>
        <ImpactSubNav setShownComponent={setShownComponent} />
        <div className='content-container'>{displayComponent()}</div>
      </div>
      
    </>
   
  )
}

export default About
