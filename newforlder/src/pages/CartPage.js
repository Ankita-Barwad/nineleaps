import React from 'react';
import { useSelector } from 'react-redux';
import CartItems from '../components/CartItems';

const CartPage = () => {
  const cart = useSelector((state) => state.cart);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {cart.map((item) => (
        <CartItems key={item.id} item={item} />
      ))}
      <h2 className='float-left'>Total Payment:<br></br> ${total.toFixed(2)}</h2>
    </div>
  );
};

export default CartPage;