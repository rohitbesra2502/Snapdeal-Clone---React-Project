import React, {useState } from "react";
import "../Styles/Products.css";
import Loader from "./Loader.jsx";
import { useProductContext } from "../context/productcontex";
import ProductCard from './ProductCard.jsx';

const Products = (props) => {
    const[selectedCheckbox , setSelectedCheckbox] = useState('');
    const [inputSearch,setInputSearch] = useState(true);

    const {isLoading,products} = useProductContext();
    
    if(isLoading) return <div><Loader/></div>

    const searchData = props.data;
    
    const handleCheckboxChange = (e) => {
        setSelectedCheckbox(e.target.value);
        setInputSearch(false);
    }

    const filteredData = products.filter((item) => item.category === selectedCheckbox);
    
    return (
        <>
            <div className="product-content">
                    <div className="product_category_aside">
                        <h3 className="categoryHeading">Category</h3>
                            <div className="display_category_list">
                                <div className="category">
                                    <input id="men's clothing" type="radio" value="men's clothing" onChange={handleCheckboxChange} checked={selectedCheckbox === "men's clothing"}/>
                                    <label htmlFor="men's clothing">Men's Clothing</label>
                                </div>    
                                <div className="category">
                                    <input id="women's clothing" type="radio" value="women's clothing" onChange={handleCheckboxChange} checked={selectedCheckbox === "women's clothing"}/>
                                    <label htmlFor="women's clothing">Women's Clothing</label>
                                </div>
                                <div className="category">
                                    <input id="jewelery" type="radio" value="jewelery" onChange={handleCheckboxChange} checked={selectedCheckbox === 'jewelery'}/>
                                    <label htmlFor="jewelery">Jewelery</label>
                                </div>
                                <div className="category">
                                    <input id="electronics" type="radio" value="electronics" onChange={handleCheckboxChange} checked={selectedCheckbox === 'electronics'}/>
                                    <label htmlFor="electronics">Electronics</label>
                                </div>
                        </div>
                    </div>
                <div className="product-cards-wrapper">
                    <div className="product_container">
                        { inputSearch ?  
                            (products.filter((item) => {
                                return searchData.toLowerCase() === '' ? item : item.title.toLowerCase().includes(searchData);
                            }).map((product,index) => (
                                <ProductCard product={product} key={index}/> 
                            ))) : 
                            (filteredData.map((product,index) => (
                                <ProductCard product={product} key={index} />
                            )))
                    }   
                    </div>
                </div>   
            </div>
        </>
    )
}

export default Products;