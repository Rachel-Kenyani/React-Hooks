
import './App.css';
import Login from './Login';
import Products from './Products';
import Product1 from './Product1';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products/*" element={<Products />} />
          <Route path="/product1/*" element={<Product1 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

