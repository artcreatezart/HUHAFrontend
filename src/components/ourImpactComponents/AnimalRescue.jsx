// imports 
import { useState, useEffect } from 'react';
import axios from 'axios';
// Icon import
import { FaPaw } from 'react-icons/fa';

const baseURL = import.meta.env.VITE_WP_API_BASEURL;

const animalRescue = () => {
  const [rescue, setRescue] = useState([]);
  const [loading, setLoading] = useState(true);

  const rescueEndpoint = `${baseURL}/animalstories?_embed`;

  useEffect(() => {
    axios.get(`${rescueEndpoint}`)
    .then((res) => {
      setRescue(res.data);
      setLoading(false);
    })
    .catch((err) => console.log(err))
  }, []);

  if (loading) {
    return <>Loading...</>
  }

  return (
    <div className='impact-stories-section-container subnav-section-container customize-section-color'>
        {/* // If returned succesfully shows all welfare posts */}
        <div className='impact-stories-container ' key={rescue.slug}>
          <h2>Animal rescue</h2>
          <h4>HUHA has been rescuing multitudes of homeless, abandoned and injured animals for decades.</h4>
          {/* Rescue data taken and placed from api data */}
          <div className='impact-stories-boxes-container two-column-grid-container'>
          {rescue.map((animalrescue) => (
            <div className='impact-stories-card' key={animalrescue.id}>
              <div className='impact-stories-box-title'>
                <FaPaw className='paw-point-icon' />
                <h3>{animalrescue.title.rendered}</h3>
              </div>
              <div dangerouslySetInnerHTML={{ __html: animalrescue.content.rendered }} />
            </div>
          ))}
          </div>

        </div>

    </div>
  )
}

export default animalRescue
