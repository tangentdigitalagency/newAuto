import React from 'react'
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
import WhyQuote from '../Images/whyQuote.png'
import CheckCircle from '../Images/check-circle.png'
import LandingPic from '../Images/LandingPage/landingPic.png'
import LandingPageHeader from './landingPageHeader'

function LandingPage() {
  return (
    <div><LandingPageHeader />
      <div className=' container3 w-auto h-auto text-center'>
        <div className=' mx-auto text-center flex flex-row items-center justify-center'>
          <h1 className='lPHeading text-center pt-28'>
            Finding Insurance Has Never been Easier
          </h1>
        </div>
        <img src={LandingPic} alt="pic" className="w-full absolute" />
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
            <button type='button' className='mobileBtn focus:outline-none'>
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
        <h1 className='text-black pg2text text-center '>How Does It Work?</h1>
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
              <h1 className='quantPageHText'>Why Quotehound?</h1>
              <p className='quantPagePText mt-10'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                auctor maecenas donec feugiat nisi, diam morbi. Ac vitae nisi,
                magna egestas vitae non.
              </p>
              <br />
              <div className='flex flex-row'>
                <img src={CheckCircle} alt='CheckCircle' />
                <p className='quantPagePText ml-4'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <br />
              <div className='flex flex-row'>
                <img src={CheckCircle} alt='CheckCircle' />
                <p className='quantPagePText ml-4'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <br />
              <div className='flex flex-row'>
                <img src={CheckCircle} alt='CheckCircle' />
                <p className='quantPagePText ml-4'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* for mobile */}
        <div className='block md:hidden mt-14'>
          <div className='flex flex-col justify-center items-center w-4/5 mx-auto '>
            <img src={WhyQuote} alt='why' className=' whyQuoteHW' />
            <div className='flex flex-col justify-between items-center w-full mt-7'>
              <h1 className='quantPageHText text-center'>Why Quotehound?</h1>
              <p className='quantPagePText mt-5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                auctor maecenas donec feugiat nisi, diam morbi. Ac vitae nisi,
                magna egestas vitae non.
              </p>

              <div className='flex flex-row items-center mt-3'>
                <img src={CheckCircle} alt='CheckCircle' className='h-6 w-6' />
                <p className='quantPagePText2 ml-2'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>

              <div className='flex flex-row items-center mt-3'>
                <img src={CheckCircle} alt='CheckCircle' className='h-6 w-6' />
                <p className='quantPagePText2 ml-2 '>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>

              <div className='flex flex-row items-center mt-3'>
                <img src={CheckCircle} alt='CheckCircle' className='h-6 w-6' />
                <p className='quantPagePText2 ml-2'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='hidden md:block pt-36'>
          <div className='flex flex-col items-center text-center w-4/5 bg-white mx-auto box-border rounded-2xl startQuote pt-16'>
            <h1 className='quantPageHText'>Start Your Free Quote!</h1>
            <div className='flex flex-wrap justify-center items-center md:max-w-xl mt-11'>
              <div className='h-32 w-28 flex flex-wrap justify-center items-center'>
                <button
                  type='button'
                  className='  Hover1 button4 bg-white focus:outline-none flex flex-col justify-center items-center'
                >
                  <Car fill='#B1B1B1' className='iconHW filling' />
                  <span className='pt-2 btnFont textBtn'>Auto</span>
                </button>
              </div>
              <div className='h-32 w-28 flex flex-wrap justify-center items-center'>
                <button
                  type='button'
                  className=' Hover1 button4 bg-white focus:outline-none flex flex-col justify-center items-center'
                >
                  <Home fill='#B1B1B1' className='iconHW filling' />
                  <span className='pt-2 btnFont textBtn'>Home</span>
                </button>
              </div>
              <div className='h-32 w-28 flex flex-wrap justify-center items-center'>
                <button
                  type='button'
                  className='Hover1 button4 bg-white focus:outline-none flex flex-col justify-center items-center'
                >
                  <Health fill='#B1B1B1' className='iconHW filling' />
                  <span className='pt-2 btnFont textBtn'>Health</span>
                </button>
              </div>
              <div className='h-32 w-28 flex flex-wrap justify-center items-center'>
                <button
                  type='button'
                  className='Hover1 button4 bg-white focus:outline-none flex flex-col justify-center items-center'
                >
                  <Building fill='#B1B1B1' className='iconHW filling' />
                  <span className='pt-2 btnFont textBtn'>Business</span>
                </button>
              </div>
              <div className='h-32 w-28 flex flex-wrap justify-center items-center'>
                <button
                  type='button'
                  className='Hover1 button4 bg-white focus:outline-none flex flex-col justify-center items-center'
                >
                  <Arrow fill='#488BFF' className='iconHW filling' />
                  <span className='pt-2 btnFont textBtn'>View All</span>
                </button>
              </div>
            </div>

            <div className='mx-auto flex flex-row justify-center items-center'>
              <input
                className='bg-white placeholder1 focus:outline-none'
                placeholder='Enter Your Full Address...'
                type='email'
              />
              <br />
              <button
                type='button'
                className='startQuoteBtn focus:outline-none'
              >
                <span className='startQuoteBtnText'>Start Your Free Quote</span>
              </button>
            </div>
          </div>
        </div>
        {/* for mobile */}
        <div className='block md:hidden mt-10'>
          <div className='flex flex-col items-center text-center mx-auto startQuote'>
            <h1 className='quantPageHText'>Start Your Free Quote!</h1>
            <div className='flex flex-wrap justify-center items-center md:max-w-xl mt-9'>
              <div className='h-32 w-28 flex flex-wrap justify-center items-center'>
                <button
                  type='button'
                  className='  Hover1 button4 bg-white focus:outline-none flex flex-col justify-center items-center'
                >
                  <Car fill='#B1B1B1' className='iconHW filling' />
                  <span className='pt-2 btnFont textBtn' >Auto</span>
                </button>
              </div>
              <div className='h-32 w-28 flex flex-wrap justify-center items-center'>
                <button
                  type='button'
                  className=' Hover1 button4 bg-white focus:outline-none flex flex-col justify-center items-center'
                >
                  <Home fill='#B1B1B1' className='iconHW filling' />
                  <span className='pt-2 btnFont textBtn'>Home</span>
                </button>
              </div>
              <div className='h-32 w-28 flex flex-wrap justify-center items-center'>
                <button
                  type='button'
                  className='Hover1 button4 bg-white focus:outline-none flex flex-col justify-center items-center'
                >
                  <Health fill='#B1B1B1' className='iconHW filling' />
                  <span className='pt-2 btnFont textBtn'>Health</span>
                </button>
              </div>
              <div className='h-32 w-28 flex flex-wrap justify-center items-center'>
                <button
                  type='button'
                  className='Hover1 button4 bg-white focus:outline-none flex flex-col justify-center items-center'
                >
                  <Building fill='#B1B1B1' className='iconHW filling' />
                  <span className='pt-2 btnFont textBtn'>Business</span>
                </button>
              </div>
              <div className='h-32 w-28 flex flex-wrap justify-center items-center'>
                <button
                  type='button'
                  className='Hover1 button4 bg-white focus:outline-none flex flex-col justify-center items-center'
                >
                  <Arrow fill='#488BFF' className='iconHW filling' />
                  <span className='pt-2 btnFont textBtn'>View All</span>
                </button>
              </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <input
                className='bg-white pl-5 placeholder1 focus:outline-none'
                placeholder='Enter Your Full Address...'
                type='email'
              />
              <br />
              <button type='button' className='mobileBtn focus:outline-none'>
                <span className='mobileBtnFont'>Start Your Free Quote</span>
              </button>
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  )
}

export default LandingPage
