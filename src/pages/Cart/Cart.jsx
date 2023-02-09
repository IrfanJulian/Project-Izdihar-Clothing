import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CartList from '../../components/CartList'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

const Cart = () => {

    const [data, setData] = useState()
    const [qty, setQty] = useState(1)
    const token = localStorage.getItem('token')
    const id = localStorage.getItem('id')

    useEffect(()=>{
        const getCart = async() => {
            const res = await axios({
                method: 'GET',
                url: `http://localhost:4500/mybag/${id}`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setData(res.data.data)
        }
        getCart()
    }, [id, token])
    console.log(data)

    const handleInc = () => {
        setQty((crnt)=>crnt + 1)
    }
    
    const handleDec = () => {
        setQty((crnt)=>crnt - 1)
    }

  return (
    <div>
        <Navbar />
        <p className='text-2xl lg:text-4xl lg:my-10 font-semibold mt-5 underline text-center'>Your Cart</p>
        {data ?
        <div className='pb-5 px-9'>
            { data.length !== 0 ? data.map((cart)=>
            <CartList photo={cart.photo} name={cart.name} qty={qty} total_price={cart.total_price * qty} click={handleDec} click2={handleInc} />
            )
            :
            <p className='text-2xl text-gray-900 font-semibold text-center my-20'>Add some items to your bag</p>
            }
        </div>
        : null }
        <Footer />
    </div>
  )
}

export default Cart