import React from "react";

function Footer() {
  return (
    <div className="min-h-screen w-full pb-32 bg-[#27272A] flex overflow-hidden pl-20">
      <div className="left w-[40%] h-full text-zinc-300">
        <h1 className="text-[8vw] uppercase tracking-[-0.9rem] leading-[0.8] font-semibold">
          eye-
          <br></br> opening
        </h1>
      </div>

      <div className="right w-[50%] h-full text-zinc-300">
        <h1 className="text-[8vw] uppercase tracking-[-0.9rem] leading-[0.8] font-semibold">
          presentations
        </h1>
        <div className=" flex h-[70vh] w-[50vw] text-xl ml-4 justify-between mt-[4vw]">
          <div className="left2 h-full w-[23vw] flex flex-col justify-between">
            <div className="S L E  mb-10">
              <h1 className="mb-5">S:</h1>
              <h1>Instagram</h1>
              <h1>Behance</h1>
              <h1>Facebook</h1>
              <h1>Linkedin</h1>
            </div>
            <div className="L   ">
              <h1 className="mb-5">L:</h1>
              <h1>202-1965 W 4th Ave</h1>
              <h1>Vancouver, Canada</h1>
              <h1>30 Chukarina St</h1>
              <h1>Lviv, Ukraine</h1>
            </div>

            <div className="E  ">
              <h1 className="mb-5">E:</h1>
              <h1>hello@ochi.design</h1>
            </div>
          </div>
          <div className="right2 h-full flex justify-end items-center  w-[23vw] ">
            <div className="E  ">
              {" "}
              <h1 className="mb-5">M:</h1>
              <h1>Home</h1>
              <h1>Services</h1>
              <h1>Our work</h1>
              <h1>About us</h1>
              <h1>Insights</h1>
              <h1>Contact us</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
