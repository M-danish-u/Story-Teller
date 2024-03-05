
import React from 'react';
import HomeBg from '../Assets/HomeBg.png';
import { NavBar } from '../components/NavBar';
import HomeCenterCompnent from '../components/HomeCenterCompnent';
import HomeBottumComponent from '../components/HomeBottumComponent';

const Home = () => {
  return (
    <div className=" flex flex-col justify-between min-h-screen py-8 px-4 lg:py-[40px] lg:px-[80px]" style={{ backgroundImage: `url(${HomeBg})`, backgroundSize: '100% 100%', backgroundPosition: 'center' }}>
          <NavBar/>
          <HomeCenterCompnent/>
          <HomeBottumComponent/>
          </div>
     
   
  );
};

export default Home;