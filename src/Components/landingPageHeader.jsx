import React from "react";
// import './header.css'
import Logo from './Images/LandingPage/logo.png';



function LandingPageHeader() {
  
  return (
    
        <>
          <nav className=" h-20 md:h-24 flex flex-row items-center justify-between bg-white">
            <div className="w-full flex flex-row justify-between max-w-full mx-auto md:px-16">
              <div className="w-full  flex justify-between ">
                  <img class="block md:hidden h-8 w-44  ml-7" src={Logo} alt="Workflow"></img>
                  <img  class="hidden md:block " src={Logo} alt="Workflow"></img>
              </div>
              
              <div class=" flex items-center justify-center pr-7">
                    
                    <button class="button-background font  focus:outline-none flex items-center  justify-center text-center text-white rounded-xl w-24 md:w-48 h-10 md:h-14"></button>
                    
              </div>
              
            </div>
          </nav>
          <hr className="md:hidden bdr1" />
        </>
      
  );
  }
  
  export default LandingPageHeader;