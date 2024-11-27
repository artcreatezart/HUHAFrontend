import {FaPaw} from 'react-icons/fa'

const Volunteering = () => {
  return (
    <div className='volunteering-section subnav-section-container'>
      
      <div className='top-volunteering-section'>
        <div className='top-img-volunteering-container'/>
        <div className='top-descript-volunteering-container'>
          <h2>Volunteering</h2>
          <h3>Fill a regular volunteer position at HUHA's animal shelter or at one of our op shops and help to make a difference in the lives of animals</h3>
          <button className='primary-button'>Apply To Volunteer</button>
        </div>
      </div>

      <div className='middle-volunteering-section'>
        <div className='middle-points-volunteering-container'>
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

        <div className='middle-descript-volunteering-container'>
          <p>HUHA is run largely by our team of incredible volunteers and we are always looking for new people to join our team.<br/><br/>

          Volunteering for HUHA can be a big commitment, but it is hugely rewarding too. Volunteer requirements:
          Note: some volunteer tasks require heavy lifting and agility and some shelter tasks can get very messy.<br/><br/>

          Throughout the year there will be opportunities to volunteer on a one-off basis at working bees, street appeals and other events. Follow us on Facebook and Instagram to keep up with all things HUHA.<br/><br/>
          </p>
        </div>
      </div>

      <div className='bottom-volunteering-section four-column-grid-container'>
        <div className='bottom-volunteer-option-container'>
          <h4>Volunteer at our animal shelter</h4>
          <p>There are plenty of ways to help at our shelters. We need volunteers to clean animal bedrooms, cages and paddocks and help with feeding, grooming, exercising and socializing our animals so their days are fun and enriched.</p>
          <ul>
            <li>Wellington cat/small animal shelter</li>
            <li>Wellington dog shelter</li>
            <li>Wellington horse shelter</li>
          </ul>    
        </div>

        <div className='bottom-volunteer-option-container'>
          <h4>Volunteer at our charity op shops</h4>
          <p>Our charity boutiques are based in Carterton, Otaki and Petone and are essential in raising vital funds to support animals. Were always grateful for help with weekly or fortnightly volunteer shifts</p>
          <ul>
            <li>Wellington cat/small animal shelte</li>
            <li>Caterton Op Shop</li>
            <li>Petone Op Shop</li>
          </ul>
        </div>

        <div className='bottom-volunteer-option-container'>
          <h4>Other volunteer opportunities</h4>
          <p>In Wellington, we need roadrunners with access to a vehicle who can pick up and drop off items between our shelters and op shops in Carterton, Petone and Otaki. Heavy lifting may be required.</p>
          <ul>
            <li>help us promote HUHA in your area</li>
            <li>Help us educate communites</li>
            <li>Heavy lifting may be required</li>
          </ul>
        </div>

        <div className='bottom-volunteer-option-container'>
          <h4>Team-building at HUHA</h4>
          <p>Are you based in Wellington and have a team-building day at your workplace, church or group? We can help create a meaningful half or full-day out for your team. A modest donation will be requested to help offset our costs.</p>
        </div>

      </div>
    </div>
  )
}

export default Volunteering
