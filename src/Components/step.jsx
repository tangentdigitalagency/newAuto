import React, { useState, useEffect } from 'react'
import LandingPageHeader from './landingPageHeader.jsx'
import Vector from './Images/LandingPage/vector.png'
import './step.css'


function Step(props) {

  const [flag, setFlag] = useState();

  useEffect(() => {
    console.log(parseInt(flag), 30, parseInt(flag) <= 30 / 100, "dddd")
    setFlag(props.width);
  }, [])

  return (
    <>

      <LandingPageHeader />
      <img src={Vector} alt="vector" className="w-full absolute backImage" />
      <div className="progressButton   mx-auto relative flex justify-between text-center margin pb-3 md:pb-10 ">
        {/* <button className={parseInt(flag) < 31 ?"bgclrFocus w-20 h-11 md:w-40 md:h-14 rounded-2xl box-border flex flex-row justify-center text-center items-center divFontFocus": "bgclr w-20 h-11 md:w-40 md:h-14 rounded-2xl box-border flex flex-row justify-center text-center items-center divFont"}>Vehicles</button>
            <button className={parseInt(flag) < 58 && (parseInt(flag) >= 31) ?"bgclrFocus w-20 h-11 md:w-40 md:h-14 rounded-2xl box-border flex flex-row justify-center text-center items-center divFontFocus": "bgclr w-20 h-11 md:w-40 md:h-14 rounded-2xl box-border flex flex-row justify-center text-center items-center divFont"}>Auto Coverage</button>
            <button className={(parseInt(flag) < 81.8) && (parseInt(flag) >= 58) ?"bgclrFocus w-20 h-11 md:w-40 md:h-14 rounded-2xl box-border flex flex-row justify-center text-center items-center divFontFocus": "bgclr w-20 h-11 md:w-40 md:h-14 rounded-2xl box-border flex flex-row justify-center text-center items-center divFont"}>Personal</button>
            <button className={parseInt(flag) <= 100 && (parseInt(flag) >= 81.8) ?"bgclrFocus w-20 h-11 md:w-40 md:h-14 rounded-2xl box-border flex flex-row justify-center text-center items-center divFontFocus": "bgclr w-20 h-11 md:w-40 md:h-14 rounded-2xl box-border flex flex-row justify-center text-center items-center divFont"}>Get Matched!</button>
             */}
      </div>

      <div className=" items-center justify-center relative w-11/12 md:w-2/3 mx-auto my-auto pb-3 pt-1">
        <div className="overflow-hidden flex rounded-2xl progressBar">
          <div style={{ width: props.width }} className="progressBar2 rounded-2xl flex "></div>
        </div>
      </div>

    </>
  );
}


export default Step;