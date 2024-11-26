import { useState } from 'react';
import SupportSubNav from '../components/supportComponents/SupportSubNav';
import PageHeader from '../components/PageHeader'

// Import Components
import Volunteering from '../components/supportComponents/Volunteering';
import Fundraise from '../components/supportComponents/Fundraise';
import SupportAnimal from '../components/supportComponents/SupportAnimal';
import Help from '../components/supportComponents/Help';
import Bequest from '../components/supportComponents/Bequest';

const Support = () => {
  const [shownComponent, setShownComponent] = useState('');

  const displayComponent = () => {
    switch (shownComponent) {
      case 'Volunteering':
        return <Volunteering />;
      case 'Fundraise For HUHA':
        return <Fundraise />;
      case 'Support A Animal':
        return <SupportAnimal />;
      case 'Help / Advice':
        return <Help />;
      case 'Bequest':
        return <Bequest />;
      default:
        return <Volunteering />;
    }
  }

  return (
    <>
      <PageHeader/>
      <SupportSubNav setShownComponent={setShownComponent} />
      <div className='content-container'>{displayComponent()}</div>
    </>
   
  )
}

export default Support
