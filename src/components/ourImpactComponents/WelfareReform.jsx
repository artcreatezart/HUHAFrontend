// imports 
import { useState, useEffect } from 'react';
import axios from 'axios';
// Icon import
import { FaPaw } from 'react-icons/fa';

const baseURL = import.meta.env.VITE_WP_API_BASEURL;

const WelfareReform = () => {
  const [welfare, setWelfare] = useState([]);
  const [loading, setLoading] = useState(true);

  const welfareEndpoint = `${baseURL}/welfarestories?_embed&per_page=50`;

  useEffect(() => {
    axios.get(`${welfareEndpoint}`)
    .then((res) => {
      setWelfare(res.data);
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
        <div className='impact-stories-container ' key={welfare.slug}>
          <h2>Welfare Reform</h2>
          <h4>Together with our community, HUHA has improved and saved lives of thousands of animals through advocacy campaigns and activities.</h4>
          {/* welfare data taken and placed from api data */}
          <div className='impact-stories-boxes-container two-column-grid-container'>
          {welfare.map((welfarestorie) => (
            <div className='impact-stories-card' key={welfarestorie.id}>
              <div className='impact-stories-box-title'>
                <FaPaw className='paw-point-icon' />
                <h3>{welfarestorie.title.rendered}</h3>
              </div>
              <div dangerouslySetInnerHTML={{ __html: welfarestorie.content.rendered }} />
            </div>
          ))}
          </div>

        </div>

    </div>
  )
}

export default WelfareReform
