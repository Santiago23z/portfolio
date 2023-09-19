import React, { useEffect, useState } from 'react';
import profile from './me 1.png';
import elipse from './elipse.png';
import fatherElipse from './circulo.png';
import wave from './wave.png'
import CV from './CV_FRONT-END (1).pdf';
import './style.css';


const AboutMe = () => {
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
    <header className=' w-full h-[120vh] relative ' id='headerSection'>
      <section className="flex justify-center w-full h-full relative">
      <figure id='wave' className='text-white' style={{ animation: 'wave 20s linear infinite' }}></figure>

      <div className="flex justify-center flex-col w-[30%]">
        <h1 className="text-transparent bg-gradient-to-b from-[#55C1FF] to-[#A682FF] bg-clip-text  font-extrabold text-2xl my-3">
          {text}
        </h1>
        <p className="text-white">{text2}</p>
        <span className="text-white/40 text-xs my-5 w-[300px]">
          Tengo 18 años, soy un apasionado por la tecnología, tengo 1 año de experiencia como desarrollador front-end, es un cargo en que me siento bien y me encanta!
        </span>
        <a href={CV} download="Cv_front-end">
          <button className="bg-gradient-to-br from-[#A682FF] to-[#55C1FF] py-3 w-[50%]  px-4 rounded-full text-[10px] text-white shadow-md shadow-[#A682FF] hover:bg-gradient-to-br hover:from-white  hover:to-white hover:shadow-md hover:shadow-[white] hover:text-black hover:transition-all duration-500 ease-in-out font-bold">
            Descargar Cv
          </button>
        </a>
      </div>
      <figure className="flex justify-center items-center w-[30%] relative ml-8">
        <img src={fatherElipse} alt="" className="absolute w-44  bottom-52 left-0 h-44 shadow-lg shadow-[#A682FF] rounded-full" />
        <img src={profile} alt="" className="w-44 h-44 z-10" />
        <img src={elipse} alt="" className="  w-28 h-28 absolute bottom-52 right-0 shadow-md shadow-[#A682FF] rounded-full" />
      </figure>
    </section>
    </header>
  );
};

export default AboutMe;
