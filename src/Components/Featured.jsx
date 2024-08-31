import React from "react";

function Featured() {
  return (
    <div className="h-min-screen w-full bg-[#27272A]">
      <h1 className="text-white text-[4vw] p-6">Featured projects</h1>
      <div className="border-zinc-600 border-[1px] mb-8"></div>
      <div className="flex justify-between h-[80vh] p-8 w-[100vw]">
        <div className="left h-full w-[46vw]">
          <div className="head text-zinc-300 flex items-center mb-7">
            <div className="h-3 w-3 rounded-full bg-zinc-300 mr-5"></div>
            <h1 className="text-lg uppercase">Cardboard Spaceship</h1>
          </div>
          <div
            className="w-full h-[70vh] rounded-lg bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png")',
            }}
          ></div>
          
        </div>
        <div className="right h-full w-[46vw]">
        <div className="head text-zinc-300 flex items-center mb-7">
            <div className="h-3 w-3 rounded-full bg-zinc-300 mr-5"></div>
            <h1 className="text-lg uppercase">AH2 & Matt Horn</h1>
          </div>
          <div
            className="w-full h-[70vh] rounded-lg bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png")',
            }}
          ></div>
        </div>
      </div>
      <div className="flex justify-between h-[80vh] p-8 w-[100vw]">
        <div className="left h-full w-[46vw]">
          <div className="head text-zinc-300 flex items-center mb-7">
            <div className="h-3 w-3 rounded-full bg-zinc-300 mr-5"></div>
            <h1 className="text-lg uppercase">Cardboard Spaceship</h1>
          </div>
          <div
            className="w-full h-[70vh] rounded-lg bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png")',
            }}
          ></div>
        </div>
        <div className="right h-full w-[46vw]">
        <div className="head text-zinc-300 flex items-center mb-7">
            <div className="h-3 w-3 rounded-full bg-zinc-300 mr-5"></div>
            <h1 className="text-lg uppercase">AH2 & Matt Horn</h1>
          </div>
          <div
            className="w-full h-[70vh] rounded-lg bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg")',
            }}
          ></div>
        </div>
      </div>
      <div className="flex justify-between h-[80vh] p-8 w-[100vw]">
        <div className="left h-full w-[46vw]">
          <div className="head text-zinc-300 flex items-center mb-7">
            <div className="h-3 w-3 rounded-full bg-zinc-300 mr-5"></div>
            <h1 className="text-lg uppercase">Cardboard Spaceship</h1>
          </div>
          <div
            className="w-full h-[70vh] rounded-lg bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg")',
            }}
          ></div>
        </div>
        <div className="right h-full w-[46vw]">
        <div className="head text-zinc-300 flex items-center mb-7">
            <div className="h-3 w-3 rounded-full bg-zinc-300 mr-5"></div>
            <h1 className="text-lg uppercase">AH2 & Matt Horn</h1>
          </div>
          <div
            className="w-full h-[70vh] rounded-lg bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png")',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
