// Imports
import { NavLink } from 'react-router-dom';

// Subnav Component for the navbar within certain pages to hide and show hidden components
const AdoptSubNav = ({setShownComponent}) => {

  return (
    <>
      <div className='subnav-container'>

        {/* Subnav Link 1 */}
        <li>
          <NavLink 
            onClick={() => setShownComponent('Animals Available To Adopt')}
            className={({isActive}) => (isActive ? 'active-link' : '')}
            >
            Animals Available To Adopt
          </NavLink>
        </li>
      
        {/* Subnav Link 1 */}
        <li>
          <NavLink 
            onClick={() => setShownComponent('Adoption Process')}
            className={({isActive}) => (isActive ? 'active-link' : '')}
            >
            Adoption Process
          </NavLink>
        </li>

        {/* Subnav Link 1 */}
        <li>
          <NavLink 
            onClick={() => setShownComponent('Adoption Requirments')}
            className={({isActive}) => (isActive ? 'active-link' : '')}
            >
            Adoption Requirments
          </NavLink>
        </li>


        {/* Subnav Link 1 */}
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
