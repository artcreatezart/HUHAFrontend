import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const ImpactSubNav = ({setShownComponent}) => {

  return (
    <>
      <div className='subnav-container'>
        <li>
          <NavLink 
            onClick={() => setShownComponent('Disaster Response')}
            className={({isActive}) => (isActive ? 'active-link' : '')}
            >
            Disaster Response

          </NavLink>
        </li>
      

        <li>
          <NavLink 
            onClick={() => setShownComponent('Welfare Reform')}
            className={({isActive}) => (isActive ? 'active-link' : '')}
            >
            Welfare Reform

          </NavLink>
        </li>

        <li>
          <NavLink 
            onClick={() => setShownComponent('Animal Rescue')}
            className={({isActive}) => (isActive ? 'active-link' : '')}
            >
            Animal Rescue

          </NavLink>
        </li>

        <li>
          <NavLink 
            onClick={() => setShownComponent('Animal Exploitation')}
            className={({isActive}) => (isActive ? 'active-link' : '')}
            >
            Animal Exploitation

          </NavLink>
        </li>

        <li>
          <NavLink 
            onClick={() => setShownComponent('Education')}
            className={({isActive}) => (isActive ? 'active-link' : '')}
            >
            Education

          </NavLink>
        </li>

      </div>
    </>
  )
}

export default ImpactSubNav
