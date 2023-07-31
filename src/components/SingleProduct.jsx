import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useProductContext } from '../context/productcontex'
import "../Styles/SingleProduct.css";
import { useCart } from 'react-use-cart';
import {Rating } from '@mui/material';

const API = "https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products";
const SingleProduct = () => {
    const {getSingleProduct , singleProduct} = useProductContext();
    console.log("singleProduct",singleProduct);

    const {title,price,description,category,image,rating} = singleProduct;
    // console.log(title);
    // const rate = rating.rate;
    // console.log(rate);
    const navigate = useNavigate();
    const {id} = useParams();
    useEffect(()=>{
        getSingleProduct(`${API}?id=${id}`);
    },[]);

    const {addItem} = useCart();
    return (
        <>
            <div className='singlepage_wrapper'>
                <div className='singlepage_img'>
                    <img className='singlepage_main_img' src={image} alt='img'/>
                </div>
                <div className='singlepage_details'>
                    <div className='singlepage_title'>
                        <p>{title}( Pack of 1 )</p>
                    </div>
                    <div className='singlepage_rating'>
                        <Rating className="page_rating" name="half-rating-read" defaultValue={2} precision={0.5} readOnly />
                        <h6 className='rating_points'>Rating: (3.9)</h6>
                    </div>
                    <hr/>
                    <div className='singlepage_price'>
                        <p>${price}</p>
                    </div>
                    <div className='singlepage_color'>
                        <div className='color_container'>
                            <p>Color</p>
                            <img className='color_img' src={image}/>
                        </div>
                    </div>
                    <div className='size_container'>
                        <p>Size</p>
                        <div className='size_btns'>
                            <button className='size_btn'>S</button>
                            <button className='size_btn'>M</button>
                            <button className='size_btn'>L</button>
                            <button className='size_btn'>XL</button>
                            <button className='size_btn'>2XL</button>
                        </div>
                    </div>
                    <div className='ProductBtn'>
                        <button className='addToCartBtn' onClick={() => addItem(singleProduct)}>ADD TO CART</button>
                        <button className='buyBtn' onClick={() => navigate('/payment')}>BUY NOW</button>
                    </div>
                    <div className='singlepage_delivery'>
                        <p>Delivery</p>
                        <div className='searching_pincode'>
                            <input className='pincode_input' type='email' placeholder='Enter your email id'/>
                            <button className='pincode_search_btn'>CHECK</button>
                        </div>
                    </div>
                    <div className='singlepage_description'>
                        <p> <b className='description_bold'>7 Days Easy Returns</b> Trustpay: 100% Payment Protection. Return or Replacement is applicable for 7 days after delivery Know More </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleProduct