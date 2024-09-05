import React from "react";
import { GoArrowUpRight } from "react-icons/go";
function About() {
  return (
    <div data-scroll data-scroll-speed='-0.1' className="min-h-screen w-full translate-y-[-4%] rounded-lg bg-[#dfea68] pb-8 overflow-hidden">
      <p className="text-[4.3rem] pt-20 pl-16 pr-36 pb-28 leading-[4rem]">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to <u>raise funds</u>,<u> sell products</u>,{" "}
        <u>explain complex ideas</u>, and <u>hire great peo-ple.</u>
      </p>
      <div className="border-[0.5px] border-zinc-600"></div>
      <div className="pl-16 m-6 w-[100%] h-80 flex  justify-between text-lg">
        <div className="flex w-[60%] h-[100%]">What you can expect: </div>
        <div className="flex justify-between pl-32 pr-32">
          <div className="flex justify-between flex-col w-[50%]">
            <div className="pr-20 ">
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it's live or digital,
              delivered for one or a hundred people.
            </div>
            <div className="pr-20 mb-10 mt-14">
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </div>
          </div>
          <div className=" mr-14">
            <br></br>
            <br></br>
            <br></br>
            S:
            <br></br>
            <br></br>
            <h6 className=" underline-animation black-underline">Linkedin</h6><br></br>
            <h6 className="underline-animation black-underline">Instagram</h6><br></br>
            <h6 className="underline-animation black-underline">Behance</h6><br></br>
            <h6 className="underline-animation black-underline">Facebook</h6><br></br>
          </div>
        </div>
      </div>
      <div className="border-[0.5px] border-zinc-400 "></div>
      <div className="w-full  flex justify-between ">
        <div className="ml-10 ">
          <h1 className="text-[5vw] tracking-tighter">Our approach:</h1>
          <button className="flex justify-between items-center bg-slate-900 px-7 py-5 rounded-full text-white hover:bg-black">
            READ MORE
            <GoArrowUpRight className="text-white ml-2 h-6 w-6 border-white border-[1px] rounded-full hover:bg-white hover:text-black duration-600 ease-out" />
          </button>
        </div>
        <img
          src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
          className="h-[100%] object-cover m-10 mb-32 rounded-xl items-center w-[50%]"
        ></img>
      </div>
    </div>
  );
}

export default About;
