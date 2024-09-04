import React, { useState } from "react";

function DropDown() {
  const inf = {
    name: "karman ventures",
    service: ["insvestor deck", "sales deck"],
    third: {
      n: "William barnes",
      img: "https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png",
      about:
        "They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5",
    },
  };
  const infArray = Array(4).fill(inf);
  var [open,setopen] = useState(0);

   const toggleOpen = (a) => {
    setopen(open === a ? null : a);
  };
  console.log(open);
  return (
    <div className="min-h-screen w-full bg-[#27272A]">
      <h1 className="text-white pt-8 text-[4vw] p-6">Clients' reviews</h1>
      <div className="border-zinc-600 border-[1px] mb-8"></div>
      {infArray.map((item,key)=>(
        <>
             <div key={key} className="box flex w-full h-fit justify-between">
             <div className="left flex justify-between h-[50%] w-[40%] ">
               <h1 className="text-white text-3xl ml-8">{item.name} </h1>
               {open==key && (<div className="center h-full w-[50%] ">
                 <h1 className="text-white text-3xl">Service:</h1>
     
                 <div className="flex flex-col gap-5 mt-16">
                   {item.service.map((mitem, index) => (
                     <h1
                       key={index} 
                       className="pl-3 pr-3 pt-3 pb-3 w-fit uppercase text-white rounded-full border-[1px] border-zinc-400 hover:bg-zinc-400 duration-900 hover:text-black duration-700 ease-out"
                     >
                       {mitem}
                     </h1>
                   ))}
                 </div>
               </div>)}
             </div>
             <div className="right h-[50%] w-[40%]">
               <h1 className="text-white text-3xl mb-16">{item.third.n}</h1>
               {open===key && (<><img
                 className="w-32 h-32 rounded-xl"
                 src={item.third.img}
                 alt={item.third.n}
               />
               <p className="mt-10 h-60 w-[30vw] text-xl text-white">
                 {item.third.about}
               </p></>)}
             </div>
             <h1 onClick={()=>toggleOpen(key)} className="mr-16 text-xl text-white">READ</h1>
           </div>
           <div className="border-zinc-600 border-[1px] mb-8"></div>
           </>
      ))}
 
    </div>
  );
}

export default DropDown;
