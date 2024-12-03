import { useState } from 'react';
import axios from 'axios';
// import icons
import { TiTick } from 'react-icons/ti';
import { TfiFaceSad } from 'react-icons/tfi';
import { FaPaw } from 'react-icons/fa';

const adoptFormEndpoint = import.meta.env.VITE_APP_WP_API_ADOPT_FORM_ENDPOINT;


const AdoptForm = () => {
    const [submitted, setSubmitted] = useState( false );
    const [error, setError] = useState( false );
  
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [type, setType] = useState('');
    const [requirments, setRequirments] = useState('');
    const [waitlist, setWaitlist] = useState('');
    const [interest, setInterest] = useState('');
    const [other, setOther] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      const adoptForm = new FormData();
  
      adoptForm.append('your-name', name);
      adoptForm.append('your-email', email);
      adoptForm.append('your-number', number);
      adoptForm.append('your-type', type);
      adoptForm.append('your-requirments', requirments);
      adoptForm.append('your-waitlist', waitlist);
      adoptForm.append('your-interest', interest);
      adoptForm.append('your-other', other);
      axios.post(adoptFormEndpoint, adoptForm, {
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
        <h1 className='form-header'>Adopt Form</h1>
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
          <label htmlFor='number'>Phone Number:</label>
          <input 
          type='tel'
          name='number'
          onChange={( event ) => setNumber(event.target.value)}
          value={ number }
          required />
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
          <label htmlFor='type'>Type of Animal:</label>
            <select 
            name='type' 
            id='type' 
            onChange={(event) => setType(event.target.value)} 
            value={type} 
            required
          >
            <option value='' disabled> Select an option</option>
            <option value='dog'>Dog</option>
            <option value='cat'>Cat</option>
            <option value='horse'>Horse</option>
            <option value='rural'>Rural Animal</option>
            <option value='small'>Small Animal</option>
            <option value='any'>Any</option>
          </select>
        </div>
  
        <div className='input'>
          <label htmlFor='requirments'>Have you read about the HUHA adoption process and requirements for different types of animals?:</label>
          <textarea 
            name='requirments'
            onChange={( event ) => setRequirments( event.target.value )}
            value={ requirments }
            required
          />
        </div>

        <div className='input'>
          <label htmlFor='waitlist'>If the animal you are interested in isn’t available any longer do you want to be put on a waitlist for a similar animal?:</label>
          <textarea 
            name='waitlist'
            onChange={( event ) => setWaitlist( event.target.value )}
            value={ waitlist }
            required
          />
        </div>

        <div  className='input'>
          <label htmlFor='interest'>Is there a particular animal you’re interested in adopting?</label>
          <input
            type='text'
            name='interest'
            onChange={( event ) => setInterest( event.target.value )}
            value={ interest }
            required
          />
        </div>

        <div className='input'>
          <label htmlFor='other'>Anything else you want us to know?</label>
          <textarea 
            name='other'
            onChange={( event ) => setOther( event.target.value )}
            value={ other }
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

  export default AdoptForm