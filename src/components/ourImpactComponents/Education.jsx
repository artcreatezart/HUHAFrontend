// imports 
import { useState, useEffect } from 'react';
import axios from 'axios';
// Icon import
import { FaPaw } from 'react-icons/fa';

const baseURL = import.meta.env.VITE_WP_API_BASEURL;

const Education = () => {
  const [education, setEducation] = useState([]);
  const [loading, setLoading] = useState(true);

  const educationEndpoint = `${baseURL}/educationstories?_embed`;

  useEffect(() => {
    axios.get(`${educationEndpoint}`)
    .then((res) => {
      setEducation(res.data);
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
        <div className='impact-stories-container ' key={education.slug}>
          <h2>Animal Exploitation</h2>
          <h4>HUHA works tirelessly to prevent animal cruelty and exploitation in all of its forms. Here are some highlights from our work over the years.</h4>
          {/* exploitation data taken and placed from api data */}
          <div className='impact-stories-boxes-container two-column-grid-container'>
          {education.map((education) => (
            <div className='impact-stories-card' key={education.id}>
              <div className='impact-stories-box-title'>
                <FaPaw className='paw-point-icon' />
                <h3>{education.title.rendered}</h3>
              </div>
              <div dangerouslySetInnerHTML={{ __html: education.content.rendered }} />
            </div>
          ))}
          </div>

        </div>

    </div>
  )
}

export default Education
