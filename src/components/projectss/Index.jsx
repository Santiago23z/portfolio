import kary from './assets/kary.png';
import todos from './assets/todos.png'
import bot from './assets/Screen Recording 2023-09-14 at 10.02.32 PM.mov'
import { Link } from 'react-router-dom';
import './assets/style.css';


const Projects = () => {
  return (
    <section className='w-full flex justify-center items-center flex-col bg-gradient-to-b from-[#715AFF] to-[#5c489e] relative py-20' id='projects'>
        
        <h1 className=' w-[60%] text-white py-[50px] max-sm:py-[20px] text-4xl'>Proyectos</h1>

        <section className=' flex overflow-x-auto overscroll-x-contain snap-proximity snap-x w-full gap-5 px-4 my-5'>
            <div className='bg-[#46365d] py-5 rounded-md min-w-[300px] max-w-[500px] snap-center'>
                <article className='px-6'>
                    <figure>
                        <img src={kary} className='rounded-md' alt="" />
                    </figure>
                    <div className='my-5'>
                        <h4 className='text-2xl font-bold text-white my-3'>Kary shop</h4>
                        <p className='text-white/60'>E-commerce, hecho en vite/tailwind, En este momento implementando servicio de autenticación y haciendo responsive</p>
                    </div>
                    <div className='w-full flex justify-around my-4'>
                <Link to="https://64fa20cdaeb6b53ce66edb2e--zippy-parfait-21ab2a.netlify.app">
                    <button className='bg-white py-3 w-full  px-4 rounded-full text-[12px] text-[#A682FF] shadow-md shadow-[#A682FF]  hover:bg-gradient-to-br from-[#ac93ea] to-[#000000]  hover:to-white hover:shadow-md hover:shadow-[white] hover:text-black hover:transition-all duration-500 ease-in-out'>Vista previa</button>
                </Link>
                <Link to="https://github.com/Santiago23z/karyShop">
                    <button className=' p-3 px-4 w-full  rounded-full text-[12px] text-white  border border-white hover:bg-white hover:text-black  hover:shadow-md hover:shadow-white hover:transition-all duration-500 ease-in-out'>Ver en git hub</button>
                </Link>
            </div>
                </article>
            </div>
            <div className='bg-[#46365d] py-5 rounded-md min-w-[300px] max-w-[500px] snap-center'>
                <article className='px-6'>
                    <figure>
                        <img src={todos} className='rounded-md' alt="" />
                    </figure>
                    <div className='my-5 min-h-[164px]'>
                        <h4 className='text-2xl font-bold text-white my-3'>Todos App</h4>
                        <p className='text-white/60'>Desarrollé una aplicación de e-commerce completamente funcional y altamente receptiva utilizando React</p>
                    </div>
                    <div className='w-full flex justify-around my-4'>
                <Link to="https://santiago23z.github.io/Todos-App/">
                    <button className='bg-white py-3 w-full  px-4 rounded-full text-[12px] text-[#A682FF] shadow-md shadow-[#A682FF]  hover:bg-gradient-to-br from-[#ac93ea] to-[#000000]  hover:to-white hover:shadow-md hover:shadow-[white] hover:text-black hover:transition-all duration-500 ease-in-out'>Vista previa</button>
                </Link>
                <Link to="https://github.com/Santiago23z/Todos-App">
                    <button className=' p-3 px-4 w-full  rounded-full text-[12px] text-white  border border-white hover:bg-white hover:text-black  hover:shadow-md hover:shadow-white hover:transition-all duration-500 ease-in-out'>Ver en git hub</button>
                </Link>
            </div>
                </article>
                
            </div>
            <div className='bg-[#46365d] py-5 rounded-md min-w-[300px] max-w-[500px] snap-center'>
                <article className='px-6'>
                    <figure>
                        <video src={bot} className='rounded-md' alt="" />
                    </figure>
                    <div className='my-5'>
                        <h4 className='text-2xl font-bold text-white my-3'>Telegram bot</h4>
                        <p className='text-white/60'>Bot en telegram con node.js que maneja mensajes de usuarios para entrar a un canal de telegram, expulsa desbanea y admite según un estado de suscripción</p>
                    </div>
                    <div className='w-full flex justify-around my-4'>
                <Link to="https://github.com/Santiago23z/GrikoBotTelegram">
                    <button className=' p-3 px-4 w-full  rounded-full text-[12px] text-white  border border-white hover:bg-white hover:text-black  hover:shadow-md hover:shadow-white hover:transition-all duration-500 ease-in-out'>Ver en git hub</button>
                </Link>
            </div>
                </article>
                <article></article>
                <article></article>
            </div>
        </section>
    </section>
  )
}

export default Projects
