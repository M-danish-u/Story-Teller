import React, { useState } from "react";
import logo from "../Assets/Layer_1logo.png";
import { TiThMenu, TiTimes } from "react-icons/ti";
import searchIcon from "../Assets/Vectorsearch.svg";

export const NavBar = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const handleMenuToggle = () => {
    setMenuToggle(!menuToggle);
  };

  return (
    <div className="h-[49px] flex flex-row items-center justify-between z-50">
      <TiThMenu
        className="text-[#CAEE00] text-2xl md:hidden cursor-pointer"
        onClick={handleMenuToggle}
      />

      <div
        className={`fixed top-20 left-0 bg-[#CAEE00] transition-transform md:hidden  ease-in-out duration-300 transform ${
          menuToggle ? "translate-x-0" : "translate-x-[-300px]"
        } lg:translate-x-full`}
      >
        <TiTimes
          className="text-black text-3xl cursor-pointer  top-4 right-4"
          onClick={handleMenuToggle}
        />
        <ul className="flex flex-col items-center justify-center px-20 h-full p-4">
          <li className="text-black text-xl my-4 cursor-pointer">
            <a href="#Home">Home</a>
          </li>
          <li className="text-black text-xl my-4 cursor-pointer">
            <a href="#About">About</a>
          </li>
          <li className="text-black text-xl my-4 cursor-pointer">
            <a href="#product">Product</a>
          </li>
          <li className="text-black text-xl my-4 cursor-pointer">
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </div>

      <img className="" src={logo} alt="Logo" />
      <div className="hidden   md:flex flex-row md:gap-5 lg:gap-10">
        <ul className=" flex md:gap-5 lg:gap-10 text-[15px]">
          <li className="text-white text-xl my-4 cursor-pointer">
            <a href="#Home">Home</a>
          </li>
          <li className="text-white text-xl my-4 cursor-pointer">
            <a href="#About">About</a>
          </li>
          <li className="text-white text-xl my-4 cursor-pointer">
            {" "}
            <a href="#product">Product</a>
          </li>
          <li className="text-white text-xl my-4 cursor-pointer">
            {" "}
            <a href="#Contact">Contact</a>
          </li>
        </ul>
        <div className="lg:w-[328px] md:w-[295px] h-[49px] p-4 flex items-center justify-between rounded-[60px] border-[1px] bg-[#d9d9d936]">
          <input
            placeholder="Search"
            type="text "
            className="bg-transparent text-white border-none placeholder-white"
          ></input>
          <img
            className="h-[20px] cursor-pointer"
            src={searchIcon}
            alt="Search Icon"
          />
        </div>
      </div>
    </div>
  );
};
