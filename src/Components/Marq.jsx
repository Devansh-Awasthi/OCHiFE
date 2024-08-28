import { motion } from 'framer-motion'
import React from 'react'

function Marq() {
  
  return (
    <div className='h-[60vh] w-full bg-[#076e93] overflow-hidden  rounded-xl translate-y-[-5%] flex text-white items-center text-[15.6vw] font-arial-regular uppercase -tracking-[1.4rem] '>
        <motion.div initial={{x:0}} animate={{x:'100%'}} transition={{ease:'linear',repeat:Infinity,duration:5}} className=' text-white flex overflow-hidden font-medium animate-marquee whitespace-nowrap '>
       {['we are ochie',' we are ochie'].map((item,index)=>{
       return <h1  key={index}>{item} </h1>
       
       })}
    
    
      </motion.div>
    </div>
  )
}

export default Marq