import React from 'react'
import wpp from './wpp.png'
const Footer = () => {
  return (
    <footer className='w-full  py-3 flex justify-around items-center'>

      <h5 className='text-white text-[9px]'>Santizapataalvares@gmail.com</h5>

      <p className='flex'>
        <span className='text-white text-[9px] flex items-center'>Whatsapp <span className='ml-4'><a href="https://api.whatsapp.com/send/?phone=%2B573044543485&text&type=phone_number&app_absent=0"  target='_blank' className=' hover:text-[#5887FF] hover:scale-105 transition-transform duration-300 ease-in-out transform hover:transform hover:-translate-y-1 hover:scale-105 transition-transform duration-300 ease-in-out '>+57 304 4543485</a></span> <figure> <a href="https://api.whatsapp.com/send/?phone=%2B573044543485&text&type=phone_number&app_absent=0"  target='_blank' className=' hover:text-[#5887FF] hover:scale-105 transition-transform duration-300 ease-in-out transform hover:transform hover:-translate-y-1 hover:scale-105 transition-transform duration-300 ease-in-out '><img src={wpp} className="w-6 h-6 ml-4" /></a></figure></span>
      </p>
    </footer>
  )
}

export default Footer
