import React from 'react'
// import shirt from '../assets/jaket eastern wolves.jpg'
import plus from '../assets/+.png'
import minus from '../assets/-.png'

const CartList = ({photo, name, qty, price, click, click2}) => {
  return (
    <div className='p-4 my-10 flex border-2'>
        <div className="w-1/2">
            <img src={photo} alt="item" className='w-full h-full' />
        </div>
        <div className="w-1/2 grid px-4">
            <p className='text-xl font-semibold mb-2'>{name}</p>
            <p className='text-md font-semibold mt-1 mb-1'>Quantity</p>
            <div className="flex w-max">
                <button className='w-4 h-4 my-auto' onClick={click}><img src={minus} alt="" /></button>
                <p className='text-sm font-bold mx-2'>{qty}</p>
                <button className='w-4 h-4 my-auto' onClick={click}><img src={plus} alt="" /></button>
            </div>
            <p className='text-md font-semibold mt-1'>Price</p>
            <p className=' text-sm font-bold text-red-500'>Rp. {price}</p>
            <button className='mt-4 mx-auto w-max p-1 bg-gray-900 text-white'>Checkout</button>
        </div>
    </div>
  )
}

export default CartList