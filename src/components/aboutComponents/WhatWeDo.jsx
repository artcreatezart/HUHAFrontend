// Imports
import { useState } from 'react';

// Icons imports
import { IoIosClose } from 'react-icons/io';

// What we do - HUHA component found in about page under what we do section
const WhatWeDo = () => {
  const [openWhatModal, setOpenWhatModal] = useState(null);

  /** --- What we do information array ----
   * Title - Category of what we do
   * Exerpt - short description found on page for each category
   * Content - displayed further information when opened modal
   */
  const whatModalContent = {
    disaster: {
      title: 'Disaster Response',
      exerpt: 'HUHA has a skilled team of trained staff and volunteers and a network of like-minded organisations that come together to help when natural disasters and other emergencies strike.',
      content: 'HUHA has a skilled team of trained staff and volunteers and a network of like-minded organisations that come together to help when natural disasters and other emergencies strike. With experience from earthquakes, to fires, to floods and the pandemic, HUHA is here for you and your animals. Be prepared with an emergency kit and plan for all animals in your care. Here are resources to help you help them.',
    },
    rescue: {
      title: 'Rescue and Rehab',
      exerpt: 'At HUHA we’ll drop everything to help animals when they need us. We’ll seek to provide a good outcome for every animal – even when there doesn’t appear to be one.',
      content: 'At HUHA we’ll drop everything to help animals when they need us. We’ll seek to provide a good outcome for every animal – even when there doesn’t appear to be one. Rats, ducks, dogs, cows, whales – we believe every animal matters. With the support of our HUHA community, we’re able to offer temporary shelter to hundreds of animals of all kinds, every year. We rely on community volunteers to help us care for, socialise, exercise and clean up after shelter animals of all kinds. Each individual animal is given the best possible care, consideration and attention while they’re at HUHA and waiting to be rehomed or released. For animals with no advocate or human to care for them, HUHA has created a purpose-built veterinary clinic to offer state of the art care and consideration as we work to heal and ready them for a forever home or release back into their natural habitat if they’re native wildlife or sealife.'
    },
    placement: {
      title: 'Placement',
      exerpt: 'We carefully match animals with loving forever homes. For those animals who are not suitable for adoption, they will spend a peaceful retirement at a HUHA sanctuary.',
      content: 'HUHA is a no kill animal shelter and we believe every animal matters. We bring rescued, surrendered or discarded animals of all kinds to our shelters in the Wellington region and work to rehabilitate and rehome them (if appropriate). We carefully match animals with loving forever homes. For those animals who are not suitable for adoption, they will spend a peaceful retirement at a HUHA sanctuary. Our permanent residents include ex-circus monkeys and a variety of wonky rural and companion animals.'
    },
    welfare: {
      title: 'Welfare Reform',
      exerpt: 'Alongside a caring community, we advocate for animals and work tirelessly to release them from exploitation. ',
      content: 'Alongside a caring community, we advocate for animals and work tirelessly to release them from exploitation. HUHA founder and CEO, Carolyn Press McKenzie, serves on the Animal Welfare Emergency Sub-function committee at MPI and is working to improve enforcement and outcomes for animals across the country.'
    },
    exploitation: {
      title: 'Against Exploitation',
      exerpt: 'In addition to our advocacy work to improve animal welfare laws and ban cruel practices involving animals in labs, racing, farming, and the entertainment industries.',
      content: 'In addition to our advocacy work to improve animal welfare laws and ban cruel practices involving animals in labs, racing, farming, and the entertainment industries, we regularly lead animal release missions. Every year we liberate and rehome hundreds of battery hens on our annual chicken runs. Follow us on Facebook or Instagram to learn about current release campaigns.'
    },
    education: {
      title: 'Education',
      exerpt: 'HUHA believes education about animal care and teaching everyone empathy towards animals will go a long way in resolving the animal welfare issues in Aotearoa New Zealand. ',
      content: 'HUHA believes education about animal care and teaching children and communities empathy towards animals will go a long way in resolving the animal welfare issues in Aotearoa New Zealand. We regularly provide mediation for people, groups and local government to problem-solve together for the good and safe outcomes for animals. Hosting educational events about the care and understanding of animals, school visits and outreach to community groups is an important part of HUHA’s work.'
    },
  };

  // 
  return (
    <div className='what-about-container subnav-section-container'>
      <h2>What We Do</h2>
      <div className='what-container four-column-grid-container'>
        {Object.entries(whatModalContent).map(([key, data]) => (
          <div className='what-single-card' key={key}>
            <h4>{data.title}</h4>
            <p>{data.exerpt}</p>
            <button
              className='primary-button'
              onClick={() => setOpenWhatModal(key)}
            >
              Read More
            </button>
          </div>
        ))}
      </div>

      {/* info returned and shown in what we do category modal when opened*/}
      {openWhatModal && (
        <WhatModal
          title={whatModalContent[openWhatModal].title}
          content={whatModalContent[openWhatModal].content}
          closeWhatModal={() => setOpenWhatModal(null)}
        />
      )}
    </div>
  );
};


// What we do modal display when opened
const WhatModal = ({ title, content, closeWhatModal }) => (
  <div className='modal-overlay'>
    <div className='modal'>
      <h3>{title}</h3>
      <p>{content}</p>
      {/* X Close modal button */}
      <button className='close-modal-button' onClick={closeWhatModal}>
        <IoIosClose />
      </button>
    </div>
  </div>
);

export default WhatWeDo;
