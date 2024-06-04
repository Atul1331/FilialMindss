import React, {useState, useContext} from 'react'
import { StepperContext } from '../../contexts/StepperContext';
import photo from '../../assets/parent-child-form.png'

const Pagelast = () => {

  const {score} = useContext(StepperContext);

  return (
    <div className='flex flex-row-reverse'>
      <img src={photo} alt="" />
      <div>
        <p className='text-5xl '>Your Parent - Child Relationship Score is</p>
        <h2 className='text-[90px] text-center my-6'>{score}</h2>
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
