import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaRegUser, FaSistrix } from "react-icons/fa";
import './style.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({
    title: "",
    thumbnail: "",
    price: "",
    discountPercentage: ""
  });

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
      setProducts(result.products);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  console.log({ products });

  if (loading) {
    return <h1>Loading.......</h1>;
  }

  const handleAddProduct = async (e) => {
    e.preventDefault();
    const newProduct = {
      title: product.title,
      thumbnail: product.thumbnail,
      price: product.price,
      discountPercentage: product.discountPercentage
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
      setProduct({
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
    setProduct({
      ...product,
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
          <a href="#home">Home</a>
          <Link to="/login">
            <a href="#icon1" className="icon1">
              <FaSistrix fill="antiquewhite" />
            </a>
          </Link>
          <Link to="/login">
            <a href="#icon1" className="icon1">
              <FaRegUser fill="antiquewhite" />
            </a>
          </Link>
        </div>
      </nav>
      <form className="form" onSubmit={handleAddProduct}>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={product.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Thumbnail"
          name="thumbnail"
          value={product.thumbnail}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Price"
          name="price"
          value={product.price}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Discount Percentage"
          name="discountPercentage"
          value={product.discountPercentage}
          onChange={handleInputChange}
        />
        <button type="submit">Add Product</button>
      </form>

      <div className="category">
        {products.map(item => (
          <div className="card" key={item.id}>
            <img src={item.thumbnail} alt={item.title} />
            <Link to="/product1">
              <h3 className="title">{item.title}</h3>
            </Link>
            <p>KSH.{item.price}.00</p>
            <p>{item.discountPercentage}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
