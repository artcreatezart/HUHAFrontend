// imports 
import { useState, useEffect } from 'react';
import axios from 'axios';
const baseURL = import.meta.env.VITE_WP_API_BASEURL;

// Animals Avaiable to adopt component found in adopt page within first section
const AvailableAdoptAnimals = () => {
  const [loading, setLoading] = useState(true);
  const [animals, setAnimals] = useState([]);
  const [filteredAnimals, setFilteredAnimals] = useState([]); 
  const [species, setSpecies] = useState([]);
  const [selectedSpecies, setSelectedSpecies] = useState('');

  const endpoint = `${baseURL}/animals?_embed`;
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
          return (
              <div key={animal.slug + '-' + index} className='animals-available-container'>
                  <img src={getFeaturedImage(animal)} alt={animal.title.rendered + 'image'} className='animals-available-container-image'/>
                  <div className='animal-name-info'>
                      <h4 className='title'>{animal.title.rendered}</h4>
                  </div>
                  
                  <a href={`#/animals/${animal.id}`} className='primary-button'>Get To Know me</a>
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
      <div className="animal-section-container">
        <ul className="species-button-filter-container">
          <button
            className="tertiary-button"
            onClick={() => setSelectedSpecies('')}
          >
            All Animals
          </button>
          {species.map((specie) => (
            <button
              key={specie.id}
              className="tertiary-button"
              onClick={() => setSelectedSpecies(specie.slug)}
            >
              {specie.name}
            </button>
          ))}
        </ul>
        {loading ? <p>Loading...</p> : <AnimalList animals={filteredAnimals} />}
      </div>
    </>
    
  )
}

export default AvailableAdoptAnimals
