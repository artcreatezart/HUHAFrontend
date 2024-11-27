import PageHeader from '../components/PageHeader'
import Seo from '../components/Seo'
import { Link } from 'react-router-dom'
import DonateForm from '../components/DonateForm'

const Donate = () => {
  return (
    <>
    <Seo
      title='Donate - HUHA Summative'
      description='We would appreciate any kind of help or donation so we can continue heloing animals'
      url={window.location.href}
    />
    <PageHeader/>
    <div className='donate-container subnav-section-container'>
      <div className='donate-info-container'>
        <div className='donate-descript-info-container'>
          <h3>Donate to make a difference for animals</h3>
          <p>HUHA is an incorporated trust (HUHA – Helping You Help Animals Trust) and receives no direct government funding. We rely on donations and gifts from individuals and the private sector, and grants from foundations and trusts, to power our work and save lives.</p>
        </div>
        <div className='donate-payment-info-container'>
          <h3>Other Payment Methods</h3>
          <div className='four-column-grid-container'>
            <div className='payment-method-img'/>
            <div className='payment-method-img'/>
            <div className='payment-method-img'/>
            <div className='payment-method-img'/>
          </div>
          <Link to='/contact'>
            <button className='primary-button'>Contact For Details</button>
          </Link>
        </div>
      </div>
      <DonateForm/>
    </div>
  </>
  )
}

export default Donate
