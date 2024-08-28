import React from 'react'

function Marq() {
  return (
    <div className='h-[60vh] w-full bg-[#076e93] rounded-xl translate-y-[-5%] flex text-white items-center text-9xl fontFamily:arial-regular text-nowrap'>
        
       {['we are ochie',' we are ochie',' we are ochie',' we are ochie'].map((item,index)=>{
       return <h1 key={index}>{item} </h1>
       })}

    </div>
  )
}

export default Marq