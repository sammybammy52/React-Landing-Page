import React from 'react'
import Typed from 'react-typed'

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>

            <h1 className='md:text-5xl sm:text-4xl text-4xl font-bold md:py-6'>Want to attract customers with cool, catchy phrases?</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-3xl sm:text-2xl text-xl font-bold py-4 '>Hire the best</p>
                <Typed className='md:text-3xl sm:text-2xl text-xl font-bold md:pl-4 pl-1 ' strings={['Writers for Hire.', 'Marketsmiths', 'Textbrokers']} typeSpeed={80} backSpeed={40} loop/>
            </div>

            <p className='md:text-2xl text-xl font-bold text-gray-500'>Boost your impressions and interactions with our world class CopyWriting Services</p>

            <button className='bg-[#FF725E] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
            
        </div>
    </div>
  )
}

export default Hero