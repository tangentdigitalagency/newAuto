import React, { useContext } from 'react'
// import './body.css'
import './landingPage.css'
import Polygon from '../Images/LandingPage/polygon.png'
import { ReactComponent as Car } from '../Images/car.svg'
import { ReactComponent as Health } from '../Images/heart.svg'
import { ReactComponent as Home } from '../Images/home.svg'
import { ReactComponent as Building } from '../Images/building.svg'
import { ReactComponent as Arrow } from '../Images/arrow.svg'
import Poster1 from '../Images/1.png'
import Poster2 from '../Images/2.png'
import Poster3 from '../Images/3.png'
import Poster4 from '../Images/4.png'
import { ReactComponent as Survey } from '../Images/survey.svg'
import { ReactComponent as Money } from '../Images/money.svg'
import { ReactComponent as Insurance } from '../Images/insurance.svg'
import { ReactComponent as Checkmark } from '../Images/checkmark.svg'
import WhyQuote from '../Images/olc_couple.jpg'
import CheckCircle from '../Images/check-circle.png'
import LandingPic from '../Images/olc_couple.jpg'
import LandingPageHeader from './landingPageHeader'
import { QuoteContextApi } from '../../QuoteContext'
import { useHistory } from 'react-router-dom'
import Step from '../StepsComponent/step.jsx';
import Step1 from '../StepsComponent/step1.jsx';


