import React from 'react'

function DropDown() {
    const inf=[{name: 'karman ventures',service:['insvestor deck','sales deck'],third:{n:'William barnes',img:'https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png',about:"They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5"}}]
  return (
    <div className="min-h-screen w-full bg-[#27272A]"> 
      <h1 className="text-white pt-8 text-[4vw] p-6">Clients' reviews</h1> 
      <div className="border-zinc-600 border-[1px] mb-8"></div>
      <div className='box flex w-full min-h-fit justify-between'> 
    <div className='left h-[50%] bg-red-400'>
        <h1 className='text-white  text-[2vw]'>{inf.name}</h1>
      <div className='center'></div> 
        </div>   
    
    <div className='right'></div>
      </div>
    </div>
  )
}

export default DropDown