import React, { useEffect, useState } from 'react';
import profile from './me 1.png';
import elipse from './elipse.png';
import fatherElipse from './circulo.png';
import CV from './Front-End.pdf';
import profileColor from './me.png'
import './style.css';
import { gbcontext } from '../../helpers/Context';


const AboutMe = () => {
  const context = React.useContext(gbcontext)
  const [text, setText] = useState('');
  const msg = `Santiago zapata`;
  const msg2 = 'Desarrollador front-end';
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [text2, setText2] = useState('');

  useEffect(() => {
    if (count < msg.length) {
      const interval = setInterval(() => {
        setText((prevText) => prevText + msg[count]);
        setCount(count + 1);
      }, 140);

      return () => {
        clearInterval(interval);
      };
    } else {
      if (count2 < msg2.length) {
        const interval2 = setInterval(() => {
          setText2((prevText) => prevText + msg2[count2]);
          setCount2((prev) => prev + 1);
        }, 180);
        return () => {
          clearInterval(interval2);
        };
      }
    }
  }, [count, msg.length, count2, msg2.length]);

  

  return (
    <header className=' w-full h-[100vh] relative flex justify-center items-center' id='headerSection'>
      <section className="flex justify-center w-full h-full relative">
      <figure id='wave' className='text-white' style={{ animation: 'wave 20s linear infinite' }}></figure>

      <div className="flex justify-center flex-col w-[35%]">
        <h1 className="text-transparent bg-gradient-to-b from-[#55C1FF] to-[#A682FF] bg-clip-text  h-[60px] m-0 font-extrabold text-5xl my-5">
          {text}
        </h1>
        <p className="text-white text-2xl">{text2}</p>
        <span className="text-white/40 text-lg my-5 ">
          Tengo 18 años, soy un apasionado por la tecnología, tengo 1 año de experiencia como desarrollador front-end, es un cargo en que me siento bien y me encanta!

        </span>
        <a href={CV} download="Cv_front-end">
          <button className={"bg-gradient-to-br from-[#A682FF] to-[#55C1FF]  w-[50%]  p-4 rounded-full text-lg text-white shadow-md shadow-[#A682FF] hover:bg-gradient-to-br hover:from-white  hover:to-white hover:shadow-md hover:shadow-[white] hover:text-black hover:transition-all duration-500 ease-in-out font-bold" } onMouseEnter={context.functionHovered} onMouseLeave={context.functionNotHovered}>
            Descargar Cv
          </button>
        </a>
      </div>
      <figure className="flex justify-center items-center w-[30%] relative ml-10">
        <img src={fatherElipse} alt="" className={`absolute  w-80  bottom-52 left-0  h-80 shadow-lg shadow-[#A682FF] rounded-full ${context.transitionImage ? "animate-grow" : "animate-grow-shrink"}`} />
        <img src={`${context.imageColor ? profileColor : profile}`} alt="" className="w-[250px] h-[250px] z-10" onMouseEnter={context.functionImageHover} onMouseLeave={context.functionImageNotHover}/>
        <img src={elipse} alt="" className=" w-52 h-52 absolute bottom-52 right-0 shadow-md shadow-[#A682FF] rounded-full" />
      </figure>
    </section>
    </header>
  );
};

export default AboutMe;