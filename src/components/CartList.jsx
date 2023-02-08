import React from 'react'
// import shirt from '../assets/jaket eastern wolves.jpg'
import plus from '../assets/+.png'
import minus from '../assets/-.png'

const CartList = ({photo, name, qty, total_price, click, click2}) => {
  return (
    <div className='p-4 my-5 flex border-2 lg:w-max lg:mx-auto'>
        <div className="w-1/2 lg:w-max">
            <img src={photo} alt="item" className='w-full h-full lg:w-[25rem] lg:h-[25rem]' />
        </div>
        <div className="w-1/2 lg:w-max grid px-4">
            <p className='text-xl lg:text-4xl font-semibold lg:font-bold lg:mt-7'>{name}</p>
            <p className='hidden lg:inline font-semibold lg:text-2xl lg:ml-5 lg:-mt-5 lg:h-max'>Quantity</p>
            <div className="flex my-2 w-max lg:h-max lg:ml-5 lg:-mt-7">
                <button className='w-4 h-4 lg:w-8 lg:h-8 my-auto' onClick={click}><img src={minus} alt="" /></button>
                <p className='text-sm lg:text-xl font-bold mx-2 lg:mx-4'>{qty}</p>
                <button className='w-4 h-4 my-auto lg:w-8 lg:h-8' onClick={click}><img src={plus} alt="" /></button>
            </div>
            <p className='hidden lg:inline font-semibold mt-1 lg:ml-5 lg:-mt-5 lg:text-2xl lg:h-max'>Price</p>
            <p className=' text-sm font-bold text-red-500 lg:ml-5 lg:text-xl lg:-mt-8'>Rp. {total_price}</p>
            <button className='mt-4 w-max p-1 px-3 font-semibold bg-gray-900 text-white lg:text-2xl lg:font-bold lg:px-20 lg:py-3 lg:h-max '>Checkout</button>
        </div>
    </div>
  )
}

export default CartList