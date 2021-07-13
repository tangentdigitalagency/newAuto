
import './allSteps.css'
import React, { useContext } from 'react'

import Step from "../step.jsx"
import { QuoteContextApi } from "../../QuoteContext";
import { useHistory } from "react-router-dom";


function Step9() {

  const QuoteContext1 = useContext(QuoteContextApi);



  const history = useHistory();

  function showStep12() {
    QuoteContext1.handleStraperLength("100%");
    history.push("/Step12");
  }
  return (
    <>
      <Step width={QuoteContext1.StraperWidth} />
      <div className='componentBoxSizingStep10 mx-auto box-border rounded-2xl bg-white w-11/12 md:w-2/4'>
        <div className='flex flex-col justify-center items-center text-center mt-5 pb-5 md:mt-24 md:pb-10 '>
          <h2 className='mx-auto step2Text'>What's your home address?</h2>
          <h6>We verify your location to provide local quotes in your area.</h6>
        </div>


        <div className='grid grid-cols-1 md:grid-cols-1 w-11/12 md:w-4/5 mx-auto justify-between items-start  gap-4 md:gap-6'>



          <div className='flex flex-col  justify-center items-center '>
            <div className='text-center '>
              <h2 className=' step9text'> Home Address</h2>
            </div>


            <input type="text" className="mt-2  step10AddressDiv focus:outline-none px-8 step9inputText" id="" name="fname" />

          </div>




        </div>

        <div className="flex flex-row justify-center items-center  w-full ">
          <button onClick={showStep12} className="flex step10Btn justify-center text-center items-center focus:outline-none mt-6">Next</button>
        </div>


      </div>



      <br />
      <br />
      <br />
    </>


  )
}

export default Step9

