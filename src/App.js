import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Products from './Products';
import Product1 from './Product1';
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>

      <Route path="/login" element={<Login />} />
      <Route path="/products/*" element={<Products />} />
      <Route path="/product1/*" element={<Product1 />} />

        {/* <Route path="/" element={<Home />} />
        <Route path="/blog/*" element={<BlogApp />} />
        <Route path="/users/*" element={<UserApp />} /> */}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
