import React from "react";
import men from "../Assets/MenBag.png";
import purpleBar from "../Assets/Isolation_Modeiso.png";
const About = () => {
  return (
    <div className=" text-white flex flex-col  md:h-[649px]  px- md:flex-row lg:px-[50px] md:justify-between bg-[#000000]">
      {/* left side */}
      <div className="relative g-yellow-400">
        <img className="absolute  w-[282px] md:w-[330px] lg:w-full lg:left-[-100px] md:h-full left-[-52px]  z-10 " src={men} />
        <img className=" w-[220px] md:w-[350px] lg:w-full md:h-full  ml-[50px] md:ml-[30px] lg:ml-[56px] " src={purpleBar} />
      </div>
      {/* right side */}
      <div className=" flex flex-col gap-6 md:gap-16 bgred-500">
        <p className="text-3xl md:text-5xl mt-8 md:mt-28 font-bold ">Who We Are</p>
        <div className="flex flex-col gap-6">
        <p className="t fmd:fl text-[16px] max-w-[550px]">
            
          In a world full of noise and distractions, Storyteller was founded
          with the belief that everyone has a unique story to tell. We are a
          backpack brand that encourages people to explore and share their
          individual journeys.
          </p>
         <p className="text-[16px] max-w-[550px]">
           At Storyteller, we understand that backpacks are
          more than just functional accessories. They are an extension of your
          personality, and they have the power to inspire your daily adventures.
          That's why we design backpacks that not only meet your practical needs
          but also reflect your personal style and story.
        
        </p>
        </div>
        <p className="text-[15px] text-black bg-[#CAEE00] w-[159px] h-[49px] rounded-[60px] flex items-center md:ml-3  justify-center ">Read more</p>

      </div>
    </div>
  );
};

export default About;