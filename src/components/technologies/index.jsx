import html from './/SVGRepo_iconCarrier-1.png';
import './Carousel.css'
import js from './SVGRepo_iconCarrier-2.png';
import node from './Frame-4.png'
import figma from './/Frame-2.png';
import css from './Frame-3.png';
import tailwind from './Frame.png';
import react from './/react.png';
import wp from './Frame-1.png';
import git from './github-mark 1.png'
import flecha from './selector.png'
const Technologies = () => {
  return (
    <section className='w-[100%] flex justify-center py-28 bg-[#000000] relative' id='tecnologies'>
        <figure id='waves' className='text-white absolute top-0'>
            <img src={flecha} alt="" />
        </figure>
      <div className='w-[60%]  mt-20'>
      <div className=' rounded-lg'>
      <h1 className='text-white text-4xl'>Tecnologías</h1>

        <aside className='my-8'>
            <p className='w-full flex justify-between my-3 items-center'>
                <span className='text-white text-md'>React</span>
                <span className='text-white text-sm'>Avanzado</span>
            </p>
            <div className="w-[86%] h-3 bg-gradient-to-r from-[#715AFF] via-[#715AFF] to-[#55C1FF] rounded-full overflow-hidden ">
            </div>
        </aside>
        <aside className='my-8'>
            <p className='w-full flex justify-between my-3 items-center'>
                <span className='text-white text-md'>Html</span>
                <span className='text-white text-sm'>Avanzado</span>
            </p>
            <div className="w-[96%] h-3 bg-gradient-to-r from-[#715AFF] via-[#715AFF] to-[#55C1FF] rounded-full overflow-hidden ">
            </div>
        </aside>
        <aside className='my-8'>
            <p className='w-full flex justify-between my-3 items-center'>
                <span className='text-white text-md'>Tailwind</span>
                <span className='text-white text-sm'>Bueno</span>
            </p>
            <div className="w-[80%] h-3 bg-gradient-to-r from-[#715AFF] via-[#715AFF] to-[#55C1FF] rounded-full overflow-hidden ">
            </div>
        </aside>
        <aside className='my-8'>
            <p className='w-full flex justify-between my-3 items-center'>
                <span className='text-white text-md'>Figma</span>
                <span className='text-white text-sm'>Inexperto</span>
            </p>
            <div className="w-[30%] h-3 bg-gradient-to-r from-[#715AFF] via-[#715AFF] to-[#55C1FF] rounded-full overflow-hidden ">
            </div>
        </aside>
        <aside className='my-8'>
            <p className='w-full flex justify-between my-3 items-center'>
                <span className='text-white text-md'>WordPress</span>
                <span className='text-white text-sm'>Intermedio</span>
            </p>
            <div className="w-[50%] h-3 bg-gradient-to-r from-[#715AFF] via-[#715AFF] to-[#55C1FF] rounded-full overflow-hidden ">
            </div>
        </aside>
        <aside className='my-8'>
            <p className='w-full flex justify-between my-3 items-center'>
                <span className='text-white text-md'>Node.js</span>
                <span className='text-white text-sm'>Intermedio</span>
            </p>
            <div className="w-[60%] h-3 bg-gradient-to-r from-[#715AFF] via-[#715AFF] to-[#55C1FF] rounded-full overflow-hidden ">
            </div>
        </aside>
        <aside className='my-8'>
            <p className='w-full flex justify-between my-3 items-center'>
                <span className='text-white text-md'>JavaScript</span>
                <span className='text-white text-sm'>Intermedio</span>
            </p>
            <div className="w-[67%] h-3 bg-gradient-to-r from-[#715AFF] via-[#715AFF] to-[#55C1FF] rounded-full overflow-hidden ">
            </div>
        </aside>

        
      
      </div>
      <div className='flex animation-desplazar-izquierda '>
        <img src={html} alt="" className='p-2 w-12 h-12' />
        <img src={figma} alt="" className='p-2 w-12 h-12'/>
        <img src={node} alt="" className='p-2  w-12 h-12'/>
        <img src={css} alt="" className='p-2  w-12 h-12'/>
        <img src={js} alt="" className='p-2  w-12 h-12'/>
        <img src={tailwind} alt="" className='p-2  w-12 h-12'/>
        <img src={wp} alt="" className='p-2  w-12 h-12'/>
        <img src={react} alt="" className='p-2  w-18 h-12'/>
        <img src={git} alt="" className='p-2  w-12 h-12'/>
      </div>
      </div>
    </section>
  )
}

export default Technologies
