import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
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
import AllProducts from './pages/allproducts/AllProducts';
function App() {
  return (
    <MyState>
      
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/login" element={<Login/>} />
          <Route path='/order' element={
            <ProtectedRoutes>
              <Orders/>
            </ProtectedRoutes>
          }></Route>
          <Route path="/cart" element={<Cart/>} />
          <Route path="/dashboard" element={
            <ProtectedRoutesForAdmin>
              <Dashboard/>
            </ProtectedRoutesForAdmin>
          } />
          <Route path="/allproducts" element={<AllProducts/>} />
          <Route path="/*" element={<NoPage/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/productinfo/:id" element={<ProductInfo/>} />
          <Route path="/addproduct" element={
          <ProtectedRoutesForAdmin>
            <AddProduct/>
          </ProtectedRoutesForAdmin>} />
          <Route path="/updateproduct" element={
            <ProtectedRoutesForAdmin>
              <UpdateProduct/>
            </ProtectedRoutesForAdmin>
          } />
        </Routes>
          <Toaster/>
      </Router>

    </MyState>
  )
}

export default App

export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem('user')) {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}

export const ProtectedRoutesForAdmin = ({children}) => {
  const result = JSON.parse(localStorage.getItem('user'))
  console.log("result",result)
  console.log(result.result.user.email)
  if (result.result.user.email === "admin@gmail.com") {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}