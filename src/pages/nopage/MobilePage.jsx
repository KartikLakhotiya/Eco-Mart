import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import LoginNav from '../../components/navbar/LoginNav'

const MobilePage = () => {
    return (
        <div>
            <LoginNav />

            <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mt-[230px] ml-7 overflow-hidden">

                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Website only Available on Desktop</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">The Mobile version of this website is still work in progress so please switch to a desktop to use this website.</p>
            </a>

        </div>
    )
}

export default MobilePage