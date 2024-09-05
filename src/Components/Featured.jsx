import { motion } from "framer-motion";
import React, { useState } from "react";
import {Power4} from "gsap/all"
function Featured() {
  var [IsHover,setIsHover]=useState(false);
  var [IsHover2,setIsHover2]=useState(false);
  var [IsHover3,setIsHover3]=useState(false);
  var [IsHover4,setIsHover4]=useState(false);
  var [IsHover5,setIsHover5]=useState(false);
  var [IsHover6,setIsHover6]=useState(false);
  const hover =(a)=>{
    setIsHover(a);
  }
  const hover2 =(a)=>{
    setIsHover2(a);
  }
  const hover3 =(a)=>{
    setIsHover3(a);
  }
  const hover4 =(a)=>{
    setIsHover4(a);
  }
  const hover5 =(a)=>{
    setIsHover5(a);
  }
  const hover6 =(a)=>{
    setIsHover6(a);
  }
  return (
    <div data-scroll data-scroll-speed='-0.1' className="h-min-screen overflow-x-hidden w-full bg-[#27272A]">
      <h1 className="text-white text-[4vw] p-6">Featured projects</h1>
      <div className="border-zinc-600 border-[1px] mb-8"></div>
      <div className="box1 flex relative justify-between h-[90vh] p-8 w-[100vw]"> 
        <div className="left max-h-fit w-[46vw]">
        <div className="absolute flex  text-[3vw] overflow-hidden left-1/2 top-1/2 -translate-x-[50%] z-[99] -translate-y-[50%]">
        {'CardboardSpaceship'.split('').map((item,index)=>(
            <motion.span className="translate-y-16 inline-block font-arial-regular text-[5vw] uppercase font-bold text-cyan-200" initial={{y:'100%'}} animate={
              IsHover?{y:0}:{y:'100%'}}
              transition={{ease:Power4.easeInOut , delay:index*0.05}}
             key={index}>{item}</motion.span>
        ))}
        </div>
          <div className="head text-zinc-300 flex items-center mb-7">
            <div className="h-3 w-3 rounded-full bg-zinc-300 mr-5"></div>
            <h1 className="text-lg uppercase">Cardboard Spaceship</h1>
          </div>
          <div onMouseEnter={()=>hover(true)} onMouseLeave={()=>hover(false)}
            className="w-full h-[70vh] rounded-lg bg-contain bg-center hover:scale-95 duration-700 "
            style={{
              backgroundImage:
                'url("https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png")',
            }}
          ></div>
          <div className="m-4 flex gap-7 text-zinc-400">
            {["branded template", "sales deck", "social media templates"].map(
              (item, index) => (
                <h1
                  key={index}
                  className="pl-3 pr-3 pt-3 pb-3 uppercase rounded-full border-[1px] border-zinc-400 hover:bg-zinc-400 hover:text-black duration-600 ease-in-out"
                >
                  {item}
                </h1>
              )
            )}
          </div>
        </div>
        <div className="right h-full w-[46vw]">
        <div className="absolute flex  text-[3vw] overflow-hidden left-1/2 top-1/2 -translate-x-[50%] z-[99] -translate-y-[50%]">
        {'AH2 & Matt Horn'.split('').map((item,index)=>(
            <motion.span className="translate-y-16 inline-block font-arial-regular text-[5vw] uppercase font-bold text-red-800" initial={{y:'100%'}} animate={
              IsHover2?{y:0}:{y:'100%'}}
              transition={{ease:Power4.easeInOut , delay:index*0.06}}
             key={index}>{item}</motion.span>
        ))}
        </div>
          <div className="head text-zinc-300 flex items-center mb-7">
            <div className="h-3 w-3 rounded-full bg-zinc-300 mr-5"></div>
            <h1 className="text-lg uppercase">AH2 & Matt Horn</h1>
          </div>
          <div  onMouseEnter={()=>hover2(true)} onMouseLeave={()=>hover2(false)}
            className="w-full h-[70vh] rounded-lg bg-cover bg-center hover:scale-95 duration-700"
            style={{
              backgroundImage:
                'url("https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png")',
            }}
          ></div>
          <div className="m-4 flex gap-7 text-zinc-400">
            {["pitch deck"].map((item, index) => (
              <h1
                key={index}
                className="pl-3 pr-3 pt-3 pb-3 uppercase rounded-full border-[1px] border-zinc-400 hover:bg-zinc-400 duration-900 hover:text-black duration-400 ease-in-out"
              >
                {item}
              </h1>
            ))}
          </div>
        </div>
      </div>
      <div className="flex relative justify-between h-[90vh] p-8 w-[100vw]">
        <div className="left h-full w-[46vw]">
        <div className="absolute  flex  text-[3vw] overflow-hidden left-1/2 top-1/2 -translate-x-[50%] z-[99] -translate-y-[50%]">
        {'fyde'.split('').map((item,index)=>(
            <motion.span className="translate-y-16 inline-block font-arial-regular text-[5vw] uppercase font-bold text-zinc-400" initial={{y:'100%'}} animate={
              IsHover3?{y:0}:{y:'100%'}}
              transition={{ease:Power4.easeInOut , delay:index*0.06}}
             key={index}>{item}</motion.span>
        ))}
        </div>
          <div className="head text-zinc-300 flex items-center mb-7">
            <div className="h-3 w-3 rounded-full bg-zinc-300 mr-5"></div>
            <h1 className="text-lg uppercase">Fyde</h1>
          </div>
          <div  onMouseEnter={()=>hover3(true)} onMouseLeave={()=>hover3(false)}
            className="w-full h-[70vh] rounded-lg bg-cover bg-center hover:scale-95 duration-700"
            style={{
              backgroundImage:
                'url("https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png")',
            }}
          ></div>
          <div className="m-4 flex gap-7 text-zinc-400">
            {["Audit", "copywriting", "sales deck", "slides design"].map(
              (item, index) => (
                <h1
                  key={index}
                  className="pl-3 pr-3 pt-3 pb-3 uppercase rounded-full border-[1px] border-zinc-400 hover:bg-zinc-400 duration-900 hover:text-black duration-900 ease-in-out"
                >
                  {item}
                </h1>
              )
            )}
          </div>
        </div>
        <div className="right h-full w-[46vw]">
          <div className="head text-zinc-300 flex items-center mb-7">
          <div className="absolute flex  text-[3vw] overflow-hidden left-1/2 top-1/2 -translate-x-[50%] z-[99] -translate-y-[50%]">
        {'vise'.split('').map((item,index)=>(
            <motion.span className="translate-y-16 inline-block font-arial-regular text-[5vw] uppercase font-bold text-violet-600" initial={{y:'100%'}} animate={
              IsHover4?{y:0}:{y:'100%'}}
              transition={{ease:Power4.easeInOut , delay:index*0.06}}
             key={index}>{item}</motion.span>
        ))}
        </div>
            <div className="h-3 w-3 rounded-full bg-zinc-300 mr-5"></div>
            <h1 className="text-lg uppercase">vise</h1>
          </div>
          <div  onMouseEnter={()=>hover4(true)} onMouseLeave={()=>hover4(false)}
            className="w-full h-[70vh] rounded-lg bg-cover bg-center hover:scale-95 duration-700"
            style={{
              backgroundImage:
                'url("https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg")',
            }}
          ></div>
          <div className="m-4 flex gap-7 text-zinc-400">
            {["agency", "company presentation"].map((item, index) => (
              <h1
                key={index}
                className="pl-3 pr-3 pt-3 pb-3 uppercase rounded-full border-[1px] border-zinc-400 hover:bg-zinc-400 duration-900 hover:text-black duration-900 ease-in-out"
              >
                {item}
              </h1>
            ))}
          </div>
        </div>
      </div>
      <div className="flex relative justify-between h-[90vh] p-8 w-[100vw]">
        <div className="left h-full w-[46vw]">
        <div className="absolute  flex  text-[3vw] overflow-hidden left-1/2 top-1/2 -translate-x-[50%] z-[99] -translate-y-[50%]">
        {'traw'.split('').map((item,index)=>(
            <motion.span className="translate-y-16 inline-block font-arial-regular text-[5vw] uppercase font-bold text-cyan-200" initial={{y:'100%'}} animate={
              IsHover5?{y:0}:{y:'100%'}}
              transition={{ease:Power4.easeInOut , delay:index*0.06}}
             key={index}>{item}</motion.span>
        ))}
        </div>
          <div className="head text-zinc-300 flex items-center mb-7">
            <div className="h-3 w-3 rounded-full bg-zinc-300 mr-5"></div>
            <h1 className="text-lg uppercase">Trawa</h1>
          </div>
          <div  onMouseEnter={()=>hover5(true)} onMouseLeave={()=>hover5(false)}
            className="w-full h-[70vh] rounded-lg bg-cover bg-center hover:scale-95 duration-700"
            style={{
              backgroundImage:
                'url("https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg")',
            }}
          ></div>
          <div className="m-4 flex gap-7 text-zinc-400">
            {["brand identity", "design research", "investor deck"].map(
              (item, index) => (
                <h1
                  key={index}
                  className="pl-3 pr-3 pt-3 pb-3 uppercase rounded-full border-[1px] border-zinc-400 hover:bg-zinc-400 duration-900 hover:text-black duration-900 ease-in-out"
                >
                  {item}
                </h1>
              )
            )}
          </div>
        </div>
        <div className="right h-full w-[46vw]">
        <div className="absolute flex  text-[3vw] overflow-hidden left-1/2 top-1/2 -translate-x-[50%] z-[99] -translate-y-[50%]">
        {'Premium Blend'.split('').map((item,index)=>(
            <motion.span className="translate-y-16 inline-block font-arial-regular text-[5vw] uppercase font-bold text-orange-700" initial={{y:'100%'}} animate={
              IsHover6?{y:0}:{y:'100%'}}
              transition={{ease:Power4.easeInOut , delay:index*0.06}}
             key={index}>{item}</motion.span>
        ))}
        </div>
          <div className="head text-zinc-300 flex items-center mb-7">
            <div className="h-3 w-3 rounded-full bg-zinc-300 mr-5"></div>
            <h1 className="text-lg uppercase">Premium Blend</h1>
          </div>
          <div  onMouseEnter={()=>hover6(true)} onMouseLeave={()=>hover6(false)}
            className="w-full h-[70vh] rounded-lg bg-cover bg-center hover:scale-95 duration-700"
            style={{
              backgroundImage:
                'url("https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png")',
            }}
          ></div>
          <div className="m-4 flex gap-7 text-zinc-400">
            {["branded template"].map((item, index) => (
              <h1
                key={index}
                className="pl-3 pr-3 pt-3 pb-3 uppercase rounded-full border-[1px] border-zinc-400 hover:bg-zinc-400 duration-900 hover:text-black duration-900 ease-in-out"
              >
                {item}
              </h1>
            ))}
          </div>
        </div>
      </div>
      <button className="uppercase bg-gradient-to-b from-zinc-500 to-zins-900 hover:bg-gradient-to-t hover:from-zinc-700 hover:to-zinc-900 pt-3 pb-3 p-6 rounded-3xl ml-[45%] mt-12 text-lg  text-zinc-100 m-8 ">view all case studies</button>
    </div>
  );
}

export default Featured;
