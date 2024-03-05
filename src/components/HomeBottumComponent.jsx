import React from "react";
import Mr from '../Assets/MR Torrin.png'
import travers from '../Assets/tranvers.png'
import insta from '../Assets/instagraminsta.png'
import fb from '../Assets//facebookfacebook.png'


const HomeBottumComponent = () => {
  return (
    <div className="w-full h-[34px b-yellow-400 text-[15px] flex text-white flex-col md:flex-row md:justify-between">
      {/* first portion */}
      <div className=" flex flex-row items-center justify-between  md:gap-16 lg::gap-20">
        <p >Our Sub Brand</p>
        <img className="w-20 md:w-24 lg:w-max" src={Mr}/>
        <img className="w-20 md:w-24 lg:w-max" src={travers}/>

      </div>
      {/* second portion  */}
      <div className="flex flex-row mt-4 lg:gap-12  md:gap-10 justify-between">
        <p>info@storytelleruae.com</p>
        <div className=" flex flex-row gap-10">
        <img src={fb}/>
        <img src={insta}/>
        </div>
        
      </div>
    </div>
  );
};

export default HomeBottumComponent;
