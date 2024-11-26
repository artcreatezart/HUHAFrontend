import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const SupportSubNav = ({setShownComponent}) => {

  return (
    <>
      <div className='subnav-container'>
        <li>
          <NavLink 
            onClick={() => setShownComponent('Volunteering')}
            className={({isActive}) => (isActive ? 'active-link' : '')}
            >
            Volunteering

          </NavLink>
        </li>
      

        <li>
          <NavLink 
            onClick={() => setShownComponent('Fundraise For HUHA')}
            className={({isActive}) => (isActive ? 'active-link' : '')}
            >
            Fundraise For HUHA

          </NavLink>
        </li>

        <li>
          <NavLink 
            onClick={() => setShownComponent('Support A Animal')}
            className={({isActive}) => (isActive ? 'active-link' : '')}
            >
            Support A Animal

          </NavLink>
        </li>

        <li>
          <NavLink 
            onClick={() => setShownComponent('Help / Advice')}
            className={({isActive}) => (isActive ? 'active-link' : '')}
            >
            Help / Advice

          </NavLink>
        </li>

        <li>
          <NavLink 
            onClick={() => setShownComponent('Bequest')}
            className={({isActive}) => (isActive ? 'active-link' : '')}
            >
            Bequest

          </NavLink>
        </li>

      </div>
    </>
  )
}

export default SupportSubNav
