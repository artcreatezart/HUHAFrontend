// Imports
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

// Subnav Component for the navbar within certain pages to hide and show hidden components
const AdoptSubNav = ({setShownComponent}) => {
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
            onClick={() => handleClick('Animals Available To Adopt')}
            className={activeLink === 'Animals Available To Adopt' ? 'active-link' : ''}
            >
            Animals Available To Adopt
          </NavLink>
        </li>
      
        {/* Subnav Link 2 */}
        <li>
          <NavLink 
            onClick={() => handleClick('Adoption Process')}
            className={activeLink === 'Adoption Process' ? 'active-link' : ''}
            >
            Adoption Process
          </NavLink>
        </li>

        {/* Subnav Link 3 */}
        <li>
          <NavLink 
            onClick={() => handleClick('Adoption Requirments')}
            className={activeLink === 'Adoption Requirments' ? 'active-link' : ''}
            >
            Adoption Requirments
          </NavLink>
        </li>


        {/* Subnav Link 4 */}
        <li>
          <NavLink 
            onClick={() => handleClick('Adoption Fees')}
            className={activeLink === 'Adoption Fees' ? 'active-link' : ''}
            >
            Adoption Fees
          </NavLink>
        </li>

      </div>
    </>
  )
}

export default AdoptSubNav
