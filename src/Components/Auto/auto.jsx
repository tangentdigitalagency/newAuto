// import React, { useState } from "react";
// import "./index.css";

import '../StepsComponent/allSteps.css';
import React, { useState, useEffect  , useContext} from 'react'
// import Step9 from '../StepsComponent/step9'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Step from "../step.jsx"
import { QuoteContextApi } from "../../QuoteContext";
import { useHistory } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Slider() {
  const [current, setCurrent] = useState(1);

  function Wrapper(props) {
    if (current == props.id) {
      return props.children;
    }
    return null;
  }

  var [focusBtnOwner, setFocusBtnOwner] = useState(true)
  const [focusBtnMarried, setFocusBtnMarried] = useState(true)
  const QuoteContext1 = useContext(QuoteContextApi);
  
   const showFocusBtn1 = (rY)=>{
  
      setFocusBtnOwner(rY)
      
   }
   const showFocusBtn2 = (cY)=>{
  
      setFocusBtnMarried(cY)
      
   }
   const history = useHistory();

  function showStep9() {
    QuoteContext1.handleStraperLength("81.7%");
    history.push("/Step9");
  }

  return (
     
    <>
    <Step  width={QuoteContext1.StraperWidth} />

      <div className='componentBoxSizing mx-auto box-border rounded-2xl bg-white w-11/12 md:w-2/4  '>
        <div className='flex flex-wrap justify-center items-center text-center mt-5 pb-5 md:mt-10 md:pb-10 '>

              {Math.round((current / 6) * 100)}% complete
              <hr />
              <progress value={Math.round((current / 6) * 100)} max={100}></progress>
              <br />
              <br />

          <h2 className='mx-auto step2Text text-heading font-weight-bold text-center m-0'> What's Your Desired Coverage amount?</h2>
          </div>
        <div className='grid grid-cols-1 md:grid-cols-2 w-11/12 md:w-4/5 mx-auto justify-center items-center text-center gap-4 md:gap-24  '>
          
                  {/* <div className='flex flex-col justify-center items-center '>
                        <div className='flex flex-wrap justify-center items-center text-center '>
                        <h2 className='mx-auto step6text'> Tickets/Accidents </h2>
                        </div>
                        
                    <div className=' step6BtnDiv  flex flex-row justify-between items-center text-center mt-5 px-2'>
                    <button onClick={()=>showFocusBtn1(false) } className={focusBtnOwner? "flex  step6Btn step6BtnText justify-center text-center items-center focus:outline-none":"flex step6BtnFocus step6BtnTextfocus justify-center text-center items-center focus:outline-none"}>Yes</button>
                        <button onClick={()=>showFocusBtn1(true) } className={focusBtnOwner?"flex step6BtnFocus step6BtnTextfocus  justify-center text-center items-center focus:outline-none":"flex  step6Btn step6BtnText  justify-center text-center items-center focus:outline-none"}>No</button>  
                    </div>
                  </div>
                  <div className="flex flex-col justify-between items-center text-center ">
                    <div className='flex flex-wrap justify-center items-center text-center '>
                        <h2 className='mx-auto step6text'> If, So How Many </h2>
                    </div>
                    <div className=' mt-4 px-2'>
                    <input type="text" className="inputTextBox focus:outline-none text-center inputBoxText" id="fname" name="fname"  />
                    </div>
                  </div>
                  <div className='flex flex-col justify-center items-center '>
                    <div className='flex flex-wrap justify-center items-center text-center '>
                    <h2 className='mx-auto step6text'> Have You Filled For SR-22</h2>
                    </div>
                    
                    <div className=' step6BtnDiv  flex flex-row justify-between items-center text-center mt-5 px-2'>
                            <button onClick={()=>showFocusBtn2(true) } className={focusBtnMarried?"flex step6BtnFocus step6BtnTextfocus  justify-center text-center items-center focus:outline-none":"flex  step6Btn step6BtnText  justify-center text-center items-center focus:outline-none"}>Yes</button>
                            <button onClick={()=>showFocusBtn2(false) } className={focusBtnMarried? "flex  step6Btn step6BtnText justify-center text-center items-center focus:outline-none":"flex step6BtnFocus step6BtnTextfocus justify-center text-center items-center focus:outline-none"}>No</button>
                        </div>
                    </div> */}
        
        <div className=" flex flex-col  justify-center items-center">
            <div className='flex flex-wrap justify-center items-center text-center '>
            {/* <h2 className='mx-auto step6text'> Desired Coverage </h2> */}
            
            </div>
            <Menu as='div' className='relative  mx-auto mt-4 text-left'>
          {({ open }) => (
            <>
              <div>
                <Menu.Button className='inline-flex justify-between inputTextBox step6DropdownDivText  rounded-md box-border pl-10 py-4 pr-4 focus:outline-none'>
                  <div className = "position-relative select-wrapper">
                    <div className = "select-container w-100" tabIndex = "0">
                     <span className = "select-title opacity: 1"> Desired Coverage </span>
                       <div className = "item item-holder">$5000</div>
                       {/* <div className = "item-container">
                         <div className = "wrapper display none">

                           <div className = "item"> $5000 </div>
                           <div className = "item"> $15000 </div>
                           <div className = "item"> $20000 </div>
                           <div className = "item"> $30000 </div>
                           <div className = "item"> $40000 </div>
                           <div className = "item"> $50000 </div>
                           <div className = "item"> $60000 </div>
                           <div className = "item"> $70000 </div>
                           <div className = "item"> $80000 </div>
                           <div className = "item"> $90000 </div>
                           <div className = "item"> $100000 </div>

                         </div>

                       </div> */}

                    </div>

                  </div>
                  <ChevronDownIcon
                    className='-mr-1 ml-2 -mt-1 w-7 '
                    color=' rgba(229, 229, 229, 1)'
                    aria-hidden='true'
                  />

                    {/*  */}
                </Menu.Button>
              </div>

              <Transition
                show={open}
                as={Fragment}
                enter='transition ease-out duration-100'
                enterFrom='transform opacity-0 scale-95'
                enterTo='transform opacity-100 scale-100'
                leave='transition ease-in duration-75'
                leaveFrom='transform opacity-100 scale-100'
                leaveTo='transform opacity-0 scale-95'
              >
                <Menu.Items
                  static
                  className=' absolute mx-auto overflow-y-auto md:overflow-visible h-24 md:h-auto mt-2 w-52 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
                >
                  <div className='py-1'>
                    
                        <Menu.Item>
                          {({ active }) => (
                            <div className={classNames(
                                active
                                  ? 'step3dropdownBtn text-center'
                                  : ' step3buttonsText',
                                'block px-4 py-2 text-sm text-center w-full'
                              )}
                            >
                               {/* <div className = "item"> $5000 </div> */}
                                
                               <option value="$5000">$5000</option>
                               
                            </div>
                          )}
                        </Menu.Item>

                        <Menu.Item>
                          {({ active }) => (
                            <div className={classNames(
                                active
                                  ? 'step3dropdownBtn text-center'
                                  : ' step3buttonsText',
                                'block px-4 py-2 text-sm text-center w-full'
                              )}
                            >
                               <div className = "item"> $10000 </div>
                            </div>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <div className={classNames(
                                active
                                  ? 'step3dropdownBtn text-center'
                                  : ' step3buttonsText',
                                'block px-4 py-2 text-sm text-center w-full'
                              )}
                            >
                               <div className = "item"> $20000 </div>
                            </div>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <div className={classNames(
                                active
                                  ? 'step3dropdownBtn text-center'
                                  : ' step3buttonsText',
                                'block px-4 py-2 text-sm text-center w-full'
                              )}
                            >
                               <div className = "item"> $30000 </div>
                            </div>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <div className={classNames(
                                active
                                  ? 'step3dropdownBtn text-center'
                                  : ' step3buttonsText',
                                'block px-4 py-2 text-sm text-center w-full'
                              )}
                            >
                               <div className = "item"> $40000 </div>
                            </div>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <div className={classNames(
                                active
                                  ? 'step3dropdownBtn text-center'
                                  : ' step3buttonsText',
                                'block px-4 py-2 text-sm text-center w-full'
                              )}
                            >
                               <div className = "item"> $50000 </div>
                            </div>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <div className={classNames(
                                active
                                  ? 'step3dropdownBtn text-center'
                                  : ' step3buttonsText',
                                'block px-4 py-2 text-sm text-center w-full'
                              )}
                            >
                               <div className = "item"> $60000 </div>
                            </div>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <div className={classNames(
                                active
                                  ? 'step3dropdownBtn text-center'
                                  : ' step3buttonsText',
                                'block px-4 py-2 text-sm text-center w-full'
                              )}
                            >
                               <div className = "item"> $70000 </div>
                            </div>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <div className={classNames(
                                active
                                  ? 'step3dropdownBtn text-center'
                                  : ' step3buttonsText',
                                'block px-4 py-2 text-sm text-center w-full'
                              )}
                            >
                               <div className = "item"> $80000 </div>
                            </div>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <div className={classNames(
                                active
                                  ? 'step3dropdownBtn text-center'
                                  : ' step3buttonsText',
                                'block px-4 py-2 text-sm text-center w-full'
                              )}
                            >
                               <div className = "item"> $90000 </div>
                            </div>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <div className={classNames(
                                active
                                  ? 'step3dropdownBtn text-center'
                                  : ' step3buttonsText',
                                'block px-4 py-2 text-sm text-center w-full'
                              )}
                            >
                               <div className = "item"> $100000 </div>
                            </div>
                          )}
                        </Menu.Item>

                        {/* <Menu.Item>
                          {({ active }) => (
                            <button
                            onClick={showStep9}
                              className={classNames(
                                active
                                  ? 'step3dropdownBtn text-center'
                                  : ' step3buttonsText',
                                'block px-4 py-2 text-sm text-center w-full'
                              )}
                            >
                             Comprehensive coverage
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                            onClick={showStep9}
                              className={classNames(
                                active
                                  ? 'step3dropdownBtn text-center'
                                  : ' step3buttonsText',
                                'block px-4 py-2 text-sm text-center w-full'
                              )}
                            >
                             Collision coverage
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                            onClick={showStep9}
                              className={classNames(
                                active
                                  ? 'step3dropdownBtn text-center'
                                  : ' step3buttonsText',
                                'block px-4 py-2 text-sm text-center w-full'
                              )}
                            >
                             Medical payments coverage
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                            onClick={showStep9}
                              className={classNames(
                                active
                                  ? 'step3dropdownBtn text-center'
                                  : ' step3buttonsText',
                                'block px-4 py-2 text-sm text-center w-full'
                              )}
                            >
                             Personal Injury Protection (PIP)
                            </button>
                          )}
                        </Menu.Item> */}
                      
                    
                  </div>
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>

        <div className=' step6BtnDiv  flex flex-row justify-between items-center text-center mt-5 px-2'>
           <button onClick={()=>showFocusBtn1(true) } className={focusBtnOwner? "flex  step6Btn step6BtnText justify-center text-center items-center focus:outline-none":"flex step6BtnFocus step6BtnTextfocus justify-center text-center items-center focus:outline-none"}>Next</button>
           <button onClick={()=>showFocusBtn1(false) } className={focusBtnOwner?"flex step6BtnFocus step6BtnTextfocus  justify-center text-center items-center focus:outline-none":"flex  step6Btn step6BtnText  justify-center text-center items-center focus:outline-none"}>Back</button>  
        </div>

        </div>
        </div>

        
      </div>
     
        
    <br />
    <br />
    <br />
     
    </>
    
  )
}
