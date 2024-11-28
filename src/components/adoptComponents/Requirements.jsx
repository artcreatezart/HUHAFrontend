import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { FaPaw } from 'react-icons/fa'

const Requirements = () => {
  const [openAnimalRequirementsModal, setOpenAnimalRequirementsModal] = useState(null);

const animalRequirementsModalContent = {
    dogs: {
      title: 'Requirements for Dogs',
      pointOne: 'Fencing - youll need to ensure that your fencing is robust and secure enough for the type of dog youre adopting. A fenced backyard is ideal as it means your dog is not the first one to greet visitors when they arrive and is safer because the dog cannot escape if children or visitors accidentally leave the front gate open. It can also be more peaceful for dogs that get easily excited and like to bark at passers-by.',
      pointTwo: 'Enrichment and care plan for your dog if youre at work during the day.',
    },
    cats: {
      title: 'Requirements for Cats',
      pointOne: 'Location - your home will need to be away from hazards such as main roads or railway lines.',
    },
    ruralAnimals: {
      title: 'Requirements for Rural Animals',
      pointOne: 'Paddock - Herd animals need company to thrive. Do you have existing animals or access to grazing with others of their kind to keep them company (or can you make room to adopt more than one)?',
      pointTwo: 'Secure fencing – do you have safe paddocks with good fencing that animals cannot become tangled in or escape from? Particularly important for goats who are renowned escape artists (we don’t allow tethering).',
    },
    chickens: {
      title: 'Requirements for Chickens',
      pointOne: 'Free range – do you have room for the chickens to be free range or plenty of room to roam with a good chook house or shelter where they can snuggle down?',
      pointTwo: 'After the eggs – will you be able to provide a home for the hens after their laying life comes to an end?',
    },
  };

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
        <button className='primary-button' onClick={() => setOpenAnimalRequirementsModal('dogs')}> Requirments for dogs</button>

        {/* Opens cat Modal*/}
        <button className='primary-button' onClick={() => setOpenAnimalRequirementsModal('cats')}> Requirments for cats</button>

        {/* Opens rural animal Modal*/}
        <button className='primary-button' onClick={() => setOpenAnimalRequirementsModal('ruralAnimals')}> Requirments for rural animals</button>
        
        {/* Opens chicken Modal*/}
        <button className='primary-button' onClick={() => setOpenAnimalRequirementsModal('chickens')}> Requirments for chickens</button>

      </div>

      {openAnimalRequirementsModal && (
        <AnimalRequirementsModal
          title={animalRequirementsModalContent[openAnimalRequirementsModal].title}
          pointOne={animalRequirementsModalContent[openAnimalRequirementsModal].pointOne}
          pointTwo={animalRequirementsModalContent[openAnimalRequirementsModal].pointTwo}
          closeAnimalRequirementsModal={() => setOpenAnimalRequirementsModal(null)}
        />
      )}
      
    </div>
  );
};

const AnimalRequirementsModal = ({ title, pointOne, pointTwo, closeAnimalRequirementsModal }) => (
  <div className='modal-overlay'>
    <div className='modal'>
      <h3>{title}</h3>
      <div className='single-point-history'>
          <FaPaw className='paw-point-icon'/>
          <p>{pointOne}</p>
      </div>
      <div className='single-point-history'>
          <FaPaw className='paw-point-icon'/>
          <p>{pointTwo}</p>
      </div>
      <button className='close-modal-button' onClick={closeAnimalRequirementsModal}>
        <IoIosClose />
      </button>
    </div>
  </div>
);

export default Requirements
