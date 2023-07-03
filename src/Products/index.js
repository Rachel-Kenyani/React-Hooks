import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import {FaRegUser,FaSistrix} from "react-icons/fa6";
import './style.css'


const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading,setLoading]= useState(false);

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
        return <h1 className="load">Loading.......</h1>
    }
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

        <div className="category">
            {products.map(item => (
                <div className="card" key ={item.id}>
                    <img src={item.thumbnail}></img>
                    <Link to="/product1"><h3 className="title">{item.title}</h3></Link>
                    <p>KSH.{item.price}.00</p>
                    <p>{item.discountPercentage}%</p>
                    </div>                    
            ))}
        </div>
        </div>
    );
}
export default Products