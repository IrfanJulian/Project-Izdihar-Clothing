import React from 'react'
import { Link } from 'react-router-dom'
import content1 from '../assets/puncture-1.jpg'

const Card = () => {
  return (
    <div className="card my-10 border-4 mx-auto border-gray-300 rounded-xl w-max overflow-hidden">
    <Link to={'/detail'}>
    <div className="wrapperimg h-1/2">
      <img src={content1} alt="content" className='h-52 w-52 lg:h-72 lg:w-72' />
    </div>
    </Link> 
    <div className="wrapperdesc my-5">
      <Link to={'/detail'}>
        <p className='text-lg lg:text-xl font-bold text-center'>PUNCTURE DISARRAY</p>
      </Link>
      <div className="flex py-3">
        <label htmlFor="size"></label>
        <select defaultValue={"Size"} className='text-sm lg:text-lg font-semibold w-max outline-none ml-3' id="size">
          <option className='text-sm' value="Size">Size</option>
          <option className='text-sm' value="S">S</option>
          <option className='text-sm' value="M">M</option>
          <option className='text-sm' value="L">L</option>
          <option className='text-sm' value="XL">XL</option>
        </select>
        <p className='text-sm my-auto lg:text-lg font-semibold ml-auto'>Price:</p>
        <p className='text-sm my-auto lg:text-lg text-red-500 ml-1 mr-5'>Rp.169.000</p>
      </div>
    </div>
  </div>
  )
}

export default Card