import React from 'react'
import phone from '../assets/phonewhite.png'
import email from '../assets/email.png'
import wa from '../assets/wawhite.png'
import ig from '../assets/igg.png'
import fb from '../assets/fbb.png'
import twitter from '../assets/twitterr.png'
import logo from '../assets/logo 1 feb RAIL.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-gray-900'>
        <div className="container mx-auto py-14 px-12">
          <img src={logo} alt="logo" className='w-[13rem] h-[13rem] lg:w-[17rem] lg:h-[17rem] mx-auto' />
          <div className="grid lg:flex mt-14">
            <div className="w-full mb-20 lg:w-4/12">
              <p className='text-xl lg:text-2xl font-semibold text-white'>Contact Us:</p>
              <div className="line border-b-2 border-white w-1/2 my-3 lg:my-5"></div>
              <div className="flex w-max">
                <img src={phone} className='w-[1rem] h-[1rem] lg:h-[1.5rem] lg:w-[1.5rem]' alt="phone" />
                <p className='text-sm lg:text-lg text-white ml-5'>+6281-1223-344</p>
              </div>
              <div className="flex mt-5 w-max">
                <img src={email} className='w-[1rem] h-[1rem] lg:h-[1.5rem] lg:w-[1.5rem]' alt="phone" />
                <p className='text-sm lg:text-lg text-white ml-5'>Robbydarwis@gmail.com</p>
              </div>
              <div className="mt-5 w-max">
                <Link to={'https://wa.link/6y0gga'} className='flex'>
                <img src={wa} className='w-[1rem] h-[1rem] lg:h-[1.5rem] lg:w-[1.5rem]' alt="phone" />
                <p className='text-sm lg:text-lg text-white ml-5'>+62821-1996-5025</p>
                </Link>
              </div>
            </div>
            <div className="text-left w-full mb-20 lg:w-4/12 lg:text-center">
              <p className='text-xl lg:text-2xl font-semibold text-white'>Follow Us:</p>
              <div className="line border-b-2 border-white w-1/2 my-3 lg:my-5 mr-auto lg:mx-auto"></div>
              <div className="flex mt-5 w-max mr-auto lg:mx-auto">
                <img src={ig} className='w-[1rem] h-[1rem] lg:h-[1.5rem] lg:w-[1.5rem]' alt="phone" />
                <p className='text-sm lg:text-lg text-white ml-5'>@robbydarwis</p>
              </div>
              <div className="flex mt-5 w-max mr-auto lg:mx-auto">
                <img src={fb} className='w-[1rem] h-[1rem] lg:h-[1.5rem] lg:w-[1.5rem]' alt="phone" />
                <p className='text-sm lg:text-lg text-white ml-5'>Robby Darwis</p>
              </div>
              <div className="flex mt-5 w-max mr-auto lg:mx-auto">
                <img src={twitter} className='w-[1rem] h-[1rem] lg:h-[1.5rem] lg:w-[1.5rem]' alt="phone" />
                <p className='text-sm lg:text-lg text-white ml-5'>@robbydarwis</p>
              </div>
            </div>
            <div className="w-full mb-10 lg:w-4/12 text-left">
              <p className='text-xl lg:text-2xl font-semibold text-white'>Our Store:</p>
              <div className="line border-b-2 border-white w-1/2 my-3 lg:my-5 mr-auto lg:ml-auto"></div>
                <div className="flex w-max me-auto lg:ml-auto">
                  <p className='text-sm lg:text-lg text-white ml-5'>Tokopedia</p>
                </div>
                <div className="flex w-max mt-3 me-auto lg:ml-auto">
                  <p className='text-sm lg:text-lg text-white ml-5'>Shopee</p>
                </div>
                <div className="flex w-max mt-3 me-auto lg:ml-auto">
                  <p className='text-sm lg:text-lg text-white ml-5'>Lazada</p>
                </div>
                <div className="flex w-max mt-3 me-auto lg:ml-auto">
                  <p className='text-sm lg:text-lg text-white ml-5'>Bukalapak</p>
                </div>
            </div>
          </div>
        <p className='text-md lg:text-xl text-white text-center font-semibold mt-4'>Copyright © IZDR IZDIHAR. Reserved</p>
        </div>
    </div>
  )
}

export default Footer