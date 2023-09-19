import React from 'react'
import img from './Ellipse 7.png';
import selector from './selector.png'

const YoInfo = () => {
  return (
    <div className=' w-[100%]  grid place-items-center ' id='aboutMe'>
        <figure>
            <img src={selector} alt="" />
        </figure>
        {/* <p className='bg-white w-full'>
            <span>2021</span>
            <span>2022</span>
            <span>2022</span>
        </p> */}
        <div className='w-[100%]  h-fit grid place-items-center bg-[#5887FF]'>
        <h1 className='text-white my-5 text-center'>Sobre mí</h1>
      <aside className='w-[60%] relative'>
            <div className=" h-1 bg-white rounded-full overflow-hidden relative">
            </div>
            
            <figure>
                <h1 className='w-6 absolute left-[0%] top-[-43px] text-white'>2022</h1>
                <img src={img} alt="" className='absolute w-6 left-0 top-[-9px]'/>
            </figure>
            <figure>
                <h1 className='absolute w-6 right-0 top-[-43px] text-white'>2023</h1>
                <img src={img} alt="" className='absolute w-6 right-[0%] top-[-9px]'/>
            </figure>
            <div className='flex w-full my-9'>
                <aside className='w-[48%] mr-9'>
                    <p className='text-white text-[10px]'>Completé un bootcamp de fundaciones del software que duró 11 meses, con una dedicación de 60 horas semanales. Aprendí los fundamentos de programación y trabajé en proyectos utilizando C, Python y JavaScript, siendo este último mi favorito. Certifiqué mis habilidades al 100% al finalizar el bootcamp, representando un año de aprendizaje y superación personal significativo.</p>
                </aside>

                <aside className='w-[53%]'>
                    <p className='text-white text-[10px]'>Comencé mi carrera como freelancer este año. En febrero, contribuí al desarrollo de un plugin de Figma, centrándome en el front-end. Luego, desde mayo hasta ahora, he trabajado como freelancer en icunox, donde automatizo tareas y desarrollo bots de Telegram con Node.js. También he continuado creciendo como desarrollador front-end en proyectos independientes.</p>
                </aside>
            </div>
        </aside>
        </div>
    </div>
  )
}

export default YoInfo
