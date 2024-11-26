import { useState } from 'react';
import ImpactSubNav from '../components/ourImpactComponents/ImpactSubNav'
import PageHeader from '../components/PageHeader'

// Import Components
import AnimalExploitation from '../components/ourImpactComponents/AnimalExploitation';
import AnimalRescue from '../components/ourImpactComponents/AnimalRescue';
import DisasterResponse from '../components/ourImpactComponents/DisasterResponse';
import Education from '../components/ourImpactComponents/Education';
import WelfareReform from '../components/ourImpactComponents/WelfareReform';

const About = () => {
  const [shownComponent, setShownComponent] = useState('');

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
      <PageHeader/>
      <ImpactSubNav setShownComponent={setShownComponent} />
      <div className='content-container'>{displayComponent()}</div>
    </>
   
  )
}

export default About
