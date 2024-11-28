// Icon Imports
import { FaPaw } from 'react-icons/fa';

// History Component found in about page under history component
const History = () => {
  return (
    // componet parent container
    <div className='history-about-section subnav-section-container'>

      {/* Desktop - left information with header and history behind HUHA */}
      <div className='left-descript-history-container'> 
        <h2>History</h2>
        <p>The desire to help, protect and rescue animals and birdlife has always been part of co-founder Carolyn Press McKenzie’s DNA. In 1998 Carolyn bought 5 acres in Peka Peka and began to rescue farm animals. After outgrowing the space, Carolyn and her husband, Jim McKenzie, bought 13 acres in Kaitoke in 2001 and called it the Pakuratahi Farm Animal Sanctuary. <br/><br/>

        As the number of injured, damaged and unwanted animals coming into the Sanctuary increased, it became clear to Carolyn and Jim that two people alone could not do all that needed to be done. They would either need to limit their vision and impact to saving as many animals as their Sanctuary could hold or they would need to expand and engage individuals and the broader community to help. <br/><br/>

        Understanding that many animals were not neglected or abused through conscious cruelty, but through lack of knowledge, empathy and resources, they realised their impact could expand beyond just rescuing animals to empowering others to understand, consider and care for them. Out of this idea, HUHA was born.</p>
      </div>

      {/* desktop - right key points of history for HUHA */}
      <div className='right-points-history-container'>

        {/* 2001 Key Point */}
        <div className='single-point-history'>
          <FaPaw className='paw-point-icon'/>
          <p>2001 Pakuratahi Sanctuary founded</p>
        </div>

        {/* 2008 Key Point */}
        <div className='single-point-history'>
          <FaPaw className='paw-point-icon'/>
          <p>2008 Pakuratahi Sanctuary reborn as HUHA</p>
        </div>

        {/* 2011 Key Point */}
        <div className='single-point-history'>
          <FaPaw className='paw-point-icon'/>
          <p>2011 Christchurch earthquake response and HUHA Otaki shelter opened</p>
        </div>

        {/* 2013 Key Point */}
        <div className='single-point-history'>
          <FaPaw className='paw-point-icon'/>
          <p>2013 HUHA Charity Boutique Op Shop - Otaki opened</p>
        </div>

        {/* 2015 Key Point */}
        <div className='single-point-history'>
          <FaPaw className='paw-point-icon'/>
          <p>2015 HUHA Online store opened</p>
        </div>

        {/* 2017 Key Point */}
        <div className='single-point-history'>
          <FaPaw className='paw-point-icon'/>
          <p>2017 HUHA Vet Clinic and future HUHA sanctuary land purchased</p>
        </div>

        {/* 2019 Key Point */}
        <div className='single-point-history'>
          <FaPaw className='paw-point-icon'/>
          <p>2019 HUHA Charity Boutique Op Shop - Petone and HUHA Ethical Gift store opened</p>
        </div>

        {/* 2020 Key Point */}
        <div className='single-point-history'>
          <FaPaw className='paw-point-icon'/>
          <p>2020 major emergency response missions</p>
        </div>

        {/* 2022 Key Point */}
        <div className='single-point-history'>
          <FaPaw className='paw-point-icon'/>
          <p>2022 HUHA Charity Boutique Op Shop – Carterton opened</p>
        </div>

        {/* 2023 Key Point */}
        <div className='single-point-history'>
          <FaPaw className='paw-point-icon'/>
          <p>2023 Auckland floods and Cyclone Gabrielle emergency response</p>
        </div>

      </div>
    </div>
  )
}

export default History
