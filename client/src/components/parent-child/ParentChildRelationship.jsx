import { useState } from 'react'

import { StepperContext } from '../../context/StepperContext'

import Stepper from './Stepper'
import StepperControl from './StepperControl'
import Page1 from './steps/Page1'
import Page2 from './steps/Page2'
import Page3 from './steps/Page3'
import Page4 from './steps/Page4'
import Page5 from './steps/Page5'
import Pagelast from './steps/Pagelast'

function ParentChildRelationship() {
  const [currentStep, setCurrentStep] = useState(1)

  const [score, setScore] = useState(0)

  const [userData, setUserData] = useState('')
  const [finalData, setFinalData] = useState([])

  const steps = ['Page 1', 'Page 2', 'Page 3', 'Page 4', 'Page 5', 'Pagelast']

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Page1 />
      case 2:
        return <Page2 />
      case 3:
        return <Page3 />
      case 4:
        return <Page4 />
      case 5:
        return <Page5 />
      case 6:
        return <Pagelast />
      default:
    }
  }

  const handleClick = (direction) => {
    let newStep = currentStep

    direction === 'next' ? newStep++ : newStep--

    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep)
  }

  return (
    <div className="mx-auto rounded-2xl bg-white pb-2 shadow-xl md:w-2/3">
      <div className="horizontal container mt-5">
        <Stepper currentStep={currentStep} steps={steps} />

        <div className="my-10 p-10">
          <StepperContext.Provider
            value={{
              userData,
              setUserData,
              finalData,
              setFinalData,
              score,
              setScore
            }}
          >
            {displayStep(currentStep)}
          </StepperContext.Provider>
        </div>
      </div>

      {currentStep !== steps.length && (
        <StepperControl
          currentStep={currentStep}
          handleClick={handleClick}
          steps={steps}
        />
      )}
    </div>
  )
}

export default ParentChildRelationship
