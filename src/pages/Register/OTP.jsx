import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import logo from '../../assets/nama.png'


const OTP = () => {

    const [email, setEmail] = useState('')
    const [otp, setOtp] = useState('')
    const navigate = useNavigate()
    const validate = async(e) => {
        e.preventDefault()
        try{
            await axios({
                method: "PUT",
                url: `${process.env.REACT_APP_URL}/user/verification`,
                data: {
                    email,
                    otp
                }
            })
            Swal.fire({
                icon: 'success',
                title: 'Your account is veryfied',
                text: 'You can go to login page now',

              })
              navigate('/login')
        }catch(error){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!'
              })
        }
    }

 return(
    <div className="bg-gray-900 grid py-10 h-full">
        <div className="lg:container mx-auto my-auto">
            <img src={logo} alt="logo" className="w-3/4 h-3/4 lg:h-1/4 lg:w-1/4 mx-auto mb-10" />
            <form action="" className="grid px-10 lg:w-1/2 lg:mx-auto">
            <p className="text-xl font-bold text-white text-center my-5 mt-5">Insert Your OTP</p>
            <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="type your email here" className="text-xl font-semibold py-2 px-4 w-3/4 text-center rounded-md my-10 mx-auto" />
            <input type="text" name="otp" value={otp} onChange={(e)=>setOtp(e.target.value)} placeholder='insert OTP' className="text-xl text-center text-red-600 font-bold w-3/4 py-2 px-4 rounded-md mx-auto" />
            <button onClick={validate} className="text-xl font-bold bg-white px-5 py-2 mt-16 mx-auto rounded-md w-3/4 lg:w-1/2">Send</button>
            <p className="text-xl text-center text-white mt-5 mb-16"><Link to={'/login'}>Go to login</Link></p>
            <p className='text-sm text-white text-center'>Copyright © IZDR IZDIHAR. Reserved</p>
            </form>
        </div>
    </div>
 );
}

export default OTP;