import './App.css';
import Navbar from "./Navbar";
import Cart from "./Cart";
import ProductList from "./ProductList";
import{PRODUCTS} from "./products";




function App() {
  

  return (
    <div className="App">
      <Navbar />
      <h3>Welcome to our store</h3>
      
      <ProductList products={PRODUCTS} />
      <Cart />
    </div>
  );
}

export default App;
