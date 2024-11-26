import React from 'react'
import { FaSlideshare, FaPaw, FaShoePrints, FaUsers} from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa6";

const HomeHeader = ({ title, image_url }) => {
  return (
    <div className='home-header-section' style={{ backgroundImage: `linear-gradient( rgba( 52,	73,	102, 0.4 ), rgba( 52,	73,	102, 0.25 )), url(${ image_url })`}}>
        <h1>Helping you help animals<br/><br/><span>together we save lives</span></h1>
        <div className='home-header-core-values-container'>
            {/* Core values container found on bottom line of home header image */}
            <div className='home-header-core-value'>
                <FaSlideshare className='core-value-icon'/>
                <p>Leave it better than we found it</p>
            </div>
            <div className='home-header-core-value'>
                <FaPaw className='core-value-icon'/>
                <p>Every Animal matters</p>
            </div>
            <div className='home-header-core-value'>
                <FaShoePrints className='core-value-icon'/>
                <p>Get amongst it</p>
            </div>
            <div className='home-header-core-value'>
                <FaThumbsUp className='core-value-icon'/>
                <p>We can and we will</p>
            </div>
            <div className='home-header-core-value'>
                <FaUsers className='core-value-icon'/>
                <p>We dont let human issues affect outcomes</p>
            </div>
        </div>
    </div>
  )
}

export default HomeHeader
