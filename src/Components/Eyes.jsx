import React, { useEffect, useState } from "react";

function Eyes() {
  var [angle,setAngle]=useState(0);
 
useEffect(()=>{
  window.addEventListener("mousemove",(e)=>{
    var mX = e.clientX;
    var mY = e.clientY;
    var dx=mX-window.innerWidth/2;
    var dy=mY-window.innerHeight/2;  
    var a=Math.atan2(dx, dy)*(180/Math.PI);
    setAngle(a-180);
  })
})

  return (
    <div className="h-screen w-full  bg-gradient-to-r from-[#CBCBCB]">
      <div className='relative h-full translate-y-[-7%] w-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
        <div className="flex gap-5 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
          <div className="bg-zinc-200 h-64 relative w-64 rounded-full  ">
            <div className="bg-zinc-900 h-1/2 w-1/2 rounded-full absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
              <div style={{transform:`translate(-50%, -50%) rotate(${angle}deg)`}} className="line h-7 w-full absolute  top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                <div className="h-full m-1 w-7 bg-slate-50 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="bg-zinc-200 h-64 w-64 relative rounded-full">
            <div className="bg-zinc-900 h-1/2 w-1/2 rounded-full absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
              <div style={{transform:`translate(-50%, -50%) rotate(${angle}deg)`}} className="line h-7 w-full absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                <div className="h-full m-1 w-7 bg-slate-50 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
