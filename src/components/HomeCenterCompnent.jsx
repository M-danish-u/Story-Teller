import React from "react";

const HomeCenterCompnent = () => {
  return (
    <div className=" w-full md:h-[228p] md:flex flex-col g-slate-500">
      <div className="md:flex flex-row b-red-500 md:justify-between">
        <div className="md:flex flex-col">
          <p className="font-bold text-2xl text-white md:font-bold sm:text-[37px] leading-[44px]">
            We just not create bags
            <br />
            we create stories,
            <br />
            ultimate travelling
          </p>
          <p className="font-thin text-[16px] text-white mt-6 max-w-[536px] leading-[27px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis eius
            saepe voluptatem, consequatur harum explicabo, eos quasi ratione
            dicta iste perspiciatis tenetur quia eligendi praesentium nam quas
            corporis, reiciendis hic.
          </p>
        </div>
        <div className="flex flex-row mt-6 gap-4 md:flex-col ">
            <div className="w-[35px] h-[35px] flex items-center justify-center text-white rounded-full border-[1px] border-[#CAEE00]">1</div>
            <div className="w-[35px] h-[35px] flex items-center justify-center text-white rounded-full border-[1px] border-[#CAEE00]">2</div>

            <div className="w-[35px] h-[35px] flex items-center justify-center text-white rounded-full border-[1px] border-[#CAEE00]">3</div>
            <div className="w-[35px] h-[35px] flex items-center justify-center text-white rounded-full border-[1px] border-[#CAEE00]">4</div>
        
        </div>
      </div>
      <p className="text-[15px] bg-[#CAEE00] w-[159px] h-[49px] rounded-[60px] flex items-center justify-center mt-6">Read more</p>

    </div>
  );
};

export default HomeCenterCompnent;
