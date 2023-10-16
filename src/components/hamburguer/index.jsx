import React from 'react'
import { NavLink } from 'react-router-dom'
import sweb from './SwebCodez.svg'
import './style.css'
import { gbcontext } from '../../helpers/Context'

const Hamburguer = () => {
    const { 
        opacity,
        functionNotOpacity,
        functionOpacity
     } = React.useContext(gbcontext)

    return (
        <aside className={` bg-black ${opacity ? "inline-flex" : "hidden"} absolute right-0 h-[700px] w-[80%] z-10 border border-purple-700 rounded-lg`}>
            <ul className='  w-[90%] mx-auto flex justify-center flex-col relative'>
            <figure className=''>
                <img src={sweb} alt="" className=' absolute top-9  w-[200px]' id='logoSweb' />
            </figure>
                <a href="#projects" className='text-center'>
                    <li className='p-6 text-2xl  text-white font-semibold '>Proyectos</li>
                </a>
                <a href="#tecnologies" className='text-center'>
                    <li className='p-6 text-2xl  text-white font-semibold'>Tecnologías</li>
                </a>
                <a href="#aboutMe" className='text-center'>
                    <li className='p-6 text-2xl  text-white font-semibold'>Sobre mí</li>
                </a>
            </ul>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-8 h-8 bottom-5 left-5 text-white absolute" onClick={functionNotOpacity}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
</svg>

        </aside>
    )
}

export default Hamburguer
