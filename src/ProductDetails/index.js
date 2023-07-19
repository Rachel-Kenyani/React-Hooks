import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './style.css';

const ProductDetails = () => {
  // Get the product ID from the URL parameters.
  const { id } = useParams();

  // Use the product ID to fetch the product data from the API.
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

 
  // If the product is not yet loaded, show a loading message.
  if (!product) {
    return <h1>Loading...</h1>;
  }

  // Otherwise, show the product details.
  return (
    <div className="product">
  <h1 className="product-title">{product.title}</h1>
  <img src={product.thumbnail} alt={product.title} />
  <p className="product-price">KSH.{product.price}.00</p>
  <p className="product-discount">{product.discountPercentage}%</p>
  <p className="product-description">{product.description}</p>
  <p className="product-category">{product.category}</p>
  <p className="product-brand">{product.brand}</p>
  <p className="product-rating">{product.rating}</p>
  <button className="product-add-to-cart">Add to Cart</button>
</div>

  );
};

export default ProductDetails;
