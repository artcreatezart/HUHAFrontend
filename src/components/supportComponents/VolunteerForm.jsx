import { useState } from 'react';
import axios from 'axios';
// import icons
import { TiTick } from 'react-icons/ti';
import { TfiFaceSad } from 'react-icons/tfi';
import { FaPaw } from 'react-icons/fa';

const volunteerFormEndpoint = import.meta.env.VITE_APP_WP_API_VOLUNTEER_FORM_ENDPOINT;

const VolunteerForm = () => {
    const [submitted, setSubmitted] = useState( false );
    const [error, setError] = useState( false );
  
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [type, setType] = useState('');
    const [number, setNumber] = useState('');
    const [availablity, setAvailability] = useState('');
    const [why, setWhy] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      const volunteerForm = new FormData();
  
      volunteerForm.append('your-name', name);
      volunteerForm.append('your-email', email);
      volunteerForm.append('your-number', number);
      volunteerForm.append('your-availability', availablity);
      volunteerForm.append('your-type', type);
      volunteerForm.append('your-why', why);
      axios.post(volunteerFormEndpoint, volunteerForm, {
        header: {
          'Content-Type': 'application/x-www-form-urlencoded',
        }
      })
      .then(( response ) => {
        console.log( response );
        setSubmitted( true );
      }) 
      .catch(( error ) => {
        console.log( error );
        setError( true );
      });
    }
  
    if ( submitted ) {
      //return success message
      return (
        <>
          <div className='success-text'>
            <TiTick className='sucess-icon' />
            <h3>FORM SENT!</h3> 
            <p>Thank you for your application! <br/>
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
        className='form-containers two-column-grid-container modal-form-container'
      >
        <h1 className='form-header'>Volunteer Form</h1>
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
          <label htmlFor='availability'>Availability: (How many hours?)</label>
          <textarea 
            name='availability'
            onChange={( event ) => setAvailability( event.target.value )}
            value={availablity }
            required
          />
        </div>

        <div className='input'>
          <label htmlFor='number'>Phone Number:</label>
          <input 
          type='tel'
          name='number'
          onChange={( event ) => setNumber(event.target.value)}
          value={ number }
          required />
        </div>

        <div className='input'>
          <label htmlFor='type'>Type of Volunteering:</label>
            <select 
            name='type' 
            id='type' 
            onChange={(event) => setType(event.target.value)} 
            value={type} 
            required
          >
            <option value='' disabled> Select an option</option>
            <option value='wellington cat/small animal shelter'>Wellington cat/small animal shelter</option>
            <option value='wellington dog shelter'>Wellington dog shelter</option>
            <option value='wellington horse shelter/option'>Wellington horse shelter/option</option>
            <option value='op shop petone'>Op Shop Petone</option>
            <option value='op shop carterton'>Op Shop Carerton</option>
            <option value='op shop otaki'>Op Shop Otaki</option>
            <option value='other wolunteer opportunities<'>Other Volunteer Opportunities</option>
            
          </select>
        </div>

        <div className='input'>
          <label htmlFor='why'>Why do you want to volunteer:</label>
          <textarea 
            name='why'
            onChange={( event ) => setWhy( event.target.value )}
            value={ why }
            required
          />
        </div>
  
        <div className='send-message-button'>
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

  export default VolunteerForm