import React from 'react';
import { GoArrowUpRight } from "react-icons/go";

function Landing() {
  return (
    <div className='w-full h-[110%] bg-zinc-800'>
      <div className='text-white px-10 py-32 text-9xl tracking-tighter uppercase bold leading-[0.9]'>
        <h1>we create</h1>
        <div className='flex items-center'>
          <img className='image rounded-md w-40 h-24' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="d" />
          <h1>eye-opening</h1>
        </div>
        <h1>presentations</h1>
      </div>
      <div className='border-t border-zinc-700 p-4 flex justify-between items-center'>
        {['for public and private users', 'from first pitch to IPO', 'start the projects'].map((item, index) => (
          <div key={index} className='flex items-center'>
            <h3 className={
              index === 2
                ? 'border-white p-2 border-[1px] rounded-full text-white uppercase text-lg ml-11 mr-2  hover:bg-white hover:text-black duration-300 ease-in-out'
                : 'text-white text-lg ml-11 mr-11 '
                  }>
              {item}
            </h3>
            {index === 2 && <GoArrowUpRight className='text-white m-1 h-10 w-10 border-white border-[1px] rounded-full hover:bg-white hover:text-black duration-600 ease-out' />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Landing;
