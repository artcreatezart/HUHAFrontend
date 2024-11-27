import { useState, useEffect } from 'react'
import axios from 'axios'

// Component Imports
import Sponsors from '../Sponsors';

const baseURL = import.meta.env.VITE_WP_API_BASEURL;

const AboutSponsors = () => {
  const [sponsors, setSponsors] = useState(null);
  const [loading, setLoading] = useState(true);
  const sponsorsEndpoint = `${baseURL}/sponsors?_embed`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [sponsorsRes] = await Promise.all([
          axios.get(sponsorsEndpoint)
        ]);

        setSponsors(sponsorsRes.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className='home-sponsor-container'>
        { loading ? <p>Loading...</p> : <Sponsors sponsors={sponsors}/>}
    </div>
  )
}

export default AboutSponsors
