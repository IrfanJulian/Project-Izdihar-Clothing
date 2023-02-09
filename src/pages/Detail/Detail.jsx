import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
// import shirt from '../../assets/puncture-1.jpg'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import cart from '../../assets/cart.png'
import Swal from 'sweetalert2'

const Detail = () => {

  const {id} = useParams()
  const token = localStorage.getItem('token')
  const idUser = localStorage.getItem('id')
  const [data, setData] = useState()
  const [price, setPrice] = useState('')

  useEffect(()=>{
    const getData = async() => {
      const res = await axios({
        method: 'GET',
        url: `${process.env.REACT_APP_URL}/products/${id}`
      })
      setData(res.data.data[0])
      setPrice(res.data.data[0].price)
    }
    getData()
  }, [id])

  const handleAdd = async (e) => {
    if(token){
      e.preventDefault()
      Swal.fire({
        title: 'Are you want add this item to cart?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      }).then(async(result) => {
        if (result.isConfirmed) {
          await axios({
            method: 'POST',
            url: `http://localhost:4500/mybag/addCart`,
            data: {
              id_product: parseInt(id),
              id_user: idUser,
              qty: 1,
              total_price: price
            }
          })
          Swal.fire(
            'Add to cart success!',
            'Your item now in your cart',
            'success'
          )
        }else{
          Swal.fire(
            'Error!',
            'Something wrong',
            'error'
          )
        }
      })
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You can login to add this item to your cart'
      })
    }
  }

  return (
    <div>
        <Navbar />
        { data ? 
        <div className="container mx-auto my-20">
            <p className='text-2xl lg:text-5xl font-bold text-center underline mb-6'>{data.name}</p>
            <div className="wrapperimg mx-auto">
                <img src={data.photo} alt="shirt" className='w-[20rem] h-[20rem] lg:w-[40rem] lg:h-[40rem] mx-auto' />
            </div>
            <div className="desc w-full lg:w-1/2 px-9 py-5">
                <p className='text-xl lg:text-2xl font-bold'>Description :</p>
                <div className="line w-1/4 border-b-2 border-black my-5"></div>
                <p className='text-lg'>{data.description}</p>
                <p className='text-xl lg:text-2xl font-bold mt-10'>Size :</p>
                <div className="line w-1/4 border-b-2 border-black my-5"></div>
                <button className='text-white text-lg font-bold bg-gray-900 w-10 h-10 lg:w-16 lg:h-16 mr-2 lg:mr-4'>{data.size}</button>
                <p className='text-xl lg:text-2xl font-bold mt-10'>Price :</p>
                <div className="line w-1/4 border-b-2 border-black my-5"></div>
                <p className='text-lg lg:text-xl font-semibold text-red-500 mb-10'>Rp. {data.price}</p>
                <Link to={''} onClick={handleAdd}>
                  <div className='p-2 border-2 border-red-500 flex w-max mx-auto rounded-md'>
                    <img src={cart} alt="cart" className='w-[1.5rem] h-[1.5rem]' />
                    <p className='ml-5 font-semibold text-red-500'>Add to Cart</p>
                  </div>
                </Link>
            </div>
        </div>
        : null }
        <Footer />
    </div>
  )
}

export default Detail