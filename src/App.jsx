
import React from 'react';
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import LandingPage from './Components/LandingPage/landingPage'
import Step1 from './Components/StepsComponent/step1.jsx';
import Step2 from './Components/StepsComponent/step2.jsx';
import Step3 from './Components/StepsComponent/step3.jsx';
import Step4 from './Components/StepsComponent/step4.jsx';
import Step5 from './Components/StepsComponent/step5.jsx';
import Step6 from './Components/StepsComponent/step6.jsx';
import Step7 from './Components/StepsComponent/step7.jsx';
//  import   from "./ArtboardContext";
import QuoteProvider from "./QuoteContext";
import './App.css';

function App() {
  return (

    <React.Fragment>
      <QuoteProvider>
        <div >
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={() => (<Redirect to='/LandingPage' />)} />
              {/* <Route path="/Step" component={Step} /> */}
              <Route path="/Step1" component={Step1} />
              <Route path="/Step2" component={Step2} />
              <Route path="/Step3" component={Step3} />
              <Route path="/Step4" component={Step4} />
              <Route path="/Step5" component={Step5} />
              <Route path="/Step6" component={Step6} />
              <Route path="/Step7" component={Step7} />
              <Route path="/LandingPage" component={LandingPage} />
            </Switch>
            {/* <Header />
                <Body /> */}
          </BrowserRouter>
        </div>
      </QuoteProvider>
    </React.Fragment>
  );
}

export default App;