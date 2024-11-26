import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const AboutSubNav = ({setShownComponent}) => {

  return (
    <>
      <div className='subnav-container'>
        <li>
          <NavLink 
            onClick={() => setShownComponent('Our Purpose')}
            className={({isActive}) => (isActive ? 'active-link' : '')}
            >
            Our Purpose

          </NavLink>
        </li>
      

        <li>
          <NavLink 
            onClick={() => setShownComponent('What We Do')}
            className={({isActive}) => (isActive ? 'active-link' : '')}
            >
            What We Do

          </NavLink>
        </li>

        <li>
          <NavLink 
            onClick={() => setShownComponent('Current Campaign')}
            className={({isActive}) => (isActive ? 'active-link' : '')}
            >
            Current Campaign

          </NavLink>
        </li>

        <li>
          <NavLink 
            onClick={() => setShownComponent('History')}
            className={({isActive}) => (isActive ? 'active-link' : '')}
            >
            History

          </NavLink>
        </li>

        <li>
          <NavLink 
            onClick={() => setShownComponent('Trustees')}
            className={({isActive}) => (isActive ? 'active-link' : '')}
            >
            Trustees

          </NavLink>
        </li>

        <li>
          <NavLink 
            onClick={() => setShownComponent('Sponsors')}
            className={({isActive}) => (isActive ? 'active-link' : '')}
            >
            Sponsors

          </NavLink>
        </li>

      </div>
    </>
  )
}

export default AboutSubNav
