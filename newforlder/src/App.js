
import './App.css';
import CartPage from './pages/CartPage';
import ProductsList from './pages/ProductList'; 

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='product-list flex'>
          <ProductsList />
        </div>
        <div className='cart-list'>
          <CartPage  />
        </div>
      </div>
    </div>
  );
}

export default App;
