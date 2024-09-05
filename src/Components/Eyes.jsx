import React, { useEffect, useState } from "react";
import OnlyEye from "./OnlyEye";

function Eyes() {
  return (
    <div  data-scroll data-scroll-speed='0.1' className="h-screen w-full  bg-gradient-to-r from-[#CBCBCB]">
    <div className='relative h-full flex items-center justify-center w-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
   <OnlyEye></OnlyEye> 
    </div>
    </div>
  );
}

export default Eyes;
