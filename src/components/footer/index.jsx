import React from 'react'
import wpp from './wpp.png'
const Footer = () => {
  return (
    <footer className='w-full  p-3 flex justify-around items-center mt-20 '>

      <div className='flex flex-col'>
      <h5 className='text-white text-md max-sm:text-sm'>Santizapataalvares@gmail.com</h5>
      <a href="https://api.whatsapp.com/send/?phone=%2B573044543485&text&type=phone_number&app_absent=0" target='_blank' className=' self-center hover:text-[#5887FF] transform hover:transform hover:scale-105 transition-transform duration-300 ease-in-out text-[#5887FF]'>+57 304 4543485</a>
      
      </div>
    </footer>
  )
}

export default Footer
