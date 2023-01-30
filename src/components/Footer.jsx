import React from 'react'
import phone from '../assets/phonewhite.png'
import email from '../assets/email.png'
import wa from '../assets/wawhite.png'
import ig from '../assets/igg.png'
import fb from '../assets/fbb.png'
import twitter from '../assets/twitterr.png'

const Footer = () => {
  return (
    <div className='bg-gray-900 pb-10'>
        <div className="container flex mx-auto py-24">
            <div className="w-4/12">
              <p className='text-2xl font-semibold text-white'>Contact Us:</p>
              <div className="line border-b-2 border-white w-1/2 my-5"></div>
              <div className="flex w-max">
                <img src={phone} className='h-[1.5rem] w-[1.5rem]' alt="phone" />
                <p className='text-lg text-white ml-5'>+6281-1223-344</p>
              </div>
              <div className="flex mt-5 w-max">
                <img src={email} className='h-[1.5rem] w-[1.5rem]' alt="phone" />
                <p className='text-lg text-white ml-5'>Robbydarwis@gmail.com</p>
              </div>
              <div className="flex mt-5 w-max">
                <img src={wa} className='h-[1.5rem] w-[1.5rem]' alt="phone" />
                <p className='text-lg text-white ml-5'>+6281-1223-344</p>
              </div>
            </div>
            <div className="w-4/12">
              <p className='text-2xl font-semibold text-white'>Follow Us:</p>
              <div className="line border-b-2 border-white w-1/2 my-5"></div>
              <div className="flex mt-5 w-max">
                <img src={ig} className='h-[1.5rem] w-[1.5rem]' alt="phone" />
                <p className='text-lg text-white ml-5'>@robbydarwis</p>
              </div>
              <div className="flex mt-5 w-max">
                <img src={fb} className='h-[1.5rem] w-[1.5rem]' alt="phone" />
                <p className='text-lg text-white ml-5'>Robby Darwis</p>
              </div>
              <div className="flex mt-5 w-max">
                <img src={twitter} className='h-[1.5rem] w-[1.5rem]' alt="phone" />
                <p className='text-lg text-white ml-5'>@robbydarwis</p>
              </div>
            </div>
            <div className="w-4/12">
              <p className='text-2xl font-semibold text-white'>Our Store:</p>
              <div className="line border-b-2 border-white w-1/2 my-5"></div>
              <div className="flex">

              </div>
            </div>
        </div>
        <p className='text-xl text-white text-center font-semibold'>Copyright © IZDR IZDIHAR. Reserved</p>
    </div>
  )
}

export default Footer