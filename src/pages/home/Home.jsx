import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'
import Filter from '../../components/filter/Filter'
import HeroSection from '../../components/herosection/HeroSection'
import ProductCard from '../../components/productcard/ProductCard'
import Track from '../../components/track/Track'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../../redux/cartSlice'
import { Link } from 'react-router-dom'



function Home() {
  const dispatch = useDispatch();
  const cartItem = useSelector((state)=> state.cart)

  // console.log(cartItem)

  const addCart = () => {
    dispatch(addToCart("shirt"));
  }

  const deleteCart = () => {
    dispatch(deleteFromCart("shirt"));
  }
  return (
    <Layout>
      {/* <div className="flex gap-5 justify-center">
        <button className=' bg-gray-300 p-5' onClick={()=> addCart()}>add</button>
        <button className=' bg-gray-300 p-5' onClick={()=> deleteCart()}>del</button>
      </div> */}
      <HeroSection/>
      <Filter />
      <ProductCard />
      <div className='flex justify-center -mt-10 mb-4'>
        <Link to='/allproducts'>
          <button className='bg-gray-300 px-5 py-2 rounded-xl'>See More</button>
        </Link>
      </div>
      <Track />

    </Layout>
  )
}

export default Home