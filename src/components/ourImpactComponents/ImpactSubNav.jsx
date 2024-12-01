import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const ImpactSubNav = ({setShownComponent}) => {
  const [activeLink, setActiveLink] = useState('');

  const handleClick = (componentName) => {
    setActiveLink(componentName); 
    setShownComponent(componentName); 
  };

  return (
    <>
      <div className='subnav-container'>
        <li>
          <NavLink 
            onClick={() => handleClick('Disaster Response')}
            className={activeLink === 'Disaster Response' ? 'active-link' : ''}
            >
            Disaster Response

          </NavLink>
        </li>
      

        <li>
          <NavLink 
            onClick={() => handleClick('Welfare Reform')}
            className={activeLink === 'Welfare Reform' ? 'active-link' : ''}
            >
            Welfare Reform

          </NavLink>
        </li>

        <li>
          <NavLink 
            onClick={() => handleClick('Animal Rescue')}
            className={activeLink === 'Animal Rescue' ? 'active-link' : ''}
            >
            Animal Rescue

          </NavLink>
        </li>

        <li>
          <NavLink 
            onClick={() => handleClick('Animal Exploitation')}
            className={activeLink === 'Animal Exploitation' ? 'active-link' : ''}
            >
            Animal Exploitation

          </NavLink>
        </li>

        <li>
          <NavLink 
            onClick={() => handleClick('Education')}
            className={activeLink === 'Education' ? 'active-link' : ''}
            >
            Education

          </NavLink>
        </li>

      </div>
    </>
  )
}

export default ImpactSubNav
