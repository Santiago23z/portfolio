import React from 'react'
import img from './Ellipse 7.png';
import selector from './selector.png'
import kary from '../projectss/assets/kary.png'
import bot from '../projectss/assets/Screen Recording 2023-09-14 at 10.02.32 PM.mov'
import todos from '../projectss/assets/todos.png'
import { Link } from 'react-router-dom';
const YoInfo = () => {
    return (
        <div className='w-full ' id='aboutMe'>
            <figure>
                <img src={selector} alt="" />
            </figure>

            <div className='w-[100%]  h-fit grid place-items-center bg-[#5B44A4] p-6'>
                <h1 className='text-white text-center text-2xl'>Sobre mí</h1>
                <section className=' flex overflow-x-auto overscroll-x-contain snap-proximity snap-x w-full gap-9 '>
                    <aside className='py-5 rounded-md min-w-full max-w-[500px] snap-center'>
                        <h3 className='text-center w-full text-white text-4xl my-4'>2022</h3>
                        <p className=' text-stone-100 text-[15px] text-justify'>Completé un bootcamp de fundaciones del software que duró 11 meses, con una dedicación de 60 horas semanales. Aprendí los fundamentos de programación y trabajé en proyectos utilizando C, Python y JavaScript, siendo este último mi favorito. Certifiqué mis habilidades al 100% al finalizar el bootcamp, representando un año de aprendizaje y superación personal significativo.</p>
                    </aside>

                    <aside className='py-5 rounded-md min-w-full max-w-[500px] snap-center'>
                        <h3 className='text-center w-full text-white text-4xl my-4'>2023</h3>
                        <p className=' text-stone-100 text-[15px] text-justify'>Comencé mi carrera como freelancer este año. En febrero, contribuí al desarrollo de un plugin de Figma, centrándome en el front-end. Luego, desde mayo hasta ahora, he trabajado como freelancer en icunox, donde automatizo tareas y desarrollo bots de Telegram con Node.js. También he continuado creciendo como desarrollador front-end en proyectos independientes.</p>
                    </aside>
                </section>
            </div>
        </div>
    )
}

export default YoInfo