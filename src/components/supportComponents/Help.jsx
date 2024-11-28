import { Link } from "react-router-dom"

const Help = () => {
  return (
    <div className='help-support-section subnav-section-container'>
      <h2>Help and Advice</h2>
      <div className='help-support-intro'>
        <div className='left-help-support-intro'>
          <p>
          HUHA has established a wealth of experience and knowledge on best practices in animal care and training. We are keen to share what we know because together we can save lives.
          </p>
          <Link to='/contact'>
            <button className='primary-button'>Get In Touch</button>
          </Link>
        </div>
        <div className='right-help-support-intro'>
          <h3>Report Animal Abuse to SPCA</h3>
          <a href='https://www.spca.nz/report-animal-cruelty' target='_blank'>
            <button className='secondary-button'>Report Animal Abuse</button>
          </a>
        </div>
      </div>

      <div className='middle-rehome-support-container'>

        <h3>Rehome Your Animal</h3>
        <div className='information-middle-rehome-container'>
          <div className='left-middle-rehome-container'>
            <p>Surrendering an animal is always a difficult time for everyone involved, but HUHA is here to help if we can. There are so many reasons why wonderful animals who had loving homes end up in our care -- from owners suddenly passing or needing to go into long term care to overseas moves to other circumstances changing so that owners can no longer care for the animal.</p><br/>
            <ul>
              <li>To give your pet the best chance at finding a new forever home, we’ll need to gather as much information as possible about the animal, its veterinary and behaviour history, its’ likes, dislikes and quirks.</li><br/>
              <li>To start the surrender process, please contact us and a team member will be in touch. Call if Urgent</li>
            </ul>
            <Link to='/contact'>
              <button className='primary-button'>Get In Touch</button>
            </Link>
          </div>
          <div className='right-middle-rehome-container'>
            <ul>
              <li>Note: Unfortunately our shelters are often filled to capacity and there may be a waitlist for rehoming animals. We may be able to do a community rehome post under these circumstances.</li><br/>
              <li>Unfortunately we generally cannot accept animals who have a history of biting people or hurting other animals though there are always exceptions such as if a farm dog attacked a sheep or chicken -- we would simply rehome it where there isn’t stock around.</li>
            </ul>
          </div>

        </div>
        
      </div>

      <div className='bottom-disaster-support-container'>

        <h3>Rehome Your Animal</h3>
        <div className='information-bottom-disaster-container'>
          <div className='left-bottom-disaster-container'>
            <p>It’s so important to have a plan for your pet in case of a natural disaster such as an earthquake, flood, tsunami, fire or other emergency. Please do your part by being prepared with an emergency kit and plan for all animals in your care. <br/> Here are some resources to help you help them.</p>
          </div>
          <div className='right-bottom-disaster-container'>
            <div className='right-two-buttons-bottom-disaster-container'>
              <a href='https://getready.govt.nz/prepared/household/tailor-your-plan/pets-and-animals' target='_blank'>
                <button className='primary-button'>Plan for your pets</button>
              </a>
              <a href='https://www.mpi.govt.nz/animals/animal-welfare/animal-welfare-emergency-management/preparing-animals-for-emergencies/' target='_blank'>
                <button className='primary-button'>Emergency resources</button>
              </a>
            </div>
            <a href='https://www.animalevac.nz/resources/' target='_blank'>
                <button className='primary-button'>More planning resources</button>
            </a>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Help
