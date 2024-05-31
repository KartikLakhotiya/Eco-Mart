import React, { useContext, useEffect } from 'react'
import myContext from '../../context/data/myContext'
import Layout from '../../components/layout/Layout'
import Loader from '../../components/loader/Loader'

function Order() {
  const userid = JSON.parse(localStorage.getItem('user')).result.user.uid
  console.log(userid)
  const context = useContext(myContext)
  const { mode, loading, order } = context
  return (
    <Layout>
      {loading && <Loader />}
      {order.length > 0 ?
        (<>
          <div className="h-full pt-10">
            {
              order.filter(obj => obj.userid == userid).map((order) => {
                return (
                  <div className="mx-auto max-w-5xl px-6 xl:px-0">
                    {
                      order.cartItems.map((item) => {
                        return (
                          <div className="mb-6 rounded-lg bg-white p-6 shadow-md" style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}>
                            <div className="flex justify-between sm:flex-row">
                              <img src={item.imageUrl} alt="product-image" className="w-full sm:w-40 rounded-lg" />
                              <div className="sm:ml-4 flex flex-col justify-between w-full">
                                <div>
                                  <h2 className="text-[30px] font-bold text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>{item.title}</h2>
                                  <p className="mt-1 text-sm text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>{item.description}</p>
                                  <p className="mt-1 text-sm text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>{item.price}</p>
                                  <p className="mt-1 text-sm text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>Date Ordered: {item.date}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </div>

        </>)
        :
        (
          <h2 className=' text-center tex-2xl text-white'>No Orders Found.</h2>
        )

      }
    </Layout>
  )
}

export default Order