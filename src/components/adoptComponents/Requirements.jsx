import React from 'react'

const Requirements = () => {
  return (
    <div className='requirements-adopt-section subnav-section-container'>
      <h2>Adoption Requirments For All Animals</h2>
      <div className='four-column-grid-container'>

        <div className='requirments-adopt-info'>
          <p><span className='bold-color-text'>Own your home or have written permission from the landlord to keep the type of pet(s) you're adopting - </span>ideally renters would have lived at the property for more than one year.</p>
        </div>

        <div className='requirments-adopt-info'>
          <p><span className='bold-color-text'>Secure fencing - </span>ideally renters would have lived at the property for more than one year.</p>
        </div>

        <div className='requirments-adopt-info'>
          <p><span className='bold-color-text'>Good shelter -</span> for dogs and cats we require a sleeping area indoors with the family; for other animals, they need to be able to get out of the weather and shelter from the wind, heat and cold.</p>
        </div>
        
        <div className='requirments-adopt-info'>
          <p><span className='bold-color-text'>Access to water for drinking - </span>or a waterway or pond for ducks and geese so they can display their natural behaviours.</p>
        </div>

      </div>

      <div className='four-column-grid-container'>

        {/* Opens dgo Modal*/}
        <button className='primary-button'> Requirments for dogs</button>

        {/* Opens cat Modal*/}
        <button className='primary-button'> Requirments for cats</button>

        {/* Opens rural animal Modal*/}
        <button className='primary-button'> Requirments for rural animals</button>
        
        {/* Opens chicken Modal*/}
        <button className='primary-button'> Requirments for chickens</button>

      </div>
      
    </div>
  )
}

export default Requirements
