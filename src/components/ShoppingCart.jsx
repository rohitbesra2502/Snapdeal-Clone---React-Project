import React from 'react';
import '../Styles/ShoppingCart.css';
import { useCart } from 'react-use-cart';
import { NavLink } from 'react-router-dom';

const ShoppingCart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  return (
    <>
      <div className="shopping__cart">
        <h3 className="cartMainHeading">Shopping Cart</h3>
        <div className="cartTitles">
          <p className="cartitemDetails">Item Details</p>
          <p className="cartPrice">Price</p>
          <p className="cartQuantity">Quantity</p>
          <p className="cartSubTotal">Subtotal</p>
        </div>
        {items.map((item, index) => {
          const subtotal = item.price * item.quantity; // Calculate the subtotal for each item
          const TotalPrice = cartTotal.toFixed(2);
          return (
            <div className="shoppingProduct" key={index}>
              <div className="shoppingcartTitle">
                <div>{item.title}</div>
                <button className="cartRemove" onClick={() => removeItem(item.id)}>
                  REMOVE
                </button>
              </div>
              <span className="shoppingcartPrice">${item.price}</span>
              <select
                className="selectQuantity"
                onChange={(e) => updateItemQuantity(item.id, parseInt(e.target.value))}
                value={item.quantity}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
              </select>
              <span className="shoppingcartSubtotal">${subtotal.toFixed(2)}</span>
            </div>
          );
        })}
      </div>
      <div className="cartFooter">
        <div className="cartDescription">
          <p className="cartFooterDeliveryTitle">Delivery and payment options can be selected later</p>
          <p className="cartFooterSafeTitle">Safe and Secure Payments</p>
          <p className="cartFooterPolicyTitle">100% Payment Protection, Easy Returns Policy</p>
        </div>
        <div className="cartCategoriesHead">
          <p className="cartSubTotal">Total Price: ${cartTotal.toFixed(2)}</p>
          <p className="cartDeliveryCharges">Delivery Charges: FREE</p>
        </div>
        {cartTotal > 0 ? ( // Show the payment button only if cartTotal is greater than 0
          <NavLink to={`/payment?total=${cartTotal}`}>
            <button className="cartPayBtn">PROCEED TO PAY ${cartTotal.toFixed(2)}</button>
          </NavLink>
        ) : (
          <p className="emptyCartMessage">Cart is empty. Please select products before proceeding.</p>
        )}
      </div>
    </>
  );
};

export default ShoppingCart;