function LandingPage() {

  const QuoteContext1 = useContext(QuoteContextApi);


  const history = useHistory();

  function showStep1() {
    QuoteContext1.handleStraperLength("5%");
    history.push("/Step1");
  }

  return (
    <div><LandingPageHeader />
      <div className=' container3 w-auto text-center'>
        <div className=' mx-auto text-center flex flex-row items-center justify-center'>
          <h1 className='lPHeading text-center pt-28'>
          Burial Insurance At An Affordable Price 
          </h1>
        </div>
        {/* <img src={LandingPic} alt="pic" className="w-full absolute" /> */}
        <div className='landingBackImage w-full flex flex-col relative'>
          <div className='mx-auto text-center flex flex-row items-start justify-start'>
            <h2 className='lPText mt-5 px-8 md:px-0'>
              Discover insurance offers that complete for you
            </h2>
          </div>

          <div className='hidden md:block'>
            <div className=' mx-auto flex flex-row justify-center items-start mt-11'>
              <div className='flex flex-col justify-center items-center'>
                <input
                  className='bg-white pl-8 pt-3 placeHolder2 focus:outline-none abc'
                  placeholder='Enter Your Address'
                  type='email'
                />
                <img src={Polygon} alt='polygon' className='mt-5' />
                <div className='banner1 flex flex-row justify-center items-center text-center -mt-1'>
                  <span className='mobileBtnFont3'>Only takes 2 minutes!</span>
                </div>
              </div>
              <button
                type='button'
                className='mobileBtn3 focus:outline-none ml-2'
                onClick={() => showStep1()}
              >
                <span className='mobileBtnFont3'>Start Your Quote</span>
              </button>
            </div>
          </div>
          {/* for mobile */}
          <div className='md:hidden mx-auto flex flex-col justify-center items-center'>
            <input
              className='bg-white pl-5 placeholder1 focus:outline-none'
              placeholder='Enter Your Address'
              type='email'
            />
            <br />
            <button type='button' className='mobileBtn focus:outline-none'  onClick={() => LandingPage()}>
              <span className='mobileBtnFont'>Start Your Quote</span>
            </button>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className='bg-white'>
        <div className='bg-white flex flex-col lg:flex-row lg:w-4/5 lg:px-10 lg:h-40 w-80 h-96 justify-between mx-auto rounded-2xl py-10'>
          <div className='flex flex-row justify-center items-center'>
            <img src={Poster1} alt='poster1' />
          </div>
          <div className='flex flex-row justify-center items-center'>
            <img src={Poster2} alt='poster2' />
          </div>
          <div className='flex flex-row justify-center items-center'>
            <img src={Poster3} alt='poster3' />
          </div>
          <div className='flex flex-row justify-center items-center'>
            <img src={Poster4} alt='poster4' />
          </div>
        </div>
        <br />
        <h3 className='subHeading pg2text text-center '>Eliminate Burdens For Loved Ones With Final Expense Insurance </h3>
        <br />
        <br />
        <div className='hidden md:block mt-16'>
          <hr className='w-3/5 lineBorder mx-auto' />
          <div className='flex flex-row justify-between items-center mx-auto w-4/5 pb-11 px-4'>
            <div className='hovdiv flex flex-col justify-between items-center pb-10'>
              <div className='bg-white rounded-full flex flex-wrap items-center justify-center text-center box-border roundBorder hoverroundBorder'>
                <span className='text1234 hovertext1234'>1</span>
              </div>{' '}
              <br />
              <br />
              <div className=' box-border rounded-2xl flex flex-col justify-center items-center text-center box1234 hoverbox1234'>
                <Insurance fill='#B1B1B1' className='fillingbox1234' />
                <span className='pt-6 box1234text hoverbox1234text'>
                  <h3 className="subHeading">No Medical Exam </h3> 
                  Simple Application <br></br>
                  Free Quote—Apply in Minutes 
                </span>
              </div>
            </div>

            <div className='hovdiv flex flex-col justify-between items-center pb-10'>
              <div className='bg-white rounded-full flex flex-wrap items-center justify-center text-center box-border roundBorder hoverroundBorder'>
                <span className='text1234 hovertext1234'>2</span>
              </div>{' '}
              <br />
              <br />
              <div className=' box-border rounded-2xl flex flex-col justify-center items-center text-center box1234 hoverbox1234'>
                <Survey fill='#B1B1B1' className='fillingbox1234' />
                <span className='pt-6 box1234text hoverbox1234text'>
                  <h3 className="subHeading">No Waiting Period </h3>
                  Full Coverage The First Day 
<br/>
Fast Approval Process 
                </span>
              </div>
            </div>

            <div className='hovdiv flex flex-col justify-between items-center pb-10'>
              <div className='bg-white rounded-full flex flex-wrap items-center justify-center text-center box-border roundBorder hoverroundBorder'>
                <span className='text1234 hovertext1234'>3</span>
              </div>
              <br />
              <br />
              <div className=' box-border rounded-2xl flex flex-col justify-center items-center text-center box1234 hoverbox1234'>
                <Checkmark fill='#B1B1B1' className='fillingbox1234' />
                <span className='pt-6 box1234text hoverbox1234text'>
                <h3 className="subHeading">50 State Coverage </h3>
                  Our partners offer plans in all 50 states<br/> 
                  we can cover you no matter where you are! 
                </span>
              </div>
            </div>

            <div className='hovdiv flex flex-col justify-between items-center pb-10'>
              <div className='bg-white rounded-full flex flex-wrap items-center justify-center text-center box-border roundBorder hoverroundBorder'>
                <span className='text1234 hovertext1234'>4</span>
              </div>
              <br />
              <br />
              <div className=' box-border rounded-2xl flex flex-col justify-center items-center text-center box1234 hoverbox1234'>
                <Money fill='#B1B1B1' className='fillingbox1234' />
                <span className='pt-6 box1234text hoverbox1234text'>
                  <h3 className="subHeading">Affordable Prices </h3>
                  no matter your budget we can find the policy right for you and your family. 
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* for mobile screens */}
        <div className='block md:hidden'>
          <div className='flex flex-col justify-between items-center mx-auto h-auto'>
            <div className='hovdiv flex flex-col justify-between items-center pb-10'>
              <div className='bg-white rounded-full flex flex-wrap items-center justify-center text-center box-border roundBorder hoverroundBorder'>
                <span className='text1234 hovertext1234'>1</span>
              </div>{' '}
              <br />
              <br />
              <div className=' box-border rounded-2xl flex flex-col justify-center items-center text-center box1234 hoverbox1234'>
                <Insurance fill='#B1B1B1' className='fillingbox1234' />
                <span className='pt-6 box1234text hoverbox1234text'>
                  Choose the Insurance <br />
                  you want to save on
                </span>
              </div>
            </div>

            <div className='hovdiv flex flex-col justify-between items-center pb-10'>
              <div className='bg-white rounded-full flex flex-wrap items-center justify-center text-center box-border roundBorder hoverroundBorder'>
                <span className='text1234 hovertext1234'>2</span>
              </div>{' '}
              <br />
              <br />
              <div className=' box-border rounded-2xl flex flex-col justify-center items-center text-center box1234 hoverbox1234'>
                <Survey fill='#B1B1B1' className='fillingbox1234' />
                <span className='pt-6 box1234text hoverbox1234text'>
                  Fill out our super simple <br />
                  online form in just 2 <br />
                  minutes!
                </span>
              </div>
            </div>

            <div className='hovdiv flex flex-col justify-between items-center pb-10'>
              <div className='bg-white rounded-full flex flex-wrap items-center justify-center text-center box-border roundBorder hoverroundBorder'>
                <span className='text1234 hovertext1234'>3</span>
              </div>
              <br />
              <br />
              <div className=' box-border rounded-2xl flex flex-col justify-center items-center text-center box1234 hoverbox1234'>
                <Checkmark fill='#B1B1B1' className='fillingbox1234' />
                <span className='pt-6 box1234text hoverbox1234text'>
                  Get matched with our <br />
                  partners who want to <br />
                  help you save!
                </span>
              </div>
            </div>

            <div className='hovdiv flex flex-col justify-between items-center pb-10'>
              <div className='bg-white rounded-full flex flex-wrap items-center justify-center text-center box-border roundBorder hoverroundBorder'>
                <span className='text1234 hovertext1234'>4</span>
              </div>
              <br />
              <br />
              <div className=' box-border rounded-2xl flex flex-col justify-center items-center text-center box1234 hoverbox1234'>
                <Money fill='#B1B1B1' className='fillingbox1234' />
                <span className='pt-6 box1234text hoverbox1234text'>
                  Find the perfect match <br />
                  for you and start saving <br />
                  money!
                </span>
              </div>
            </div>
          </div>
        </div>

        <br />

        <div className='hidden md:block'>
          <div className='flex flex-row justify-between w-4/5 mx-auto h-96'>
            <img src={WhyQuote} alt='why' className=' whyQuoteHW' />
            <div className='flex flex-col justify-start pl-20'>
              <h3 className='subHeading'>Why Prepare now?</h3>
              <p className='quantPagePText mt-10'>
              You can’t predict the future. So, it’s good to plan ahead. Our Final Expense insurance plans will help provide a foundation for your family after you’re gone. <br/> <br/>
              Here at <b>Covermyexpense.com </b> we are committed to providing all the information needed so you are confident to make an informed decision regarding your burial insurance policy. We work with multiple providers to make sure that you receive the right final expense insurance quotes for your needs and budget. If you ever have any questions, please do not hesitate to contact us.  We’re here to help you and the whole family. 
              </p>
              <br />
            </div>
          </div>
          
        </div>

        {/* for mobile */}
        <div className='block md:hidden mt-14'>
          <div className='flex flex-col justify-center items-center w-4/5 mx-auto '>
            <img src={WhyQuote} alt='why' className=' whyQuoteHW' />
            <div className='flex flex-col justify-between items-center w-full mt-7'>
            <h3 className='subHeading'>Why Prepare now?</h3>
            <p className='quantPagePText mt-10'>
              You can’t predict the future. So, it’s good to plan ahead. Our Final Expense insurance plans will help provide a foundation for your family after you’re gone. <br/> <br/>
              Here at <b>Covermyexpense.com </b> we are committed to providing all the information needed so you are confident to make an informed decision regarding your burial insurance policy. We work with multiple providers to make sure that you receive the right final expense insurance quotes for your needs and budget. If you ever have any questions, please do not hesitate to contact us.  We’re here to help you and the whole family. 
              </p>
            </div>
          </div>
        </div>
        <br/>
      </div>

      <div className=' para flex flex-row'>
              <p className='quantPagePText'>
              You’ll want to give strong consideration to the funding aspect of your burial arrangements. You will want to ask yourself if your current funding (insurance, savings, etc.) will be sufficient and available when that time comes? Will your present insurance be needed to settle other expenses that could include medical bills, estate taxes, etc.? Will your present insurance or savings keep pace with funeral inflation costs? If you answered no to any of these questions, then you might wish to think about additional insurance that is designed specifically for your final expenses. Burial insurance policies can be made in small amounts to help with your existing insurance or larger amounts to cover all burial and funeral costs. 
              </p>
            </div>
            <br/>

            <footer className="bg-gray-200">
    <p className="p-2 text-center text-xs">Copyright © 2021 Covermyexpense.com. Powered by Quotehound.</p>
  </footer>
    </div>
  )
}

export default LandingPage
