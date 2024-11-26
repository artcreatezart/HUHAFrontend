import React from 'react'
import HomeHeader from '../components/aboutComponents/HomeHeader'
import Campaign from '../components/Campaign'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <HomeHeader/>
      <div className='huha-home-section'>

        <div className='huha-description'>

          <div className='left-text-huha-description'>
            <h3>HUHA is a leading animal rescue supporting the welfare of dogs, cats, horses, and other animals across New Zealand.</h3>
            <p>HUHA - Helping You Help Animals - is a charitable trust (#CC47396) and New Zealand’s leading no-kill animal shelter. Since our founding in 2001, we’ve advocated for, rescued, rehabilitated, rehomed and released tens of thousands of domestic and wild animals in need. Together, we save lives!</p>
          </div>

          <div className='right-img-huha-description'/>

        </div>

        <div className='home-advice-section'>
          <h1>Advice</h1>
          <div className='home-advice-card-container'>
            {/* Advice Card #1 */}
            <div className='advice-card'>
              <div className='advice-card-img'/>
              <h3>Hurt | Injured| Lost</h3>
              <Link to={`/support`}>
              <button className='primary-button'>Find Out More</button>
              </Link>
              
            </div>

            {/* Advice Card #2 */}
            <div className='advice-card'>
              <div className='advice-card-img'>
              </div>
              <h3>Rehome</h3>
              <button className='primary-button'>Find Out More</button>
            </div>

            {/* Advice Card #3 */}
            <div className='advice-card'>
              <div className='advice-card-img'/>
              <h3>Disaster Preparation</h3>
              <button className='primary-button'>Find Out More</button>
            </div>

            {/* Advice Card #4 */}
            <div className='advice-card'>
              <div className='advice-card-img'/>
              <h3>Abused Animal</h3>
              <button className='primary-button'>Find Out More</button>
            </div>
          </div>
        </div>

        <div className='campaign-section customize-section-color'>
          <Campaign/>
        </div>

      </div>
      

    </>
    
  )
}

export default Home
