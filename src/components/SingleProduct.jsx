import React, { useEffect ,useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useProductContext } from '../context/productcontex';
import "../Styles/SingleProduct.css";
import { useCart } from 'react-use-cart';
import {Rating } from '@mui/material';
import Loader from './Loader';

const API = "https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products";

const SingleProduct = () => {
    const[isLoading , setIsLoading] = useState(false);
    const navigate = useNavigate();
    const {id} = useParams();
    useEffect(() => {
        setIsLoading(true);
        getSingleProduct(`${API}?id=${id}`);
        setIsLoading(false);
    },[]);

    const {getSingleProduct , singleProduct} = useProductContext();

    console.log(singleProduct);

    // const {title,price,image,rating} = singleProduct;

    const handleAddBtn = () => {
        addItem(singleProduct)
        navigate('/cart-page')
    }
    const {addItem} = useCart();
    return (
        <>
            {isLoading ? <Loader/> :
                <div className='singlepage_wrapper'>
                    <div className='singlepage_img'>
                        <img className='singlepage_main_img' src={singleProduct.image} alt='img'/>
                    </div>
                    <div className='singlepage_details'>
                        <div className='singlepage_title'>
                            <p>{singleProduct.title}( Pack of 1 )</p>
                        </div>
                        <div className='singlepage_rating'>
                            {singleProduct.rating ? (
                                <>
                                    <Rating className="page_rating" name="half-rating-read" defaultValue={singleProduct.rating.rate} precision={0.5} readOnly />
                                    <h6 className='rating_points'>Rating: {singleProduct.rating.rate}</h6>
                                </>
                            ) : (
                                <p>No rating available</p>
                            )}
                        </div>
                        <hr/>
                        <div className='singlepage_price'>
                            <p>${singleProduct.price}</p>
                        </div>
                        <div className='singlepage_color'>
                            <div className='color_container'>
                                <p>Color</p>
                                <img className='color_img' src={singleProduct.image}/>
                            </div>
                        </div>
                        <div className='size_container'>
                            <p>Size</p>
                            <div className='size_btns'>
                                <button className='size_btn' style={{color : "#000"}}>S</button>
                                <button className='size_btn' style={{textDecoration: 'line-through' , color:'#000'}}>M</button>
                                <button className='size_btn' style={{textDecoration: 'line-through' , color:'#000'}}>L</button>
                                <button className='size_btn' style={{textDecoration: 'line-through' , color:'#000'}}>XL</button>
                                <button className='size_btn' style={{textDecoration: 'line-through' , color:'#000'}}>2XL</button>
                            </div>
                        </div>
                        <div className='ProductBtn'>
                            <button className='addToCartBtn' onClick={handleAddBtn}>ADD TO CART</button>
                            <button className='buyBtn' onClick={() => navigate('/payment')}>BUY NOW</button>
                        </div>
                        <div className='singlepage_description'>
                            <p> <b className='description_bold'>7 Days Easy Returns</b> Trustpay: 100% Payment Protection. Return or Replacement is applicable for 7 days after delivery Know More </p>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default SingleProduct