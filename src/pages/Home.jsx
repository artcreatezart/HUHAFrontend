import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

// Seo
import Seo from '../components/Seo'

// Component Imports
import Sponsors from '../components/Sponsors'
import HomeHeader from '../components/HomeHeader'
import Campaign from '../components/Campaign'

const baseURL = import.meta.env.VITE_WP_API_BASEURL;

const Home = () => {
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
    <>
      <Seo
        title='Home - HUHA Summative'
        description='Browse HUHAs website'
        url={window.location.href}
      />
      <HomeHeader/>
      <div className='huha-home-section'>

        <div className='huha-description'>

          <div className='left-text-huha-description'>
            <h3>HUHA is a leading animal rescue supporting the welfare of dogs, cats, horses, and other animals across New Zealand.</h3>
            <p>HUHA - Helping You Help Animals - is a charitable trust (#CC47396) and New Zealand’s leading no-kill animal shelter. Since our founding in 2001, we’ve advocated for, rescued, rehabilitated, rehomed and released tens of thousands of domestic and wild animals in need. Together, we save lives!</p>
          </div>

          <div className='right-img-huha-description'/>

        </div>

        <div className='four-card-sections'>
          <h1>Advice</h1>
          <div className='home-four-card-container four-column-grid-container'>
            {/* Advice Card #1 */}
            <div className='home-card home-advice-card'>
              <div className='home-card-img'/>
              <h3>Hurt | Injured| Lost</h3>
              <Link to={`/support`} state={{ shownComponent: 'Help / Advice' }}>
                <button className='primary-button'>Find Out More</button>
              </Link>
              
            </div>

            {/* Advice Card #2 */}
            <div className='home-card home-advice-card'>
              <div className='home-card-img'>
              </div>
              <h3>Rehome</h3>
              <Link to='/support' state={{ shownComponent: 'Help / Advice' }}>
                <button className='primary-button'>Find Out More</button>
              </Link>
            </div>

            {/* Advice Card #3 */}
            <div className='home-card home-advice-card'>
              <div className='home-card-img'/>
              <h3>Disaster Preparation</h3>
              <Link to={`/support`} state={{ shownComponent: 'Help / Advice' }}>
                <button className='primary-button'>Find Out More</button>
              </Link>
            </div>

            {/* Advice Card #4 */}
            <div className='home-card home-advice-card'>
              <div className='home-card-img'/>
              <h3>Abused Animal</h3>
              <Link to={`/support`} state={{ shownComponent: 'Help / Advice' }}>
                <button className='primary-button'>Find Out More</button>
              </Link>
            </div>
          </div>
        </div>

        <div className='campaign-section customize-section-color'>
          <Campaign/>
        </div>

        <div className='four-card-sections'>
          <div className='home-four-card-container four-column-grid-container'>
            {/* main-features Card #1 */}
            <div className='home-card home-main-features-card'>
              <div className='home-card-img'/>
              <h3>Adopt</h3>
              <Link to={`/adopt`}>
                <button className='primary-button'>Find Out More</button>
              </Link>
              
            </div>

            {/* main-features Card #2 */}
            <div className='home-card home-main-features-card'>
              <div className='home-card-img'>
              </div>
              <h3>Donate</h3>
              <Link to='/donate'>
                <button className='primary-button'>Find Out More</button>
              </Link>
            </div>

            {/* main-features Card #3 */}
            <div className='home-card home-main-features-card'>
              <div className='home-card-img'/>
              <h3>Volunteer</h3>
              <Link to={`/support`}>
                <button className='primary-button'>Find Out More</button>
              </Link>
            </div>

            {/* main-features Card #4 */}
            <div className='home-card home-main-features-card'>
              <div className='home-card-img'/>
              <h3>Shop</h3>
              <Link to={`/shop`}>
                <button className='primary-button'>Find Out More</button>
              </Link>
            </div>
          </div>
        </div>

        <div className='home-sponsor-container'>
        { loading ? <p>Loading...</p> : <Sponsors sponsors={sponsors}/>}
        </div>

      </div>
      

    </>
    
  )
}

export default Home
