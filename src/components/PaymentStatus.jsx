import React from "react";
import { NavLink } from "react-router-dom";
import "../Styles/paymentstatus.css";

const PaymentStatus = ({ totalPrice }) => {
  return (
    <div className="payment-status-container">
      <div className="payment-success">
        <p>Payment Successful! Thankyou for booking.</p>
        <p>Visit again</p>
        <NavLink to="/">
          <button>Home</button>
        </NavLink>
      </div>
    </div>
  );
};

export default PaymentStatus;