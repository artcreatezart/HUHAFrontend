import { Link } from 'react-router-dom'

const Fundraise = () => {
  return (
    <div className='fundraise-section subnav-section-container'>
      
      <div className='left-descript-fundraise-container'>
        <h2>Fundraise For HUHA</h2>
        <p>Fundraising is a great way to raise money for us and raise awareness at the same time. You could start a collection, throw a concert, talk to local businesses or make a stall - whatever interests you, and that you think would work well in your community.</p>

        <div>
          <p>Past fundraising events put on by the HUHA community include:</p>
          <ul>
            <li>a kick-a-thon and sports events</li>
            <li>discos and movie nights</li>
            <li>school event fundraisers</li>
            <li>local business fundraisers</li>
          </ul>
        </div>
        
        <p>If you are keen to get involved please contact us. We can let you know if there's a specific project or part of HUHA that we'd love you to raise funds for.</p>
        <Link to='/contact'>
          <button className='primary-button'>Contact Now</button>
        </Link>
      </div>

      <div className='right-img-fundraise-container'/>

    </div>
  )
}

export default Fundraise
