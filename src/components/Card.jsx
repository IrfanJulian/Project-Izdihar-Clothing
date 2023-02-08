import React from 'react'
import { Link } from 'react-router-dom'
// import content1 from '../assets/puncture-1.jpg'

const Card = ({ id, tittle, price, size, photo }) => {
  return (
    <div className="card my-10 border-4 mx-auto border-gray-300 rounded-xl w-max overflow-hidden">
    <Link to={`/detail/${id}`}>
    <div className="wrapperimg h-1/2 lg:h-3/4 overflow-hidden">
      <img src={photo} alt="content" className='h-52 w-52 lg:h-72 lg:w-72 lg:border-b-4' />
    </div>
    </Link> 
    <div className="wrapper py-5 lg:h-1/4">
      <Link to={`/detail/${id}`}>
        <p className='text-lg lg:text-xl font-bold text-center lg:mb-3'>{tittle}</p>
      </Link>
      <div className="flex">
        <label htmlFor="size"></label>
        <select defaultValue={"Size"} className='text-sm lg:text-lg font-semibold w-max outline-none ml-3' id="size">
          <option className='text-sm' value="Size">Size</option>
          <option className='text-sm' value="S">{size}</option>
        </select>
        <p className='text-sm my-auto lg:text-lg font-semibold ml-auto'>Price:</p>
        <p className='text-sm my-auto lg:text-lg text-red-500 ml-1 mr-5'>Rp.{price}</p>
      </div>
    </div>
  </div>
  )
}

export default Card