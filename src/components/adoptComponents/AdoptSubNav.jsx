import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const AdoptSubNav = ({setShownComponent}) => {

  return (
    <>
      <div className='subnav-container'>
        <li>
          <NavLink 
            onClick={() => setShownComponent('Animals Available To Adopt')}
            className={({isActive}) => (isActive ? 'active-link' : '')}
            >
            Animals Available To Adopt

          </NavLink>
        </li>
      

        <li>
          <NavLink 
            onClick={() => setShownComponent('Adoption Process')}
            className={({isActive}) => (isActive ? 'active-link' : '')}
            >
            Adoption Process

          </NavLink>
        </li>

        <li>
          <NavLink 
            onClick={() => setShownComponent('Adoption Requirments')}
            className={({isActive}) => (isActive ? 'active-link' : '')}
            >
            Adoption Requirments

          </NavLink>
        </li>

        <li>
          <NavLink 
            onClick={() => setShownComponent('Adoption Fees')}
            className={({isActive}) => (isActive ? 'active-link' : '')}
            >
            Adoption Fees

          </NavLink>
        </li>

      </div>
    </>
  )
}

export default AdoptSubNav
