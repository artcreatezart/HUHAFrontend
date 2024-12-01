import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
// component imports
import Seo from '../components/Seo';
import PageHeader from '../components/PageHeader';
import AdoptForm from '../components/adoptComponents/AdoptForm';
// icon imports
import { IoIosClose } from 'react-icons/io';


const baseURL = import.meta.env.VITE_WP_API_BASEURL;

// What we do modal display when opened
const AdoptModal = ({ closeAdoptModal }) => (

  <div className='modal-overlay'>
    <div className='modal adopt-modal'>
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
      <div className='total-dog-container'>
        <div key={animal.slug} className='dog-post-container'>
            <div className='top-container-dog'>
            <h4>{animal.title.rendered}</h4>
            </div>

            <button className='primary-button'
              onClick={() =>
              setOpenAdoptModal({})}
            >Apply To Adopt</button>

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
