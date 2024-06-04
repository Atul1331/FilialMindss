import React, { useContext } from 'react'

import photo from '../../../assets/parent-child-form.png'
import { StepperContext } from '../../../context/StepperContext'

const Pagelast = () => {
  const { score } = useContext(StepperContext)

  return (
    <div className="flex flex-row-reverse">
      <img alt="" src={photo} />
      <div>
        <p className="text-5xl ">Your Parent - Child Relationship Score is</p>
        <h2 className="my-6 text-center text-[90px]">{score}</h2>
        {score > 80 ? (
          <ul>
            <li className='text-xl font-semibold'>h 80</li>
            <li className='text-xl font-semibold'>ihfweli</li>
          </ul>
        ) : null}
        {score >= 70 && score < 80 ? (
          <ul>
          <li className='text-xl font-semibold'>h 80</li>
          <li className='text-xl font-semibold'>ihfweli</li>
        </ul>
        ) : null}
        {score >= 60 && score < 70 ? (
         <ul>
         <li className='text-xl font-semibold'>h 80</li>
         <li className='text-xl font-semibold'>ihfweli</li>
       </ul>
        ) : null}
        {score >= 50 && score < 60 ? (
          <ul>
          <li className='text-xl font-semibold'>h 80</li>
          <li className='text-xl font-semibold'>ihfweli</li>
        </ul>
        ) : null}
        {score >= 40 && score < 50 ? (
          <ul>
          <li className='text-xl font-semibold'>h 80</li>
          <li className='text-xl font-semibold'>ihfweli</li>
        </ul>
        ) : null}
        {score >= 0 && score < 40 ? (
          <ul>
          <li className='text-xl font-semibold'>h 80</li>
          <li className='text-xl font-semibold'>ihfweli</li>
        </ul>
        ) : null}
        
      </div>
    </div>
  )
}

export default Pagelast
