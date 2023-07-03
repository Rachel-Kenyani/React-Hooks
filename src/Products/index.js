import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import {FaRegUser,FaSistrix} from "react-icons/fa6";
import './style.css'

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading,setLoading]= useState(false);
    const [product, setProduct] = useState({
        title: "",
        price: "",
        discountPercentage: ""
    });

    useEffect(()=>{
        (async()=>{
            await getProducts()
        })();
    },[])

    const getProducts=async()=>{
        setLoading(true)
        try{
            const response= await fetch('https://dummyjson.com/products')
       const result=await response.json();
       setProducts(result.products)
       setLoading(false)

        }
        catch(error){
            console.log(error.message);
        }       
    }
    console.log({products});
        if (loading){
            return <h1>Loading.......</h1>
        }

    const handleAddProduct = async (e) => {
        e.preventDefault();
        const newProduct = {
            title: product.title,
            price: product.price,
            discountPercentage: product.discountPercentage
        };
        await fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setProduct([...products, newProduct]);
        });
    };

    return(
        <div>
            <nav className="nav">
                <div><h1 className="h1">Kiosk</h1></div>
                <div class="link">
                    <a href="#home">Home</a>
                    <Link to="/login"><a href="#icon1" className="icon1"><FaSistrix fill="antiquewhite" /></a></Link>
                    <Link to="/login"><a href="#icon1" className="icon1"><FaRegUser fill="antiquewhite" /></a></Link>
                </div>
            </nav>
            <button className="button" onClick={handleAddProduct}>Add a product</button>

        <div className="category">
            {products.map(item => (
                <div className="card" key ={item.id}>
                    <img src={item.thumbnail} alt={product.title}></img>
                    <Link to="/product1"><h3 className="title">{item.title}</h3></Link>
                    <p>KSH.{item.price}.00</p>
                    <p>{item.discountPercentage}%</p>
                    </div>                    
            ))}
        </div>
        </div>
    );
}
export default Products;
