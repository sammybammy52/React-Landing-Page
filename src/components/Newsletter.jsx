import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 px-4'>
            <div className="lg:col-span-2 py-4">
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks to get stuff done?</h1>
                <p>sign up to our newsletter and stay up to date.</p>
            </div>
            <div className="my-4">
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='p-3 flex w-full rounded-md text-black my-4' type="email" placeholder='Enter Email' />
                    <button className='bg-[#FF725E] text-black rounded-md font font-medium w-[200px] mx-4 px-6 py-3'>Notify Me</button>
                    
                </div>
                <p className='my-8 md:my-0'>we care about the protection of your data. Read our <span className='text-[#FF725E]'>Privacy Policy</span></p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter