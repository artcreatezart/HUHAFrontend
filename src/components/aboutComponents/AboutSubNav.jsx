// Imports
import { NavLink } from 'react-router-dom';

// Subnav Component for the navbar within certain pages to hide and show hidden components
const AboutSubNav = ({setShownComponent}) => {

  return (
    <>
      <div className='subnav-container'>

        {/* Subnav Link 1 */}
        <li>
          <NavLink 
            onClick={() => setShownComponent('Our Purpose')}
            className={({isActive}) => (isActive ? 'active-link' : '')}
            >
            Our Purpose

          </NavLink>
        </li>
      
        {/* Subnav Link 2 */}
        <li>
          <NavLink 
            onClick={() => setShownComponent('What We Do')}
            className={({isActive}) => (isActive ? 'active-link' : '')}
            >
            What We Do

          </NavLink>
        </li>

        {/* Subnav Link 3 */}
        <li>
          <NavLink 
            onClick={() => setShownComponent('Current Campaign')}
            className={({isActive}) => (isActive ? 'active-link' : '')}
            >
            Current Campaign

          </NavLink>
        </li>

        {/* Subnav Link 4 */}
        <li>
          <NavLink 
            onClick={() => setShownComponent('History')}
            className={({isActive}) => (isActive ? 'active-link' : '')}
            >
            History

          </NavLink>
        </li>

        {/* Subnav Link 1 */}
        <li>
          <NavLink 
            onClick={() => setShownComponent('Trustees')}
            className={({isActive}) => (isActive ? 'active-link' : '')}
            >
            Trustees

          </NavLink>
        </li>

        {/* Subnav Link 5 */}
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
