import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logoName from  '../assets/nama.png'
import menu from '../assets/burger white.png'
import close from '../assets/close.png'

const Navbar = () => {

  const token = localStorage.getItem('token')
  const [active, setActive] = useState(false)
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.clear()
    navigate('/login')
  }

  return (
    <div className='bg-gray-900'>
        <div className="container mx-auto py-9 px-9 flex">
          <div className="lg:w-2/12 w-full">
            <Link to={'/'}>
            <img src={logoName} className='w-[12rem] h-[5rem] mx-auto lg:w-full lg:h-full' alt="" />
            </Link>
          </div>
          <div className="absolute grid right-7 mt-9 buttn lg:hidden">
            {active === false ?
              <button className='ml-auto' onClick={()=>setActive(true)}>
                <img src={menu} alt="menu" className='w-[2rem] h-[2rem]' />
              </button>
              :
              <button className='ml-auto' onClick={()=>setActive(false)}>
                <img src={close} alt="menu" className='w-[2rem] h-[2rem]' />
              </button>        
            }
            { active === true ?
            <div className="content grid border-4 mt-4 w-[10rem] rounded-lg py-2 px-4 bg-white border-gray-900">
              <button className='text-xl font-semibold p-2 text-right bg-transparent focus:bg-gray-300'>Home</button>
              <button className='text-xl font-semibold p-2 text-right bg-transparent focus:bg-gray-300'>About</button>
              <button className='text-xl font-semibold p-2 text-right bg-transparent focus:bg-gray-300'>Galery</button>
              <button onClick={()=>navigate('/cart')} className='text-xl font-semibold p-2 text-right bg-transparent focus:bg-gray-300'>Cart</button>
              { token ?
              <button onClick={handleLogout} className='text-xl font-semibold p-2 text-red-600 text-right bg-transparent focus:bg-gray-300'>Logout</button>
              :
              <button onClick={()=>navigate('/login')} className='text-xl font-semibold p-2 text-red-600 text-right bg-transparent focus:bg-gray-300'>Login</button>
              }
            </div>
            :  null }
          </div>
          <div className="wrapper lg:w-10/12 lg:mx-auto lg:grid hidden">
            <Link to={'/'} className='my-auto w-3/4 ml-auto flex'>
              <p className='text-white text-2xl font-semibold mx-auto'><Link to={'/landing'}>Home</Link></p>
              <p className='text-white text-2xl font-semibold mx-auto'><Link to={'/landing'}>About</Link></p>
              <p className='text-white text-2xl font-semibold mx-auto'><Link to={'/landing'}>Contact</Link></p>
              <p className='text-white text-2xl font-semibold mx-auto'><Link to={'/landing'}>Galery</Link></p>
              <p className='text-white text-2xl font-semibold ml-auto'><Link to={'/login'}>Login</Link></p>
              {/* <p className='text-gray-300 text-2xl font-semibold ml-auto'><Link to={'/login'}>Login</Link></p> */}
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Navbar