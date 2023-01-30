import React from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import bg from '../../assets/backgound.jpg'
import Card from '../../components/Card'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

const Landing = () => {
  return (
    <div className='h-screen'>
      <Navbar />
      <div className="container mx-auto my-10">
        <img src={bg} className='w-1/2 mx-auto rounded-xl' alt="" />
      </div>
        <div className="wrappertittle">
          <div className="wrappercategory grid my-10">
            <label htmlFor="category"></label>
            <select className='text-2xl font-semibold text-center w-max mx-auto outline-none mt-5' id="category">
              <option value="">Choose Category</option>
              <option value="jacket">Jacket</option>
              <option value="shirt">Shirt</option>
              <option value="sweater">Sweater</option>
              <option value="pants">Pants</option>
              <option value="short" selected>Short</option>
            </select>
          </div>
        </div>
        <div className="wrappercontent container mx-auto grid grid-cols-4 gap-10">
          <Link to={'/detail'}>
            <Card />
          </Link>
          <Link to={'/detail'}>
            <Card />
          </Link>
          <Link to={'/detail'}>
            <Card />
          </Link>
          <Link to={'/detail'}>
            <Card />
          </Link>
          <Link to={'/detail'}>
            <Card />
          </Link>
          <Link to={'/detail'}>
            <Card />
          </Link>
        </div>
        <div className="pagination flex my-16 w-max mx-auto">
          <button className='bg-gray-900 text-white text-xl py-2 px-10 rounded-lg mx-5'>Prev</button>
          <p className='text-xl font-bold text-gray-900 my-auto'>1/5</p>
          <button className='bg-gray-900 text-white text-xl py-2 px-10 rounded-lg mx-5'>Next</button>
        </div>
        <Footer />
    </div>
  )
}

export default Landing