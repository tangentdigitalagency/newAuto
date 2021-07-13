
import './allSteps.css'
import React, { useContext } from 'react'

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

import Step from "./step.jsx"
import { QuoteContextApi } from "../../QuoteContext";
import { useHistory } from "react-router-dom";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Step1() {
    const QuoteContext1 = useContext(QuoteContextApi);



    const history = useHistory();

    const showStep2 = () => {
        QuoteContext1.handleStraperLength("17%");
        history.push("/Step2");

    }


    return (
        <>
            <Step width={QuoteContext1.StraperWidth} />

            <div className='componentBoxSizing mx-auto box-border rounded-2xl bg-white w-11/12 md:w-2/4  '>
                <div className='flex flex-wrap justify-center items-center text-center mt-5 pb-6 md:pb-8 md:mt-7   '>
                    <h2 className='mx-auto step2Text'> What's your desired coverage amount? </h2>
                </div>

                <Menu as='div' className='relative w-60 h-9 mx-auto mt-5 text-left'>
                    {({ open }) => (
                        <>
                            <div>
                                <Menu.Button className='inline-flex justify-between step2MenuBtn w-full rounded-md box-border pl-3  pr-4 py-2 focus:outline-none '>
                                    Desired Coverage
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
                                    className='  overflow-y-scroll mx-auto h-32 md:h-48 mt-2 w-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
                                >
                                    <div className='py-1'>

                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    onClick={() => showStep2()}
                                                    className={classNames(
                                                        active
                                                            ? 'step3dropdownBtn focus:outline-none text-center'
                                                            : ' step3buttonsText',
                                                        'block px-4 py-2 text-sm text-center w-full'
                                                    )}
                                                >
                                                    $5000
                                                </button>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    onClick={() => showStep2()}
                                                    className={classNames(
                                                        active
                                                            ? 'step3dropdownBtn focus:outline-none text-center'
                                                            : ' step3buttonsText',
                                                        'block px-4 py-2 text-sm text-center w-full'
                                                    )}
                                                >
                                                    $10000
                                                </button>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    onClick={() => showStep2()}
                                                    className={classNames(
                                                        active
                                                            ? 'step3dropdownBtn focus:outline-none text-center'
                                                            : ' step3buttonsText',
                                                        'block px-4 py-2 text-sm text-center w-full'
                                                    )}
                                                >
                                                    $15000
                                                </button>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    onClick={() => showStep2()}
                                                    className={classNames(
                                                        active
                                                            ? 'step3dropdownBtn focus:outline-none text-center'
                                                            : ' step3buttonsText',
                                                        'block px-4 py-2 text-sm text-center w-full'
                                                    )}
                                                >
                                                    $20000
                                                </button>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    onClick={() => showStep2()}
                                                    className={classNames(
                                                        active
                                                            ? 'step3dropdownBtn focus:outline-none text-center'
                                                            : ' step3buttonsText',
                                                        'block px-4 py-2 text-sm text-center w-full'
                                                    )}
                                                >
                                                    $30000
                                                </button>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    onClick={() => showStep2()}
                                                    className={classNames(
                                                        active
                                                            ? 'step3dropdownBtn focus:outline-none text-center'
                                                            : ' step3buttonsText',
                                                        'block px-4 py-2 text-sm text-center w-full'
                                                    )}
                                                >
                                                    $40000
                                                </button>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    onClick={() => showStep2()}
                                                    className={classNames(
                                                        active
                                                            ? 'step3dropdownBtn focus:outline-none text-center'
                                                            : ' step3buttonsText',
                                                        'block px-4 py-2 text-sm text-center w-full'
                                                    )}
                                                >
                                                    $50000
                                                </button>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    onClick={() => showStep2()}
                                                    className={classNames(
                                                        active
                                                            ? 'step3dropdownBtn focus:outline-none text-center'
                                                            : ' step3buttonsText',
                                                        'block px-4 py-2 text-sm text-center w-full'
                                                    )}
                                                >
                                                    $60000
                                                </button>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    onClick={() => showStep2()}
                                                    className={classNames(
                                                        active
                                                            ? 'step3dropdownBtn focus:outline-none text-center'
                                                            : ' step3buttonsText',
                                                        'block px-4 py-2 text-sm text-center w-full'
                                                    )}
                                                >
                                                    $75000
                                                </button>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    onClick={() => showStep2()}
                                                    className={classNames(
                                                        active
                                                            ? 'step3dropdownBtn focus:outline-none text-center'
                                                            : ' step3buttonsText',
                                                        'block px-4 py-2 text-sm text-center w-full'
                                                    )}
                                                >
                                                    $80000
                                                </button>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    onClick={() => showStep2()}
                                                    className={classNames(
                                                        active
                                                            ? 'step3dropdownBtn focus:outline-none text-center'
                                                            : ' step3buttonsText',
                                                        'block px-4 py-2 text-sm text-center w-full'
                                                    )}
                                                >
                                                    $90000
                                                </button>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    onClick={() => showStep2()}
                                                    className={classNames(
                                                        active
                                                            ? 'step3dropdownBtn focus:outline-none text-center'
                                                            : ' step3buttonsText',
                                                        'block px-4 py-2 text-sm text-center w-full'
                                                    )}
                                                >
                                                    $10000
                                                </button>
                                            )}
                                        </Menu.Item>


                                    </div>
                                </Menu.Items>

                            </Transition>
                        </>
                    )}
                </Menu>
                <br />
                <br />
                <div className="flex flex-row justify-center items-center  w-full ">
                    <button onClick={showStep2} className="flex step6BtnFocus  step6BtnTextfocus justify-center text-center items-center focus:outline-none">Next</button>
                </div>
            </div>
            <br />
            <br />
            <br />


            <br className="hidden md:block" />

        </>
    )
}

export default Step1

