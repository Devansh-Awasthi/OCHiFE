import React from "react";
import OnlyEye from "./OnlyEye";

function Eyes() {
  return (
    <div  className="h-screen w-full overflow-x-hidden bg-gradient-to-r from-[#CBCBCB]">
    <div  data-scroll data-scroll-speed='0.08' className='relative h-full flex items-center justify-center w-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
   <OnlyEye></OnlyEye> 
    </div>
    </div>
  );
}

export default Eyes;
