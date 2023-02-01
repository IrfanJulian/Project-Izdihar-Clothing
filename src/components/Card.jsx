import React from 'react'
import content1 from '../assets/puncture-1.jpg'

const Card = () => {
  return (
    <div className="card my-10 border-4 mx-auto border-gray-300 rounded-xl w-max overflow-hidden">
    <div className="wrapperimg h-1/2">
      <img src={content1} alt="content" className='h-72 w-72' />
    </div>
    <div className="wrapperdesc my-5">
      <p className='text-xl font-semibold text-center'>PUNCTURE DISARRAY</p>
      <div className="grid py-3">
        <label htmlFor="size"></label>
        <select defaultValue={"Size"} className='text-lg font-semibold w-max outline-none mx-auto' id="size">
          <option className='text-sm' value="Size">Size</option>
          <option className='text-sm' value="S">S</option>
          <option className='text-sm' value="M">M</option>
          <option className='text-sm' value="L">L</option>
          <option className='text-sm' value="XL">XL</option>
        </select>
      </div>
        <p className='text-lg font-semibold text-center'>Price:</p>
        <p className='text-lg font-semibold text-center text-red-500 mt-auto ml-3'>Rp. 169.000</p>
    </div>
  </div>
  )
}

export default Card