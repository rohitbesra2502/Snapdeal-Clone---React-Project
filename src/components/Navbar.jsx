import { NavLink, useNavigate } from "react-router-dom";
import userImg from "../assets/man_2202112.png";
import cart from "../assets/trolley_4290854.png";
import "../Styles/Navbar.css"
import {useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";

const Navbar = (props) => {
  const [search , setSearch] = useState('');
  const {user , logOut} = useUserAuth();
  const navigate = useNavigate();
  
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const openLoginModal = () => {
    setModalOpen(true);
  };
  const handleSearchClick = (e) => {
    e.preventDefault();
    navigate('/products');
    props.onSubmit(search);
  }
    // Function to handle logout
    const handleLogout = async () => {
      try {
        await logOut(); // Call the logOut function from the context
        navigate('/');
      } catch (error) {
        console.error("Error logging out:", error);
      }
    };
  return (
      <>
        <div className="NavBar">
          <NavLink to="/" className="logo">Snapdeal</NavLink>
          <div className="searchBar">
            <input className="searchInput" onChange={(e) => setSearch(e.target.value)} value={search}  placeholder="Search product & brands"/>
            <button className="searchBtn" onClick = {handleSearchClick}>Search</button>
          </div>
          <div className="cart_signin_wrapper">
              <NavLink to="/shoppingcart">
                <div className="cart_container navBox">
                      <p className="cartTitle" style={{color : "#fff"}}>Cart</p>
                      <img className="cartLogo navIcon" src={cart} alt="cart-icon"/>
                </div>
              </NavLink>
            <div className="signin_container">
                {/* Check if user is logged in */}
                {user ? (
                  <>
                    <button className="logInBtn" onClick={handleLogout}>LOGOUT</button>
                      <img className="userLogo navIcon" src={userImg} alt="user-icon" />
                    <h5>{ user && `Welcome ${user.displayName}`}</h5>
                  </>
                ) : (
                  <>
                    <button className="logInBtn" onClick={openModal}>LOGIN</button>
                    <img className="userLogo navIcon" onClick={openModal} src={userImg} alt="user-icon" />
                  </>
                )}
              </div>
          </div>
        </div>
        {/* Render the LoginModal component */}
        <LoginModal isModalOpen={isModalOpen} openModal={openModal} closeModal={closeModal} openLoginModal={openLoginModal} />
      </>
  );
}


export default Navbar;