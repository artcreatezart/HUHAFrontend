import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

const baseURL = import.meta.env.VITE_WP_BASEURL

const Footer = () => {
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
    // Footer Content Starts
    <footer className='footer customize-section-color'>
        <p className='footer-address'>
            Charitable Trust #CC47396
            <br/><br/>
            Address: CMB 26 Kaitoke, Upper Hutt, 5018
        </p>

        <NavLink to='/' className='nav-logo'>
                <img src={logoURL} alt='Website Logo'/>
        </NavLink>

        <div className='footer-icon-container'>
            <a href='https://www.instagram.com/helpingyouhelpanimals/?hl=en' className='footer-social-icon' target='_blank'>
                <FaInstagram/>
            </a>

            <a href='https://www.facebook.com/HelpingYouHelpAnimals/'
            className='footer-social-icon' target='_blank'>
                <FaFacebook />
            </a>
        </div>

        <p className='footer-contact'>
            (04) 392-3232
            <br/><br/>
            enquire.huha@gmail.com
        </p>
    </footer>
  )
}

export default Footer
