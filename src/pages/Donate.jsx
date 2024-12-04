import PageHeader from '../components/PageHeader'
import Seo from '../components/Seo'
import { Link } from 'react-router-dom'
import { FaFingerprint } from 'react-icons/fa';
import { CartContext } from '../context/CartContext';
import { useState, useContext, useEffect } from 'react';
import wooCommerceApi from '../woocommerceApi';


const Donate = () => {
  const [products, setProducts] = useState([]);
  const {addToCart} = useContext(CartContext);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const productResponse = await wooCommerceApi.get('/products');
  
        // Filter products belonging to the 'Donations' category
        const donationProducts = productResponse.data.filter(product =>
          product.categories.some(
            category => category.name.toLowerCase() === 'donations'
          )
        );
        setProducts(donationProducts);
      } catch (error) {
        console.error('Error fetching donation products:', error);
      }
    };
  
    fetchDonations();
  }, []);

  const handleAddToCart = (product) =>{
    addToCart(product); 
  };

  return (
    <>
    <Seo
      title='Donate - HUHA Summative'
      description='We would appreciate any kind of help or donation so we can continue heloing animals'
      url={window.location.href}
    />
    <div className='page-container'>
      <PageHeader title='Donate' image_url='/header-bg-imgs/donation-img.webp'/>
      <div className='donate-container subnav-section-container'>
        <div className='donate-info-container'>
          <div className='donate-descript-info-container'>
            <h3>Donate to make a difference for animals</h3>
            <p>HUHA is an incorporated trust (HUHA – Helping You Help Animals Trust) and receives no direct government funding. We rely on donations and gifts from individuals and the private sector, and grants from foundations and trusts, to power our work and save lives.</p>
          </div>
          <div className='donate-payment-info-container'>
            <h3>Other Payment Methods</h3>
            <div className='four-column-grid-container donate-method-img'>
              <div className='payment-method-img-1'/>
              <div className='payment-method-img-2'/>
              <div className='payment-method-img-3'/>
              <div className='payment-method-img-4'/>
            </div>
            <Link to='/contact'>
              <button className='primary-button'>Contact For Details</button>
            </Link>
          </div>
        </div>
        <div className='product-list four-column-grid-container'>
          {products.length > 0 ? (
            products.map(product => (
              <div key={product.id} className='product-card'>
                <h3>{product.name}</h3>
                <img
                  src={product.images[0]?.src || '/placeholder.jpg'}
                  alt={product.name}
                  className='product-card-img'
                />
                <p>Price:  ${(product.prices.price / 100).toFixed(2)}</p>
                <button onClick={() => handleAddToCart(product)} className='primary-button'>Add to Cart</button>
              </div>
            ))
          ) : (
            <p>No donation products available.</p>
          )}
        </div>

        <div className='donate-bequest-container'>
          <div className='left-info-donate-bequest-container'>
            <h3>Make a Bequest</h3>
            <p>When you choose to remember HUHA in your will - you are making a significant contribution to the future sustainability of HUHA and our shared commitment to defend all animals in need for generations to come. As HUHA has grown, so have the calls for our help. A bequest can help ensure that we will be financially prepared to meet the future needs of animals across New Zealand.</p>
            <Link to='/support' state={{shownComponent: 'Bequest'}}>
              <button className='primary-button'>Find Out More</button>
            </Link>
          </div>
          <FaFingerprint className='bequest-icon'/>
        </div>
      </div>
    </div>
    
  </>
  )
}

export default Donate
