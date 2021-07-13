
import './allSteps.css'
import Card from '../Images/LandingPage/card.gif'
import LandingHeader from "../landingPageHeader.jsx"
import Vector from '../Images/LandingPage/vector.png'

  

function Step9() {
    
return(
    
      <div ><LandingHeader />
      <img src={Vector} alt="vector" className="w-full absolute" />
        <div className='flex flex-wrap justify-center items-center text-center step11marginTop'>
          <h2 className='mx-auto step11Text'> Matching you with our partners</h2>
        </div>
        <img src={Card} alt="card" className="mx-auto " />

        
      </div>
     
        
   
     
    
  

)
}

export default Step9

