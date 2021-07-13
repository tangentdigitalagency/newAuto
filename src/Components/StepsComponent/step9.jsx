
import './allSteps.css'
import React, { useState, useEffect, useContext } from 'react'
import Step10 from '../StepsComponent/step10'
import Step from "../step.jsx"
import { QuoteContextApi } from "../../QuoteContext";
import { useHistory } from "react-router-dom";


function Step9() {

  const QuoteContext1 = useContext(QuoteContextApi);


  const history = useHistory();

  function showStep10() {
    QuoteContext1.handleStraperLength("81.8%");
    history.push("/Step10");
  }
  return (
    <>
      <Step width={QuoteContext1.StraperWidth} />
      <div className='componentBoxSizing mx-auto box-border rounded-2xl bg-white w-11/12 md:w-2/4  '>
        <div className='flex flex-wrap justify-center items-center text-center mt-5 pb-5 md:mt-10 md:pb-16 '>
          <h2 className='mx-auto step2Text'> What's your date of birth?</h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-1 w-11/12 md:w-4/5 mx-auto justify-center items-center text-center gap-8 md:gap-8   '>



          <div className=' mt-1 px-2 '>
            <input type="date" className=" inputg step9Div focus:outline-none px-16 step9inputText" id="date_input" name="fname" />
          </div>




        </div>
        {/* <br className="hidden md:block" />
        <br className="hidden md:block" />
        <br className="hidden md:block" /> */}
        <br />
        <br />
        <div className="flex flex-row justify-center items-center  w-full ">
          <button onClick={showStep10} className="flex step6BtnFocus  step6BtnTextfocus justify-center text-center items-center focus:outline-none">Next</button>
        </div>


      </div>



      <br />
      <br />
    </>


  )
}

export default Step9

