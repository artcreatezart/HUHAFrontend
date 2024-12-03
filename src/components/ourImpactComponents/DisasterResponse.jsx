// imports 
import { useState, useEffect } from 'react';
import axios from 'axios';
// Icon import
import { FaPaw } from 'react-icons/fa';

const baseURL = import.meta.env.VITE_WP_API_BASEURL;

const DisasterResponse = () => {
  const [disaster, setDisaster] = useState([]);
  const [loading, setLoading] = useState(true);

  const disasterEndpoint = `${baseURL}/disasterstories?_embed&per_page=50`;

  useEffect(() => {
    axios.get(`${disasterEndpoint}`)
    .then((res) => {
      setDisaster(res.data);
      setLoading(false);
    })
    .catch((err) => console.log(err))
  }, []);

  if (loading) {
    return <>Loading...</>
  }

  return (
    <div className='impact-stories-section-container subnav-section-container customize-section-color'>
        {/* // If returned succesfully shows all disaster posts */}
        <div className='impact-stories-container ' key={disaster.slug}>
          <h2>Disaster Response</h2>
          <h4>When animals are at risk, HUHA mobilises to support communities and save lives.</h4>
          {/* disaster data taken and placed from api data */}
          <div className='impact-stories-boxes-container two-column-grid-container'>
          {disaster.map((disasterstorie) => (
            <div className='impact-stories-card' key={disasterstorie.id}>
              <div className='impact-stories-box-title'>
                <FaPaw className='paw-point-icon' />
                <h3>{disasterstorie.title.rendered}</h3>
              </div>
              <div dangerouslySetInnerHTML={{ __html: disasterstorie.content.rendered }} />
            </div>
          ))}
          </div>

        </div>

    </div>
  )
}

export default DisasterResponse
