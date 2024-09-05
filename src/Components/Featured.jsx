import React from "react";

function Featured() {
  return (
    <div data-scroll data-scroll-speed='-0.1' className="h-min-screen w-full bg-[#27272A]">
      <h1 className="text-white text-[4vw] p-6">Featured projects</h1>
      <div className="border-zinc-600 border-[1px] mb-8"></div>
      <div className="flex relative justify-between h-[90vh] p-8 w-[100vw]">
        
        <div className="left max-h-fit w-[46vw]">
        <div className="absolute  text-[3vw] left-1/2 top-1/2 -translate-x-[50%] z-[99] -translate-y-[50%]">
          <h1>Cardboard Spaceship</h1>
        </div>
          <div className="head text-zinc-300 flex items-center mb-7">
            <div className="h-3 w-3 rounded-full bg-zinc-300 mr-5"></div>
            <h1 className="text-lg uppercase">Cardboard Spaceship</h1>
          </div>
          <div
            className="w-full h-[70vh] rounded-lg bg-contain bg-center hover:scale-95 duration-700 "
            style={{
              backgroundImage:
                'url("https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png")',
            }}
          ></div>
          <div className="m-4 flex gap-7 text-zinc-400">
            {["branded template", "sales deck", "social media templates"].map(
              (item, index) => (
                <h1
                  key={index}
                  className="pl-3 pr-3 pt-3 pb-3 uppercase rounded-full border-[1px] border-zinc-400 hover:bg-zinc-400 hover:text-black duration-600 ease-in-out"
                >
                  {item}
                </h1>
              )
            )}
          </div>
        </div>
        <div className="right h-full w-[46vw]">
        <div className="absolute  text-[3vw] left-1/2 top-1/2 -translate-x-[50%] z-[99] -translate-y-[50%]">
          <h1>AH2 & Matt Horn</h1>
        </div>
          <div className="head text-zinc-300 flex items-center mb-7">
            <div className="h-3 w-3 rounded-full bg-zinc-300 mr-5"></div>
            <h1 className="text-lg uppercase">AH2 & Matt Horn</h1>
          </div>
          <div
            className="w-full h-[70vh] rounded-lg bg-cover bg-center hover:scale-95 duration-700"
            style={{
              backgroundImage:
                'url("https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png")',
            }}
          ></div>
          <div className="m-4 flex gap-7 text-zinc-400">
            {["pitch deck"].map((item, index) => (
              <h1
                key={index}
                className="pl-3 pr-3 pt-3 pb-3 uppercase rounded-full border-[1px] border-zinc-400 hover:bg-zinc-400 duration-900 hover:text-black duration-900 ease-in-out"
              >
                {item}
              </h1>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between h-[90vh] p-8 w-[100vw]">
        <div className="left h-full w-[46vw]">
          <div className="head text-zinc-300 flex items-center mb-7">
            <div className="h-3 w-3 rounded-full bg-zinc-300 mr-5"></div>
            <h1 className="text-lg uppercase">Fyde</h1>
          </div>
          <div
            className="w-full h-[70vh] rounded-lg bg-cover bg-center hover:scale-95 duration-700"
            style={{
              backgroundImage:
                'url("https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png")',
            }}
          ></div>
          <div className="m-4 flex gap-7 text-zinc-400">
            {["Audit", "copywriting", "sales deck", "slides design"].map(
              (item, index) => (
                <h1
                  key={index}
                  className="pl-3 pr-3 pt-3 pb-3 uppercase rounded-full border-[1px] border-zinc-400 hover:bg-zinc-400 duration-900 hover:text-black duration-900 ease-in-out"
                >
                  {item}
                </h1>
              )
            )}
          </div>
        </div>
        <div className="right h-full w-[46vw]">
          <div className="head text-zinc-300 flex items-center mb-7">
            <div className="h-3 w-3 rounded-full bg-zinc-300 mr-5"></div>
            <h1 className="text-lg uppercase">vise</h1>
          </div>
          <div
            className="w-full h-[70vh] rounded-lg bg-cover bg-center hover:scale-95 duration-700"
            style={{
              backgroundImage:
                'url("https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg")',
            }}
          ></div>
          <div className="m-4 flex gap-7 text-zinc-400">
            {["agency", "company presentation"].map((item, index) => (
              <h1
                key={index}
                className="pl-3 pr-3 pt-3 pb-3 uppercase rounded-full border-[1px] border-zinc-400 hover:bg-zinc-400 duration-900 hover:text-black duration-900 ease-in-out"
              >
                {item}
              </h1>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between h-[90vh] p-8 w-[100vw]">
        <div className="left h-full w-[46vw]">
          <div className="head text-zinc-300 flex items-center mb-7">
            <div className="h-3 w-3 rounded-full bg-zinc-300 mr-5"></div>
            <h1 className="text-lg uppercase">Trawa</h1>
          </div>
          <div
            className="w-full h-[70vh] rounded-lg bg-cover bg-center hover:scale-95 duration-700"
            style={{
              backgroundImage:
                'url("https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg")',
            }}
          ></div>
          <div className="m-4 flex gap-7 text-zinc-400">
            {["brand identity", "design research", "investor deck"].map(
              (item, index) => (
                <h1
                  key={index}
                  className="pl-3 pr-3 pt-3 pb-3 uppercase rounded-full border-[1px] border-zinc-400 hover:bg-zinc-400 duration-900 hover:text-black duration-900 ease-in-out"
                >
                  {item}
                </h1>
              )
            )}
          </div>
        </div>
        <div className="right h-full w-[46vw]">
          <div className="head text-zinc-300 flex items-center mb-7">
            <div className="h-3 w-3 rounded-full bg-zinc-300 mr-5"></div>
            <h1 className="text-lg uppercase">Premium Blend</h1>
          </div>
          <div
            className="w-full h-[70vh] rounded-lg bg-cover bg-center hover:scale-95 duration-700"
            style={{
              backgroundImage:
                'url("https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png")',
            }}
          ></div>
          <div className="m-4 flex gap-7 text-zinc-400">
            {["branded template"].map((item, index) => (
              <h1
                key={index}
                className="pl-3 pr-3 pt-3 pb-3 uppercase rounded-full border-[1px] border-zinc-400 hover:bg-zinc-400 duration-900 hover:text-black duration-900 ease-in-out"
              >
                {item}
              </h1>
            ))}
          </div>
        </div>
      </div>
      <button className="uppercase bg-gradient-to-b from-zinc-500 to-zins-900 hover:bg-gradient-to-t hover:from-zinc-700 hover:to-zinc-900 pt-3 pb-3 p-6 rounded-3xl ml-[45%] mt-12 text-lg  text-zinc-100 m-8 ">view all case studies</button>
    </div>
  );
}

export default Featured;
