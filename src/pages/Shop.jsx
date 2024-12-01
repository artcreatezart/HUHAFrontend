// imports
import { useContext, useState, useEffect } from 'react';
import Seo from '../components/Seo';
// component imports
import wooCommerceApi from '../woocommerceApi';
import PageHeader from '../components/PageHeader';
import { CartContext } from '../context/CartContext';

const Shop = () => {
  const [categories, setCategories] = useState([]);
  const [shownProductCategory, setProductCategory] = useState(''); 
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]); 
  const {addToCart} = useContext(CartContext);
  const [showAddToCart, setShowAddToCart] = useState(false);

  // Fetch Categories and Products 
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoryResponse = await wooCommerceApi.get('/products/categories');
        setCategories(categoryResponse.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    const fetchProducts = async () => {
      try {
        const productResponse = await wooCommerceApi.get('/products');
        
        // filters out doantion products category
        const filteredProducts = productResponse.data.filter(
          (product) =>
            !product.categories.some(
              (category) => category.name.toLowerCase() === 'donations'
            )
        );
        setProducts(filteredProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchCategories();
    fetchProducts();
  }, []);

  // Filters products based on category
  useEffect(() => {
    if (shownProductCategory === '') {
      setFilteredProducts(products); 
    } else {
      const filtered = products.filter((product) =>
        product.categories.some(
          (category) => category.name.toLowerCase() === shownProductCategory.toLowerCase()
        )
      );
      setFilteredProducts(filtered); 
    }
  }, [shownProductCategory, products]); 

  const handleAddToCart = (product) =>{
    addToCart(product); 
    setShowAddToCart(true);

    setTimeout(() => {
        setShowAddToCart(false);
    }, 3000);
};

  // Removes "donations" category from buttons
  const filteredCategories = categories.filter(
    (category) => category.name.toLowerCase() !== 'donations'
  );

  return (
    <>
      <Seo
        title="Shop - HUHA Summative"
        description="Look at our selection of products we provide."
        url={window.location.href}
      />
      <PageHeader title="Shop" image_url="/header-bg-imgs/shop-cart-img.webp" />
      <div className="shop-container subnav-section-container">
        <div className="four-column-grid-container">
          <div className="shop-info-container">
            <div className="shop-card-info">
              <h2>Online Shop</h2>
              <p>
                Our online shop is always open! <br />
                <br />
                Shop our curated collection of beautiful and useful items for pets and people.
                <br />
                <br />
                All of our items are vegan, ethically sourced, and kind to the earth.
              </p>
            </div>
          </div>

          <div className="shop-info-container">
            <div className="shop-card-info">
              <h2>Carterton Op Shop</h2>
              <p>
                Tue to Fri 10am - 4pm <br /> Sat 9am - 3pm
                <br /><br />
                35-38 High Street South <br /> (corner of High Street South and Pembroke Streets), Carterton 5713
                <br /><br />
                cartertonopshop.huha@gmail.com
              </p>
            </div>
          </div>

          <div className="shop-info-container">
            <div className="shop-card-info">
              <h2>Otaki Op Shop</h2>
              <p>
                Tue to Sun <br />10am - 4pm
                <br /><br />
                208 Main Highway SH1<br />Otaki 5512
                <br /><br />
                otakiopshop.huha@gmail.com
              </p>
            </div>
          </div>

          <div className="shop-info-container">
            <div className="shop-card-info">
              <h2>Petone Op Shop</h2>
              <p>
                Tue to Sun<br />10am - 4pm
                <br /><br />
                262 Jackson Street,<br />Petone 5012<br />
                (just across from the clock tower)
                <br /><br />
                petoneopshop.huha@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Category Buttons */}
        <ul className="category-list">
          <button
            className="secondary-button"
            onClick={() => setProductCategory('')}
          >
            All Products
          </button>
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category) => (
              <div key={category.id}>
                <button
                  className="secondary-button"
                  onClick={() => setProductCategory(category.name)}
                >
                  {category.name}
                </button>
              </div>
            ))
          ) : (
            <p>Loading categories...</p>
          )}
        </ul>

        {/* Product Display */}
        <div className="product-list">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <h3>{product.name}</h3>
                <img
                  src={product.images[0]?.src || '/placeholder.jpg'}
                  alt={product.name}
                />
                <p>Price:  ${(product.prices.price / 100).toFixed(2)}</p>
                <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
              </div>
            ))
          ) : (
            <p>No products available for this category.</p>
          )}
        </div>
        {showAddToCart && (
          <div className='added-to-cart-prompt'>
              Item added to cart!
          </div>
        )}
      </div>
    </>
  );
};

export default Shop;
