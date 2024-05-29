import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/CartActions';


const Product = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const discountedPrice = product.price - (product.price * (product.discountPercentage / 100));

  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} />
      <h2>{product.title}</h2>
      {product.discountPercentage > 0 ? (
        <div className='prodcard-body'>
          <span className='price' style={{ textDecoration: 'line-through' }}>${product.price}</span>
          <span className='discounted-price'>${discountedPrice.toFixed(2)}</span>
        </div>
      ) : (
        <span>${product.price}</span>
      )}
      <button className='cart-button' onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;