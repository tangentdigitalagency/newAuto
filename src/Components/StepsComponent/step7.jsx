
import './allSteps.css'
import React, { useContext } from 'react'

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

import Step from "../step.jsx"
import { QuoteContextApi } from "../../QuoteContext";
import { useHistory } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Step7() {
  const QuoteContext1 = useContext(QuoteContextApi);



  const history = useHistory();

  const showStep8 = (Insuresrs) => {
    QuoteContext1.handleStraperLength("58%");
    history.push("/Step8");
    console.log(Insuresrs)
  }


  return (
    <>
      {/* <Step  width={QuoteContext1.StraperWidth} /> */}

      <div className='componentBoxSizing mx-auto box-border rounded-2xl bg-white w-11/12 md:w-2/4  '>
        <div className='flex flex-wrap justify-center items-center text-center mt-5 pb-6 md:pb-8 md:mt-7   '>
          <h2 className='mx-auto step2Text'>Current Insurer </h2>
        </div>
        <div className='grid grid-cols-4 md:grid-cols-4 w-11/12 md:w-4/5 mx-auto justify-between items-start text-center gap-4 md:gap-8'>

          <div className='flex flex-wrap justify-center items-center '>
            <button
              onClick={() => showStep8("Company Not Listed")}
              className=' step4BtnDiv buttonsFocus flex flex-wrap justify-center items-center text-center focus:outline-none'
              type='button'
            >
              <span className='step7buttonsText buttonsTextFocusStep3'>
                Company Not Listed
              </span>
            </button>
          </div>

          <div className='flex flex-wrap justify-center items-center '>
            <button
              onClick={() => showStep8("State Farm Insurance")}
              className=' step4BtnDiv buttonsFocus flex flex-wrap justify-center items-center text-center focus:outline-none'
              type='button'
            >
              <span className='step7buttonsText buttonsTextFocusStep3'>
                State Farm Insurance
              </span>
            </button>
          </div>
          <div className='flex flex-wrap justify-center items-center '>
            <button
              onClick={() => showStep8("21st Century Insurance")}
              className=' step4BtnDiv buttonsFocus flex flex-wrap justify-center items-center text-center focus:outline-none'
              type='button'
            >
              <span className='step7buttonsText buttonsTextFocusStep3'>
                21st Century Insurance
              </span>
            </button>
          </div>
          <div className='flex flex-wrap justify-center items-center '>
            <button
              onClick={() => showStep8("AAA Insurance Co.")}
              className=' step4BtnDiv buttonsFocus flex flex-wrap justify-center items-center text-center focus:outline-none'
              type='button'
            >
              <span className='step7buttonsText buttonsTextFocusStep3'>
                AAA Insurance Co.
              </span>
            </button>
          </div>
          <div className='flex flex-wrap justify-center items-center '>
            <button
              onClick={() => showStep8("AIG")}
              className=' step4BtnDiv buttonsFocus flex flex-wrap justify-center items-center text-center focus:outline-none'
              type='button'
            >
              <span className='step7buttonsText buttonsTextFocusStep3'>
                AIG
              </span>
            </button>
          </div>
          <div className='flex flex-wrap justify-center items-center '>
            <button
              onClick={() => showStep8("Insurance")}
              className=' step4BtnDiv buttonsFocus flex flex-wrap justify-center items-center text-center focus:outline-none'
              type='button'
            >
              <span className='step7buttonsText buttonsTextFocusStep3'>
                AIU Insurance
              </span>
            </button>
          </div>
          <div className='flex flex-wrap justify-center items-center '>
            <button
              onClick={() => showStep8("Alfa")}
              className=' step4BtnDiv buttonsFocus flex flex-wrap justify-center items-center text-center focus:outline-none'
              type='button'
            >
              <span className='step7buttonsText buttonsTextFocusStep3'>
                Alfa
              </span>
            </button>
          </div>
          <div className='flex flex-wrap justify-center items-center '>
            <button
              onClick={() => showStep8("Allied")}
              className=' step4BtnDiv buttonsFocus flex flex-wrap justify-center items-center text-center focus:outline-none'
              type='button'
            >
              <span className='step7buttonsText buttonsTextFocusStep3'>
                Allied
              </span>
            </button>
          </div>
          <div className='flex flex-wrap justify-center items-center '>
            <button
              onClick={() => showStep8("Allstate Insurance")}
              className=' step4BtnDiv buttonsFocus flex flex-wrap justify-center items-center text-center focus:outline-none'
              type='button'
            >
              <span className='step7buttonsText buttonsTextFocusStep3'>
                Allstate Insurance
              </span>
            </button>
          </div>
          <div className='flex flex-wrap justify-center items-center '>
            <button
              onClick={() => showStep8("Amco Ins Co")}
              className=' step4BtnDiv buttonsFocus flex flex-wrap justify-center items-center text-center focus:outline-none'
              type='button'
            >
              <span className='step7buttonsText buttonsTextFocusStep3'>
                Amco Ins Co
              </span>
            </button>
          </div>
          <div className='flex flex-wrap justify-center items-center '>
            <button
              onClick={() => showStep8("American Alliance Ins Co")}
              className=' step4BtnDiv buttonsFocus flex flex-wrap justify-center items-center text-center focus:outline-none'
              type='button'
            >
              <span className='step7buttonsText buttonsTextFocusStep3'>
                American Alliance Ins Co
              </span>
            </button>
          </div>
          <div className='flex flex-wrap justify-center items-center '>
            <button
              onClick={() => showStep8("American Automobile Insurance")}
              className=' step4BtnDiv buttonsFocus flex flex-wrap justify-center items-center text-center focus:outline-none'
              type='button'
            >
              <span className='step7buttonsText buttonsTextFocusStep3'>
                American Auto mobile Insurance
              </span>
            </button>
          </div>
          <div className='flex flex-wrap justify-center items-center '>
            <button
              onClick={() => showStep8("American Casualty")}
              className=' step4BtnDiv buttonsFocus flex flex-wrap justify-center items-center text-center focus:outline-none'
              type='button'
            >
              <span className='step7buttonsText buttonsTextFocusStep3'>
                American Casualty
              </span>
            </button>
          </div>
          <div className='flex flex-wrap justify-center items-center '>
            <button
              onClick={() => showStep8("American Direct Business Insurance")}
              className=' step4BtnDiv buttonsFocus flex flex-wrap justify-center items-center text-center focus:outline-none'
              type='button'
            >
              <span className='step7buttonsText buttonsTextFocusStep3'>
                American Direct Business Insurance
              </span>
            </button>
          </div>
          <div className='flex flex-wrap justify-center items-center '>
            <button
              onClick={() => showStep8("American Economy Ins Co")}
              className=' step4BtnDiv buttonsFocus flex flex-wrap justify-center items-center text-center focus:outline-none'
              type='button'
            >
              <span className='step7buttonsText buttonsTextFocusStep3'>
                American Economy Ins Co
              </span>
            </button>
          </div>
          <div className='flex flex-wrap justify-center items-center '>
            <button
              onClick={() => showStep8("American Empire Insurance")}
              className=' step4BtnDiv buttonsFocus flex flex-wrap justify-center items-center text-center focus:outline-none'
              type='button'
            >
              <span className='step7buttonsText buttonsTextFocusStep3'>
                American Empire Insurance
              </span>
            </button>
          </div>
          <div className='flex flex-wrap justify-center items-center '>
            <button
              onClick={() => showStep8("American Family Insurance")}
              className=' step4BtnDiv buttonsFocus flex flex-wrap justify-center items-center text-center focus:outline-none'
              type='button'
            >
              <span className='step7buttonsText buttonsTextFocusStep3'>
                American Family Insurance
              </span>
            </button>
          </div>
          <div className='flex flex-wrap justify-center items-center '>
            <button
              onClick={() => showStep8("American Financial")}
              className=' step4BtnDiv buttonsFocus flex flex-wrap justify-center items-center text-center focus:outline-none'
              type='button'
            >
              <span className='step7buttonsText buttonsTextFocusStep3'>
                American Financial
              </span>
            </button>
          </div>
          <div className='flex flex-wrap justify-center items-center '>
            <button
              onClick={() => showStep8("American Home Assurance")}
              className=' step4BtnDiv buttonsFocus flex flex-wrap justify-center items-center text-center focus:outline-none'
              type='button'
            >
              <span className='step7buttonsText buttonsTextFocusStep3'>
                American Home Assurance
              </span>
            </button>
          </div>
          <div className='flex flex-wrap justify-center items-center '>
            <button
              onClick={() => showStep8("American Insurance")}
              className=' step4BtnDiv buttonsFocus flex flex-wrap justify-center items-center text-center focus:outline-none'
              type='button'
            >
              <span className='step7buttonsText buttonsTextFocusStep3'>
                American Insurance
              </span>
            </button>
          </div>


        </div>
        <Menu as='div' className='relative w-40 h-9 mx-auto mt-5 text-left'>
          {({ open }) => (
            <>
              <div>
                <Menu.Button className='inline-flex justify-between step2MenuBtn w-full rounded-md box-border pl-3  pr-4 py-2 focus:outline-none '>
                  other insurers
                  <ChevronDownIcon
                    className='-mr-1 ml-2 h-5 w-5 '
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
                  className='  overflow-y-scroll mx-auto h-32 md:h-48 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
                >
                  <div className='py-1'>

                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("American International Ins")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          American International Ins
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("American International Pacific")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          American International Pacific
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("American International South")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          American International South
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("American Manufacturers")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          American Manufacturers
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("American Motorists Insurance")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          American Motorists Insurance
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("American National Insurance")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          American National Insurance
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("American Protection Insurance")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          American Protection Insurance
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("American Reliable Ins Co")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          American Reliable Ins Co
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("American Republic")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          American Republic
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("American Service Insurance")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          American Service Insurance
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("American Skyline Insurance Company")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          American Skyline Insurance Company
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("American Spirit Insurance")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          American Spirit Insurance
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("American Standard Insurance - OH")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          American Standard Insurance - OH
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("American Standard Insurance - WI")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          American Standard Insurance - WI
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Amex Assurance Co")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Amex Assurance Co
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Amica Insurance")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Amica Insurance
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Associated Indemnity")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Associated Indemnity
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8(" Atlanta Casualty")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Atlanta Casualty
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Atlantic Indemnity")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Atlantic Indemnity
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Auto Club Insurance Company")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Auto Club Insurance Company
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Brooke Insurance")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Brooke Insurance
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Cal Farm Insurance")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Cal Farm Insurance
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("California Automobile Ins Co")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          California Automobile Ins Co
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("California Casualty and Fire Ins Co")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          California Casualty and Fire Ins Co
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("California State Auto Assoc")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          California State Auto Assoc
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Century National Ins")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Century National Ins
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Chubb Group of Ins Co")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Chubb Group of Ins Co
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Clarendon National Insurance")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Clarendon National Insurance
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("CNA")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          CNA
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Colonial Penn")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Colonial Penn
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Commerce West")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Commerce West
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Commercial Union")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Commercial Union
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Continental Casualty")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Continental Casualty
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Continental Divide Insurance")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Continental Divide Insurance
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Continental Insurance")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Continental Insurance
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Cotton States Insurance")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Cotton States Insurance
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Country Financial")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Country Financial
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Countrywide Insurance")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Countrywide Insurance
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Dairyland Insurance")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Dairyland Insurance
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Eagle Ins Co")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Eagle Ins Co
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Electric Insurance")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Electric Insurance
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Empire Fire and Marine")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Empire Fire and Marine
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Erie Insurance Company")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Erie Insurance Company
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Esurance")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Esurance
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Explorer")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Explorer
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Farm Bureau/Farm Family/Rural")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Farm Bureau/Farm Family/Rural
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Farmers Insurance")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Farmers Insurance
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Farmers Union")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Farmers Union
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Federal Ins Co")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Federal Ins Co
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Financial Indemnity")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Financial Indemnity
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Fire and Casualty Insurance Co of CT")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Fire and Casualty Insurance Co of CT
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Fireman's Fund")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Fireman's Fund
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Geico Casualty")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Geico Casualty
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("General Accident Insurance")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          General Accident Insurance
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("GMAC Insurance")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          GMAC Insurance
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Great American Ins Co")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Great American Ins Co
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Guaranty National Insurance")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Guaranty National Insurance
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Guide One Insurance")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Guide One Insurance
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Hanover Lloyd's Insurance Company")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Hanover Lloyd's Insurance Company
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Hartford Accident and Indemnity")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Hartford Accident and Indemnity
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("High Point Insurance")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          High Point Insurance
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("IFA Auto Insurance")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          IFA Auto Insurance
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Infinity Insurance")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Infinity Insurance
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Integon")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Integon
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Insurance Co of the West")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Insurance Co of the West
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Kemper Insurance")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Kemper Insurance
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Leader National")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Leader National
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Liberty Insurance Corp")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Liberty Insurance Corp
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Liberty Mutual Insurance")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Liberty Mutual Insurance
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Liberty Northwest Insurance")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Liberty Northwest Insurance
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Lumbermens Mutual")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Lumbermens Mutual
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Maryland Casualty")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Maryland Casualty
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Mercury")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Mercury
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("MetLife Auto and Home")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          MetLife Auto and Home
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Mid Century Insurance")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Mid Century Insurance
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Mid-Continent Casualty")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Mid-Continent Casualty
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Middlesex Insurance")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Middlesex Insurance
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Mutual of Omaha")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Mutual of Omaha
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("National Ben Franklin Insurance")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          National Ben Franklin Insurance
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("National Casualty")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          National Casualty
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("National Continental Insurance")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          National Continental Insurance
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("National Fire Insurance Company of Hartford")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          National Fire Insurance Company of Hartford
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("National Union Fire Insurance of LA")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          National Union Fire Insurance of LA
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("National Union Fire Insurance of PA")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          National Union Fire Insurance of PA
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Nationwide General Insurance")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Nationwide General Insurance
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Northwestern Pacific Indemnity")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Northwestern Pacific Indemnity
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("NJ Skylands Insurance")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          NJ Skylands Insurance
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Ohio Casualty")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Ohio Casualty
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Omni Insurance")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Omni Insurance
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Orion Auto Ins Co")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Orion Auto Ins Co
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Pacific Indemnity")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Pacific Indemnity
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Pacific Insurance")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Pacific Insurance
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Patriot General Insurance")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Patriot General Insurance
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Peak Property and Casualty Insurance")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Peak Property and Casualty Insurance
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("PEMCO Insurance")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          PEMCO Insurance
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Progressive")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Progressive
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Prudential Insurance Co.")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Prudential Insurance Co.
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Republic Indemnity")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Republic Indemnity
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Response Insurance")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Response Insurance
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("SAFECO")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          SAFECO
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Safeway Insurance")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Safeway Insurance
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Selective InsGroup")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Selective InsGroup
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Sentinel Insurance")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Sentinel Insurance
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Sentry Insurance Group")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Sentry Insurance Group
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Shelter Insurance Co.")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Shelter Insurance Co.
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("St. Paul")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          St. Paul
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Standard Fire Insurance Company")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Standard Fire Insurance Company
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("State and County Mutual Fire Insurance")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          State and County Mutual Fire Insurance
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("State Auto Ins Co")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          State Auto Ins Co
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("State Farm County")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          State Farm County
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("State National Insurance")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          State National Insurance
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Superior Guaranty Insurance")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Superior Guaranty Insurance
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Superior Insurance")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Superior Insurance
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("TICO Insurance")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          TICO Insurance
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("TIG Insurance Group")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          TIG Insurance Group
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Titan")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Titan
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Travelers Insurance Company")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Travelers Insurance Company
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Tri-State Consumer Insurance")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Tri-State Consumer Insurance
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Tri-State Consumer Insurance")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Tri-State Consumer Insurance
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Unigard Ins")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Unigard Ins
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("United Services Automobile Association")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          United Services Automobile Association
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Unitrin Direct")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Unitrin Direct
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("USAA")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          USAA
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("USF and G")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          USF and G
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Wawanesa Mutual")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Wawanesa Mutual
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Workmens Auto Insurance")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Workmens Auto Insurance
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Zurich Ins Group")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Zurich Ins Group
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => showStep8("Not Currently Insured")}
                          className={classNames(
                            active
                              ? 'step3dropdownBtn focus:outline-none text-center'
                              : ' step3buttonsText',
                            'block px-4 py-2 text-sm text-center w-full'
                          )}
                        >
                          Not Currently Insured
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
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />


      <br className="hidden md:block" />

    </>
  )
}

export default Step7

