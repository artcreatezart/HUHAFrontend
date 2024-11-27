import { Link } from "react-router-dom"

const SupportAnimal = () => {
  return (
    <div className='support-animal-section subnav-section-container'>
      <h2>Support A Animal</h2>
      <div className='left-descript-support-animal'>
        <p>
        Some animals cannot be rehomed and will live out their best lives at a HUHA sanctuary. Each of these animals has special needs and requires the sustaining support of patron(s), so we can continue to provide the care they need and deserve. Currently, HUHA is caring for nearly 150 sanctuary animals, and your support can make a huge difference to these animals’ lives.
          <br/><br/>
          Additionally, HUHA cares for scores of difficult-to-rehome animals - including pigs, goats, roosters, rats and animals with special needs - that often take many months or years to rehome. Your support is so important to supporting and nurturing these animals on their journey towards a forever home. </p>
      </div>
      <div className='right-button-support-animal'>
        <p>When donating you can input the amount you’d like to donate and select what or who you would like the procced’s to go to.</p>
        <Link>
          <button className='primary-button'>Read about Sanctuary Animal’s and Families</button>
          <button className='secondary-button'>Support a Sanctuary Animal</button>
        </Link>
      </div>
    </div>
  )
}

export default SupportAnimal
