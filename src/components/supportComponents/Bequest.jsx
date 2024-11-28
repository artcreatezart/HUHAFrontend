import { Link } from 'react-router-dom'

const Bequest = () => {
  return (
    <div className='bequest-section subnav-section-container'>
      <div className='top-bequest-container'>
        <div className='top-left-bequest-container'>
          <div className='top-left-img-bequest'/>
          <p>We are grateful to those benefactors who have made or are in the process of planning a bequest in support of HUHA. <br/> Talk to our CEO or a Board Trustee to understand more about HUHA’s long-term needs and future plans.</p>
        </div>

        <div className='top-right-bequest-container'>
          <h2>Bequest</h2>
          <h3>Making a bequest can make a real difference for animals in need</h3>
          <p>When you choose to remember HUHA in your will - you are making a significant contribution to the future sustainability of HUHA and our shared commitment to defend all animals in need for generations to come. As HUHA has grown, so have the calls for our help. A bequest can help ensure that we will be financially prepared to meet the future needs of animals across New Zealand. <br/><br/> We do appreciate that your will is a very personal matter and your first priority will be to ensure that the people you care about are provided for. If you want to make a bequest you can include HUHA when making a new will, add HUHA to your existing will via a codicil or vary your family trust to include HUHA as a beneficiary.</p>
        </div>
      </div>

      <div className='middle-bequest-container'>
        <h2>Main Types of Bequests</h2>
        <div className='middle-left-bequest-container four-column-grid-container'>
          <div className='bequest-option-container'>
            <h4>General Purpose Bequest</h4>
            <p>Help fund HUHA’s ongoing operations to advocate for, rescue, rehabilitate and rehome animals in need and provide sanctuary to animals that cannot be rehomed.</p>
          </div>
          <div className='bequest-option-container'>
            <h4>Gift in Perpetuity - done by HUHA</h4>
            <p>The principal amount gifted is invested for a total return (e.g. income + growth), with a small portion of the fund's balance paid out, generally on an annual basis.</p>
          </div>
          <div className='bequest-option-container'>
            <h4>Specific Purpose Bequest</h4>
            <p>Tell us how you want your bequest to help. Not sure?.</p>
          </div>
          <div className='bequest-option-container'>
            <h4>Any Queries?</h4>
            <p>Feel free to contact us and ask as many questions as you need.</p>
          </div>
        </div>

        <div className='buttons-middle-bequest-container'>
          <div className='top-two-buttons-bequest-container'>
            <a href='https://www.huha.org.nz/files/63fe9972278f67ce58078605?disposition=inline' target='_blank'>
              <button className='primary-button'>Check out a bequest brochure</button>
            </a>
            <a  target='_blank'>
              <button className='primary-button'>Call 04 392 3232</button>
            </a>
          </div>
          <Link>
            <button className='primary-button'>Get In Touch</button>
          </Link>
        </div>

        <div className='bottom-legal-bequest-container'>
          <h3>HUHA's Legal Details</h3>
          <p>Legal name: “HUHA – Helping You Help Animals Trust”<br/>
            Charitable Trust number: CC47396<br/>
            Physical address: 68B Marchant Road, Kaitoke, Upper Hutt 5018<br/>
            Postal address: CMB 26 Kaitoke, Upper Hutt, 5018.<br/>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Bequest
