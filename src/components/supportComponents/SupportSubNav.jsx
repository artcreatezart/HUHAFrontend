import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const SupportSubNav = ({setShownComponent}) => {
  const [activeLink, setActiveLink] = useState('');

  const handleClick = (componentName) => {
    setActiveLink(componentName); 
    setShownComponent(componentName); 
  };

  return (
    <>
      <div className='subnav-container auto-grid-sub-nav'>
        <li>
          <NavLink 
            onClick={() => handleClick('Volunteering')}
            className={activeLink === 'Volunteering' ? 'active-link' : ''}
            >
            Volunteering

          </NavLink>
        </li>
      

        <li>
          <NavLink 
            onClick={() => handleClick('Fundraise For HUHA')}
            className={activeLink === 'Fundraise For HUHA' ? 'active-link' : ''}
            >
            Fundraise For HUHA

          </NavLink>
        </li>

        <li>
          <NavLink 
            onClick={() => handleClick('Support A Animal')}
            className={activeLink === 'Support A Animal' ? 'active-link' : ''}
            >
            Support A Animal

          </NavLink>
        </li>

        <li>
          <NavLink 
            onClick={() => handleClick('Help / Advice')}
            className={activeLink === 'Help / Advice' ? 'active-link' : ''}
            >
            Help / Advice

          </NavLink>
        </li>

        <li>
          <NavLink 
            onClick={() => handleClick('Bequest')}
            className={activeLink === 'Bequest' ? 'active-link' : ''}
            >
            Bequest

          </NavLink>
        </li>

      </div>
    </>
  )
}

export default SupportSubNav
