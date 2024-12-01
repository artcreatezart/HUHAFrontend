import { FaDonate, FaPaw } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { CartContext } from '../context/CartContext';

const baseURL = import.meta.env.VITE_WP_BASEURL

const Navbar = () => {
    const {cart} = useContext(CartContext);
    const [logoURL, setLogoURL] = useState('')

    useEffect(() => {
        const fetchNavLogo = async () => {
            try {
                const response = await axios.get(`${baseURL}wp-json/custom/v1/nav-logo`)
                if (response.status === 200) {
                    const data = response.data;
                    setLogoURL(data[0]);
                } else {
                    console.error('Failed to fetch logo URL');
                }
            } catch (error) {
                console.error('Error fetching logo', error)
            }
        };

        fetchNavLogo();
    }, [])
  return (
    // Navbar Content Starts f
    <header>
        <nav className='navbar customize-section-color'>
            <NavLink to='/' className='nav-logo'>
                <img src={logoURL} alt='Website Logo'/>
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
                        {cart.length === 0 ? (

                        <div className='no-item-cart'>Cart</div>
                    ) : (
                        <ul className='cart-icon'>
                                <li >
                                    Cart
                                    <span>({cart.length})</span>
                                </li>

                        </ul>
                    )} 
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
