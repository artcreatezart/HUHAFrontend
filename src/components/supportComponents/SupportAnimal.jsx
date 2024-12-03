import { Link } from 'react-router-dom'
import { useState } from 'react';
import { IoIosClose } from 'react-icons/io';

const SupportAnimal = () => {
  const [openSupportModal, setOpenSupportModal] = useState(null);

  const supportAnimalModalContent = {
    franklin: {
      img: 'other-imgs/support-animal-modal-imgs/franklin-modal-support.webp',
      title: 'Franklin',
      content: 'Franklin was orphaned soon after he was born. As he has grown and reached new milestones, health complications have arisen to set him back. During his most recent health episode Franklin required a tracheostomy tube to be placed whilst his airway was investigated. But this strong-minded social butterfly makes the most of every situation and loves the attention from everyone who cares for him. His big personality wins hearts wherever he goes.',
    },
    pugs: {
      img: 'other-imgs/support-animal-modal-imgs/pugs-modal-support.webp',
      title: 'Tamranui 25 pug family',
      content: 'The Tamranui 25 were a group of pugs and cross breeds that were illegally taken from a puppy mill by a concerned member of the public. They arrived in our care in a terrible state, many needing surgery to stop their suffering. We refused to give them back to the breeder due to our concerns for their welfare - and one year later they still remain in our care, in limbo, but thriving. We hope that an SPCA case against the breeder will see them finally signed over and able to be adopted into loving forever homes soon. Puppy farming is a serious problem in New Zealand. Stop breeding puppies to death, #Dontbreedforgreed',
    },
    monkeys: {
      img: 'other-imgs/support-animal-modal-imgs/monkeys-modal-support.webp',
      title: 'Sanctuary monkeys',
      content: 'HUHA has four monkeys who will live out the rest of their lives in a purpose-built enclosure at the Kaitoke sanctuary. We hate that they have to live a life in captivity. But it’s heart-warming to see them sparkle and monkey around. No longer on exhibit, retired from pressure. Carol is a very special monkey who originally came from a NZ circus where her thumbs had been amputated - possibly so she would not have the strength to grab people. She was later transferred to a rescue zoo until they closed their doors and she was brought to HUHA. Carol is calm and majestic and we do everything we can to keep her safe, happy and enriched.',
    },
    crow: {
      img: 'other-imgs/support-animal-modal-imgs/crows-modal-support.webp',
      title: 'Bulldog McMuffin',
      content: 'Bulldog McMuffin is our long-time, resident magpie. He only has one wing and was hand raised before being surrendered to us. Bulldog is feisty, loving, grumpy, sings like an angel and makes us laugh with his mischief. Isnt he beautiful! He runs the show at Club HUHA with his huge personality and we love him to bits.',
    },
    dogs: {
      img: 'other-imgs/support-animal-modal-imgs/dogs-modal-support.webp',
      title: 'Sanctuary dogs',
      content: 'Many of our sanctuary dogs have special needs and require intensive, ongoing care - mentally and/or physically. For others, they simply need to be nurtured back to health and given time to adapt to their disabilities and/or learn to trust people again. These dogs learn from the pack and the humans who patiently teach them. It’s a costly business in terms of veterinary care, food, equipment and the financial and emotional resources required to care for them, but so worth it. When they are well and ready, some are adopted out to compassionate forever homes. Other dogs cannot be rehomed – if their journey has already been too hard or rehoming has failed too many times, or when it’s not possible to find a home that can care for their special needs - HUHA will help them live out their best life as permanent sanctuary residents. ',
    },
    pigs: {
      img: 'other-imgs/support-animal-modal-imgs/pigs-modal-support.webp',
      title: 'Rescue pigs',
      content: 'HUHA has over 30 pigs who have come into our care from different families and circumstances. We continue to work to find them all the loving, forever pet homes they deserve where they won’t be bred, eaten or on-sold. Although these pigs are incredible in our eyes, they are not the sort that are easily reahomed so we are likely to hold them in our care for many years to come',
    },
    foals: {
      img: 'other-imgs/support-animal-modal-imgs/foal-modal-support.webp',
      title: 'Mania and Aria the blind foal',
      content: 'Our friends at Bay of Islands Animal rescue called and asked for our help. They were helping a herd of bush ponies when they noticed a newborn foal that seemed to be blind. We now have Mumma and foal in our care and we are so excited to watch them flourish.',
    },
    cats: {
      img: 'other-imgs/support-animal-modal-imgs/cats-modal-support.webp',
      title: 'Rescue cats and kittens',
      content: 'When families come to adopt cats from our shelter we tell them time and patience is so important. When an animals life has been flipped upside down, they just need a moment to breathe and regroup and sometimes even grieve. There should be no pressure or expectations. Time truly heals and its so worth the wait.  While the cats and kittens are waiting to find their forever homes, we feed and care for them and keep them enriched with lots of play and plenty of snuggles.',
    },
    geese: {
      img: 'other-imgs/support-animal-modal-imgs/geese-modal-support.webp',
      title: 'Jeffery and rescue geese',
      content: 'Many geese are surrendered or rescued by HUHA each year. They can become unhappy and aggressive if they don’t have the right habitat and access to water. These often misunderstood fowl require rural homes with a pond or waterway so can be a bit tricky to place. We patiently care for them until we can match them with the right situation. Jeffrey arrived at HUHA in 2003, she was a tiny yellow gosling suffering from a malformation called Angel Wing. over the past 20 years Jeffery has thrived in our care and we love her dearly.',
    },
    turtle: {
      img: 'other-imgs/support-animal-modal-imgs/turtles-modal-support.webp',
      title: 'Bubble 07',
      content: 'Bubble 07 lived in a small tank until her family moved away. She was surrendered to the sanctuary and now lives in a large outdoor enclosure with a pond. She shares her home with several other displaced turtles, and various rehabilitating birds who temporarily shelter at the sanctuary before being released. Because of her improved habitat, Bubble 07 can now go into hibernation over the winter, which is part of her natural behaviour.',
    },
    ponies: {
      img: 'other-imgs/support-animal-modal-imgs/ponies-modal-support.webp',
      title: 'Rescue minnie ponies',
      content: 'A little herd of twelve miniature ponies are currently at home in our sanctuary. While we would love to match them with caring, forever homes - some of these littlies have health issues and others are so deeply bonded that we need to rehome them together. Finding their perfect homes is taking time so we continue to love and care for them and make sure they have access to the correct food, are regularly dewormed and their hooves cared for so they can comfortably roam the paddock.',
    },
    goats: {
      img: 'other-imgs/support-animal-modal-imgs/goats-modal-support.webp',
      title: 'Sassy Pants and rescue goats',
      content: 'Sassy Pants was orphaned after her mother was culled in a pest control operation. She was so incredibly tiny and vulnerable, her umbilical still wet. But our team raised her with love and helped her find joy (and bounce!) in each new day. She is now a big girl and our hope is that she and the other twenty goats in our care will find kind and loving - but most importantly free range - homes with safe and appropriate fencing and shelter so they can continue to enjoy the carefree and fun filled life they deserve.',
    },
    ducks: {
      img: 'other-imgs/support-animal-modal-imgs/ducks-modal-support.webp',
      title: 'Rescue cats and kittens',
      content: 'Never underestimate a duck – or any animal. We’re constantly amazed by the personalities and complexity of relationships within and between each species. A perfect example is our permanent resident we’ve named Brick, our “pole duck”. He spends his days keeping a watch over everything – that is when he’s not busy with social appointments waddling around to visit various HUHA animals and making sure everything is just ducky. While Brick will live out his life at HUHA, we are often called on to rescue ducks from across the country. We bring them to the sanctuary to heal or rest while we find the right rural home for them where they can access a pond or waterway and delight in being a duck.',
    },
    rats: {
      img: 'other-imgs/support-animal-modal-imgs/rat-modal-support.webp',
      title: 'Former teaching rats',
      content: 'HUHA is working with the University of Auckland to rehome a number of rats who were bred for science but never used in research. They make wonderful pets and are thriving in experienced and caring homes. They make the most amazing companions - they are smart, loving and not to mention, incredibly cute! However, they sometimes take awhile to rehome so we are working to make sure they enjoy their time at the sanctuary and are nurtured and appreciated for who they are until they find their forever homes.',
    },
    cows: {
      img: 'other-imgs/support-animal-modal-imgs/cow-modal-support.webp',
      title: 'Our blind cows – Tofu and Dora the explorer',
      content: 'We are so grateful to our HUHA community for supporting special sanctuary animals like our little family of blind cows. We’re able to offer these sweet creatures a safe and enriching environment where they can live out their days together. A wee, 2 week old, blind calf came into our care after being surrendered to HUHA by her sympathetic farmer. She has grown into a curious and lovely cow who is so confident we’ve called her Dora the explorer. Meet Tofu. His farmer was also compassionate and determined that his little blind calf deserved a chance so we made the eight hour round trip to bring Tofu into our care. Our lovely little family are never lost or alone as they have each other.',
    },
    roosters: {
      img: 'other-imgs/support-animal-modal-imgs/rooster-modal-support.webp',
      title: 'Rescue roosters',
      content: 'Because they’re known to be a bit vociferous and sometimes protective, HUHA has many roosters surrendered each year. It often takes awhile to find the right rural home where they can strut freely, safely and behave exactly as who they naturally are. At any given time, HUHA has dozens of roosters in our care roaming the sanctuary as they wait for their forever homes. Ensuring they are given the care, consideration and space they deserve until they’re rehomed is only possible with the support of our wonderful HUHA community.',
    },
    lizard: {
      img: 'other-imgs/support-animal-modal-imgs/dino-modal-support.webp',
      title: 'Blue tongue lizard',
      content: 'In 2022 HUHA was called to transfer 90+ animals into our care when an urgent and sensitive situation with a bird and exotics sanctuary required them to suddenly shut their doors. While we’ve rehomed most of these special animals to dedicated and experienced homes, we knew Dino, our blue tongue lizard would be perfect for education programs at HUHA’s sanctuary. His sunny disposition will be well suited to interacting with the community and teaching empathy to visitors.',
    },
    youngFoal: {
      img: 'other-imgs/support-animal-modal-imgs/pixie-modal-support.webp',
      title: 'Pixie, Punga and Fern',
      content: 'After we rescue and rehabilitate animals, we look to rehome them in a caring forever home where they have friends, enrichment and where they won’t be bred (there are enough rescue animals without breeding more!). Usually we’re happy with our careful matches, but in the case of Pixie, we sadly made a big mistake. We’ve decided to keep Pixie’s family together here at the sanctuary where they can have a bright future interacting with visitors as part of our educational programme. It just goes to show, no matter how careful and experienced you are, things can sometimes go wrong. We’re just grateful we could put things right.',
    },
  };

  
  return (
    <div className='support-animal-section subnav-section-container'>
      <h2>Support A Animal</h2>
      <div className='support-animal-container'>
        <div className='left-descript-support-animal'>
          <p>
          Some animals cannot be rehomed and will live out their best lives at a HUHA sanctuary. Each of these animals has special needs and requires the sustaining support of patron(s), so we can continue to provide the care they need and deserve. Currently, HUHA is caring for nearly 150 sanctuary animals, and your support can make a huge difference to these animals’ lives.
            <br/><br/>
            Additionally, HUHA cares for scores of difficult-to-rehome animals - including pigs, goats, roosters, rats and animals with special needs - that often take many months or years to rehome. Your support is so important to supporting and nurturing these animals on their journey towards a forever home. </p>
        </div>
        <div className='right-button-support-animal'>
          <p>When donating you can input the amount you’d like to donate and select what or who you would like the procced’s to go to.</p>
          <button onClick={() => setOpenSupportModal('all')} className='primary-button'>Read about Sanctuary Animal’s and Families</button>
          <Link to='/donate'>
              <button className='secondary-button'>Support a Sanctuary Animal</button>
            </Link>
        </div>

        {openSupportModal && (
          <SupportModal
            animalSupportData={supportAnimalModalContent}
            closeSupportModal={() => setOpenSupportModal(null)}
          />
        )}
        
      </div>
      
    </div>
  );
};

const SupportModal = ({  animalSupportData, closeSupportModal }) => (
  <div className='modal-overlay'>
    <div className='support-animal-modal four-card-sections'>
      <h1>Support A Animal</h1>
      <div className='four-column-grid-container support-animal-grid-container'>
        {Object.keys(animalSupportData).map((key) => {
            const animal = animalSupportData[key];
            return (
              <div key={key} className='animal-card'>
                <img src={animal.img} alt={animal.title} />
                <h4>{animal.title}</h4>
                <p>{animal.content}</p>
              </div>
            );
          })}
      </div>
      <button className='close-modal-button' onClick={closeSupportModal}>
        <IoIosClose />
      </button>
    </div>
  </div>
);


export default SupportAnimal
