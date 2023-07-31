import React,{useState} from 'react'
import '../Styles/PaymentModal.css'
import image from "../img/card_img.png";
import { useLocation, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const PaymentModal = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const totalPrice = queryParams.get("total");

    const navigate = useNavigate();
    const handleSubmit = (e) => {
      e.preventDefault();
      navigate('/paymentstatus');
    }
    return (
        <div className='payment_wrapper'>
            <div className="payment_container">
                <form onSubmit={handleSubmit}>
                    <div className="paymentModal_row">
                        <div className="paymentModal_col">
                            <h3 className="paymentModal_title">billing address</h3>
                            <div className="inputBox">
                                <span className='paymentModal_label'>full name :</span>
                                <input className='paymentModal_inputBox' type="text" placeholder="rohit besra" required/>
                            </div>
                            <div className="inputBox">
                                <span className='paymentModal_label'>email :</span>
                                <input className='paymentModal_inputBox' type="email" placeholder="rb@example.com" required/>
                            </div>
                            <div className="inputBox">
                                <span className='paymentModal_label'>address :</span>
                                <input className='paymentModal_inputBox' type="text" placeholder="room - street - locality" required/>
                            </div>
                            <div className="inputBox">
                                <span className='paymentModal_label'>city :</span>
                                <input className='paymentModal_inputBox' type="text" placeholder="raipur" required/>
                            </div>
                            <div className="paymentModal_flex">
                                <div className="inputBox">
                                    <span className='paymentModal_label'>state :</span>
                                    <input className='paymentModal_inputBox short-input' type="text" placeholder="india" required/>
                                </div>
                                <div className="inputBox">
                                    <span className='paymentModal_label'>zip code :</span>
                                    <input className='paymentModal_inputBox short-input' type="text" placeholder="123 456" required/>
                                </div>
                            </div>
                        </div>
                        <div className="paymentModal_col">
                            <h3 className="paymentModal_title">payment</h3>
                            <div className="inputBox">
                                <span className='paymentModal_label'>cards accepted :</span>
                                <img className='paymentModal_cardImages' src={image} alt=""/>
                            </div>
                            <div className="inputBox">
                                <span className='paymentModal_label'>name on card :</span>
                                <input className='paymentModal_inputBox' type="text" placeholder="mr. rohit besra" required/>
                            </div>
                            <div className="inputBox">
                                <span className='paymentModal_label'>credit card number :</span>
                                <input className='paymentModal_inputBox' type="number" placeholder="1111-2222-3333-4444" required/>
                            </div>
                            <div className="inputBox">
                                <span className='paymentModal_label'>exp month :</span>
                                <input className='paymentModal_inputBox' type="text" placeholder="january" required/>
                            </div>
                            <div className="paymentModal_flex">
                                <div className="inputBox">
                                    <span className='paymentModal_label'>exp year :</span>
                                    <input className='paymentModal_inputBox short-input' type="number" placeholder="2022" required/>
                                </div>
                                <div className="inputBox">
                                    <span className='paymentModal_label'>CVV :</span>
                                    <input className='paymentModal_inputBox short-input' type="text" placeholder="1234" required/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='cart-toral-amount'>Total Amount : ${totalPrice}</div>
                    <input type="submit" value="proceed to checkout" className="paymentModal_submitBtn"/>
                </form>
            </div>    
        </div>
  )
}

export default PaymentModal;