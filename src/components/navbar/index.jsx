import React from 'react'
import sweb from './SwebCodez.png'
import git from './github-mark 1.png';
import linkedin from './linkedin.png'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <header className='w-full   flex justify-center items-center p-3 '>
        <nav className='flex justify-between w-[64%] items-center'>
      <figure>
        <img src={sweb} alt="" className='w-28 ' />
      </figure>
      <ul className='flex '>
        <a href="#projects">
          <li className='p-2 text-xs text-white '>Proyectos</li>
        </a>
        <a href="#tecnologies">
        <li className='p-2 text-xs  text-white'>Tecnologías</li>
        </a>
        <a href="#aboutMe">
        <li className='p-2 text-xs  text-white'>Sobre mí</li>
        </a>
      </ul>

      <ul className='flex items-center'>
        <Link to="https://github.com/Santiago23z">
        <li className='mx-4'>
            <img src={git} alt="" className='w-6'/>
        </li></Link>
        <Link to="https://www.linkedin.com/in/swebcodez-b01341250">
        <li>
            <img src={linkedin} alt="" className='w-6'/>
        </li>
        </Link>
        
      </ul>
    </nav>
    </header>
    
  )
}

export default Navbar
