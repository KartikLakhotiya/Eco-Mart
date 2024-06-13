import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../../components/footer/Footer'

const NoPage = () => {
  return (
    <div className='h-full'>
      <main class="">
        <Navbar />
        <div class="text-center mt-[140px] mb-20">
          <p class="text-base font-semibold text-blue-600 text-[100px]">404</p>
          <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl mt-20">Page not found</h1>
          <p class="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <Link to='/home'>
              <a href="#" class="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Click to Return Home</a>
            </Link>
          </div>
        </div>
        <Footer/>
      </main>

    </div>
  )
}

export default NoPage