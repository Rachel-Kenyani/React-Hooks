import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
    <div>
      <h1>{product.title}</h1>
      <img src={product.thumbnail} alt={product.title} />
      <p>KSH.{product.price}.00</p>
      <p>{product.discountPercentage}%</p>
      <p>{product.description}</p>
      <p>{product.category}</p>
      <p>{product.brand}</p>
      <p>{product.rating}</p>
     
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
