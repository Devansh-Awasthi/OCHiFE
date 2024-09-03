import React from 'react'

function DropDown() {
    const inf={name: 'karman ventures',service:['insvestor deck','sales deck'],third:{n:'William barnes',img:'https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png',about:"They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5"}}
  return (
    <div className="min-h-screen w-full bg-[#27272A]"> 
      <h1 className="text-white pt-8 text-[4vw] p-6">Clients' reviews</h1> 
      <div className="border-zinc-600 border-[1px] mb-8"></div>
      <div className='box flex w-full h-[90vw] justify-between'> 
    <div className='left flex justify-between h-[50%] w-[50%] bg-red-400'>
        <h1 className='text-white text-[2vw]'>{inf.name} </h1>
      <div className='center h-full w-[50%] bg-green-600'>
    
        <h1 className='text-white text-[2vw]'>Service:</h1>
        <div className='flex flex-col gap-5 mt-16'>
          {inf.service.map((item,index)=>
          <button key={index} className='text-white uppercase w-fit bg-slate-400 text-lg pt-1 pb-1 pl-2 pr-2 rounded-full '>{item}</button>)
          }
        </div>
        </div> 
        </div>   
    <div className='right'>
      
    </div>
      </div>
    </div>
  )
}

export default DropDown