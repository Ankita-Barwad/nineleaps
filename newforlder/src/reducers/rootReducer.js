
import { combineReducers } from 'redux';
import cartReducer from './CartReducer';
import ProductsReducer from './ProductReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  products: ProductsReducer,
});

export default rootReducer;