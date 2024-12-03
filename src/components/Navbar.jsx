import { FaDonate, FaPaw } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { CartContext } from '../context/CartContext';

const baseURL = import.meta.env.VITE_WP_BASEURL

const Navbar = () => {
    const {cart} = useContext(CartContext);
    const [isOpen, setIsOpen] = useState(false);
    const [logoURL, setLogoURL] = useState('');

    const toggleMenu = () => {
        setIsOpen(!isOpen); 
        document.body.style.overflow = isOpen ? 'auto': 'hidden';
    }

    const closeMenu = () => {
        setIsOpen(false);
        document.body.style.overflow = 'auto';
    }

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
        <nav className={`navbar customize-section-color ${isOpen ? 'menu-open' : ''}`}>
            <NavLink to='/' onClick={closeMenu} className='nav-logo'>
                
                <img src={logoURL} alt='Website Logo'/>
            </NavLink>

            <div className='menu-icon' onClick={toggleMenu}>
                <div className={`bar bar1 ${isOpen ? 'toggle' : ''}`}></div>
                <div className={`bar bar2 ${isOpen ? 'toggle' : ''}`}></div>
                <div className={`bar bar3 ${isOpen ? 'toggle' : ''}`}></div>
            </div>

            <div className={`navbar-links ${isOpen ? 'active' : ''} ${isOpen ? 'menu-open-background' : ''}`}>

                <li>
                    <NavLink
                        to='/'
                        onClick={closeMenu}
                        className={({isActive}) => (isActive ? 'active-link' : '')}
                    >
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to='/about'
                        onClick={closeMenu}
                        className={({isActive}) => (isActive ? 'active-link' : '')}
                    >
                        About
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to='/ourimpact'
                        onClick={closeMenu}
                        className={({isActive}) => (isActive ? 'active-link' : '')}
                    >
                        Our Impact
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to='/support'
                        onClick={closeMenu}
                        className={({isActive}) => (isActive ? 'active-link' : '')}
                    >
                        Support
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to='/shop'
                        onClick={closeMenu}
                        className={({isActive}) => (isActive ? 'active-link' : '')}
                    >
                        Shop
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to='/cart'
                        onClick={closeMenu}
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
                        onClick={closeMenu}
                        className={({isActive}) => (isActive ? 'active-link' : '')}
                    >
                        Contact
                    </NavLink>
                </li>

                <NavLink 
                    to='/adopt'
                    onClick={closeMenu}
                    >
                        <button className='primary-button'>
                            <FaPaw/>
                            Adopt

                        </button>

                </NavLink>

                
                <NavLink 
                    to='/donate'
                    onClick={closeMenu}
                    >
                        <button className='secondary-button'>
                            <FaDonate/>
                            Donate

                        </button>

                </NavLink>

            </div>
        
        </nav>
        {isOpen && <div onClick={closeMenu}></div>}
    </header>
    // Navbar Content Ends
  )
}

export default Navbar
