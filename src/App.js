import './App.css';
import Header from './components/header/Header';
import Order from './components/order/Order';
import ProductList from './components/product-list/ProductList';

function App() {
  return (
    <div className="App">
       <Header/>
       <Order/>
       <ProductList/>
    </div>
  );
}

export default App;
