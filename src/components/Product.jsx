import React, { useState } from "react";
import BagImg from "../Assets/Bag.png";
import ProductLogo from "../Assets/productLogo.png";
import ClockIcon from "../Assets/clock.svg";
import VectorsearchIcon from "../Assets/discountshape.svg";
import archivetickIcon from "../Assets/archivetick.svg";
import { TiTimes } from "react-icons/ti";
import { FaSortDown } from "react-icons/fa";

const Product = () => {
  const [itemToggle, setItemToggle] = useState(false);

  const handleItemToggle = () => {
    setItemToggle(!itemToggle);
  };

  return (
    <section id="product">
      <div className="bg-[#101010] text-white px-4 lg:px-[80px] pt-10">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold  ">
            Our <br /> Products
          </h1>
          <a href="#">View all Product {">"}</a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="relative">
          <p
            className="cursor-pointer md:hidden w-12 flex flex-row gap-2 border-b-4 border-transparent hover:border-[#CAEE00] focus:border-[#CAEE00] transition-all duration-300 "
            onClick={handleItemToggle}
          >
            Items
            <span>
            <FaSortDown className="text-[#CAEE00]" />
            </span>
          </p>

          {/* Mobile Menu */}
          <div
            className={`  top-0 left-0 bg-[#CAEE00] transition-transform md:hidden absolute ease-in-out duration-300 transform ${
              itemToggle ? "translate-x-0" : "translate-x-[-300px]"
            } lg:translate-x-full`}
          >
            <TiTimes
              className="text-black text-3xl cursor-pointer  top-4 right-4"
              onClick={handleItemToggle}
            />
            <ul className="flex flex-col items-center justify-center px-20 h-full p-4">
              <li className="text-black text-xl my-4 cursor-pointer">All</li>
              <li className="text-black text-xl my-4 cursor-pointer">Men</li>
              <li className="text-black text-xl my-4 cursor-pointer">Ladies</li>
              <li className="text-black text-xl my-4 cursor-pointer">Kids</li>
              <li className="text-black text-xl my-4 cursor-pointer">Sports</li>
              <li className="text-black text-xl my-4 cursor-pointer">Gym</li>
              <li className="text-black text-xl my-4 cursor-pointer">
                Fishing
              </li>
            </ul>
          </div>
        </div>
        {/* Desktop Menu */}
        <div className="border-b-2 border-[#CAEE00] hidden md:block">
          <ul className="flex gap-5">
          <li className="cursor-pointer w-12 border-b-4 border-[#CAEE00] ">
            All
          </li>
          <li className="cursor-pointer w-12 border-b-4 border-transparent hover:border-[#CAEE00] focus:border-[#CAEE00] transition-all duration-300">
            Men
          </li>
          <li className="cursor-pointer w-12 border-b-4 border-transparent hover:border-[#CAEE00] focus:border-[#CAEE00] transition-all duration-300">
            Ladies
          </li>
          <li className="cursor-pointer w-12 border-b-4 border-transparent hover:border-[#CAEE00] focus:border-[#CAEE00] transition-all duration-300">
            Kids
          </li>
          <li className="cursor-pointer w-12 border-b-4 border-transparent hover:border-[#CAEE00] focus:border-[#CAEE00] transition-all duration-300">
            Sports
          </li>
          <li className="cursor-pointer w-12 border-b-4 border-transparent hover:border-[#CAEE00] focus:border-[#CAEE00] transition-all duration-300">
            Gym
          </li>
          <li className="cursor-pointer w-12 border-b-4 border-transparent hover:border-[#CAEE00] focus:border-[#CAEE00] transition-all duration-300">
            Fishing
          </li>
            {/* Add similar classes for other list items */}
          </ul>
        </div>

        {/* Product Cards */}
        <div className="flex  md:flex-row flex-col items-center  justify-between mt-5">
        <div className=" flex flex-col w-80 md:w-full"> 
          <img src={BagImg} alt="Bagimg" />
          <span className="block text-center mt-2 font-bold text-xl">
            Trolly Bag
          </span>
          <span className="block text-center">250 Aed</span>
        </div>
        <div className=" flex flex-col w-80 md:w-full"> 
          {" "}
          <img src={BagImg} alt="Bagimg" />
          <span className="block text-center mt-2 font-bold text-xl">
            Trolly Bag
          </span>
          <span className="block text-center">250 Aed</span>{" "}
        </div>
        <div className=" flex flex-col w-80 md:w-full">
          {" "}
          <img src={BagImg} alt="Bagimg" />
          <span className="block text-center mt-2 font-bold text-xl">
            Trolly Bag
          </span>
          <span className="block text-center">250 Aed</span>{" "}
        </div>
        <div className=" flex flex-col w-80 md:w-full">
          {" "}
          <img src={BagImg} alt="Bagimg" />
          <span className="block text-center mt-2 font-bold text-xl">
            Trolly Bag
          </span>
          <span className="block text-center">250 Aed</span>{" "}
        </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 flex items-center flex-col md:flex-row justify-between gap-6 md:gap-0">
        <img className="" src={ProductLogo} alt="ProductLogo" />

        <div className="flex flex-col  ">
          <img src={ClockIcon} alt="ClockIcon" />{" "}
          <span className="text-[#CAEE00] text-3xl font-black">24x7</span>
          <span className="text-[#CAEE00]">Services</span>
        </div>
        <div className="flex flex-col">
          <img src={VectorsearchIcon} alt="VectorsearchIcon" />{" "}
          <span className="text-[#CAEE00] text-3xl font-black">India</span>
          <span className="text-[#CAEE00]">Made in</span>
        </div>
        <div className="flex flex-col">
          <img src={archivetickIcon} alt="archivetickIcon" className="w-16"/>{" "}
          <span className="text-[#CAEE00] text-3xl font-black">Quality</span>
          <span className="text-[#CAEE00]"> No Compramise</span>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Product;
