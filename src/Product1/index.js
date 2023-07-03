import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Product1 = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct1 = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/product/${id}`);
        const result = await response.json();
        setProduct(result);
      } catch (error) {
        console.error(error);
      }
    };

    getProduct1();
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Product Details</h1>
      <div>
        <img src={product.thumbnail} alt={product.title} />
        <h2>{product.title}</h2>
        <p>{product.brand}</p>
        <p>{product.price}</p>
        <p>{product.description}</p>
        <p>{product.discountPercentage}</p>
        <h4>{product.rating}</h4>
      </div>
    </div>
  );
};

export default Product1;