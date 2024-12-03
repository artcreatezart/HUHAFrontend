// Imports
import { useState, useEffect } from 'react';
import axios from 'axios';
// Icon Imports
import { IoIosClose } from 'react-icons/io';

const baseURL = import.meta.env.VITE_WP_API_BASEURL;

// What we do modal display when opened
const TrusteeModal = ({ title, content, image, closeTrusteeModal }) => (
  
  <div className='modal-overlay'>
    <div className='modal customize-section-color trustee-modal'>
      <img src={image} alt={title || 'Trustee'} className='trustee-modal-img'/>
      <div>
        <h3>{title}</h3>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
      
      {/* X button close modal */}
      <button className='close-modal-button' onClick={closeTrusteeModal}>
        <IoIosClose />
      </button>
    </div>
  </div>

);

// trustees component found in about page in trustee section
const Trustees = () => {
  const [openTrusteeModal, setOpenTrusteeModal] = useState(null);
  const [trustees, setTrustees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const trusteesEndpoint = `${baseURL}/trustees?_embed`;

  // Fetch trustees from wordpress api data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(trusteesEndpoint);
        setTrustees(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching trustees:', err);
        setError('Failed to load trustees. Please try again later.')
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Get featured image from wordpress posts under this trustee custom post type
  const getFeaturedImage = (trustee) => {
    if (
      trustee &&
      trustee._embedded &&
      trustee._embedded['wp:featuredmedia'] &&
      trustee._embedded['wp:featuredmedia'][0]?.source_url
    ) {
      return trustee._embedded['wp:featuredmedia'][0].source_url;
    }
    return 'https://via.placeholder.com/150';
  };

  return (
    // Component parent container
    <div className='trustee-section-container subnav-section-container'>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        // If returned succesfully shows all trustee posts
        <div className='trustee-container'>
          <h2>Trustees</h2>
          {/* Trustee data taken and placed from api data */}
          <div className='trustee-boxes-container four-column-grid-container'>
            {trustees.map((trustee, index) => (
              <div key={`${trustee.slug}-${index}`} className='trustee-card'>
                <div className='trustee-img'>
                  <img
                    src={getFeaturedImage(trustee)}
                    alt={trustee.title?.rendered || 'Trustee'}
                  />
                </div>
                {/* Button opens modal with more information of the trustee */}
                <button
                  className='secondary-button'
                  onClick={() =>
                    setOpenTrusteeModal({
                      title: trustee.title?.rendered,
                      content: trustee.content?.rendered,
                      image: getFeaturedImage(trustee),
                    })
                  }
                >
                  Read About {trustee.title?.rendered?.split(' ')[0]}
                </button>
              </div>
            ))}
          </div>

          {/* info returned and shown in trustee modal when opened*/}
          {openTrusteeModal && (
            <TrusteeModal
              title={openTrusteeModal.title}
              content={openTrusteeModal.content}
              image={openTrusteeModal.image}
              closeTrusteeModal={() => setOpenTrusteeModal(null)}
            />
          )}

        </div>
      )}
    </div>
  );
};


export default Trustees;
