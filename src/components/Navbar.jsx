import React from 'react'
import { FaDonate, FaPaw } from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    // Navbar Content Starts
    <header>
        <nav className='navbar customize-section-color'>
            <NavLink to='/' className='logo'>
                logo
            </NavLink>

            <div className='navbar-links'>
                <li>
                    <NavLink
                        to='/about'
                        className={({isActive}) => (isActive ? 'active-link' : '')}
                    >
                        About
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to='/ourimpact'
                        className={({isActive}) => (isActive ? 'active-link' : '')}
                    >
                        Our Impact
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to='/support'
                        className={({isActive}) => (isActive ? 'active-link' : '')}
                    >
                        Support
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to='/shop'
                        className={({isActive}) => (isActive ? 'active-link' : '')}
                    >
                        Shop
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to='/cart'
                        className={({isActive}) => (isActive ? 'active-link' : '')}
                    >
                        Cart
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to='/contact'
                        className={({isActive}) => (isActive ? 'active-link' : '')}
                    >
                        Contact
                    </NavLink>
                </li>

                <NavLink 
                    to='/adopt'
                    className='secondary-button'
                    >
                        <button>
                            <FaPaw/>
                            Adopt

                        </button>

                </NavLink>

                
                <NavLink 
                    to='/donate'
                    className='secondary-button'
                    >
                        <button>
                            <FaDonate/>
                            Donate

                        </button>

                </NavLink>

            </div>
        
        </nav>
    </header>
    // Navbar Content Ends
  )
}

export default Navbar
