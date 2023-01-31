import React from 'react'
import phone from '../assets/phonewhite.png'
import email from '../assets/email.png'
import wa from '../assets/wawhite.png'
import ig from '../assets/igg.png'
import fb from '../assets/fbb.png'
import twitter from '../assets/twitterr.png'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <div className='bg-gray-900'>
        <div className="container mx-auto py-14 border-r-4 border-l-4 border-white px-12">
          <img src={logo} alt="logo" className='w-[10rem] h-[10rem] mx-auto' />
          <div className="flex mt-14">
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
            <div className="w-4/12 text-center">
              <p className='text-2xl font-semibold text-white'>Follow Us:</p>
              <div className="line border-b-2 border-white w-1/2 my-5 mx-auto"></div>
              <div className="flex mt-5 w-max mx-auto">
                <img src={ig} className='h-[1.5rem] w-[1.5rem]' alt="phone" />
                <p className='text-lg text-white ml-5'>@robbydarwis</p>
              </div>
              <div className="flex mt-5 w-max mx-auto">
                <img src={fb} className='h-[1.5rem] w-[1.5rem]' alt="phone" />
                <p className='text-lg text-white ml-5'>Robby Darwis</p>
              </div>
              <div className="flex mt-5 w-max mx-auto">
                <img src={twitter} className='h-[1.5rem] w-[1.5rem]' alt="phone" />
                <p className='text-lg text-white ml-5'>@robbydarwis</p>
              </div>
            </div>
            <div className="w-4/12 text-right">
              <p className='text-2xl font-semibold text-white'>Our Store:</p>
              <div className="line border-b-2 border-white w-1/2 my-5 ml-auto"></div>
                <div className="flex w-max ml-auto">
                  <p className='text-lg text-white'>Tokopedia</p>
                </div>
                <div className="flex w-max mt-3 ml-auto">
                  <p className='text-lg text-white'>Shopee</p>
                </div>
                <div className="flex w-max mt-3 ml-auto">
                  <p className='text-lg text-white'>Lazada</p>
                </div>
                <div className="flex w-max mt-3 ml-auto">
                  <p className='text-lg text-white'>Bukalapak</p>
                </div>
            </div>
          </div>
        <p className='text-xl text-white text-center font-semibold mt-14'>Copyright © IZDR IZDIHAR. Reserved</p>
        </div>
    </div>
  )
}

export default Footer