import { motion } from 'framer-motion'
import React from 'react'

function Marq() {
  
  return (
    <div className='h-[60vh] w-full bg-[#076e93] overflow-hidden p-0 m-0 rounded-xl translate-y-[-5%] flex text-white items-center text-[17vw] font-arial-regular uppercase -tracking-[1.5rem] '>
        <motion.div initial={{x:'0%'}} animate={{x:'-75%'}} transition={{ease:'linear',repeat:Infinity,duration:12}} className='text text-white flex p-0 font-medium whitespace-nowrap border-t-2 border-white  border-b-2 '>
       {['we are ochi',' we are ochi','we are ochi',' we are ochi'].map((item,index)=>{
       return <h1 className='overflow-hidden -mt-12 -mb-16 p-0 mr-10' key={index}>{item} </h1>
       })}
      
    
      </motion.div>
    </div>
  )
}

export default Marq