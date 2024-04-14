import React, { useContext, useState } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../Context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);
   
    const [selectedQuantity, setSelectedQuantity] = useState(null);

    const handleAddToCartOrEnquire = () => {
        if (selectedQuantity !== null) {
            if (selectedQuantity > 5) {
              
                window.location.href = 'https://agrowit-spices.github.io/AgrowITSpices/index.html';
            } else {
              
                addToCart(product.id, selectedQuantity);
                setSelectedQuantity(null); 
            }
        } else {
            console.error("Please select a quantity");
        }
    };

    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt='' />
                   
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt='' />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={star_dull_icon} alt='' />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">Rs{product.old_price}</div>
                    <div className="productdisplay-right-price-new">Rs{product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    A fragrant spice commonly used in both sweet and savory dishes.
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Quantity</h1>
                    <div className="productdisplay-right-sizes">
                       
                        {[1, 2, 3, 4, 5].map((quantity, index) => (
                            <div
                                key={index}
                                onClick={() => setSelectedQuantity(quantity)}
                                className={selectedQuantity === quantity ? "selected" : ""}
                            >
                                {quantity}kg
                            </div>
                        ))}
                      
                        <div
                            onClick={() => setSelectedQuantity(6)} 
                            className={selectedQuantity > 5 ? "selected" : ""}
                        >
                            greater than 5kg (Enquire)
                        </div>
                    </div>
                </div>
                <button onClick={handleAddToCartOrEnquire}>
                    {selectedQuantity > 5 ? "ENQUIRE" : "ADD TO CART"}
                </button>
               
            </div>
        </div>
    );
}

export default ProductDisplay;
