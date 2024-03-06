import React from "react";
import HomeBg from "../Assets/HomeBg.png";
import { NavBar } from "./NavBar";
import HomeCenterCompnent from "./HomeCenterCompnent";
import HomeBottumComponent from "./HomeBottumComponent";

const Home = () => {
  return (
    <section id="Home">
      <div
        className="Home flex flex-col border-gradient justify-between min-h-screen py-8 px-4 lg:py-[40px] lg:px-[80px]"
        style={{
          backgroundImage: `url(${HomeBg})`,
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          borderImage: "fill 0 linear-gradient(rgba(0,0,0,0.6),#0001)",
        }}
      >
        <NavBar />
        <HomeCenterCompnent />
        <HomeBottumComponent />
      </div>
    </section>
  );
};

export default Home;
