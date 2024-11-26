import { useState } from 'react';
import PageHeader from '../components/PageHeader'
import AdoptSubNav from '../components/adoptComponents/AdoptSubNav';

// Import Components
import AvailableAdoptAnimals from '../components/adoptComponents/AvailableAdoptAnimals';
import Process from '../components/adoptComponents/Process';
import Requirements from '../components/adoptComponents/Requirements';
import Fees from '../components/adoptComponents/Fees';

const Adopt = () => {
  const [shownComponent, setShownComponent] = useState('');

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
      <PageHeader/>
      <AdoptSubNav setShownComponent={setShownComponent} />
      <div className='content-container'>{displayComponent()}</div>
    </>
   
  )
}

export default Adopt
