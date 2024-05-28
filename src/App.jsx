import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import Dashboard from './pages/admin/dashboard/Dashboard';
import NoPage from './pages/nopage/NoPage';
import Orders from './pages/order/Orders';
import MyState from './context/data/myState';
import Login from './pages/registration/Login';
import Signup from './pages/registration/SignUp';
import ProductInfo from './pages/productInfo/ProductInfo';
import AddProduct from './pages/admin/pages/AddProduct';
import UpdateProduct from './pages/admin/pages/UpdateProduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <MyState>
      
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/order' element={<Orders/>}></Route>
          <Route path="/cart" element={<Cart/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/*" element={<NoPage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/productinfo/:id" element={<ProductInfo/>} />
          <Route path="/addproduct" element={<AddProduct/>} />
          <Route path="/updateproduct" element={<UpdateProduct/>} />
        </Routes>
          <Toaster/>
      </Router>

    </MyState>
  )
}

export default App