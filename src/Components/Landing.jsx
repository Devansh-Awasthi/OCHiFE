import React from 'react'

function Landing() {
  return (
    <div className='w-full h-screen bg-zinc-800 '>
      <div className='text-white px-10 py-32 text-9xl tracking-tighter uppercase bold leading-[0.9]'>
        <h1>we create</h1>
        <div className='flex items-center'>
          <img className='image rounded-md w-40 h-24' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="d"/>
        <h1>eye-opening</h1>
        </div>
        <h1>presentations</h1>
      </div>
      <div className='border-t border-zinc-700 flex justify-between items-center '>
        {['for public and private users','from first pitch to IPO','start the projects'].map((item,index)=>{
          return <h3 key={index} className='text-white text-lg ml-11 mr-11'>{item}</h3>
        })

  }
      </div>
    </div>
  )
}

export default Landing