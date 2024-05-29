import React, { useContext } from "react";
import { FaUserTie } from "react-icons/fa";
import myContext from "../../../context/data/myContext";
import Layout from "../../../components/layout/Layout";
import DashboardTab from "./DashboardTab";

function Dashboard() {
  const context = useContext(myContext);
  const { mode } = context;
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
                    10
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
                    10
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
                    10
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
