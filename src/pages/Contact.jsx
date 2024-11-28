import PageHeader from '../components/PageHeader'
import Seo from '../components/Seo'
import ContactForm from '../components/ContactForm'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <>
      <Seo
        title='Contact - HUHA Summative'
        description='Get In touch! We would love to hear from you.'
        url={window.location.href}
      />
      <PageHeader title='Contact' image_url='/header-bg-imgs/contact-img.webp'/>
      <div className='contact-container subnav-section-container'>
        <div className='contact-inforamtion-container'>
          <div className='shelter-contact-info'>
            <h2>Animal Shelters</h2>
            <p>Adopt an animal in need or volunteer to help us care for, socialise, exercise and improve the lives of our shelter animals until they find their forever homes.</p>
            <div className='shelter-contact-groups two-column-grid'>
              <div className='shelter-contact-box'>
                <h3>HUHA cat and small animal shelter and vet clinic</h3>
                <p><span className='bold-text'>Public hours:</span> by appointment</p>
                <p>Catteam.huha@gmail.com <br/>
                  04 392 3232</p>
              </div>
              <div className='shelter-contact-box'>
                <h3>HUHA Otaki dog shelter</h3>
                <p><span className='bold-text'>Public hours:</span>  Wed to Sun from 12 - 3pm or by appointment.</p>
                <p>Otaki.huha@gmail.com<br/>
                    04 392 3232</p>
              </div>
              <div className='shelter-contact-box'>
                <h3>Media enquiries</h3>
                <p>
                  enquire.huha@gmail.com <br/>
                (04) 392-3232</p>
              </div>
              <div className='shelter-contact-box'>
                <h3>Mailing address</h3>
                <p>HUHA – Helping You Help Animals Trust<br/>
                    Charitable Trust #CC47396<br/>
                    Postal Address: CMB 26 Kaitoke, Upper Hutt, 5018</p>
              </div>
            </div>
          </div>
        </div>
        <div className='donate-goods-contact-container'>
          <h2>Donate Goods and Shop</h2>
          <p>Help support animals by donating your gently used clothing and household items to be sold in our op shops. Volunteer to work at our op shop so more of our profits can go directly to fund animal care. Shop our charity boutiques or online and delight in a selection of great finds. Together we save lives.</p>
          <div className='donate-good-button'>
            <Link to='/shop'>
              <button className='primary-button'>Shop</button>
            </Link>
            <Link to='/support'>
              <button className='primary-button'>Volunteer</button>
            </Link>
          </div>
        </div>
      </div>
      <ContactForm/>
    </>
  )
}

export default Contact
