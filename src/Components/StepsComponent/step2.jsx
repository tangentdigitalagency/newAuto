
import './allSteps.css'
import React, { useContext } from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Step from "./step.jsx"
import { QuoteContextApi } from "../../QuoteContext";
import CheckSquare from '../Images/LandingPage/check-square.png'
import { useHistory } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


function Step2() {
  const QuoteContext1 = useContext(QuoteContextApi);


  const history = useHistory();

  function showStep3() {
    QuoteContext1.handleStraperLength("30%");
    history.push("/Step3");
  }
  return (
    <>
      <Step width={QuoteContext1.StraperWidth} />

      <div className='componentBoxSizing mx-auto box-border rounded-2xl bg-white w-11/12 md:w-2/4 '>
        <div className='flex flex-wrap justify-center items-center text-center mt-5 pb-6 md:pb-14 md:mt-10 '>
          <h2 className='mx-auto step2Text'> What's your gender?</h2>
        </div>

        <div className=" flex flex-col  justify-center items-center mt-8">

          <Menu as='div' className='relative  mx-auto mt-1 text-left'>
            {({ open }) => (
              <>
                <div>
                  <Menu.Button className='inline-flex justify-between step6DropdownDiv step6DropdownDivText w-full rounded-md box-border pl-5 py-4 pr-4 focus:outline-none '>
                    -- choose a gender --
                    <ChevronDownIcon
                      className='-mr-1 ml-2 -mt-1 w-7 '
                      color=' rgba(229, 229, 229, 1)'
                      aria-hidden='true'
                    />
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
                    className=' mx-auto h-auto mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
                  >
                    <div className='py-1'>

                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={showStep3}
                            className={classNames(
                              active
                                ? 'step3dropdownBtn text-center'
                                : ' step3buttonsText',
                              'block px-4 py-2 text-sm text-center w-full'
                            )}
                          >
                            Male
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={showStep3}
                            className={classNames(
                              active
                                ? 'step3dropdownBtn focus:outline-none text-center'
                                : ' step3buttonsText',
                              'block px-4 py-2 text-sm text-center w-full'
                            )}
                          >
                            Female
                          </button>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={showStep3}
                            className={classNames(
                              active
                                ? 'step3dropdownBtn focus:outline-none text-center'
                                : ' step3buttonsText',
                              'block px-4 py-2 text-sm text-center w-full'
                            )}
                          >
                            Non-Binary
                          </button>
                        )}
                      </Menu.Item>


                    </div>
                  </Menu.Items>
                </Transition>
              </>
            )}
          </Menu>

        </div>
      </div>
      <br className="hidden md:block" />
    </>
  )
}

export default Step2

