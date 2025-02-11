import React, { useEffect, useState } from 'react';
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
import 'react-toastify/dist/ReactToastify.css';
import { Toaster } from 'react-hot-toast';
import AllProducts from './pages/allproducts/AllProducts';
import UserInfo from './pages/user/UserInfo';
import MobilePage from './pages/nopage/MobilePage';

function App() {
  const [isMobile, setIsMobile] = useState(window.matchMedia("only screen and (max-width: 760px)").matches);

  useEffect(() => {
    const mobileMediaQuery = window.matchMedia("(max-width: 760px)");

    const handleViewportChange = (event) => {
      setIsMobile(event.matches);
      if (event.matches !== isMobile) {
        window.location.reload();
      }
    };

    mobileMediaQuery.addEventListener('change', handleViewportChange);

    return () => {
      mobileMediaQuery.removeEventListener('change', handleViewportChange);
    };
  }, [isMobile]);

  if (isMobile) {
    return (
      <div>
        <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mt-[230px] ml-3">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Website only Available on Desktop</h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">The Mobile version of this website is still work in progress so please switch to a desktop to use this website.(FYI : Switching to Desktop site on a mobile device will work but the UI will get jumbled so it's not recommended to switch to desktop mode.)</p>
        </a>
      </div>
    )
  }

  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/mobile" element={<MobilePage />} />
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path='/order' element={
            <ProtectedRoutes>
              <Orders />
            </ProtectedRoutes>
          }></Route>
          <Route path="/cart" element={<Cart />} />
          <Route path='/userinfo' element={<UserInfo />} />
          <Route path="/dashboard" element={
            <ProtectedRoutesForAdmin>
              <Dashboard />
            </ProtectedRoutesForAdmin>
          } />
          <Route path="/allproducts" element={<AllProducts />} />
          <Route path="/*" element={<NoPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route path="/addproduct" element={
            <ProtectedRoutesForAdmin>
              <AddProduct />
            </ProtectedRoutesForAdmin>} />
          <Route path="/updateproduct" element={
            <ProtectedRoutesForAdmin>
              <UpdateProduct />
            </ProtectedRoutesForAdmin>
          } />
        </Routes>
        <Toaster />
      </Router>
    </MyState>
  );
}

export default App;

export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem('user')) {
    return children;
  } else {
    return <Navigate to='/' />;
  }
}

export const ProtectedRoutesForAdmin = ({ children }) => {
  const result = JSON.parse(localStorage.getItem('user'));
  if (result && result.result && result.result.user && result.result.user.email === "admin@gmail.com") {
    return children;
  } else {
    return <Navigate to='/login' />;
  }
}
