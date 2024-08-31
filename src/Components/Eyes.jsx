import React from "react";

function Eyes() {
  return (
    <div className="h-screen w-full  bg-[#F5F5F5]">
      <div className='relative h-full translate-y-[-7%] w-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
        <div className="flex gap-5 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
          <div className="bg-zinc-200 h-64 relative w-64 rounded-full  ">
            <div className="bg-zinc-900 h-1/2 w-1/2 rounded-full absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
              <div className="line h-7 w-full absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                <div className="h-full m-1 w-7 bg-slate-50 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="bg-zinc-200 h-64 w-64 relative rounded-full">
            <div className="bg-zinc-900 h-1/2 w-1/2 rounded-full absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
              <div className="line h-7 w-full absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
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
