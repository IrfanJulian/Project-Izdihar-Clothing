import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/nama.png'

const OTP = () => {

    const navigate = useNavigate()

  return (
    <div className='bg-gray-900 py-10 grid h-screen'>
        <div className="container py-5 my-auto">
            <img src={logo} alt="logo" className='w-1/2 h-1/2 mx-auto my-8' />
            <form action="" className='px-10'>
                <p className='text-2xl text-white font-semibold text-center'>INSERT YOUR OTP</p>
                <div className="flex my-10">
                    <input type="number" maxLength={1} className='text-3xl w-10 mx-auto h-10 font-bold text-black bg-white p-2 rounded-md border-2 outline-none' />
                    <input type="number" maxLength={1} className='text-3xl w-10 mx-auto h-10 font-bold text-black bg-white p-2 rounded-md border-2 outline-none' />
                    <input type="number" maxLength={1} className='text-3xl w-10 mx-auto h-10 font-bold text-black bg-white p-2 rounded-md border-2 outline-none' />
                    <input type="number" maxLength={1} className='text-3xl w-10 mx-auto h-10 font-bold text-black bg-white p-2 rounded-md border-2 outline-none' />
                    <input type="number" maxLength={1} className='text-3xl w-10 mx-auto h-10 font-bold text-black bg-white p-2 rounded-md border-2 outline-none' />
                    <input type="number" maxLength={1} className='text-3xl w-10 mx-auto h-10 font-bold text-black bg-white p-2 rounded-md border-2 outline-none' />
                </div>
                <button onClick={()=>navigate('/')} className='text-gray-900 border-2 bg-white rounded-lg w-full py-2 text-xl font-bold mt-5'>Insert OTP</button>
            </form>
            <p className='text-sm text-white text-center mt-20'>Copyright © IZDR IZDIHAR. Reserved</p>
        </div>
    </div>
  )
}

export default OTP