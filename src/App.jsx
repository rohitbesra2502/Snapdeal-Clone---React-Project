import React, { useEffect, useState } from 'react';
import {Routes,Route, BrowserRouter} from 'react-router-dom';
import { CartProvider } from 'react-use-cart';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import ErrorPage from './components/ErrorPage';
import {auth} from "./firebase/firebase.js"
import SingleProduct from './components/SingleProduct';
import PaymentModal from './components/PaymentModal';
// import LogOnSnapdeal from './user/LogOnSnapdeal.jsx';
import { UserAuthContextProvider } from './context/UserAuthContext';
import PaymentStatus from './components/PaymentStatus';
// import LogOut from "../src/user/LogOut.jsx";
// import ProtectedRoute from './components/ProtectedRoute';
import ShoppingCart from './components/ShoppingCart';

function App() {
  const[username,setUserName] = useState('');

  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        setUserName(user.displayName);
      }else{
        setUserName("");
      }
    });
  },[]);

  const [value , setValue] = useState('');

  const getData = (data) => {
    setValue(data);  
  }
  return (
    <>
      <UserAuthContextProvider>
        <CartProvider>  
          <BrowserRouter>
              <Navbar onSubmit={getData} userName={username}/>
              <Routes>
                <Route path='/' element={<Home name={username}/>}/>
                <Route path='/products' element={<Products data = {value}/>}/>
                <Route path='/shoppingcart' element={<ShoppingCart/>}/>
                <Route path='/singleproduct/:id' element={<SingleProduct/>}/>
                <Route path='/singleproduct' element={<SingleProduct/>}/>
                <Route path='/payment' element={<PaymentModal/>}/>
                <Route path='*' element={<ErrorPage/>}/>
                <Route path='paymentstatus' element={<PaymentStatus/>}/>
              </Routes>
          </BrowserRouter> 
        </CartProvider>
      </UserAuthContextProvider>
    </>
  )
}

export default App
