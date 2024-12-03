// imports 
import { useState, useEffect } from 'react';
import axios from 'axios';
const baseURL = import.meta.env.VITE_WP_API_BASEURL;
// icon imports
import { FaMountain } from 'react-icons/fa';
import { FaCat } from 'react-icons/fa';
import { FaDog } from 'react-icons/fa';
import { FaHorseHead } from 'react-icons/fa';
import { PiRabbitFill } from 'react-icons/pi';


// Animals Avaiable to adopt component found in adopt page within first section
const AvailableAdoptAnimals = () => {
  const [loading, setLoading] = useState(true);
  const [animals, setAnimals] = useState([]);
  const [filteredAnimals, setFilteredAnimals] = useState([]); 
  const [species, setSpecies] = useState([]);
  const [selectedSpecies, setSelectedSpecies] = useState('');

  const endpoint = `${baseURL}/animals?_embed&per_page=50`;
  const speciesEndpoint = `${baseURL}/specie`;

  useEffect(() => {
    axios.get(endpoint)
      .then((res) => {
        setAnimals(res.data);
        setFilteredAnimals(res.data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    axios.get(speciesEndpoint)
      .then((res) => setSpecies(res.data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (selectedSpecies === '') {
      setFilteredAnimals(animals); 
    } else {
      const filtered = animals.filter((animal) =>
        animal.class_list?.includes(`specie-${selectedSpecies}`)
      );
      setFilteredAnimals(filtered);
    }
  }, [selectedSpecies, animals]);


  function getFeaturedImage(animal) {
      if (animal && animal._embedded && animal._embedded['wp:featuredmedia'] && animal._embedded['wp:featuredmedia'][0].source_url) {
          return animal._embedded['wp:featuredmedia'][0].source_url;
      } else {
          return 'https://via.placeholder.com/150';
      }
  }


  const AnimalList = ({animals}) => {
      const mappedAnimals = animals.map((animal, index) => {
        const animalSpecies = species.find(specie => animal.class_list?.includes(`specie-${specie.slug}`));

          return (
              <div key={animal.slug + '-' + index} className='animals-available-container'>
                  <img src={getFeaturedImage(animal)} alt={animal.title.rendered + 'image'} className='animals-available-container-image'/>
                  <div className='animal-name-info'>
                      <h3 className='title'>{animal.title.rendered}</h3>
                      <div className='animal-icon-container'>
                      {animalSpecies?.slug === 'rural' && (
                        <FaMountain style={{ display: 'flex' }} />
                      )}
                      {animalSpecies?.slug === 'horse' && (
                        <FaHorseHead style={{ display: 'flex' }} />
                      )}
                      {animalSpecies?.slug === 'cat' && (
                        <FaCat style={{ display: 'flex' }} />
                      )}
                      {animalSpecies?.slug === 'dog' && (
                        <FaDog style={{ display: 'flex' }} />
                      )}
                      {animalSpecies?.slug === 'small' && (
                        <PiRabbitFill style={{ display: 'flex' }} />
                      )}
                      </div>
                  </div>
                  
                  <a href={`#/animals/${animal.id}`} >
                    <button className='primary-button'>Get To Know Me</button></a>
              </div>

              
          )
      });

      return (
          <>
              {mappedAnimals}
          </>
      )
  }

  return (
    <>
      <div className='animal-section-container '>
        <div className='species-button-filter-container category-buttons-list auto-grid-sub-nav'>
          <button
            className='primary-button'
            onClick={() => setSelectedSpecies('')}
          >
            All Animals
          </button>
          {species.map((specie) => (
            <button
              key={specie.id}
              className='primary-button'
              onClick={() => setSelectedSpecies(specie.slug)}
            >
              {specie.name}
            </button>
          ))}
        </div>
        <div className='four-column-grid-container'>
          {loading ? <p>Loading...</p> : <AnimalList animals={filteredAnimals} />}
        </div>
       
      </div>
    </>
    
  )
}

export default AvailableAdoptAnimals
