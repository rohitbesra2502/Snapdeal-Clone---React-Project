import React, { useState } from "react";
import {Rating } from '@mui/material';
import { NavLink, useNavigate } from "react-router-dom";

const ProductsCarousel = ({data}) => { 
    const {id , image , title , price , rating} = data;
    const navigate = useNavigate();
    const handleImg = () => {
        navigate('/singleproduct');
    }  
    const rate = rating.rate;
    // console.log(rate);
    return(
        <NavLink to={`singleproduct/${id}`}>
            <div className="trending-card-wrapper">
                <div className = "trending-card">
                    <div className="trending-product-img">
                        <img src = {image} alt = "trending-product image" onClick={handleImg}/>
                    </div>
                    <p className = "trending-title">{title}</p>
                    <div className='trending-product_rating'>
                        <Rating className="trending-rating" name="trending-half-rating-read" defaultValue={rate} precision={0.5} readOnly />
                    </div>
                    <p className = "trending-price">${price}</p>
                </div>
            </div>
        </NavLink>
    )
}

export default ProductsCarousel;