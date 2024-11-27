import { useState } from 'react';
import PageHeader from '../components/PageHeader'
import AdoptSubNav from '../components/adoptComponents/AdoptSubNav';

// Import Components
import AvailableAdoptAnimals from '../components/adoptComponents/AvailableAdoptAnimals';
import Process from '../components/adoptComponents/Process';
import Requirements from '../components/adoptComponents/Requirements';
import Fees from '../components/adoptComponents/Fees';
import Seo from '../components/Seo';

const Adopt = () => {
  const [shownComponent, setShownComponent] = useState('Animals Available To Adopt');

  const displayComponent = () => {
    switch (shownComponent) {
      case 'Animals Available To Adopt':
        return <AvailableAdoptAnimals />;
      case 'Adoption Process':
        return <Process />;
      case 'Adoption Requirments':
        return <Requirements />;
      case 'Adoption Fees':
        return <Fees/>;
      default:
        return <AvailableAdoptAnimals />;
    }
  }

  return (
    <>
      <Seo
        title={`${shownComponent} - Adopt - HUHA Summative`}
        description='Check out our animals and find out how you can adopt one!'
        url={window.location.href}
      />
      <PageHeader/>
      <AdoptSubNav setShownComponent={setShownComponent} />
      <div className='content-container'>{displayComponent()}</div>
    </>
   
  )
}

export default Adopt
