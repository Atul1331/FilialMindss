
import {useState} from "react";
import { StepperContext } from "../contexts/StepperContext";
import Stepper from "../components/stepper/Stepper"
import StepperControl from "../components/stepperControl/StepperControl"
import Page1 from "../components/steps/Page1"
import Page2 from "../components/steps/Page2"
import Page3 from "../components/steps/Page3"


function ParentChildRelationship() {
  
  const [currentStep, setCurrentStep] = useState(1);

  const [score, setScore] = useState(0);

  const [userData, setUserData] = useState('');
  const [finalData, setFinalData] = useState([]);
  
  const steps = [
    "Page 1",
    "Page 2",
    "Page 3"
  ];

  const displayStep = (step) => {
    switch(step){
      case 1:
        return <Page1 />
      case 2:
        return <Page2 />
      case 3:
        return <Page3 />
      default:
    }
  }


  const handleClick = (direction) => {
      let newStep = currentStep;

      direction === "next" ? newStep++ : newStep-- ;

      newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  }

  return (
    <div className='md:w-2/3 mx-auto shadow-xl rounded-2xl pb-2 bg-white'>

      <div className="container horizontal mt-5">
        <Stepper
          steps = {steps}
          currentStep = {currentStep}
        />

        <div className="my-10 p-10">
          <StepperContext.Provider value={{
            userData,
            setUserData,
            finalData,
            setFinalData,
            score,
            setScore
          }}>
            {displayStep(currentStep)}  
          </StepperContext.Provider>
        </div>

      </div>


          {currentStep !== steps.length &&
        <StepperControl
          handleClick = {handleClick}
          currentStep = {currentStep}
          steps = {steps}
        />}

    </div>
  )
}

export default ParentChildRelationship

