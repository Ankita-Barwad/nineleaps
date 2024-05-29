export const fetchProducts = () => {
    return async (dispatch) => {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      dispatch({ type: 'SET_PRODUCTS', products: data.products });
    };
  };