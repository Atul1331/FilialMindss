import React, {useState, useContext} from 'react'
import { StepperContext } from '../../contexts/StepperContext';
import photo from '../../assets/parent-child-form.png'

const Page3 = () => {

  const {score} = useContext(StepperContext);

  return (
    <div className='flex flex-row-reverse'>
      <img src={photo} alt="" />
      <div>
        <p className='text-5xl '>Your Parent - Child Relationship Score is</p>
        <h2 className='text-[90px] text-center my-6'>{score}</h2>
        {score > 80 ? (
          <div>
            <p>g 80</p>
            <p>ihfweli</p>
          </div>
        ) : null}
        {score >= 70 && score < 80 ? (
          <div>
            <p>g 70</p>
            <p>ihfweli</p>
          </div>
        ) : null}
        {score >= 60 && score < 70 ? (
          <div>
            <p>g 60</p>
            <p>ihfweli</p>
          </div>
        ) : null}
        {score >= 50 && score < 60 ? (
          <div>
            <p>g 50</p>
            <p>ihfweli</p>
          </div>
        ) : null}
        {score >= 40 && score < 50 ? (
          <div>
            <p>g 40</p>
            <p>ihfweli</p>
          </div>
        ) : null}
        {score >= 30 && score < 40 ? (
          <div>
            <p>g 30</p>
            <p>ihfweli</p>
          </div>
        ) : null}
        {score >= 20 && score < 30 ? (
          <div>
            <p>g 20</p>
            <p>ihfweli</p>
          </div>
        ) : null}
        {score > 0 && score < 20 ? (
          <div>
            <p>g 0</p>
            <p>ihfweli</p>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Page3
