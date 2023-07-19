import './App.css';
import Login from './Login';
import Products from './Products';
import ProductDetails from './ProductDetails';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>

      <Route path="/" element={<Login />} />
      <Route path="/products/" element={<Products />} />
      <Route path="/product/:id" element={<ProductDetails />} /> 

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
