import { useState, useEffect } from 'react';
import SupportSubNav from '../components/supportComponents/SupportSubNav';
import PageHeader from '../components/PageHeader'
import { useLocation } from 'react-router-dom';

// Import Components
import Volunteering from '../components/supportComponents/Volunteering';
import Fundraise from '../components/supportComponents/Fundraise';
import SupportAnimal from '../components/supportComponents/SupportAnimal';
import Help from '../components/supportComponents/Help';
import Bequest from '../components/supportComponents/Bequest';
import Seo from '../components/Seo';

const Support = () => {
  const location = useLocation();
  const [shownComponent, setShownComponent] = useState('Volunteering');

  useEffect(() => {
    if (location.state?.shownComponent) {
      setShownComponent(location.state.shownComponent);
    }
  }, [location.state]);


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
      <Seo
        title={`${shownComponent} - Support - HUHA Summative`}
        description='See how you can Support HUHA and the animals'
        url={window.location.href}
      />
      <div className='page-container'>
        <PageHeader title='Support' image_url='/header-bg-imgs/support-img.webp'/>
        <SupportSubNav setShownComponent={setShownComponent} />
        <div className='content-container'>{displayComponent()}</div>
      </div>
      
    </>
   
  )
}

export default Support
