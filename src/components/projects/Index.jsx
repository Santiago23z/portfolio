import kary from './assets/kary.png';
import todos from './assets/todos.png'
import bot from './assets/Screen Recording 2023-09-14 at 10.02.32 PM.mov'
import { Link } from 'react-router-dom';
import './assets/style.css'

const Projects = () => {
  return (
    <section className='w-full h-[190vh] flex justify-center items-center flex-col bg-gradient-to-b from-[#715AFF] to-[#55C1FF] relative' id='projects'>
        <figure id='waves' className='text-white'>
            <div></div>
        </figure>
        <h1 className=' w-[60%] text-white my-4'>Proyectos</h1>

      <div className='w-[60%] grid grid-cols-2 gap-3'>
        
        <aside className='border-2 p-3 border-white border-opacity-50 rounded-md flex justify-between flex-col'>
            <figure>
                <img src={kary} alt="" />
            </figure>
            <div>
                <h3 className='my-4 text-white'>Kary shop</h3>
                <p className='text-white text-[10px]'>E-commerce, hecho en vite/tailwind, En este momento implementando servicio de autenticación y haciendo responsive</p>
            </div>
            <div className='w-full flex justify-around my-4'>
                <Link to="https://64fa20cdaeb6b53ce66edb2e--zippy-parfait-21ab2a.netlify.app">
                    <button className='bg-white py-3 w-full  px-4 rounded-full text-[10px] text-[#A682FF] shadow-md shadow-[#A682FF]  hover:bg-gradient-to-br from-[#ac93ea] to-[#000000]  hover:to-white hover:shadow-md hover:shadow-[white] hover:text-black hover:transition-all duration-500 ease-in-out'>Vista previa</button>
                </Link>
                <Link to="https://github.com/Santiago23z/karyShop">
                    <button className=' p-3 px-4 w-full  rounded-full text-[10px] text-white  border border-white hover:bg-white hover:text-black  hover:shadow-md hover:shadow-white hover:transition-all duration-500 ease-in-out'>Ver en git hub</button>
                </Link>
            </div>
        </aside>

        <aside className='border-2 p-3 border-white border-opacity-50 rounded-md flex justify-between flex-col'>
            <figure>
                <img src={todos} alt="" />
            </figure>
            <div>
            <h3 className='my-4 text-white'>Todos App</h3>
            <p className='text-white text-[10px]'>Desarrollé una aplicación de e-commerce completamente funcional y altamente receptiva utilizando React</p>
            </div>
            <div className='w-full flex justify-around my-4'>
                <Link to="https://santiago23z.github.io/Todos-App/">
                    <button className='bg-white py-3 w-full  px-4 rounded-full text-[10px] text-[#A682FF] shadow-md shadow-[#A682FF]  hover:bg-gradient-to-br from-[#ac93ea] to-[#000000]  hover:to-white hover:shadow-md hover:shadow-[white] hover:text-black hover:transition-all duration-500 ease-in-out'>Vista previa</button>
                </Link>
                <Link to="https://github.com/Santiago23z/Todos-App">
                    <button className=' p-3 px-4 w-full  rounded-full text-[10px] text-white  border border-white hover:bg-white hover:text-black  hover:shadow-md hover:shadow-white hover:transition-all duration-500 ease-in-out'>Ver en git hub</button>
                </Link>
            </div>
        </aside>

        <aside className='border-2 p-3  border-white border-opacity-50 rounded-md flex justify-between flex-col'>
            <figure>
            <video src={bot} controls></video>
            </figure>
            <div>
            <h3 className='my-4 text-white'>Telegram bot</h3>
            <p className='text-white text-[10px]'>Bot en telegram con node.js que maneja mensajes de usuarios para entrar a un canal de telegram, expulsa desbanea y admite según un estado de suscripción</p>
            </div>
            <div className='w-full flex justify-around my-4'>
                <Link to="https://github.com/Santiago23z/GrikoBotTelegram">
                    <button className=' p-3 px-4 w-full  rounded-full text-[10px] text-white  border border-white hover:bg-white hover:text-black  hover:shadow-md hover:shadow-white hover:transition-all duration-500 ease-in-out'>Ver en git hub</button>
                </Link>
            </div>
        </aside>
        
      </div>  
    </section>
  )
}

export default Projects
