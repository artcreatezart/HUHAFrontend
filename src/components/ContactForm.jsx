import { useState } from 'react';
import axios from 'axios';
// import icons
import { TiTick } from "react-icons/ti";
import { TfiFaceSad } from "react-icons/tfi";
import { FaPaw } from 'react-icons/fa';

const contactFormEndpoint = import.meta.env.VITE_APP_WP_API_CONTACT_FORM_ENDPOINT;


const ContactForm = () => {
    const [submitted, setSubmitted] = useState( false );
    const [error, setError] = useState( false );
  
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [subject, setSubject] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      const contactForm = new FormData();
  
      contactForm.append('your-name', name);
      contactForm.append('your-email', email);
      contactForm.append('your-subject', subject);
      contactForm.append('your-message', message);
      axios.post(contactFormEndpoint, contactForm, {
        header: {
          'Content-Type': 'application/x-www-form-urlencoded',
        }
      })
      .then((response) => {
        setSubmitted(true);
      }) 
      .catch((error) => {
        setError(true);
      });
    }
  
    if ( submitted ) {
      //return success message
      return (
        <>
          <div className='success-text'>
            <TiTick className='sucess-icon' />
            <h3>EMAIL SENT!</h3> 
            <p>Thank you for your message! <br/>
                We will be in touch soon!</p>
          </div>
        </>
        
      )
    }
  
    if ( error ) {
      return (
        <>
          <div className='error-text'>
            
            <h3><TfiFaceSad /> Error</h3>
            <p>Sorry! We were unable to send your message<br/><br/>Please try again soon</p>
            
          </div>
        </>
        
      )
    }
  
    // Form:
    return (
      <form 
        onSubmit={ handleSubmit }
        method='POST'
        className='form-containers two-column-grid-container contact-form'
      >
        <div>
          <div  className='input'>
            <label htmlFor='name'>Name:</label>
            <input
              type='text'
              name='name'
              onChange={( event ) => setName( event.target.value )}
              value={ name }
              required
            />
          </div>
    
          <div className='input'>
            <label htmlFor='email'>Email:</label>
            <input 
            type='email'
            name='email'
            onChange={( event ) => setEmail(event.target.value)}
            value={ email }
            required />
          </div>

          <div className='input'>
            <label htmlFor='subject'>Subject:</label>
              <select 
              name='subject' 
              id='subject' 
              onChange={(event) => setSubject(event.target.value)} 
              value={subject} 
              required
            >
              <option value='' disabled> Select an option</option>
              <option value='volunteering'>Volunteering</option>
              <option value='bequest'>Bequest</option>
              <option value='adoption'>Adoption</option>
              <option value='sanctuary'>Sanctuary</option>
              <option value='donation'>Donation</option>
              <option value='shop'>Shop</option>
              <option value='other'>Other Please provide more info within message</option>
              
            </select>
          </div>

        </div>
        
  
        <div className='input message-inputå'>
          <label htmlFor='message'>Message:</label>
          <textarea 
            name='message'
            onChange={( event ) => setMessage( event.target.value )}
            value={ message }
            required
          />
        </div>

        
  
        <div className='send-message-button-container'>
          <button
            className='primary-button send-message-button'
            type='submit'
          >
            <FaPaw/>
            Send Message
          </button>
        </div>
  
      </form>
    )
  }

  export default ContactForm