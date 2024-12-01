// Imports
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

// Subnav Component for the navbar within certain pages to hide and show hidden components
const AboutSubNav = ({setShownComponent}) => {
  const [activeLink, setActiveLink] = useState('');

  const handleClick = (componentName) => {
    setActiveLink(componentName); 
    setShownComponent(componentName); 
  };

  return (
    <>
      <div className='subnav-container'>

        {/* Subnav Link 1 */}
        <li>
          <NavLink 
            onClick={() => handleClick('Our Purpose')}
            className={activeLink === 'Our Purpose' ? 'active-link' : ''}
            >
            Our Purpose

          </NavLink>
        </li>
      
        {/* Subnav Link 2 */}
        <li>
          <NavLink 
            onClick={() => handleClick('What We Do')}
            className={activeLink === 'What We Do' ? 'active-link' : ''}
            >
            What We Do

          </NavLink>
        </li>

        {/* Subnav Link 3 */}
        <li>
          <NavLink 
            onClick={() => handleClick('Current Campaign')}
            className={activeLink === 'Current Campaign' ? 'active-link' : ''}
            >
            Current Campaign

          </NavLink>
        </li>

        {/* Subnav Link 4 */}
        <li>
          <NavLink 
            onClick={() => handleClick('History')}
            className={activeLink === 'History' ? 'active-link' : ''}
            >
            History

          </NavLink>
        </li>

        {/* Subnav Link 1 */}
        <li>
          <NavLink 
            onClick={() => handleClick('Trustees')}
            className={activeLink === 'Trustees' ? 'active-link' : ''}
            >
            Trustees

          </NavLink>
        </li>

        {/* Subnav Link 5 */}
        <li>
          <NavLink 
            onClick={() => handleClick('Sponsors')}
            className={activeLink === 'Sponsors' ? 'active-link' : ''}
            >
            Sponsors

          </NavLink>
        </li>

      </div>
    </>
  )
}

export default AboutSubNav
