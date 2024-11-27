import { useState, useEffect } from 'react';
import axios from 'axios';

const Trustees = () => {
  const [trustees, setTrustees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const baseURL = import.meta.env.VITE_WP_API_BASEURL;
  const trusteesEndpoint = `${baseURL}/trustees?_embed`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(trusteesEndpoint);
        setTrustees(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching trustees:', err);
        setError('Failed to load trustees. Please try again later.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
    <div className='trustee-section-container subnav-section-container'>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className='trustee-container'>
          <h2>Trustees</h2>
          <div className='trustee-boxes-container four-column-grid-container'>
            {trustees.map((trustee, index) => (
              <div key={`${trustee.slug}-${index}`} className='trustee-card'>
                <div className='trustee-img'>
                  <img
                    src={getFeaturedImage(trustee)}
                    alt={trustee.title?.rendered || 'Trustee'}
                  />
                </div>
                <button className='secondary-button'>
                  Read About {trustee.title?.rendered?.split(' ')[0]}</button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Trustees;
