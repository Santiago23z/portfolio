import React from 'react'
import sweb from './SwebCodez.png'
import git from './github-mark 1.png';
import linkedin from './linkedin.png'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <header className='w-full flex justify-center items-center py-5 '>
      <nav className='flex justify-between w-[68%] items-center'>
      <figure>
        <img src={sweb} alt="" className='w-48 ' />
      </figure>
      <ul className='flex '>
        <a href="#projects">
          <li className='px-2 text-md text-white'>Proyectos</li>
        </a>
        <a href="#tecnologies">
        <li className='px-2 text-md  text-white'>Tecnologías</li>
        </a>
        <a href="#aboutMe">
        <li className='px-2 text-md  text-white'>Sobre mí</li>
        </a>
      </ul>

      <ul className='flex items-center'>
        <Link to="https://github.com/Santiago23z">
        <li className='mx-4'>
            <img src={git} alt="" className='w-10'/>
        </li></Link>
        <Link to="https://www.linkedin.com/in/swebcodez-b01341250">
        <li>
            <img src={linkedin} alt="" className='w-10'/>
        </li>
        </Link>
        
      </ul>
      </nav>
    </header>
    
  )
}

export default Navbar
