import React from "react";
import logo from "../Assets/contactLogo.png";
import fb from "../Assets/contactfb.png";
import insta from "../Assets/contactinsta.png";
import msg from "../Assets/contactmsg.png";
import watsapp from "../Assets/watsapp.png";

const Contact = () => {
  return (
    <section id="Contact">
    <div className="text-[#000000] flex flex-col  md:flex-row  md:justify-around items-center justify-center   p-4   lg:px-[150px] ">
      {/* logo */}
      <div className=" mt-28 md:mt-0">
        <img className="w- " src={logo} />
      </div>
      {/* right */}
      <div className=" flex  gap-3     flex-col">
        <h2 className="text-[19px] md:text-[33px] max-w-[600px] underline">
          We just not create bags we create stories, ultimate travelling
        </h2>
        <div className="md:flex flex-row items-center gap-6">
        <div className="flex flex-col  md:flex-row gap-4">
          {/* our stories */}
          <div className="md:mt-2">
            <span className="underline "><a href="#Home">Our Stories</a></span>
            <ul>
              <li className="underline"><a href="#About">About</a></li>
              <li className="underline"><a href="#Product">Product</a></li>
              <li className="underline"><a href="#">Achivements</a></li>
              <li className="underline"><a href="Contact">Contact</a></li>
            </ul>
          </div>
          {/* Address */}
          <div className="flex flex-col gap-2 justify-center max-w-[300px]">
            <p className="text-[23px] underline">Address</p>
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to{" "}
            </p>
            <span> +971 508580813</span>
            <span>+971 508580813</span>
            <span>info@storytelleruae.com</span>
          </div >
         
          </div>
           {/* icons */}
           <div className="flex flex-row gap-4 justify-center  ">
            <img src={fb}/>
            <img src={insta}/>
            <img src={msg}/>
            <img src={watsapp}/>

          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Contact;
