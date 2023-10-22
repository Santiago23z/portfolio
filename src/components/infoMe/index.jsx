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
        <div className='w-[100%]  h-fit max-[500px]:min-h-[450px] grid place-items-center bg-[#58469E]'>
        <h1 className='text-white my-5 text-4xl text-center max-[800px]:text-3xl'>Sobre mí</h1>
      <aside className='w-[60%] relative max-[800px]:w-full  overflow-x-auto overscroll-x-contain snap-proximity snap-x flex min-[800px]:my-20'>
                <aside className='w-[48%] max-[800px]:min-w-full px-5'>
                    <h2 className='text-center text-3xl text-white m-4'>2022</h2>
                    <p className='text-white text-[15px]'>Completé un bootcamp de fundaciones del software que duró 11 meses, con una dedicación de 60 horas semanales. Aprendí los fundamentos de programación y trabajé en proyectos utilizando C, Python y JavaScript, siendo este último mi favorito. Certifiqué mis habilidades al 100% al finalizar el bootcamp, representando un año de aprendizaje y superación personal significativo.</p>
                </aside>

                <aside className='w-[48%] max-[800px]:min-w-full px-5'>
                    <h2 className='text-center text-3xl text-white m-4'>2023</h2>
                    <p className='text-white text-[15px]'>Comencé mi carrera como freelancer este año. En febrero, contribuí al desarrollo de un plugin de Figma, centrándome en el front-end. Luego, desde mayo hasta ahora, he trabajado como freelancer en icunox, donde automatizo tareas y desarrollo bots de Telegram con Node.js. También he continuado creciendo como desarrollador front-end en proyectos independientes.</p>
                </aside>
        </aside>
        </div>
    </div>
  )
}

export default YoInfo