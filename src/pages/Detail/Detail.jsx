import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import shirt from '../../assets/puncture-1.jpg'

const Detail = () => {
  return (
    <div>
        <Navbar />
        <div className="container mx-auto my-20">
            <p className='text-2xl lg:text-5xl font-bold text-center'>PUNCTURE DISARRAY</p>
            <div className="wrapperimg mx-auto">
                <img src={shirt} alt="shirt" className='w-[20rem] h-[20rem] lg:w-[40rem] lg:h-[40rem] mx-auto' />
            </div>
            <div className="desc w-full lg:w-1/2 px-9 py-5">
                <p className='text-2xl font-bold'>Description :</p>
                <div className="line w-1/4 border-b-2 border-black my-5"></div>
                <p className='text-lg'>Heather grey 20s cotton short sleeve T-shirts, tubular fit, seamless double needle 2cm collar, taped neck and shoulders, satin & cotton label,
                double needle sleeve and bottom hem, black and white plastisol ink screen print</p>
                <p className='text-2xl font-bold mt-10'>Size :</p>
                <div className="line w-1/4 border-b-2 border-black my-5"></div>
                <button className='text-white text-lg font-bold bg-gray-900 w-10 h-10 lg:w-16 lg:h-16 mr-2 lg:mr-4'>S</button>
                <button className='text-white text-lg font-bold bg-gray-900 w-10 h-10 lg:w-16 lg:h-16 mr-2 lg:mx-4'>M</button>
                <button className='text-white text-lg font-bold bg-gray-900 w-10 h-10 lg:w-16 lg:h-16 mr-2 lg:mx-4'>L</button>
                <button className='text-white text-lg font-bold bg-gray-900 w-10 h-10 lg:w-16 lg:h-16 mr-2 lg:mx-4'>XL</button>
                <p className='text-2xl font-bold mt-10'>Price :</p>
                <div className="line w-1/4 border-b-2 border-black my-5"></div>
                <p className='text-lg lg:text-xl font-semibold text-red-500'>Rp. 169.000,00-</p>
                <button></button>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Detail