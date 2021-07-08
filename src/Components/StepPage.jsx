import React from 'react'
import { Route, Switch, Redirect , BrowserRouter } from "react-router-dom";
import VectorImg from '../imgs/vector.png'
import './CSS/StepPage.css'
import Auto from './Auto/auto'; 
import LandingPage from '../Components/landingPage';
import QuoteProvider from '../QuoteContext';
// import Auto2 from './Auto2/auto2';
// import Step2 from '../Components/StepsComponent/step2';
// import Step3 from '../Components/StepsComponent/step3';
// import Step4 from '../Components/StepsComponent/step4';



const StepPage = () => {
    return (
        <>
        <React.Fragment>
          <QuoteProvider>
            <div >
              <BrowserRouter>
                <Switch>
                  <div className="stepPage">
                  <Route exact path="/" component={() => (<Redirect to='/LandinPage' />)} />
                  <Route path="/LandingPage" component={LandingPage} />
                  <Route path="/Auto" component={Auto} />
                  {/* <Route path="/Auto2" component={Auto2} /> */}
                  <img src={VectorImg} alt="ERROR" className="w-full absolute" />
                  {/* <Route path="/Step2" component={Step2} />
                  <Route path="/Step3" component={Step3} /> */}
                  {/* <Route path="/Step4" component={Step4} /> */}
                  {/* <Route path="/Home" component={Body} /> */}
                  </div>
                </Switch>
              </BrowserRouter>
            </div>
          </QuoteProvider>
        </React.Fragment>
        </>
    )
}

export default StepPage;
