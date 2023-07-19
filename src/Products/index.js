import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaRegUser, FaSistrix } from "react-icons/fa";
import './style.css';

const Products = () => {
    // Declare two state variables, `products` and `loading`.
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
  
    // Use the `useEffect` hook to fetch the products from the dummyjson.com API when the component mounts.
    useEffect(() => {
      (async () => {
        await getProducts();
      })();
    }, []);
  
    const getProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://dummyjson.com/products');
        const result = await response.json();
        setProducts(Array.from(result.products));
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
  
    console.log({ products });
  
    if (loading) {
      return <h1>Loading.......</h1>;
    }
  
    //Define a function called `handleAddProduct` that handles the submission of the add product form.
    const handleAddProduct = async (e) => {
      e.preventDefault();
      const newProduct = {
        title: products.title,
        thumbnail: products.thumbnail,
        price: products.price,
        discountPercentage: products.discountPercentage
      };
      try {
        const response = await fetch('https://dummyjson.com/products/add', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newProduct)
        });
        const data = await response.json();
        console.log(data);
        setProducts([...products, newProduct]);
        setProducts({
          title: "",
          thumbnail: "",
          price: "",
          discountPercentage: ""
        });
      } catch (error) {
        console.log(error.message);
      }
    };
  
    const handleInputChange = (e) => {
      setProducts({
        ...products,
        [e.target.name]: e.target.value
      });
    };
  
    return (
      <div>
        <nav className="nav">
          <div>
            <h1 className="h1">Kiosk</h1>
          </div>
          <div className="link">
            <Link to="/home">Home</Link>
            <Link to="/login">
              <p className="icon1">
                <FaSistrix fill="antiquewhite" />
              </p>
            </Link>
            <Link to="/login">
              <p className="icon1">
                <FaRegUser fill="antiquewhite" />
              </p>
            </Link>
          </div>
        </nav>
  
        <form className="form" onSubmit={handleAddProduct}>
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={products.title}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Thumbnail"
            name="thumbnail"
            value={products.thumbnail}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Price"
            name="price"
            value={products.price}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Discount Percentage"
            name="discountPercentage"
            value={products.discountPercentage}
            onChange={handleInputChange}
          />
          <button type="submit">Add Product</button>
        </form>
  
        <div className="category">
          {products.map(item => (
            
            <Link to={`/product/${item.id}`} key={item.id}>
              <div className="card">
                <img src={item.thumbnail} alt={item.title} />
                <h3 className="title">{item.title}</h3>
                <p>KSH.{item.price}.00</p>
                <p>{item.discountPercentage}%</p>
              </div>
            </Link>
          ))}
        </div>

  
    </div>
  );
};

export default Products;

