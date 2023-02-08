import React, { useState } from 'react'
import CartList from '../../components/CartList'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

const Cart = () => {

    const [data, setData] = useState()

  return (
    <div>
        <Navbar />
        <div className='py-5 px-9'>
            {data ? 
            <CartList />
            :
            <p className='text-2xl text-gray-900 font-semibold text-center my-20'>Add some items to your bag</p>
            }
        </div>
        <Footer />
    </div>
  )
}

export default Cart