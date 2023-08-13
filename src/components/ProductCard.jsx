import React from 'react';
import {Rating } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Card = ({product}) => {
    
    return(
        <>
            <NavLink to={`/SingleProduct/${product.id}`}>
                <div className="card">
                    <div className="product_img">
                        <img className="product-img" src={product.image} alt="product image" />
                    </div>
                    <p className="title">{product.title}</p>
                    <div className='product_rating'>
                        <Rating name="half-rating-read" defaultValue={product.rating.rate} precision={0.5} readOnly />
                    </div>
                    <p className="product-price">${product.price}</p>
                </div>
            </NavLink>
        </>
    );
}


export default Card;