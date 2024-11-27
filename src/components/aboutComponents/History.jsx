import { FaPaw } from 'react-icons/fa';

const History = () => {
  return (
    <div className='history-about-section subnav-section-container'>
      <div className='left-descript-history-container'> 
        <h2>History</h2>
        <p>The desire to help, protect and rescue animals and birdlife has always been part of co-founder Carolyn Press McKenzie’s DNA. In 1998 Carolyn bought 5 acres in Peka Peka and began to rescue farm animals. After outgrowing the space, Carolyn and her husband, Jim McKenzie, bought 13 acres in Kaitoke in 2001 and called it the Pakuratahi Farm Animal Sanctuary. <br/><br/>

        As the number of injured, damaged and unwanted animals coming into the Sanctuary increased, it became clear to Carolyn and Jim that two people alone could not do all that needed to be done. They would either need to limit their vision and impact to saving as many animals as their Sanctuary could hold or they would need to expand and engage individuals and the broader community to help. <br/><br/>

        Understanding that many animals were not neglected or abused through conscious cruelty, but through lack of knowledge, empathy and resources, they realised their impact could expand beyond just rescuing animals to empowering others to understand, consider and care for them. Out of this idea, HUHA was born.</p>
      </div>
      <div className='right-points-history-container'>
        <div className='single-point-history'>
          <FaPaw className='paw-point-icon'/>
          <p>2001 Pakuratahi Sanctuary founded</p>
        </div>
        <div className='single-point-history'>
          <FaPaw className='paw-point-icon'/>
          <p>2008 Pakuratahi Sanctuary reborn as HUHA</p>
        </div>
        <div className='single-point-history'>
          <FaPaw className='paw-point-icon'/>
          <p>2011 Christchurch earthquake response and HUHA Otaki shelter opened</p>
        </div>
        <div className='single-point-history'>
          <FaPaw className='paw-point-icon'/>
          <p>2013 HUHA Charity Boutique Op Shop - Otaki opened</p>
        </div>
        <div className='single-point-history'>
          <FaPaw className='paw-point-icon'/>
          <p>2015 HUHA Online store opened</p>
        </div>
        <div className='single-point-history'>
          <FaPaw className='paw-point-icon'/>
          <p>2017 HUHA Vet Clinic and future HUHA sanctuary land purchased</p>
        </div>
        <div className='single-point-history'>
          <FaPaw className='paw-point-icon'/>
          <p>2019 HUHA Charity Boutique Op Shop - Petone and HUHA Ethical Gift store opened</p>
        </div>
        <div className='single-point-history'>
          <FaPaw className='paw-point-icon'/>
          <p>2020 major emergency response missions</p>
        </div>
        <div className='single-point-history'>
          <FaPaw className='paw-point-icon'/>
          <p>2022 HUHA Charity Boutique Op Shop – Carterton opened</p>
        </div>
        <div className='single-point-history'>
          <FaPaw className='paw-point-icon'/>
          <p>2023 Auckland floods and Cyclone Gabrielle emergency response</p>
        </div>
      </div>
    </div>
  )
}

export default History
