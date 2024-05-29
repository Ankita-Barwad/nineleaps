export const addToCart = (product) => ({
  type: 'ADD_TO_CART',
  product,
});

export const removeFromCart = (id) => ({
  type: 'REMOVE_FROM_CART',
  id,
});

export const increaseQuantity = (id) => ({
  type: 'INCREASE_QUANTITY',
  id,
});

export const decreaseQuantity = (id) => ({
  type: 'DECREASE_QUANTITY',
  id,
});