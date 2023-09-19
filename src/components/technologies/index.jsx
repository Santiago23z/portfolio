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
const Technologies = () => {
  return (
    <section className='w-[100%] flex justify-center py-20 bg-[#101e2e]' id='tecnologies'>
        <figure id='wave2'></figure>

      <div className='w-[60%]'>
      <h1 className='text-white text-2xl'>Tecnologías</h1>
      <div>
        <aside className='my-8'>
            <p className='w-full flex justify-between my-3 items-center'>
                <span className='text-white text-md'>React</span>
                <span className='text-white text-[9px]'>Avanzado</span>
            </p>
            <div className="w-[86%] h-3 bg-gradient-to-r from-[#715AFF] via-[#715AFF] to-[#55C1FF] rounded-full overflow-hidden ">
            </div>
        </aside>
        <aside className='my-8'>
            <p className='w-full flex justify-between my-3 items-center'>
                <span className='text-white text-md'>Html</span>
                <span className='text-white text-[9px]'>Avanzado</span>
            </p>
            <div className="w-[96%] h-3 bg-gradient-to-r from-[#715AFF] via-[#715AFF] to-[#55C1FF] rounded-full overflow-hidden ">
            </div>
        </aside>
        <aside className='my-8'>
            <p className='w-full flex justify-between my-3 items-center'>
                <span className='text-white text-md'>Tailwind</span>
                <span className='text-white text-[9px]'>Bueno</span>
            </p>
            <div className="w-[80%] h-3 bg-gradient-to-r from-[#715AFF] via-[#715AFF] to-[#55C1FF] rounded-full overflow-hidden ">
            </div>
        </aside>
        <aside className='my-8'>
            <p className='w-full flex justify-between my-3 items-center'>
                <span className='text-white text-md'>Figma</span>
                <span className='text-white text-[9px]'>Inexperto</span>
            </p>
            <div className="w-[30%] h-3 bg-gradient-to-r from-[#715AFF] via-[#715AFF] to-[#55C1FF] rounded-full overflow-hidden ">
            </div>
        </aside>
        <aside className='my-8'>
            <p className='w-full flex justify-between my-3 items-center'>
                <span className='text-white text-md'>WordPress</span>
                <span className='text-white text-[9px]'>Intermedio</span>
            </p>
            <div className="w-[50%] h-3 bg-gradient-to-r from-[#715AFF] via-[#715AFF] to-[#55C1FF] rounded-full overflow-hidden ">
            </div>
        </aside>
        <aside className='my-8'>
            <p className='w-full flex justify-between my-3 items-center'>
                <span className='text-white text-md'>Node.js</span>
                <span className='text-white text-[9px]'>Intermedio</span>
            </p>
            <div className="w-[60%] h-3 bg-gradient-to-r from-[#715AFF] via-[#715AFF] to-[#55C1FF] rounded-full overflow-hidden ">
            </div>
        </aside>
        <aside className='my-8'>
            <p className='w-full flex justify-between my-3 items-center'>
                <span className='text-white text-md'>JavaScript</span>
                <span className='text-white text-[9px]'>Intermedio</span>
            </p>
            <div className="w-[67%] h-3 bg-gradient-to-r from-[#715AFF] via-[#715AFF] to-[#55C1FF] rounded-full overflow-hidden ">
            </div>
        </aside>
      </div>
      <div className='flex w-full animation-desplazar-izquierda'>
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
