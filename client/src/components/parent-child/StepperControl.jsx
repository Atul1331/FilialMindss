import React from 'react'

const StepperControl = ({ handleClick, currentStep, steps }) => {
  return (
    <div className="cotainer mb-8 mt-4 flex justify-around">
      <button
        className={`fot-semibold cursor-pointer rounded-xl border-2 border-slate-300 bg-white px-4 py-2 uppercase text-slate-800 transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white ${currentStep === 1 ? 'cursor-not-allowed opacity-50' : ''}`}
        onClick={() => handleClick()}
      >
        Back
      </button>

      <button
        className="fot-semibold cursor-pointer rounded-xl bg-[#663dd4] px-4 py-2 uppercase text-white  transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white"
        onClick={() => handleClick('next')}
      >
        {currentStep === steps.length - 1 ? 'Finish' : 'next'}
      </button>
    </div>
  )
}

export default StepperControl
