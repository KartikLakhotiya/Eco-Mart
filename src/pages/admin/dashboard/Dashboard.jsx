import React, { useContext, useState } from "react";
import { FaUserTie } from "react-icons/fa";
import myContext from "../../../context/data/myContext";
import Layout from "../../../components/layout/Layout";
import DashboardTab from "./DashboardTab";
import { firestore } from "../../../firebase/FirebaseConfig";
import { collection, getDocs } from "firebase/firestore";
function Dashboard() {
  const context = useContext(myContext);
  const { mode } = context;
  const [productCount, setProductCount] = useState(0);
  const [ordersCount, setOrdersCount] = useState(0);
  const [usersCount, setUsersCount] = useState(0);

  const fetchCount = async () => {

    // Products Doc
    const productsCollection = collection(firestore, 'products')
    const productsSnapshot = await getDocs(productsCollection);
    const productCount = productsSnapshot.size;
    console.log(productCount)
    setProductCount(productCount);

    // Orders Doc
    const ordersCollection = collection(firestore, 'orders')
    const ordersSnapshot = await getDocs(ordersCollection)
    const ordersCount = ordersSnapshot.size;
    setOrdersCount(ordersCount);

    // Users Doc
    const usersCollection = collection(firestore, 'users')
    const usersSnapshot = await getDocs(usersCollection)
    const usersCount = usersSnapshot.size;
    setUsersCount(usersCount);



  }
  fetchCount();

  return (
    <Layout>
      <section className="text-gray-600 body-font mt-10 mb-10 m-[auto]">
        <div className="container px-5 mx-auto mb-10">
          <div className="flex flex-wrap justify-center -m-4 text-center">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <a className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-200 dark:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-200">
                <div className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-black grid place-items-center">
                  <img src="/product.png" alt="" />
                </div>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  <h2 className="text-[20px] text-black">
                    {productCount}
                    <p>Total Products</p>
                  </h2>
                </p>
              </a>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <a className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-200 dark:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-200">
                <div className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-black grid place-items-center">
                  <img src="/orders.png" alt="" />
                </div>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  <h2 className="text-[20px] text-black">
                    {ordersCount}
                    <p>Total Orders</p>
                  </h2>
                </p>
              </a>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <a className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-200 dark:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-200">
                <div className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-black grid place-items-center">
                  <img src="/users.png" alt="" />
                </div>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  <h2 className="text-[20px] text-black">
                    {usersCount}
                    <p>Total Users</p>
                  </h2>
                </p>
              </a>
            </div>
          </div>
        </div>
        <DashboardTab />
      </section>
    </Layout>
  );
}

export default Dashboard;
