import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import logo from '../../assets/nama.png'


const OTP = () => {

    const [email, setEmail] = useState('')

    const [otp, setOtp] = useState('')

    const validate = async(e) => {
        e.preventDefault()
        try{
            await axios({
                method: "PUT",
                url: `${process.env.REACT_APP_URL}/${email}`,
                data: {
                    otp
                }
            })
            Swal.fire({
                icon: 'success',
                title: 'Your account is veryfied',
                text: 'You can go to login page now',

              })
              setEmail('')
              setOtp('')
        }catch(error){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!'
              })
        }
    }

 return(
    <div className="bg-gray-900 grid py-10 h-screen">
        <div className="container grid mx-auto my-auto">
            <img src={logo} alt="logo" className="w-3/4 h-3/4 mx-auto mb-10" />
            <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="type your email here" className="text-lg font-semibold py-2 px-4 rounded-md mx-auto" />
            <p className="text-xl font-bold text-white text-center my-5">Insert Your OTP</p>
            <input type="text" name="otp" value={otp} onChange={(e)=>setOtp(e.target.value)} className="text-xl font-bold w-1/4 py-2 px-4 rounded-md mx-auto" />
            <button onClick={validate} className="text-xl font-bold bg-white px-5 py-2 mt-16 mx-auto rounded-md w-1/2">Send</button>
            <p className="text-xl text-center text-white mt-5 mb-16"><Link to={'/login'}>Go to login</Link></p>
            <p className='text-sm text-white text-center'>Copyright © IZDR IZDIHAR. Reserved</p>
        </div>
    </div>
 );
}

export default OTP;