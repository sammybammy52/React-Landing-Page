import React from 'react'
import Single from '../assets/single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';
const Cards = () => {
  return (
    <div className='w-full bg-white py-16 px-16 md:h-screen'>
        <div className='grid grid-cols-1 md:grid-cols-3 mx-auto'>
                
              <div className=' rounded-md flex flex-col px-4 mx-0 md:mx-4 py-8 my-8 shadow-xl hover:scale-105 duration-300'>
                  <img src={Single} className='mx-auto' alt="" width='70px' height='70px' />
                  <h1 className='mx-auto text-xl md:text-2xl font-bold py-5'>Single User</h1>
                  <h1 className='mx-auto text-2xl md:text-4xl font-bold py-4'>$149</h1>
                  <div className='text-center'>
                      <p className='font-medium text-sm border-y py-2'>500 GB Storage</p>
                      <p className='font-medium text-sm border-b py-2'>1 User Allowed</p>
                      <p className='font-medium text-sm border-b py-2'>Send up to 2GB</p>
                  </div>
                  <button className='bg-[#FF725E] text-black rounded-md font font-medium w-[180px]  px-6 py-3 mx-auto my-4'>Start Trial</button>
                  
              </div>

              <div className=' rounded-md flex flex-col px-4 mx-0 md:mx-4 py-8 my-4 shadow-xl hover:scale-105 duration-300'>
                  <img src={Double} className='mx-auto' alt="" width='70px' height='70px' />
                  <h1 className='mx-auto text-xl md:text-2xl font-bold py-5'>Single User</h1>
                  <h1 className='mx-auto text-2xl md:text-4xl font-bold py-4'>$149</h1>
                  <div className='text-center'>
                      <p className='font-medium text-sm border-y py-2'>500 GB Storage</p>
                      <p className='font-medium text-sm border-b py-2'>1 User Allowed</p>
                      <p className='font-medium text-sm border-b py-2'>Send up to 2GB</p>
                  </div>
                  <button className='bg-black text-[#FF725E] rounded-md font font-medium w-[180px]  px-6 py-3 mx-auto my-4'>Start Trial</button>
                  
              </div>

              <div className=' rounded-md flex flex-col px-4 mx-0 md:mx-4 py-8 my-8 shadow-xl hover:scale-105 duration-300'>
                  <img src={Triple} className='mx-auto' alt="" width='70px' height='70px' />
                  <h1 className='mx-auto text-xl md:text-2xl font-bold py-5'>Single User</h1>
                  <h1 className='mx-auto text-2xl md:text-4xl font-bold py-4'>$149</h1>
                  <div className='text-center'>
                      <p className='font-medium text-sm border-y py-2'>500 GB Storage</p>
                      <p className='font-medium text-sm border-b py-2'>1 User Allowed</p>
                      <p className='font-medium text-sm border-b py-2'>Send up to 2GB</p>
                  </div>
                  <button className='bg-[#FF725E] text-black rounded-md font font-medium w-[180px]  px-6 py-3 mx-auto my-4'>Start Trial</button>
                  
              </div>
            
        </div>
    </div>
  )
}

export default Cards