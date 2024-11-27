import PageHeader from '../components/PageHeader'
import Seo from '../components/Seo'

const Shop = () => {
  return (
    <>
      <Seo
        title='Shop - HUHA Summative'
        description='Look at our selection of products we provide.'
        url={window.location.href}
      />
      <PageHeader/>
      <div className='shop-container subnav-section-container'>
        <div className='four-column-grid-container'>
        <div className='shop-info-container'>
          <div className='shop-card-info'>
            <h2>Online Shop</h2>
            <p>Our online shop is always open! <br/><br/>

              Shop our curated collection of beautiful and useful items for pets and people.<br/><br/>

              That are all vegan, ethically sourced and kind to the earth. </p>
          </div>
        </div>
        
        <div className='shop-info-container'>
          <div className='shop-card-info'>
            <h2>Carterton Op Shop</h2>
            <p>Tue to Fri 10am - 4pm<br/>
              Sat 9am - 3pm <br/><br/>

              35-38 High Street South<br/>
              (corner of High Street South and Pembroke Streets), Carterton 5713<br/><br/>

              cartertonopshop.huha@gmail.com
              </p>
          </div>
        </div>

        <div className='shop-info-container'>
          <div className='shop-card-info'>
            <h2>Otaki Op Shop</h2>
            <p>Tue to Sun<br/>
                10am - 4pm <br/><br/>

                208 Main Highway SH1<br/>
                Otaki 5512<br/><br/>

                otakiopshop.huha@gmail.com </p>
          </div>
        </div>

        <div className='shop-info-container'>
          <div className='shop-card-info'>
            <h2>Petone Op Shop</h2>
            <p>Tue to Sun <br/>
                10am - 4pm <br/><br/>

                262 Jackson Street, <br/>
                Petone 5012<br/>
                (just across from the clock tower)<br/><br/>

                petoneopshop.huha@gmail.com </p>
          </div>
        </div>
        </div>
        
      </div>
    </>
  )
}

export default Shop
