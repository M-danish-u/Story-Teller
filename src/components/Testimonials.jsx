import React from "react";
import girl from "../Assets/girlBag.png";
import play1 from "../Assets/nextplay1.png";
import play2 from "../Assets/nextplay2.png";

const Testimonials = () => {
  return (
    <div className="text-[#000000]  flex flex-col h-[500px] md:flex-row md:h-[413px]  ">
      {/* left side */}
      <div className="relative   md:w-[50%] h-[206px] md:h-[413px]">
        <img
          src={girl}
          alt="Girl with Bag "
          className=" h-[206px] md:h-[413px] w-full"
        />
        {/* Gradient overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-[#CAEE00] via-transparent to-transparent"></div>
      </div>
      {/* right side */}
      <div className="bg-[#CAEE00] md:w-[50%] flex flex-col gap-5  px-2 md:px-0 md:pl-10">
        <p className="text-[39.06px] font-bold md:mt-10"> Testimonials</p>
        <p className="text-[16px] max-w-[540px] leading-[27px]">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available.
        </p>
        <div className="flex flex-col gap-4">
          <p className="underline leading-[29.9px] text-[26px]">
            {" "}
            Athul Surendran
          </p>
          <p className="underline leading-[21.85px] text-[19px]">
            {" "}
            UI/UX Designer{" "}
          </p>
        </div>
        <div className="flex gap-6">
          <img alt="button" src={play1} />
          <img alt="button" src={play2} />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
