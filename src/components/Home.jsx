import React from 'react';
import HomeBg from '../Assets/HomeBg.png';
import { NavBar } from './NavBar';
import HomeCenterCompnent from './HomeCenterCompnent';
import HomeBottumComponent from './HomeBottumComponent';

const Home = () => {
  return (
    <div className="w-screen flex flex-col justify-between h-screen py-8 px-4 lg:py-[55px] lg:px-[80px]" style={{ backgroundImage: `url(${HomeBg})`, backgroundSize: '100% 100%', backgroundPosition: 'center' }}>
          <NavBar/>
          <HomeCenterCompnent/>
          <HomeBottumComponent/>
          </div>
     
   
  );
};

export default Home;
