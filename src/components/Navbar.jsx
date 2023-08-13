import { Link, NavLink, useNavigate } from "react-router-dom";
import "../Styles/newNav.css"
import {useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import LoginModal from "./LoginModal";

const Navbar = (props) => {
  const [search , setSearch] = useState('');
  const {user , logOut} = useUserAuth();
  const navigate = useNavigate();
  
  // console.log(user);
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
        <header className="navHeader">
          <nav className="topnav">
          <h2 className="heading-2">Brand Waali Quality, Bazaar Waali Deal!</h2>
          <ul className="unordered">
            <li className="unordered-list"><Link to='/'>Impact@Snapdeal</Link></li>
            <li className="unordered-list"><Link to='/'>Gift Cards</Link></li>
            <li className="unordered-list"><Link to='/'>Help Center</Link></li>
            <li className="unordered-list"><Link to='/'>Sell On Snapdeal</Link></li>
            <li className="unordered-list">
              <Link to='/'> <i className="fas fa-mobile-alt"></i> Download App</Link>
            </li >
          </ul>
          </nav>
          <nav className="mainnav">
            <div className="logoimg">
              <Link to="/"><img src="https://i3.sdlcdn.com/img/snapdeal/darwin/logo/sdLatestLogo.svg"/></Link>
            </div>
            <div className="search_container">
              <input className="searchInput" type="text" onChange={(e) => setSearch(e.target.value)} value={search} placeholder="Search products & brands" />
              <button className="searchBtn" onClick = {handleSearchClick}><i className="fas fa-search"></i> Search</button>
            </div>
            <div className="moreitemslist">
              <NavLink to="/cart-page">
                <div className="moreitems1">
                  <h3 className="heading-3">Cart <i className="fas fa-shopping-cart"></i></h3>
                </div>
              </NavLink>
              <div className="moreitems2">
                <h3 className=" heading-3 signinTitle">{user ? user.displayName : "Sign In"} <i className="fas fa-user-circle"></i></h3>
                <div className="signsub">
                  <hr />
                  <p>If you are a new user</p>
                  <h3 onClick={openModal} className=" heading-3 registerTitle">Register</h3>
                  {user ? <button className="loginBtn" onClick={handleLogout}>LOGOUT</button> : ( 
                    <button className="loginBtn" onClick={openModal}>LOGIN</button>
                  )}
                </div>
              </div>
            </div>
          </nav>
        </header>

        {/* Render the LoginModal component */}
        <LoginModal isModalOpen={isModalOpen} openModal={openModal} closeModal={closeModal} openLoginModal={openLoginModal} />
      </>
  );
}


export default Navbar;