import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
// component imports
import Seo from '../components/Seo';
import PageHeader from '../components/PageHeader';
import AdoptForm from '../components/adoptComponents/AdoptForm';
// icon imports
import { IoIosClose } from 'react-icons/io';
import { TiTick } from 'react-icons/ti';


const baseURL = import.meta.env.VITE_WP_API_BASEURL;

// What we do modal display when opened
const AdoptModal = ({ closeAdoptModal }) => (

  <div className='modal-overlay'>
    <div className='modal adopt-modal customize-section-color'>
      <AdoptForm/>
      
      {/* X button close modal */}
      <button className='close-modal-button' onClick={closeAdoptModal}>
        <IoIosClose />
      </button>
    </div>
  </div>

);

const SingleAnimal = () => {
  const [openAdoptModal, setOpenAdoptModal] = useState(null);

  const [animal, setAnimal] = useState(null);
  const [loading, setLoading] = useState(true);
  const {id} = useParams();

  const endpoint = `${baseURL}/animals/${id}?_embed`;

  useEffect(() => {
    axios.get(`${endpoint}`)
    .then((res) => {
      setAnimal(res.data);
      setLoading(false);
    })
    .catch((err) => console.log(err))
  }, []);

  function getFeaturedImage(animal) {
    if (animal && animal._embedded && animal._embedded['wp:featuredmedia'] && animal._embedded['wp:featuredmedia'][0].source_url) {
        return animal._embedded['wp:featuredmedia'][0].source_url;
    } else {
        return 'https://via.placeholder.com/150';
    }
}

  if (loading) {
    return <>Loading...</>
  }

  return (
    <>
      <Seo
        title={animal.yoast_head_json?.title || animal.title.rendered}
        description={animal.yoast_head_json?.description}
        image={animal.yoast_head_json?.og_image?.[0]?.url}
        url={window.location.href}
      />
      <PageHeader title={animal.title.rendered} image_url={getFeaturedImage(animal)}/>
      <div className='single-animal-container'>
        <div key={animal.slug} className='animal-post-container'>
          <div className='left-animal-container'>
            <div className='left-animal-img-container'>
              <img
                src={getFeaturedImage(animal)}
                alt={animal.title.rendered}
              />
              <p>Thank you Jo Moore Photographer</p>
            </div>
            <button className='primary-button apply-adopt-button'
              onClick={() =>
              setOpenAdoptModal({})}
            >Apply To Adopt</button>
            <h3>Any Queries</h3>
            <p>Please call us 04 3923232 or enquire.huha@gmail.com  </p>

          </div>
          <div className='right-animal-container'>
            <div className='top-right-animal'>
              <h3>{animal.acf.age}</h3>
              <h3>{animal.acf.breed}</h3>
            </div>
            <div className='middle-right-animal'>
              <div className='animal-icon-container'>
                {animal.acf?.desexed === "na" ? (
                  <h3>Desexed Not Applicable</h3> 
                ) : (
                  <>
                    <TiTick
                      style={{
                        display: animal.acf?.desexed === "yes" ? "flex" : "none",
                      }}
                      className='desexed-vax-icon'
                    />
                    <IoIosClose
                      style={{
                        display: animal.acf?.desexed == "no" ? "flex" : "none",
                      }}
                      className='desexed-vax-icon'
                    />
                    <h3>Desexed</h3>
                  </>
                )}
              </div>
              <div className='animal-icon-container'>
                 <TiTick
                      style={{
                        display: animal.acf?.vaccinations === "yes" ? "flex" : "none",
                      }}
                      className='desexed-vax-icon'
                    />
                    <IoIosClose
                      style={{
                        display: animal.acf?.vaccinations == "no" ? "flex" : "none",
                      }}
                      className='desexed-vax-icon'
                    />
                    <h3>Vaccinated</h3>
              </div>
            </div>
            <p dangerouslySetInnerHTML={{ __html: animal.content.rendered }} />

          </div>
            
        </div>
      </div>
     
      {/* info returned and shown in Adopt modal when opened*/}
      {openAdoptModal && (
        <AdoptModal
          closeAdoptModal={() => setOpenAdoptModal(null)}
        />
      )}
      
    </>
  )
}

export default SingleAnimal
